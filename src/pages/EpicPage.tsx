import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useContent } from '../i18n';
import { usePageMeta } from '../lib/useMeta';
import { Picture } from '../components/Picture';
import { Reveal } from '../components/Reveal';
import type { WorkId } from '../content/types';

/** Bilder, die zwischen bestimmten Abschnitten der Epos-Seiten eingebettet werden. */
const SECTION_FIGURES: Record<WorkId, Record<string, string>> = {
  iliad: {
    'tod-hektors': 'achilles-hector',
    priamos: 'priam-achilles',
    ende: 'trojan-horse',
  },
  odyssey: {
    irrfahrten: 'odysseus-polyphemus',
    phaiaken: 'circe',
    heimkehr: 'sirens',
    goetter: 'scylla-charybdis',
    rache: 'return-ithaca',
  },
};

/** Hebt im Inhaltsverzeichnis den aktuell sichtbaren Abschnitt hervor. */
function useActiveSection(ids: string[]) {
  const [active, setActive] = useState<string | null>(null);
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) setActive(entry.target.id);
        }
      },
      { rootMargin: '-20% 0px -70% 0px' },
    );
    for (const id of ids) {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    }
    return () => observer.disconnect();
  }, [ids]);
  return active;
}

export function EpicPage({ work }: { work: WorkId }) {
  const { content, ui } = useContent();
  const epic = content[work];
  usePageMeta(work, epic.title);

  const sectionIds = epic.sections.map((s) => s.id);
  const active = useActiveSection(sectionIds);
  const figures = SECTION_FIGURES[work];

  return (
    <>
      <section className="hero">
        <div className="hero__image">
          <Picture name={`hero-${work}`} alt={epic.heroAlt} eager sizes="100vw" />
        </div>
        <div className="hero__scrim" aria-hidden="true" />
        <div className="container">
          <div className="hero__content">
            <h1>{epic.title}</h1>
            <p>{epic.subtitle}</p>
            <div className="hero__actions">
              <Link className="btn btn--primary" to={`/${work}/journey`}>
                {ui.actions.toJourney}
              </Link>
            </div>
          </div>
        </div>
      </section>

      <div className="container">
        <div className="epic-section__grid">
          <div>
            {epic.sections.map((section) => {
              const figureKey = figures[section.id];
              const figure = figureKey ? epic.figures[figureKey] : undefined;
              return (
                <section key={section.id} id={section.id} className="epic-section">
                  <Reveal>
                    <h2>{section.title}</h2>
                    <div className="prose">
                      {section.body.map((p, i) => (
                        <p key={i}>{p}</p>
                      ))}
                    </div>
                    {figureKey && figure && (
                      <figure className="figure">
                        <Picture
                          name={figureKey}
                          alt={figure.alt}
                          sizes="(max-width: 800px) 100vw, 44rem"
                        />
                        <figcaption>{figure.caption}</figcaption>
                      </figure>
                    )}
                  </Reveal>
                </section>
              );
            })}

            <section className="epic-section" id="themes">
              <Reveal>
                <h2>{epic.themes.title}</h2>
                <p className="prose">{epic.themes.intro}</p>
                <div className="card-grid">
                  {epic.themes.cards.map((card) => (
                    <div key={card.id} className="card theme-card">
                      <h3>{card.title}</h3>
                      <p>{card.text}</p>
                    </div>
                  ))}
                </div>
              </Reveal>
            </section>

            <div style={{ padding: 'var(--space-4) 0' }}>
              <Link className="btn btn--primary" to={`/${work}/journey`}>
                {ui.actions.toJourney}
              </Link>
            </div>
          </div>

          <nav className="toc" aria-label={ui.actions.onThisPage}>
            <h2>{ui.actions.onThisPage}</h2>
            <ol>
              {epic.sections.map((s) => (
                <li key={s.id}>
                  <a href={`#${s.id}`} className={active === s.id ? 'is-active' : undefined}>
                    {s.title}
                  </a>
                </li>
              ))}
              <li>
                <a href="#themes" className={active === 'themes' ? 'is-active' : undefined}>
                  {epic.themes.title}
                </a>
              </li>
            </ol>
          </nav>
        </div>
      </div>
    </>
  );
}
