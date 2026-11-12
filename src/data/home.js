import { ROUTES as R, LEGACY_ORIGIN } from '../routes.js';

const UP = `${LEGACY_ORIGIN}/wp-content/uploads`;

export const NEWS = [
  { label: 'Inscriptions des élèves nés en 2023 ouvertes pour la classe de PS', to: R.enrolment },
  { label: 'Communication importante sur la cantine du lycée', to: R.canteen, highlight: true },
  { label: 'Важное сообщение о школьной столовой', to: R.canteen, highlight: true },
  { label: 'Bourses scolaires 2025-2026', href: `${UP}/2025/02/Affiche-Bourses-Scolaires-25-26.pdf` },
  { label: 'Calendrier 2026-2027', href: `${UP}/2026/08/Calendrier-2026-2027-semaine-AB.pdf` },
  { label: 'Fournitures scolaires 2026-2027', to: R.supplies },
];

export const TILES = [
  { title: 'Bienvenue au Lycée Français de Tachkent', cta: 'Nous découvrir', to: R.presentation },
  { title: "L'éducation française", cta: 'Pourquoi inscrire mon enfant ?', to: R.teaching },
  { title: "Lycée en un clin d'oeil", cta: 'Retrouver les infos pratiques', to: R.practical },
  { title: 'La vie scolaire', cta: 'Découvrir toutes les activités', to: R.schoolLife },
  { title: 'Dans ma classe...', cta: 'Partager nos bons moments', to: R.myClass },
  { title: 'Nos actus', cta: 'Retrouvez notre actualité sur notre Facebook', href: 'https://www.facebook.com/EcoleFrancaiseTachkent' },
];

export const STRENGTHS = [
  { title: 'Un lycée bienveillant', text: 'Des classes à effectifs réduits pour assurer la réussite de chacun' },
  { title: 'Un lycée reconnu', text: 'Homologué par l’AEFE (élémentaire) et le CNED (secondaire)' },
  { title: "Un lycée de l'excellence", text: '100% de réussite au Baccalauréat et au Diplôme national du Brevet (DNB)' },
  { title: 'Un lycée multiculturel', text: '12 nationalités présentes et une éducation plurilingue exigeante' },
];

export const GALLERY = [
  { src: `${UP}/2023/04/danse_4-400x284.jpg`, alt: 'Danse' },
  { src: `${UP}/2023/04/futsal_3-400x284.jpg`, alt: 'Futsal' },
  { src: `${UP}/2023/04/lego_5-400x284.jpg`, alt: 'Atelier Lego' },
  { src: `${UP}/2023/04/navruz2023_4-400x284.jpg`, alt: 'Fête de Navruz 2023' },
];

export const HERO_IMAGE = `${UP}/2023/04/danse_4.jpg`;
export const AEFE_MAP = `${UP}/2025/12/carte_ecoles_aefe_2023.png`;
export const AEFE_LOGO = `${UP}/2015/11/AEFE-logo-établissement-partenaire.jpg`;
