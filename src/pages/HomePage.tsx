import { Link } from 'react-router-dom';
import { useContent } from '../i18n';
import { usePageMeta } from '../lib/useMeta';
import { Picture } from '../components/Picture';
import { Reveal } from '../components/Reveal';

export function HomePage() {
  const { content, ui } = useContent();
  const home = content.home;
  usePageMeta('home');

  return (
    <>
      <section className="hero hero--tall">
        <div className="hero__image">
          <Picture name="hero-home" alt={home.heroAlt} eager sizes="100vw" />
        </div>
        <div className="hero__scrim" aria-hidden="true" />
        <div className="container">
          <div className="hero__content">
            <h1>{home.heroTitle}</h1>
            <p>{home.heroSubtitle}</p>
            <div className="hero__actions">
              <Link className="btn btn--primary" to="/iliad">
                {home.ctaIliad}
              </Link>
              <Link className="btn btn--sea" to="/odyssey">
                {home.ctaOdyssey}
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <Reveal>
            <div className="prose">
              <p className="eyebrow">{ui.siteTagline}</p>
              <h2>{home.introTitle}</h2>
              {home.intro.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      <section className="section section--tint">
        <div className="container">
          <Reveal>
            <div className="section-head">
              <h2>{home.worksTitle}</h2>
            </div>
          </Reveal>
          <div className="work-teaser">
            <Link to="/iliad" className="work-teaser__card">
              <Picture
                name="hero-iliad"
                alt={content.iliad.heroAlt}
                sizes="(max-width: 800px) 100vw, 50vw"
              />
              <div className="work-teaser__body">
                <p className="work-teaser__tagline">{home.works.iliad.tagline}</p>
                <h3>{home.works.iliad.title}</h3>
                <p>{home.works.iliad.text}</p>
                <span className="work-teaser__cta">{home.works.iliad.link} →</span>
              </div>
            </Link>
            <Link to="/odyssey" className="work-teaser__card">
              <Picture
                name="hero-odyssey"
                alt={content.odyssey.heroAlt}
                sizes="(max-width: 800px) 100vw, 50vw"
              />
              <div className="work-teaser__body">
                <p className="work-teaser__tagline">{home.works.odyssey.tagline}</p>
                <h3>{home.works.odyssey.title}</h3>
                <p>{home.works.odyssey.text}</p>
                <span className="work-teaser__cta">{home.works.odyssey.link} →</span>
              </div>
            </Link>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <Reveal>
            <div className="prose">
              <h2>{home.contrastTitle}</h2>
              {home.contrast.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </div>
          </Reveal>
          <hr className="meander" />
          <Reveal>
            <div className="prose">
              <h2>{home.contextTitle}</h2>
              {home.context.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </div>
          </Reveal>
          <hr className="meander" />
          <Reveal>
            <div className="prose">
              <h2>{home.oralityTitle}</h2>
              {home.orality.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      <section className="section section--tint">
        <div className="container">
          <Reveal>
            <div className="section-head">
              <h2>{home.exploreTitle}</h2>
            </div>
          </Reveal>
          <div className="card-grid">
            {home.exploreCards.map((card) => (
              <Link key={card.id} to={card.to} className="card card--link">
                <h3>{card.title}</h3>
                <p>{card.text}</p>
                <span className="card__cta">{ui.actions.readMore} →</span>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
