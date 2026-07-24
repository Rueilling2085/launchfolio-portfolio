export function PulseDot({
  color = "var(--color-accent-strong)",
  size = 8,
}: {
  color?: string;
  size?: number;
}) {
  return (
    <span
      className="relative inline-flex shrink-0 items-center justify-center"
      style={{ width: size, height: size }}
    >
      <span
        className="absolute inset-0 rounded-full"
        style={{ backgroundColor: color, animation: "pulse-ring 1.8s cubic-bezier(0.4,0,0.6,1) infinite" }}
      />
      <span className="relative rounded-full" style={{ width: size, height: size, backgroundColor: color }} />
    </span>
  );
}
