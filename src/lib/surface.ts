// Shared "coloured surface" recipe: a diagonal gradient derived from a single
// brand colour, plus an inlined fractal-noise tile for grain.

export const NOISE_URL =
  "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='200' height='200'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.7' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E";

function hexToRgb(hex: string) {
  const v = hex.replace("#", "");
  return {
    r: parseInt(v.slice(0, 2), 16),
    g: parseInt(v.slice(2, 4), 16),
    b: parseInt(v.slice(4, 6), 16),
  };
}

/** Mixes toward white (amount > 0) or black (amount < 0), at `alpha` opacity. */
function mix(hex: string, amount: number, alpha = 1) {
  const { r, g, b } = hexToRgb(hex);
  const target = amount > 0 ? 255 : 0;
  const t = Math.abs(amount);
  const c = (v: number) => Math.round(v + (target - v) * t);
  return alpha >= 1
    ? `rgb(${c(r)}, ${c(g)}, ${c(b)})`
    : `rgba(${c(r)}, ${c(g)}, ${c(b)}, ${alpha})`;
}

export function shade(hex: string, amount: number) {
  return mix(hex, amount);
}

/** Blends two colours. Unlike mixing toward white, this keeps saturation. */
function blend(hexA: string, hexB: string, t: number, alpha = 1) {
  const a = hexToRgb(hexA);
  const b = hexToRgb(hexB);
  const c = (x: number, y: number) => Math.round(x + (y - x) * t);
  const [r, g, bl] = [c(a.r, b.r), c(a.g, b.g), c(a.b, b.b)];
  return alpha >= 1 ? `rgb(${r}, ${g}, ${bl})` : `rgba(${r}, ${g}, ${bl}, ${alpha})`;
}

/** Diagonal ramp: lifted top-left, brand colour mid, deepened bottom-right. */
export function surfaceGradient(color: string, light: boolean) {
  return light
    ? `linear-gradient(150deg, ${mix(color, 0.35)} 0%, ${color} 55%, ${mix(color, -0.18)} 100%)`
    : `linear-gradient(150deg, ${mix(color, 0.3)} 0%, ${mix(color, -0.06)} 52%, ${mix(color, -0.5)} 100%)`;
}

/** Soft off-axis highlight so the ramp doesn't read as a flat sweep. */
export function surfaceGlow(color: string) {
  return `radial-gradient(110% 75% at 80% 6%, ${mix(color, 0.45, 0.33)} 0%, transparent 62%)`;
}

/**
 * Nebula treatment for dark cards: a near-black base with a broad colour glow
 * behind the artwork, optionally tinted by a second accent in the lower left.
 * Reads with far more depth than a plain linear ramp.
 */
export function surfaceNebula(color: string, accent?: string) {
  const layers: string[] = [];

  if (accent) {
    // kept low and wide so it reads as the same light field, not a green blob
    layers.push(
      `radial-gradient(60% 55% at 4% 96%, ${mix(accent, 0, 0.3)} 0%, ${mix(accent, 0, 0.09)} 42%, transparent 72%)`,
    );
  }

  // blended toward a vivid blue rather than white, so the lit area stays a
  // saturated navy instead of washing out to grey
  const VIVID = "#2E7BE0";

  layers.push(
    // lit pool sits high and centre-right, behind the artwork
    `radial-gradient(80% 70% at 66% 26%, ${blend(color, VIVID, 0.75, 0.5)} 0%, ${blend(color, VIVID, 0.4, 0.2)} 45%, transparent 72%)`,
    // deep navy body, sinking to its darkest in the bottom-right corner
    `linear-gradient(150deg, ${blend(color, VIVID, 0.22)} 0%, ${mix(color, -0.3)} 55%, ${mix(color, -0.66)} 100%)`,
  );

  return layers.join(", ");
}
