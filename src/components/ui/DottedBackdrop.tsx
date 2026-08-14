export function DottedBackdrop({ className = "" }: { className?: string }) {
  return (
    <div
      aria-hidden
      className={`pointer-events-none ${className}`}
      style={{
        backgroundImage: "radial-gradient(circle, #d3d8de 1px, transparent 1px)",
        backgroundSize: "22px 22px",
      }}
    />
  );
}
