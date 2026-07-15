import { useMemo, useState } from 'react';
import { useContent } from '../i18n';
import { usePageMeta } from '../lib/useMeta';
import { Picture } from '../components/Picture';
import { RelationMap } from '../components/RelationMap';
import { Reveal } from '../components/Reveal';
import { hasImage } from '../lib/images';
import type { Affiliation, WorkId } from '../content/types';

type AffFilter = 'all' | Affiliation;
type WorkFilter = 'all' | WorkId;

export function CharactersPage() {
  const { content } = useContent();
  const data = content.characters;
  usePageMeta('characters', data.title);

  const [aff, setAff] = useState<AffFilter>('all');
  const [work, setWork] = useState<WorkFilter>('all');

  const filtered = useMemo(
    () =>
      data.characters.filter(
        (c) =>
          (aff === 'all' || c.affiliation === aff) &&
          (work === 'all' || c.works.includes(work)),
      ),
    [data.characters, aff, work],
  );

  const affKeys: AffFilter[] = ['all', 'greek', 'trojan', 'god', 'ithaca', 'other'];
  const workKeys: WorkFilter[] = ['all', 'iliad', 'odyssey'];

  return (
    <>
      <section className="section">
        <div className="container">
          <h1>{data.title}</h1>
          <div className="prose">
            {data.intro.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </div>

          <div className="filter-bar" role="group" aria-label={data.filterLabel}>
            <span className="filter-bar__label">{data.filterLabel}:</span>
            {affKeys.map((key) => (
              <button
                key={key}
                type="button"
                className="chip"
                aria-pressed={aff === key}
                onClick={() => setAff(key)}
              >
                {data.filters[key]}
              </button>
            ))}
          </div>
          <div className="filter-bar" role="group" aria-label={data.filterLabel}>
            {workKeys.map((key) => (
              <button
                key={key}
                type="button"
                className="chip"
                aria-pressed={work === key}
                onClick={() => setWork(key)}
              >
                {data.workFilters[key]}
              </button>
            ))}
          </div>

          <ul className="character-grid" style={{ listStyle: 'none', padding: 0 }}>
            {filtered.map((c) => (
              <li key={c.id}>
                <article className="character-card">
                  {c.portrait && hasImage(c.portrait) && (
                    <div className="character-card__portrait">
                      <Picture
                        name={c.portrait}
                        alt={`${c.name} – ${c.role}`}
                        sizes="(max-width: 700px) 100vw, 20rem"
                      />
                    </div>
                  )}
                  <div className="character-card__body">
                    <h3>{c.name}</h3>
                    {c.epithet && <p className="character-card__epithet">{c.epithet}</p>}
                    <p className="character-card__role">{c.role}</p>
                    <p className="character-card__desc">{c.description}</p>
                    <div className="character-card__tags">
                      <span className={`tag tag--${c.affiliation}`}>
                        {data.filters[c.affiliation]}
                      </span>
                      {c.works.map((w) => (
                        <span key={w} className="tag">
                          {data.workFilters[w]}
                        </span>
                      ))}
                    </div>
                  </div>
                </article>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="section section--tint">
        <div className="container">
          <Reveal>
            <div className="section-head">
              <h2>{data.relationsTitle}</h2>
              <p>{data.relationsIntro}</p>
            </div>
            <RelationMap characters={data.characters} hint={data.relationsHint} />
            <div className="map-legend" aria-hidden="true">
              <span>
                <span className="legend-dot" style={{ background: '#d8713f' }} />
                {data.filters.greek}
              </span>
              <span>
                <span className="legend-dot" style={{ background: '#c05f6b' }} />
                {data.filters.trojan}
              </span>
              <span>
                <span className="legend-dot" style={{ background: '#dfa32e' }} />
                {data.filters.god}
              </span>
              <span>
                <span className="legend-dot" style={{ background: '#3aa9a0' }} />
                {data.filters.ithaca}
              </span>
              <span>
                <span className="legend-dot" style={{ background: '#95a061' }} />
                {data.filters.other}
              </span>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
