import type { Lang } from "./LanguageProvider";

export type Localized = { zh: string; en: string };

/** The longer of a { zh, en } pair's two strings, for sizing UI that must
 *  fit both languages without a language toggle handy at layout time. */
export function widestString(value: string | Localized) {
  if (typeof value === "string") return value;
  return value.zh.length >= value.en.length ? value.zh : value.en;
}

function isLocalized(value: unknown): value is Localized {
  return (
    !!value &&
    typeof value === "object" &&
    !Array.isArray(value) &&
    typeof (value as Record<string, unknown>).zh === "string" &&
    typeof (value as Record<string, unknown>).en === "string"
  );
}

/** Walks an object/array tree and swaps in `lang` wherever it finds a
 *  `{ zh, en }` pair, leaving every other value untouched. */
export function resolveLang<T>(node: T, lang: Lang): T {
  if (isLocalized(node)) return node[lang] as T;
  if (Array.isArray(node)) return node.map((item) => resolveLang(item, lang)) as T;
  if (node && typeof node === "object") {
    const out: Record<string, unknown> = {};
    for (const [key, value] of Object.entries(node)) {
      out[key] = resolveLang(value, lang);
    }
    return out as T;
  }
  return node;
}
