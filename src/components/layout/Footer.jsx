import { Link } from 'react-router-dom';
import Logo from '../ui/Logo.jsx';
import TricolorBar from '../ui/TricolorBar.jsx';
import SocialLinks from './SocialLinks.jsx';
import { SITE } from '../../data/site.js';
import { ROUTES } from '../../routes.js';
import './Footer.css';

export default function Footer() {
  return (
    <footer className="footer">
      <TricolorBar />
      <div className="container footer__inner">
        <div className="footer__brand">
          <div className="footer__logo"><Logo size="lg" /></div>
          <p>Du primaire au lycée, un enseignement français plurilingue à Tachkent.</p>
        </div>

        <nav aria-label="Liens utiles">
          <ul className="footer__links">
            <li><Link to={ROUTES.legal}>Mentions legales</Link></li>
            <li><a href={`mailto:${SITE.email}`}>Nous écrire</a></li>
            <li><Link to={ROUTES.enrolment}>S’inscrire</Link></li>
          </ul>
        </nav>

        <SocialLinks className="footer__links" />
      </div>
      <p className="footer__legal container">© {new Date().getFullYear()} {SITE.name}</p>
    </footer>
  );
}
