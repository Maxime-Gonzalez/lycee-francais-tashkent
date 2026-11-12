import './TricolorBar.css';

/** Thin blue / white / red band, reused in header, hero and footer. */
export default function TricolorBar({ vertical = false, className = '' }) {
  return (
    <div
      className={`tricolor ${vertical ? 'tricolor--vertical' : ''} ${className}`}
      aria-hidden="true"
    >
      <span /><span /><span />
    </div>
  );
}
