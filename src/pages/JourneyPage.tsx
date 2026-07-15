import { useEffect, useState } from 'react';
import { useContent } from '../i18n';
import { usePageMeta } from '../lib/useMeta';
import { Reveal } from '../components/Reveal';
import { Picture } from '../components/Picture';
import type { WorkId } from '../content/types';

/** Lesefortschritt über die gesamte Seite (0–100 %). */
function useReadingProgress() {
  const [progress, setProgress] = useState(0);
  useEffect(() => {
    const onScroll = () => {
      const total = document.documentElement.scrollHeight - window.innerHeight;
      setProgress(total > 0 ? Math.min(100, (window.scrollY / total) * 100) : 0);
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);
  return progress;
}

/** Aktive Etappe für die Kapitelnavigation. */
function useActiveStage(ids: string[]) {
  const [active, setActive] = useState<string | null>(null);
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) setActive(entry.target.id);
        }
      },
      { rootMargin: '-25% 0px -65% 0px' },
    );
    for (const id of ids) {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    }
    return () => observer.disconnect();
  }, [ids]);
  return active;
}

/** Illustrationen an passenden Etappen der Werkreisen. */
const STAGE_FIGURES: Record<WorkId, Record<string, string>> = {
  iliad: {
    'gesang-22': 'achilles-hector',
    'gesang-24': 'priam-achilles',
  },
  odyssey: {
    'buch-9': 'odysseus-polyphemus',
    'buch-10': 'circe',
    'buch-12': 'sirens',
    'buch-21': 'return-ithaca',
  },
};

export function JourneyPage({ work }: { work: WorkId }) {
  const { content, ui } = useContent();
  const journey = work === 'iliad' ? content.iliadJourney : content.odysseyJourney;
  const epic = content[work];
  usePageMeta(`${work}Journey`, journey.title);

  const progress = useReadingProgress();
  const stageIds = journey.stages.map((s) => s.id);
  const active = useActiveStage(stageIds);
  const figures = STAGE_FIGURES[work];

  return (
    <>
      <div
        className="journey-progress"
        role="progressbar"
        aria-label={ui.actions.progress}
        aria-valuenow={Math.round(progress)}
        aria-valuemin={0}
        aria-valuemax={100}
      >
        <div className="journey-progress__bar" style={{ width: `${progress}%` }} />
      </div>

      <section className="section">
        <div className="container">
          <p className="eyebrow">{epic.title}</p>
          <h1>{journey.title}</h1>
          <div className="prose">
            {journey.intro.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </div>
        </div>
      </section>

      <nav className="journey-nav" aria-label={ui.actions.chapterNav}>
        <div className="container">
          <ol className="journey-nav__list">
            {journey.stages.map((stage, i) => (
              <li key={stage.id}>
                <a
                  href={`#${stage.id}`}
                  className={[
                    stage.isTurningPoint ? 'is-turning' : '',
                    active === stage.id ? 'is-active' : '',
                  ]
                    .filter(Boolean)
                    .join(' ')}
                  aria-label={`${journey.stageLabel} ${i + 1}: ${stage.title}`}
                >
                  {i + 1}
                </a>
              </li>
            ))}
          </ol>
        </div>
      </nav>

      <div className="container">
        <ol style={{ listStyle: 'none', margin: 0, padding: 0 }}>
          {journey.stages.map((stage) => {
            const figureKey = figures[stage.id];
            const figure = figureKey ? epic.figures[figureKey] : undefined;
            return (
              <li key={stage.id}>
                <article
                  id={stage.id}
                  className={`stage${stage.isTurningPoint ? ' stage--turning' : ''}`}
                >
                  <Reveal>
                    <p className="stage__meta">
                      <span className="stage__books">{stage.books}</span>
                      {stage.location && (
                        <span className="stage__location">{stage.location}</span>
                      )}
                      {stage.isTurningPoint && (
                        <span className="badge-turning">{ui.actions.turningPoint}</span>
                      )}
                    </p>
                    <h3>{stage.title}</h3>
                    <div className="stage__summary">
                      {stage.summary.map((p, i) => (
                        <p key={i}>{p}</p>
                      ))}
                    </div>
                    {stage.sidenote && (
                      <details className="sidenote">
                        <summary>{stage.sidenote.title}</summary>
                        <div className="sidenote__body">
                          <p>{stage.sidenote.text}</p>
                        </div>
                      </details>
                    )}
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
                </article>
              </li>
            );
          })}
        </ol>
      </div>
    </>
  );
}
