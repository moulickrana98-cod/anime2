export type Series = 'naruto' | 'one-piece' | 'mha' | 'other';

export interface Product {
  id: number;
  name: string;
  series: Series;
  seriesLabel: string;
  price: number;
  originalPrice?: number;
  description: string;
  details: string[];
  image: string;
  badge?: string;
  isNew?: boolean;
  isFeatured?: boolean;
}

export const products: Product[] = [
  {
    id: 1,
    name: 'Itachi Uchiha Chibi Keychain',
    series: 'naruto',
    seriesLabel: 'Naruto Shippuden',
    price: 349,
    originalPrice: 449,
    description:
      'Official Naruto Shippuden licensed 3D chibi figure keychain of Itachi Uchiha in his iconic Akatsuki robe. A must-have for every Naruto fan.',
    details: [
      'Official licensed merchandise',
      'High-detail 3D PVC figure',
      'Gold-tone metal keyring',
      'Black wrist strap included',
      'Clear blister packaging',
      'Ages 15+',
    ],
    image: '/images/product1.png',
    badge: 'Official',
    isFeatured: true,
  },
  {
    id: 2,
    name: 'Itachi Uchiha Chibi Keychain — Alt Pose',
    series: 'naruto',
    seriesLabel: 'Naruto Shippuden',
    price: 349,
    description:
      'Alternate pose variant of the fan-favourite Itachi chibi keychain. Features Sharingan red eyes, Konoha headband, and detailed cloud-pattern Akatsuki robe.',
    details: [
      'Official licensed merchandise',
      'Sharingan eye detail',
      'Konoha headband sculpt',
      'Akatsuki robe with cloud motif',
      'Gold-tone hardware',
      'Clear blister packaging',
    ],
    image: '/images/product2.png',
    badge: 'Official',
    isNew: true,
  },
  {
    id: 3,
    name: 'Dark Robe Chibi Keychain',
    series: 'other',
    seriesLabel: 'Anime Collection',
    price: 299,
    description:
      'Stylish chibi figure keychain in a dark robe with expressive red eyes and cloud motif details. Packaged in collectible clear case with vibrant anime artwork.',
    details: [
      'High-quality PVC figure',
      'Expressive red eye detail',
      'Cloud motif robe design',
      'Antique gold hardware',
      'Collectible packaging',
    ],
    image: '/images/product3.jpg',
  },
  {
    id: 4,
    name: 'Purple Scarf Chibi Keychain',
    series: 'other',
    seriesLabel: 'Anime Collection',
    price: 299,
    originalPrice: 349,
    description:
      'Stylish chibi figure keychain featuring a character in a purple outfit with a striking red scarf. Showcased from multiple angles in collectible clear packaging.',
    details: [
      'Multi-pose display angles',
      'Purple & red color scheme',
      'Premium PVC construction',
      'Gold-tone keyring & clasp',
      'Vibrant art card backing',
    ],
    image: '/images/product4.png',
    badge: 'Sale',
  },
  {
    id: 5,
    name: 'Itachi Chibi Keychain — Detail Edition',
    series: 'naruto',
    seriesLabel: 'Naruto Shippuden',
    price: 399,
    description:
      'Premium close-up detail edition showcasing the iconic Itachi Uchiha chibi keychain from every angle — Sharingan eyes, gold keyring, barcode label, and full package view.',
    details: [
      'Official licensed merchandise',
      'Four-angle photo showcase',
      'Premium PVC material',
      'Stamped Konoha logo strap',
      'Gold lobster clasp',
      'Full package included',
    ],
    image: '/images/product5.jpg',
    badge: 'Official',
    isFeatured: true,
  },
  {
    id: 6,
    name: 'Akatsuki Chibi Figure Keychain',
    series: 'naruto',
    seriesLabel: 'Naruto Shippuden',
    price: 329,
    description:
      'Chibi figure keychain in premium clear blister case with illustrated anime art background. Features intricate cloud robe detailing and signature gold-tone hardware.',
    details: [
      'Detailed cloud-robe sculpt',
      'Premium blister packaging',
      'Illustrated art card',
      'Gold-tone hardware set',
      'Wrist strap included',
    ],
    image: '/images/product6.jpg',
    isNew: true,
  },
];

export const seriesFilters = [
  { key: 'all', label: 'All' },
  { key: 'naruto', label: 'Naruto' },
  { key: 'other', label: 'Other Anime' },
] as const;
