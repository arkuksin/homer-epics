import { useContent } from '../i18n';
import { usePageMeta } from '../lib/useMeta';
import type { SourceEntry } from '../content/types';

const KIND_ORDER: SourceEntry['kind'][] = ['edition', 'scholarship', 'reference', 'web'];

export function SourcesPage() {
  const { content } = useContent();
  const data = content.sources;
  usePageMeta('sources', data.title);

  return (
    <section className="section">
      <div className="container">
        <h1>{data.title}</h1>
        <div className="prose">
          {data.intro.map((p, i) => (
            <p key={i}>{p}</p>
          ))}
        </div>
        <div className="note-box">{data.note}</div>

        {KIND_ORDER.map((kind) => {
          const entries = data.entries.filter((e) => e.kind === kind);
          if (entries.length === 0) return null;
          return (
            <div key={kind} className="source-group">
              <h2>{data.kinds[kind]}</h2>
              <ul className="source-list">
                {entries.map((e) => (
                  <li key={e.title}>
                    <strong>
                      {e.url ? (
                        <a href={e.url} target="_blank" rel="noopener noreferrer">
                          {e.title}
                        </a>
                      ) : (
                        e.title
                      )}
                    </strong>
                    <p>{e.detail}</p>
                  </li>
                ))}
              </ul>
            </div>
          );
        })}

        <div className="source-group">
          <h2>{data.imagesTitle}</h2>
          <p className="prose">{data.imagesNote}</p>
        </div>
      </div>
    </section>
  );
}
