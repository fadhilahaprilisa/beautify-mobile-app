export type MUA = {
  id: string;
  name: string;
  location: string;
  category: string[];
  rating: number;
  reviews: number;
  price: number;
  priceLabel: string;
  image: string;
  description: string;
};

export const MUA_DATA: MUA[] = [
  {
    id: 'alya',
    name: 'Alya Makeup Artist',
    location: 'Jakarta Selatan',
    category: ['Makeup', 'Bridal'],
    rating: 4.9,
    reviews: 128,
    price: 350000,
    priceLabel: 'Rp350.000',
    image:
      'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=800',
    description:
      'Professional makeup artist yang siap membantu kamu tampil lebih cantik dan percaya diri untuk berbagai kebutuhan acara.',
  },

  {
    id: 'nadia',
    name: 'Nadia Beauty',
    location: 'Tangerang',
    category: ['Makeup', 'Party'],
    rating: 4.8,
    reviews: 96,
    price: 300000,
    priceLabel: 'Rp300.000',
    image:
      'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=800',
    description:
      'Makeup artist dengan pengalaman untuk berbagai acara seperti party, graduation, engagement, dan acara spesial lainnya.',
  },

  {
    id: 'citra',
    name: 'Citra Beauty Studio',
    location: 'Jakarta Barat',
    category: ['Makeup', 'Hair'],
    rating: 4.7,
    reviews: 84,
    price: 275000,
    priceLabel: 'Rp275.000',
    image:
      'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=800',
    description:
      'Beauty artist yang menyediakan layanan makeup dan hair styling untuk berbagai kebutuhan acara.',
  },

  {
    id: 'salsa',
    name: 'Salsa Bridal',
    location: 'Jakarta Timur',
    category: ['Bridal', 'Makeup'],
    rating: 4.9,
    reviews: 112,
    price: 500000,
    priceLabel: 'Rp500.000',
    image:
      'https://images.unsplash.com/photo-1526045478516-99145907023c?w=800',
    description:
      'Spesialis bridal makeup untuk membantu kamu tampil elegan dan memukau di hari spesial.',
  },

  {
    id: 'mira',
    name: 'Mira Nail & Beauty',
    location: 'Tangerang Selatan',
    category: ['Nails', 'Makeup'],
    rating: 4.6,
    reviews: 71,
    price: 200000,
    priceLabel: 'Rp200.000',
    image:
      'https://images.unsplash.com/photo-1604654894610-df63bc536371?w=800',
    description:
      'Beauty artist yang menyediakan layanan nail art dan makeup untuk berbagai acara.',
  },

  {
    id: 'Dilah',
    name: 'Dilah Glam',
    location: 'Depok',
    category: ['Makeup', 'Party'],
    rating: 4.8,
    reviews: 103,
    price: 325000,
    priceLabel: 'Rp325.000',
    image:
      'https://images.unsplash.com/photo-1485230895905-ec40ba36b9bc?w=800',
    description:
      'Makeup artist untuk party, graduation, photoshoot, dan berbagai acara spesial lainnya.',
  },
];