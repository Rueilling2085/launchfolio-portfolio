const WIDTH = 1600;
const HEIGHT = 90;

// Deterministic PRNG so the server and client render the identical path.
function makeRandom(seed: number) {
  let state = seed;
  return () => {
    state = (state * 1664525 + 1013904223) % 4294967296;
    return state / 4294967296;
  };
}

/**
 * Layered noise gives the edge detail at several scales at once: a slow roll
 * across the page, medium bumps, and fine paper-fibre jitter. A single
 * frequency reads as a machine-cut zigzag instead of a tear.
 */
function buildTornPath() {
  const rand = makeRandom(20260814);
  const step = 4;
  const points: string[] = [];

  const coarse = Array.from({ length: 9 }, () => rand());
  const medium = Array.from({ length: 33 }, () => rand());

  const sample = (table: number[], t: number) => {
    const scaled = t * (table.length - 1);
    const i = Math.floor(scaled);
    const frac = scaled - i;
    const a = table[i];
    const b = table[Math.min(i + 1, table.length - 1)];
    // smoothstep between control values
    return a + (b - a) * (frac * frac * (3 - 2 * frac));
  };

  for (let x = 0; x <= WIDTH; x += step) {
    const t = x / WIDTH;
    const y =
      30 +
      sample(coarse, t) * 26 +
      sample(medium, t) * 12 +
      rand() * 5;
    points.push(`${x},${y.toFixed(1)}`);
  }

  return `M0,${HEIGHT} L0,${points[0].split(",")[1]} L${points.join(" L")} L${WIDTH},${HEIGHT} Z`;
}

const TORN_PATH = buildTornPath();

export function TornDivider({
  color = "var(--paper-alt)",
  flip = false,
  className = "",
}: {
  color?: string;
  flip?: boolean;
  className?: string;
}) {
  return (
    <div className={`pointer-events-none relative w-full ${className}`} aria-hidden>
      <svg
        viewBox={`0 0 ${WIDTH} ${HEIGHT}`}
        preserveAspectRatio="none"
        className="block h-12 w-full md:h-[72px]"
        style={flip ? { transform: "scaleY(-1)" } : undefined}
      >
        <defs>
          <filter id="torn-shadow" x="-5%" y="-50%" width="110%" height="220%">
            <feDropShadow
              dx="0"
              dy="-3"
              stdDeviation="5"
              floodColor="#0a0d12"
              floodOpacity="0.09"
            />
          </filter>
        </defs>
        <path d={TORN_PATH} fill={color} filter="url(#torn-shadow)" />
      </svg>
    </div>
  );
}
