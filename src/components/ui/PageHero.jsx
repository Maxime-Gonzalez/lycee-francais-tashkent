import TricolorBar from './TricolorBar.jsx';
import './PageHero.css';

/** Blue banner used at the top of every inner page. */
export default function PageHero({ title, intro, breadcrumb }) {
  return (
    <header className="page-hero">
      <div className="container">
        {breadcrumb && <p className="page-hero__crumb">{breadcrumb}</p>}
        <h1>{title}</h1>
        {intro && <p className="page-hero__intro">{intro}</p>}
      </div>
      <TricolorBar className="page-hero__bar" />
    </header>
  );
}
