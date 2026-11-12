import { Link } from 'react-router-dom';
import Button from '../components/ui/Button.jsx';
import Section from '../components/ui/Section.jsx';
import TricolorBar from '../components/ui/TricolorBar.jsx';
import { NEWS, TILES, STRENGTHS, GALLERY, HERO_IMAGE } from '../data/home.js';
import { ROUTES } from '../routes.js';
import './Home.css';

function SmartLink({ to, href, children, ...rest }) {
  return to
    ? <Link to={to} {...rest}>{children}</Link>
    : <a href={href} target="_blank" rel="noopener noreferrer" {...rest}>{children}</a>;
}

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="hero">
        <div className="container hero__inner">
          <div className="hero__text">
            <h1>Bienvenue au Lycée Français de Tachkent</h1>
            <p className="hero__lead">
              De la maternelle à la terminale, un enseignement français plurilingue en Ouzbékistan.
            </p>
            <div className="hero__actions">
              <Button to={ROUTES.presentation} variant="accent">Nous découvrir</Button>
              <Button to={ROUTES.enrolment} variant="light">S’inscrire</Button>
            </div>
          </div>
          <div className="hero__media">
            <TricolorBar vertical className="hero__stripes" />
            <img src={HERO_IMAGE} alt="Élèves du lycée lors d’un spectacle de danse" />
          </div>
        </div>
      </section>

      {/* Latest news */}
      <Section tone="paper">
        <div className="news">
          <h2 className="news__title">
            <Link to={ROUTES.latestNews}>Dernières infos</Link>
          </h2>
          <ul className="news__list">
            {NEWS.map((n) => (
              <li key={n.label} className={n.highlight ? 'is-alert' : ''}>
                <SmartLink to={n.to} href={n.href}>{n.label}</SmartLink>
              </li>
            ))}
          </ul>
        </div>
      </Section>

      {/* Quick access tiles */}
      <Section title="Accès rapide">
        <ul className="tiles">
          {TILES.map((t) => (
            <li key={t.title}>
              <SmartLink to={t.to} href={t.href} className="tile">
                <h3>{t.title}</h3>
                <span className="tile__cta">{t.cta}</span>
              </SmartLink>
            </li>
          ))}
        </ul>
      </Section>

      {/* Strengths */}
      <Section title="Nos atouts :" tone="blue">
        <ul className="strengths">
          {STRENGTHS.map((s) => (
            <li key={s.title} className="strength">
              <h3>{s.title}</h3>
              <p>{s.text}</p>
            </li>
          ))}
        </ul>
      </Section>

      {/* Gallery */}
      <Section title="Notre lycée en images :">
        <ul className="gallery">
          {GALLERY.map((g) => (
            <li key={g.src}><img src={g.src} alt={g.alt} loading="lazy" width="400" height="284" /></li>
          ))}
        </ul>
        <p className="gallery__more">
          <Button to="/ecole-francaise-ouzbekistan/presentation/visite-de-lecole-francaise" variant="ghost">
            Visiter l’école
          </Button>
        </p>
      </Section>
    </>
  );
}
