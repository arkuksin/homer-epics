import { useMemo, useState } from 'react';
import { useContent } from '../i18n';
import { usePageMeta } from '../lib/useMeta';
import type { GlossaryCategory } from '../content/types';

type CatFilter = 'all' | GlossaryCategory;

export function GlossaryPage() {
  const { content } = useContent();
  const data = content.glossary;
  usePageMeta('glossary', data.title);

  const [query, setQuery] = useState('');
  const [cat, setCat] = useState<CatFilter>('all');

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return data.entries
      .filter((e) => cat === 'all' || e.category === cat)
      .filter(
        (e) =>
          q === '' ||
          e.term.toLowerCase().includes(q) ||
          (e.also ?? '').toLowerCase().includes(q) ||
          e.definition.toLowerCase().includes(q),
      )
      .sort((a, b) => a.term.localeCompare(b.term));
  }, [data.entries, query, cat]);

  const catKeys: CatFilter[] = ['all', 'person', 'place', 'concept', 'literary'];

  return (
    <section className="section">
      <div className="container">
        <h1>{data.title}</h1>
        <p className="prose">{data.intro}</p>

        <div className="glossary-search">
          <label htmlFor="glossary-q" className="visually-hidden">
            {data.searchPlaceholder}
          </label>
          <input
            id="glossary-q"
            type="search"
            value={query}
            placeholder={data.searchPlaceholder}
            onChange={(e) => setQuery(e.target.value)}
          />
        </div>

        <div className="filter-bar" role="group" aria-label={data.categories.all}>
          {catKeys.map((key) => (
            <button
              key={key}
              type="button"
              className="chip"
              aria-pressed={cat === key}
              onClick={() => setCat(key)}
            >
              {data.categories[key]}
            </button>
          ))}
        </div>

        <p className="visually-hidden" role="status">
          {filtered.length}
        </p>

        {filtered.length === 0 ? (
          <p className="glossary-empty">{data.noResults}</p>
        ) : (
          <dl className="glossary-list">
            {filtered.map((e) => (
              <div key={e.term} className="glossary-entry">
                <dt>
                  {e.term}
                  {e.also && <span className="glossary-also">({e.also})</span>}
                  <span className={`tag tag--other`}>{data.categories[e.category]}</span>
                </dt>
                <dd>{e.definition}</dd>
              </div>
            ))}
          </dl>
        )}
      </div>
    </section>
  );
}
