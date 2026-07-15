import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { useI18n } from '../i18n';

const SITE_URL = 'https://arkuksin.github.io/homer-epics';

function setMeta(selector: string, attr: string, value: string) {
  const el = document.head.querySelector<HTMLMetaElement>(selector);
  if (el) el.setAttribute(attr, value);
}

/** Setzt sprachabhängige Seitentitel, Beschreibung, Open Graph und Canonical. */
export function usePageMeta(pageKey: string, titleOverride?: string) {
  const { ui, lang } = useI18n();
  const { pathname } = useLocation();

  useEffect(() => {
    const title = titleOverride
      ? `${titleOverride} · ${ui.meta.titleSuffix}`
      : ui.meta.titleSuffix;
    const description = ui.meta.descriptions[pageKey] ?? ui.meta.descriptions.home;
    const url = `${SITE_URL}${pathname === '/' ? '/' : pathname}`;

    document.title = title;
    setMeta('meta[name="description"]', 'content', description);
    setMeta('meta[property="og:title"]', 'content', title);
    setMeta('meta[property="og:description"]', 'content', description);
    setMeta('meta[property="og:url"]', 'content', url);
    document.head
      .querySelector<HTMLLinkElement>('link[rel="canonical"]')
      ?.setAttribute('href', url);
  }, [pageKey, titleOverride, ui, lang, pathname]);
}
