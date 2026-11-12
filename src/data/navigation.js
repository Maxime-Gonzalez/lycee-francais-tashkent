import { ROUTES as R } from '../routes.js';

export const NAVIGATION = [
  {
    label: 'Présentation', to: R.presentation,
    children: [
      { label: 'Mot de la Directrice', to: R.directorWord },
      { label: 'Organisation', to: R.organisation },
      { label: 'Equipe', to: R.team },
      { label: 'Règlement', to: R.rules },
      { label: 'Postes vacants', to: R.vacancies },
    ],
  },
  {
    label: 'Enseignement', to: R.teaching,
    children: [
      { label: 'Principes', to: R.principles },
      { label: 'Maternelle', to: R.nursery },
      { label: 'Elémentaire', to: R.primary },
      { label: 'Collège', to: R.middle },
      { label: 'Lycée', to: R.high },
    ],
  },
  {
    label: 'Infos pratiques', to: R.practical,
    children: [
      { label: 'Association des parents d’élèves (AFET)', to: R.parents },
      { label: 'LFT entité Ouzbèke', to: R.uzbekEntity },
      { label: 'Règlement financier', to: R.fees },
      { label: 'Calendrier scolaire', to: R.calendar },
      { label: 'Coordonnées', to: R.contact },
      { label: 'Inscription', to: R.enrolment },
      { label: 'Horaires', to: R.hours },
      { label: 'Fournitures scolaires', to: R.supplies },
      { label: 'Liens utiles', to: R.links },
    ],
  },
  { label: 'Cantine', to: R.canteen },
  {
    label: 'Vie scolaire', to: R.schoolLife,
    children: [
      { label: 'Activités périscolaires', to: R.afterSchool },
      { label: 'Sport', to: R.sport },
      { label: 'Bibliothèque', to: R.library },
      { label: 'Fêtes, sorties et évènements', to: R.events },
    ],
  },
  {
    label: 'Galerie des apprentissages', to: R.gallery,
    children: [
      { label: 'Padlet de français du lycée', to: R.padletFrench },
      { label: 'Padlet de l’Histoire Géographie des 6e', to: R.padletHistory },
    ],
  },
];
