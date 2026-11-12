import PageHero from '../components/ui/PageHero.jsx';
import Section from '../components/ui/Section.jsx';
import Button from '../components/ui/Button.jsx';
import { ROUTES } from '../routes.js';
import './DirectorWord.css';

const VALUES = ['Curiosité', 'Respect', 'Solidarité', 'Engagement citoyen'];

export default function DirectorWord() {
  return (
    <>
      <PageHero
        title="Mot de la Directrice"
        breadcrumb="Présentation"
        intro="Quelques mots pour vous accueillir dans notre communauté éducative."
      />

      <Section>
        <div className="letter">
          <article className="letter__body">
            <h2>Bienvenue au lycée français de Tachkent !</h2>

            <p className="letter__lead">
              Ici, les langues se croisent, les idées voyagent, les curiosités s’éveillent et les talents
              prennent leur envol. Chaque jour, nous faisons un pari joyeux : celui qu’on apprend mieux
              quand on se sent accueilli, respecté, encouragé… et libre de voir le monde sous plusieurs
              angles !
            </p>

            <p>
              Notre école est un lieu de rencontres, de découvertes et de construction de soi, où chaque
              élève doit pouvoir trouver sa place, oser essayer, apprendre de ses erreurs et cultiver sa
              curiosité.
            </p>
            <p>
              Notre école se construit à plusieurs : parents, enseignants, personnels et élèves, chacun
              contribue, à sa manière, à faire vivre notre communauté éducative. Le dialogue, la confiance
              et la coopération sont les ingrédients indispensables de cette aventure partagée.
            </p>
            <p>
              Nous croyons aussi que le respect d’autrui se cultive au quotidien, dans les petits gestes
              comme dans les grands engagements. Écouter, comprendre, accueillir les différences, apprendre
              à débattre et agir avec responsabilité : autant de graines que nous souhaitons semer pour
              faire grandir des citoyens ouverts sur le monde et attentifs aux autres.
            </p>
            <p>
              Le plurilinguisme est une richesse que nous faisons vivre. Chaque langue ouvre une fenêtre
              sur une autre culture, une autre façon de penser, une autre manière de raconter le monde.
              Nous voulons que nos élèves osent franchir ces fenêtres, en ouvrent de nouvelles et
              deviennent des passeurs de langues et de cultures.
            </p>
            <p>
              Notre école primaire, homologuée par l’AEFE, s’inscrit dans les exigences et les valeurs de
              l’enseignement français à l’étranger. Au secondaire, l’accompagnement des élèves s’appuie sur
              les enseignements du CNED, avec la même ambition : permettre à chacun de construire son
              parcours, de développer son autonomie et d’avancer avec confiance.
            </p>
            <p>
              Notre boussole ? La curiosité, le respect, la solidarité et l’engagement citoyen. Notre
              énergie ? Celle d’une équipe qui s’investit chaque jour auprès des élèves. Et notre plus belle
              réussite ? Les voir grandir, s’épanouir, penser par eux-mêmes et devenir des citoyens éclairés,
              capables de contribuer au monde de demain.
            </p>
            <p>À très bientôt dans notre école !</p>

            <footer className="letter__sign">
              <em>La directrice</em>
              <strong>Cathy REVEL</strong>
            </footer>
          </article>

          <aside className="letter__aside" aria-label="Nos valeurs">
            <h3>Notre boussole</h3>
            <ul>
              {VALUES.map((v) => <li key={v}>{v}</li>)}
            </ul>
            <Button to={ROUTES.organisation} variant="ghost">Découvrir l’organisation</Button>
          </aside>
        </div>
      </Section>
    </>
  );
}
