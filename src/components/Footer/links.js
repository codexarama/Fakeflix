import { Facebook, Instagram, Twitter, YouTube } from '@mui/icons-material';

export const socials = [
  {
    url: 'https://www.facebook.com/netflixfrance',
    target: '_blank',
    label: 'Facebook',
    className: 'footer_socials-links',
    icon: <Facebook />,
  },
  {
    url: 'https://www.instagram.com/NetflixFR/',
    target: '_blank',
    label: 'Instagram',
    className: 'footer_socials-links',
    icon: <Instagram />,
  },
  {
    url: 'https://twitter.com/NetflixFR',
    target: '_blank',
    label: 'Twitter',
    className: 'footer_socials-links',
    icon: <Twitter />,
  },
  {
    url: 'https://www.youtube.com/user/netflixfrance',
    target: '_blank',
    label: 'Youtube',
    className: 'footer_socials-links',
    icon: <YouTube />,
  },
];

export const links = [
  'Audio et sous-titres',
  "Centre d'aide",
  'Presse',
  'Recrutement',
  'Confidentialité',
  'Préférences de cookies',
  'Nous contacter',
  'Audiodescription',
  'Cartes cadeaux',
  'Relations Investisseurs',
  "Conditions d'utilisation",
  'Mentions légales'
];

export const service = [
  {
    label: 'string',
    string: 'Code de service',
  },
  {
    label: 'number',
    number: '903-573',
  },
];

export const copyright = '© 1997-2022 Netflix, Inc.';
