import type { Locale } from "../config";
import en, { type Dictionary } from "./en";
import pt from "./pt";

const dictionaries: Record<Locale, Dictionary> = { en, pt };

export function getDictionary(locale: Locale): Dictionary {
  return dictionaries[locale];
}

export type { Dictionary };
