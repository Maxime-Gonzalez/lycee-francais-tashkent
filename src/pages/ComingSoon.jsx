import { useLocation } from 'react-router-dom';
import PageHero from '../components/ui/PageHero.jsx';
import Section from '../components/ui/Section.jsx';
import Button from '../components/ui/Button.jsx';
import { LEGACY_ORIGIN, ROUTES } from '../routes.js';

/** Fallback for pages not yet migrated: links to the same page on the current site. */
export default function ComingSoon() {
  const { pathname } = useLocation();
  const legacyUrl = `${LEGACY_ORIGIN}${pathname.replace(/\/?$/, '/')}`;

  return (
    <>
      <PageHero title="Page en cours de refonte" intro="Cette page sera bientôt disponible dans le nouveau site." />
      <Section>
        <p>En attendant, vous pouvez consulter la version actuelle de cette page.</p>
        <p style={{ display: 'flex', gap: '.8rem', flexWrap: 'wrap' }}>
          <Button href={legacyUrl}>Voir la page actuelle</Button>
          <Button to={ROUTES.home} variant="ghost">Retour à l’accueil</Button>
        </p>
      </Section>
    </>
  );
}
