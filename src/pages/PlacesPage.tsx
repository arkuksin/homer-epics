import { useMemo } from 'react';
import { useContent } from '../i18n';
import { usePageMeta } from '../lib/useMeta';
import { Picture } from '../components/Picture';
import { Reveal } from '../components/Reveal';
import type { Place, PlaceStatus } from '../content/types';

const STATUS_COLORS: Record<PlaceStatus, string> = {
  historical: '#dfa32e',
  mythological: '#3aa9a0',
  disputed: '#d8713f',
};

/** Stilisierte, nicht maßstabsgetreue Karte (viewBox 1000×640). */
function StylizedMap({ places, alt }: { places: Place[]; alt: string }) {
  const route = useMemo(
    () =>
      places
        .filter((p) => p.routeIndex && p.coords)
        .sort((a, b) => (a.routeIndex ?? 0) - (b.routeIndex ?? 0)),
    [places],
  );

  const px = (p: Place) => (p.coords!.x / 100) * 1000;
  const py = (p: Place) => (p.coords!.y / 100) * 640;

  const routePath = route
    .map((p, i) => `${i === 0 ? 'M' : 'L'} ${px(p)} ${py(p)}`)
    .join(' ');

  return (
    <div className="map-panel">
      <svg viewBox="0 0 1000 640" role="img" aria-label={alt}>
        {/* Wellenmuster */}
        <defs>
          <pattern id="waves" width="60" height="24" patternUnits="userSpaceOnUse">
            <path
              d="M0 12 Q 15 4, 30 12 T 60 12"
              fill="none"
              stroke="rgba(255,255,255,0.06)"
              strokeWidth="1.5"
            />
          </pattern>
        </defs>
        <rect width="1000" height="640" fill="url(#waves)" />

        {/* Route des Odysseus */}
        <path className="map-route" d={routePath} />

        {places
          .filter((p) => p.coords)
          .map((p) => (
            <g key={p.id} className="map-place" transform={`translate(${px(p)}, ${py(p)})`}>
              <title>{p.name}</title>
              {/* stilisierte Insel */}
              <ellipse
                rx="20"
                ry="12"
                fill="rgba(233, 223, 201, 0.14)"
                stroke="rgba(233, 223, 201, 0.25)"
              />
              <circle
                r="7"
                fill={STATUS_COLORS[p.status]}
                stroke="rgba(10,30,44,0.7)"
                strokeWidth="2"
              />
              {p.routeIndex && (
                <text y="4" x="0" textAnchor="middle" style={{ fontSize: 8, fill: '#0a1e2c', stroke: 'none', fontWeight: 700 }}>
                  {p.routeIndex}
                </text>
              )}
              <text y="-16" textAnchor="middle">
                {p.name}
              </text>
            </g>
          ))}
      </svg>
    </div>
  );
}

export function PlacesPage() {
  const { content } = useContent();
  const data = content.places;
  usePageMeta('places', data.title);

  const routePlaces = data.places
    .filter((p) => p.routeIndex)
    .sort((a, b) => (a.routeIndex ?? 0) - (b.routeIndex ?? 0));
  const otherPlaces = data.places.filter((p) => !p.routeIndex);

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
        </div>
      </section>

      <section className="section section--tint">
        <div className="container">
          <Reveal>
            <h2>{data.mapTitle}</h2>
            <StylizedMap places={data.places} alt={data.mapAlt} />
            <div className="map-legend">
              {(Object.keys(data.legend) as PlaceStatus[]).map((status) => (
                <span key={status}>
                  <span className={`legend-dot legend-dot--${status}`} />
                  {data.legend[status]}
                </span>
              ))}
            </div>
            <p className="map-note">{data.mapNote}</p>
            <div className="note-box">{data.disclaimer}</div>
          </Reveal>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <Reveal>
            <h2>{data.routeTitle}</h2>
            <p className="prose">{data.routeIntro}</p>
          </Reveal>
          <ul className="place-list">
            {routePlaces.map((p) => (
              <li key={p.id} className="place-card">
                <h3>
                  <span className="place-card__route" aria-hidden="true">
                    {p.routeIndex}
                  </span>
                  {p.name}
                  <span className={`status-chip status-chip--${p.status}`}>
                    {data.legend[p.status]}
                  </span>
                </h3>
                <p>{p.description}</p>
              </li>
            ))}
          </ul>

          <hr className="meander" />

          <ul className="place-list">
            {otherPlaces.map((p) => (
              <li key={p.id} className="place-card">
                <h3>
                  {p.name}
                  <span className={`status-chip status-chip--${p.status}`}>
                    {data.legend[p.status]}
                  </span>
                </h3>
                <p>{p.description}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="section section--tint">
        <div className="container">
          <Reveal>
            <figure className="figure" style={{ margin: 0 }}>
              <Picture
                name="journey-map"
                alt={data.mapAlt}
                sizes="(max-width: 1200px) 100vw, 72rem"
              />
              <figcaption>{data.mapNote}</figcaption>
            </figure>
          </Reveal>
        </div>
      </section>
    </>
  );
}
