import './Section.css';

/** tone: white | paper | blue */
export default function Section({ title, tone = 'white', children, id }) {
  return (
    <section className={`section section--${tone}`} id={id}>
      <div className="container">
        {title && <h2 className="section__title">{title}</h2>}
        {children}
      </div>
    </section>
  );
}
