// Same URL architecture as the current WordPress site.
const BASE = '/lycee-francais-ouzbekistan';

export const LEGACY_ORIGIN = 'https://www.ecole-francaise-tachkent.com';

export const ROUTES = {
  home: '/',
  presentation: `${BASE}/presentation`,
  directorWord: `${BASE}/presentation/mot-de-directeur-sebastien-pinede`,
  organisation: `${BASE}/presentation/histoire-de-lycee`,
  team: `${BASE}/presentation/equipe`,
  rules: `${BASE}/presentation/reglement-interieur`,
  vacancies: `${BASE}/presentation/postes-vacants`,

  teaching: `${BASE}/enseignement`,
  principles: `${BASE}/enseignement/organisation`,
  nursery: `${BASE}/enseignement/maternelle`,
  primary: `${BASE}/enseignement/elementaire`,
  middle: `${BASE}/enseignement/college`,
  high: `${BASE}/enseignement/lycee`,

  practical: `${BASE}/infos-pratiques`,
  parents: '/association-des-parents-deleves-afet',
  uzbekEntity: '/lft-entite-ouzbeke',
  fees: '/reglement-financier',
  calendar: '/calendrier-scolaire',
  contact: `${BASE}/infos-pratiques/coordonnees`,
  enrolment: `${BASE}/infos-pratiques/inscription`,
  hours: `${BASE}/infos-pratiques/horaires`,
  supplies: '/fournitures-scolaires',
  links: `${BASE}/infos-pratiques/liens-utiles`,
  canteen: `${BASE}/infos-pratiques/cantine`,

  schoolLife: `${BASE}/vie-scolaire`,
  afterSchool: `${BASE}/vie-scolaire/activites-periscolaires`,
  sport: `${BASE}/vie-scolaire/sport`,
  library: `${BASE}/vie-scolaire/bibliotheque`,
  events: `${BASE}/vie-scolaire/sorties`,

  gallery: '/galerie-des-apprentissages',
  padletFrench: '/padlet-de-francais-du-lycee',
  padletHistory: '/padlet-de-lhistoire-geographie-des-6e',
  myClass: '/ecole-francaise-ouzbekistan/ma-classe',
  latestNews: '/dernieres-infos',
  legal: '/mentions-legales',
};
