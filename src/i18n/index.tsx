import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from 'react';
import { LANGS, UI, type Lang, type UIStrings } from './ui';
import type { Content } from '../content/types';

const STORAGE_KEY = 'homer-epics-lang';

function detectInitialLang(): Lang {
  try {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored && LANGS.includes(stored as Lang)) return stored as Lang;
  } catch {
    /* localStorage nicht verfügbar */
  }
  const candidates = navigator.languages ?? [navigator.language];
  for (const candidate of candidates) {
    const code = candidate.toLowerCase().slice(0, 2);
    if (LANGS.includes(code as Lang)) return code as Lang;
  }
  return 'en';
}

const contentLoaders: Record<Lang, () => Promise<{ default: Content }>> = {
  de: () => import('../content/de'),
  en: () => import('../content/en'),
  ru: () => import('../content/ru'),
};

interface I18nValue {
  lang: Lang;
  setLang: (lang: Lang) => void;
  ui: UIStrings;
  content: Content | null;
}

const I18nContext = createContext<I18nValue | null>(null);

export function I18nProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>(detectInitialLang);
  const [contentMap, setContentMap] = useState<Partial<Record<Lang, Content>>>({});

  useEffect(() => {
    let cancelled = false;
    if (!contentMap[lang]) {
      contentLoaders[lang]().then((mod) => {
        if (!cancelled) {
          setContentMap((prev) => ({ ...prev, [lang]: mod.default }));
        }
      });
    }
    return () => {
      cancelled = true;
    };
  }, [lang, contentMap]);

  useEffect(() => {
    document.documentElement.lang = lang;
  }, [lang]);

  const setLang = useCallback((next: Lang) => {
    setLangState(next);
    try {
      localStorage.setItem(STORAGE_KEY, next);
    } catch {
      /* localStorage nicht verfügbar */
    }
  }, []);

  const value = useMemo<I18nValue>(
    () => ({
      lang,
      setLang,
      ui: UI[lang],
      content: contentMap[lang] ?? null,
    }),
    [lang, setLang, contentMap],
  );

  return <I18nContext.Provider value={value}>{children}</I18nContext.Provider>;
}

export function useI18n(): I18nValue {
  const ctx = useContext(I18nContext);
  if (!ctx) throw new Error('useI18n muss innerhalb von I18nProvider verwendet werden');
  return ctx;
}

/** Wie useI18n, aber garantiert geladenen Inhalt (Seiten rendern erst nach dem Laden). */
export function useContent(): { lang: Lang; ui: UIStrings; content: Content } {
  const { lang, ui, content } = useI18n();
  if (!content) throw new Error('Inhalt noch nicht geladen');
  return { lang, ui, content };
}
