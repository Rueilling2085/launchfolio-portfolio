export function PresentationEmbed({ url }: { url: string }) {
  return (
    <div className="mx-auto mt-10 w-full">
      <p className="text-xs font-semibold tracking-wide text-muted-2 uppercase">研究簡報</p>
      <div className="relative mt-3 w-full overflow-hidden rounded-2xl border border-line shadow-sm">
        <div style={{ paddingTop: "56.2225%" }} />
        <iframe
          loading="lazy"
          src={url}
          allow="fullscreen"
          allowFullScreen
          className="absolute inset-0 h-full w-full border-0"
        />
      </div>
    </div>
  );
}
