import { useContent } from '../i18n';
import { usePageMeta } from '../lib/useMeta';
import { Reveal } from '../components/Reveal';

export function ComparisonPage() {
  const { content } = useContent();
  const data = content.comparison;
  usePageMeta('comparison', data.title);

  return (
    <section className="section">
      <div className="container">
        <h1>{data.title}</h1>
        <div className="prose">
          {data.intro.map((p, i) => (
            <p key={i}>{p}</p>
          ))}
        </div>

        <Reveal>
          <div className="compare-wrap">
            <table className="compare-table">
              <thead>
                <tr>
                  <th scope="col">
                    <span className="visually-hidden">{data.aspectLabel}</span>
                  </th>
                  <th scope="col">{data.columnIliad}</th>
                  <th scope="col">{data.columnOdyssey}</th>
                </tr>
              </thead>
              <tbody>
                {data.rows.map((row) => (
                  <tr key={row.aspect}>
                    <th scope="row">{row.aspect}</th>
                    <td>{row.iliad}</td>
                    <td>{row.odyssey}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Reveal>

        <hr className="meander" />
        <div className="prose">
          {data.conclusion.map((p, i) => (
            <p key={i}>{p}</p>
          ))}
        </div>
      </div>
    </section>
  );
}
