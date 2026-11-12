import { Link } from 'react-router-dom';
import { SITE } from '../../data/site.js';
import { ROUTES } from '../../routes.js';
import './Logo.css';

/** Logo is always rendered from a PNG file (see public/images). */
export default function Logo({ size = 'md', link = true }) {
  const img = (
    <img
      className={`logo logo--${size}`}
      src={SITE.logo}
      alt={SITE.name}
      width="220"
      height="60"
    />
  );
  return link ? (
    <Link to={ROUTES.home} aria-label={`${SITE.name} – accueil`}>{img}</Link>
  ) : img;
}
