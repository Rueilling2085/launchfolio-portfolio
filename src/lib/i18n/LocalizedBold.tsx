"use client";

import { useLanguage } from "@/lib/i18n/LanguageProvider";
import type { Localized as LocalizedValue } from "@/lib/i18n/resolve";
import { BoldText } from "@/components/ui/BoldText";

/** Like `Localized`, but the resolved string supports `**bold**` markdown
 *  syntax for partial emphasis inside otherwise-server-rendered copy. */
export function LocalizedBold({ value, className }: { value: LocalizedValue; className?: string }) {
  const { lang } = useLanguage();
  return <BoldText text={value[lang]} className={className} />;
}
