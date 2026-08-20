"use client";

import { useLanguage } from "@/lib/i18n/LanguageProvider";
import type { Localized as LocalizedValue } from "@/lib/i18n/resolve";

/** Drop-in text node for a `{zh,en}` pair inside an otherwise-server
 *  component — lets server components (routing pages, data-heavy sections)
 *  stay server components instead of converting wholesale to `"use client"`
 *  just to read the language toggle. */
export function Localized({ value }: { value: LocalizedValue }) {
  const { lang } = useLanguage();
  return <>{value[lang]}</>;
}
