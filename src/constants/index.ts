// App Constants
export const ADMIN_EMAIL = process.env.EXPO_PUBLIC_ADMIN_EMAIL || 'lucdeguenon11@gmail.com';
export const WHATSAPP_NUMBER = process.env.EXPO_PUBLIC_WHATSAPP || '2290159609581';
export const GA_ID = process.env.EXPO_PUBLIC_GA_ID || 'G-J7REG00JJ';

export const SERVICES = [
  {
    id: 1,
    title: 'Site Web par IA',
    description: 'Sites vitrine créés avec l\'IA. Livraison express 2 à 5 jours.',
    icon: 'robot',
    price: 25000,
  },
  {
    id: 2,
    title: 'Plateforme Sur Mesure',
    description: 'Applications web complexes avec API et systèmes de paiement.',
    icon: 'code',
    price: 100000,
  },
  {
    id: 3,
    title: 'Marketing & SEO',
    description: 'Stratégie digitale pour maximiser votre visibilité en ligne.',
    icon: 'chart-line',
    price: 50000,
  },
];

export const PRICING = [
  {
    id: 1,
    name: 'Starter',
    price: 25000,
    currency: 'XOF',
    description: 'Site vitrine essentiel',
    features: [
      'Design moderne',
      'Responsive',
      'SEO basique',
      'Support email',
    ],
  },
  {
    id: 2,
    name: 'Pro',
    price: 50000,
    currency: 'XOF',
    description: 'Plateforme complète',
    featured: true,
    features: [
      'Toutes fonctionnalités Starter',
      'E-commerce',
      'Gestion utilisateurs',
      'Support 24/7',
    ],
  },
  {
    id: 3,
    name: 'Enterprise',
    price: 100000,
    currency: 'XOF',
    description: 'Solution sur mesure',
    features: [
      'Toutes fonctionnalités Pro',
      'API personnalisée',
      'Infrastructure Cloud',
      'Maintenance incluse',
    ],
  },
];
