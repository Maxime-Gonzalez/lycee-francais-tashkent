import PageHero from '../components/ui/PageHero.jsx';
import Section from '../components/ui/Section.jsx';
import Button from '../components/ui/Button.jsx';
import { AEFE_MAP, AEFE_LOGO } from '../data/home.js';
import { ROUTES } from '../routes.js';
import './Organisation.css';

const STATS = [
  { value: '235+', label: 'Élèves' },
  { value: '24', label: 'Enseignants' },
  { value: '12', label: 'Nationalités' },
  { value: '100%', label: 'Réussite' },
];

export default function Organisation() {
  return (
    <>
      <PageHero
        title="Organisation de lycée français de Tachkent"
        breadcrumb="Présentation"
        intro="Le plus grand lycée français d’Asie Centrale : son histoire, son statut et ses chiffres clés."
      />

      {/* Key figures */}
      <section className="stats" aria-label="Chiffres clés">
        <ul className="container stats__list">
          {STATS.map((s) => (
            <li key={s.label} className="stat">
              <span className="stat__value">{s.value}</span>
              <span className="stat__label">{s.label}</span>
            </li>
          ))}
        </ul>
      </section>

      <Section>
        <div className="org">
          <article className="org__block">
            <h2>Une histoire née en 1997</h2>
            <p>
              Lycée français de Tachkent, à ce jour le plus <strong>grand lycée français</strong> en Asie
              Centrale, est né en 1997 de la volonté de parents français expatriés d’offrir à la fois une
              continuité d’enseignement à leurs enfants et un accès à un enseignement de grande qualité aux
              francophones et francophiles d’Ouzbékistan.
            </p>
          </article>

          <article className="org__block">
            <h2>Un bien commun associatif</h2>
            <p>
              Lycée français de Tachkent est un bien commun au service de la communauté des parents
              d’élèves qui se sont regroupés en une <strong>association française de loi 1901</strong>{' '}
              assurant sous l’autorité de l’ambassadeur de France en Ouzbékistan un prolongement de mission
              de service public d’enseignement français à l’étranger.
            </p>
          </article>

          <article className="org__block">
            <h2>Une communauté plurilingue</h2>
            <p>
              L’établissement accueille plus de 235 élèves, dont environ 80% d’Ouzbeks et une dizaine de
              nationalités différentes, qui garantissent la pérennité du projet à long terme
              indépendamment de la conjoncture internationale et de la présence étrangère. 24 professeurs
              assurent un enseignement français de qualité de la maternelle à la terminale, avec un taux
              moyen de réussite de 100% au BAC et au Brevet des collèges depuis la création du lycée. Les
              langues vivantes enseignées dès le primaire sont l’anglais, le russe et l’ouzbek ; au total,
              5 langues vivantes outre le français sont proposées au cours de la scolarité.
            </p>
          </article>
        </div>
      </Section>

      <Section tone="paper" title="Un établissement partenaire de l’AEFE">
        <div className="aefe">
          <div className="aefe__text">
            <p>
              Le lycée français de Tachkent est un <strong>établissement partenaire</strong>{' '}
              <strong>homologué par l’AEFE</strong> depuis 2001, il est reconnu par le ministère de
              l’éducation ouzbek (légalisé avec licences d’enseignement). Cette homologation garantit à la
              fois la conformité au modèle éducatif français et la qualité de l’enseignement dispensé. Le
              réseau AEFE (Agence pour l’Enseignement Français à l’Etranger) est un organisme sous tutelle
              du Ministère des Affaires étrangères et du Développement international qui anime un réseau de
              580 écoles françaises de l’étranger présentes dans 139 pays pour 391.000 élèves scolarisés.
            </p>
            <img className="aefe__logo" src={AEFE_LOGO} alt="AEFE – établissement partenaire" loading="lazy" />
            <p><Button to={ROUTES.enrolment}>Inscrire mon enfant</Button></p>
          </div>
          <img
            className="aefe__map"
            src={AEFE_MAP}
            alt="Carte du réseau des écoles AEFE dans le monde"
            loading="lazy"
          />
        </div>
      </Section>
    </>
  );
}
