/** Renders text with lightweight `**bold**` markdown syntax as real <strong>
 *  emphasis, for copy that needs partial emphasis without becoming rich text. */
export function BoldText({ text, className }: { text: string; className?: string }) {
  const parts = text.split(/(\*\*[^*]+\*\*)/g);
  return (
    <>
      {parts.map((part, i) =>
        part.startsWith("**") && part.endsWith("**") ? (
          <strong key={i} className={className ?? "font-semibold text-ink"}>
            {part.slice(2, -2)}
          </strong>
        ) : (
          <span key={i}>{part}</span>
        )
      )}
    </>
  );
}
