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
  // the area above the tear (below it when `flip`) is transparent, so
  // whatever's actually behind this element in the DOM shows through —
  // normally that falls back to the page's own bg-paper. `backdropColor`
  // pins it to the true adjacent section's colour instead, so a section that
  // overrides to ink or paper-alt doesn't leave a mismatched sliver at the seam.
  backdropColor,
  flip = false,
  className = "",
}: {
  color?: string;
  backdropColor?: string;
  flip?: boolean;
  className?: string;
}) {
  return (
    <div className={`pointer-events-none relative w-full ${className}`} aria-hidden>
      {backdropColor && (
        <div className="absolute inset-0" style={{ backgroundColor: backdropColor }} />
      )}
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
