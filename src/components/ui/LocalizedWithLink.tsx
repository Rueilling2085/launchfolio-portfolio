"use client";

import { useLanguage } from "@/lib/i18n/LanguageProvider";
import type { Localized as LocalizedValue } from "@/lib/i18n/resolve";

/** Like `Localized`, but turns one exact substring (e.g. a citation name)
 *  into a link, wherever it appears in the resolved text. */
export function LocalizedWithLink({
  value,
  link,
}: {
  value: LocalizedValue;
  link?: { text: string; url: string };
}) {
  const { lang } = useLanguage();
  const text = value[lang];

  if (!link) return <>{text}</>;

  const index = text.indexOf(link.text);
  if (index === -1) return <>{text}</>;

  return (
    <>
      {text.slice(0, index)}
      <a
        href={link.url}
        target="_blank"
        rel="noopener noreferrer"
        className="text-[#045CC4] underline decoration-1 underline-offset-2 hover:opacity-80"
      >
        {link.text}
      </a>
      {text.slice(index + link.text.length)}
    </>
  );
}
