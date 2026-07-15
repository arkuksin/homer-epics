import { useEffect, useRef, useState, type ReactNode } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { useI18n } from '../i18n';
import { LANGS, LANG_NAMES, type Lang } from '../i18n/ui';

function LyreIcon() {
  return (
    <svg viewBox="0 0 64 64" aria-hidden="true" focusable="false">
      <rect width="64" height="64" rx="12" fill="var(--aegean-deep)" />
      <g fill="none" stroke="var(--saffron)" strokeWidth="3.2">
        <path d="M14 50V22c0-6 4-10 9-10h18c5 0 9 4 9 10v28" />
        <path d="M14 50h36" />
      </g>
      <path
        d="M22 12c-3 4-3 9 0 12M42 12c3 4 3 9 0 12"
        fill="none"
        stroke="var(--saffron)"
        strokeWidth="3.2"
        strokeLinecap="round"
      />
      <g stroke="var(--saffron)" strokeWidth="2.4">
        <line x1="24" y1="24" x2="24" y2="44" />
        <line x1="32" y1="24" x2="32" y2="44" />
        <line x1="40" y1="24" x2="40" y2="44" />
      </g>
    </svg>
  );
}

function LangSwitcher() {
  const { lang, setLang, ui } = useI18n();
  return (
    <div className="lang-switcher" role="group" aria-label={ui.actions.languageSwitcher}>
      {LANGS.map((code: Lang) => (
        <button
          key={code}
          type="button"
          aria-pressed={lang === code}
          aria-label={LANG_NAMES[code]}
          lang={code}
          onClick={() => setLang(code)}
        >
          <span className="lang-full" aria-hidden="true">
            {LANG_NAMES[code]}
          </span>
          <span className="lang-short" aria-hidden="true">
            {code.toUpperCase()}
          </span>
        </button>
      ))}
    </div>
  );
}

function BackToTop() {
  const { ui } = useI18n();
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 600);
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <button
      type="button"
      className={`back-to-top${visible ? ' is-visible' : ''}`}
      aria-label={ui.actions.backToTop}
      onClick={() => window.scrollTo({ top: 0 })}
    >
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden="true">
        <path d="M12 19V5M5 12l7-7 7 7" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </button>
  );
}

/** Scrollt bei Seitenwechsel nach oben (außer bei Anker-Navigation). */
function ScrollToTop() {
  const { pathname, hash } = useLocation();
  useEffect(() => {
    if (!hash) window.scrollTo({ top: 0, behavior: 'instant' as ScrollBehavior });
  }, [pathname, hash]);
  return null;
}

export function Layout({ children }: { children: ReactNode }) {
  const { ui } = useI18n();
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();
  const navRef = useRef<HTMLElement>(null);

  // Menü bei Navigation schließen
  useEffect(() => {
    setMenuOpen(false);
  }, [location.pathname]);

  // Escape schließt das mobile Menü
  useEffect(() => {
    if (!menuOpen) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setMenuOpen(false);
    };
    document.addEventListener('keydown', onKey);
    return () => document.removeEventListener('keydown', onKey);
  }, [menuOpen]);

  // Die Werkreisen erscheinen nur im (vertikalen) Mobilmenü –
  // auf dem Desktop sind sie über die Werkseiten und die Startseite erreichbar.
  const navItems = [
    { to: '/', label: ui.nav.home, end: true, mobileOnly: true },
    { to: '/iliad', label: ui.nav.iliad, end: true },
    { to: '/iliad/journey', label: ui.nav.iliadJourney, end: false, mobileOnly: true },
    { to: '/odyssey', label: ui.nav.odyssey, end: true },
    { to: '/odyssey/journey', label: ui.nav.odysseyJourney, end: false, mobileOnly: true },
    { to: '/characters', label: ui.nav.characters, end: false },
    { to: '/places', label: ui.nav.places, end: false },
    { to: '/comparison', label: ui.nav.comparison, end: false },
    { to: '/glossary', label: ui.nav.glossary, end: false },
    { to: '/sources', label: ui.nav.sources, end: false },
  ];

  return (
    <>
      <a className="skip-link" href="#main">
        {ui.actions.skipToContent}
      </a>
      <ScrollToTop />
      <header className="site-header">
        <div className="container site-header__inner">
          <Link to="/" className="site-logo">
            <LyreIcon />
            <span>{ui.siteName}</span>
          </Link>
          <LangSwitcher />
          <button
            type="button"
            className="nav-toggle"
            aria-expanded={menuOpen}
            aria-controls="main-nav"
            aria-label={menuOpen ? ui.actions.menuClose : ui.actions.menuOpen}
            onClick={() => setMenuOpen((v) => !v)}
          >
            {menuOpen ? (
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                <path d="M6 6l12 12M18 6L6 18" strokeLinecap="round" />
              </svg>
            ) : (
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                <path d="M4 7h16M4 12h16M4 17h16" strokeLinecap="round" />
              </svg>
            )}
          </button>
          <nav
            id="main-nav"
            ref={navRef}
            className={`main-nav${menuOpen ? ' is-open' : ''}`}
            aria-label={ui.nav.home}
          >
            {navItems.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                end={item.end}
                className={item.mobileOnly ? 'nav-item--mobile' : undefined}
              >
                {item.label}
              </NavLink>
            ))}
          </nav>
        </div>
      </header>

      <main id="main">{children}</main>

      <footer className="site-footer">
        <div className="container">
          <div className="site-footer__grid">
            <div>
              <h2>{ui.siteName}</h2>
              <p>{ui.footer.about}</p>
            </div>
            <nav aria-label={ui.footer.sources}>
              <ul>
                <li>
                  <Link to="/iliad">{ui.nav.iliad}</Link>
                </li>
                <li>
                  <Link to="/odyssey">{ui.nav.odyssey}</Link>
                </li>
                <li>
                  <Link to="/glossary">{ui.nav.glossary}</Link>
                </li>
                <li>
                  <Link to="/sources">{ui.footer.sources}</Link>
                </li>
              </ul>
            </nav>
            <div>
              <p>{ui.footer.imprint}</p>
            </div>
          </div>
          <div className="site-footer__meta">
            <p>
              {ui.footer.madeWith} · {ui.footer.license} ·{' '}
              <a
                href="https://github.com/arkuksin/homer-epics"
                target="_blank"
                rel="noopener noreferrer"
              >
                GitHub
              </a>
            </p>
          </div>
        </div>
      </footer>
      <BackToTop />
    </>
  );
}
