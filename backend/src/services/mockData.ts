export const tourismData = [
  {
    id: 1,
    name: 'Candi Borobudur',
    description: 'Situs warisan dunia dengan panorama matahari terbit yang ikonik.',
    category: 'Wisata Alam & Sejarah',
    latitude: -7.6079,
    longitude: 110.2038,
    openingHours: '06:00 - 17:00',
    ticketPrice: 'Rp 50.000',
    rating: 4.9,
    image: '/images/borobudur.jpg'
  },
  {
    id: 2,
    name: 'Punthuk Setumbu',
    description: 'Bukit sunrise yang populer untuk melihat panorama Borobudur.',
    category: 'Wisata Alam',
    latitude: -7.6594,
    longitude: 110.2106,
    openingHours: '04:00 - 18:00',
    ticketPrice: 'Rp 40.000',
    rating: 4.7,
    image: '/images/punthuk-setumbu.jpg'
  }
];

export const culinaryData = [
  {
    id: 1,
    name: 'Getuk Trio',
    description: 'Getuk tradisional Magelang dengan lapisan gula kelapa.',
    priceRange: 'Rp 10.000 - Rp 20.000',
    rating: 4.8,
    latitude: -7.4725,
    longitude: 110.2170,
    image: '/images/getuk-trio.jpg'
  },
  {
    id: 2,
    name: 'Kupat Tahu Magelang',
    description: 'Kupat tahu khas Magelang dengan bumbu kacang gurih.',
    priceRange: 'Rp 15.000 - Rp 25.000',
    rating: 4.6,
    latitude: -7.4812,
    longitude: 110.2229,
    image: '/images/kupat-tahu.jpg'
  }
];

export const cultureData = [
  {
    id: 1,
    title: 'Sejarah Magelang',
    content: 'Magelang berkembang sejak era Majapahit dan menjadi pusat budaya Jawa tengah.',
    category: 'Sejarah'
  },
  {
    id: 2,
    title: 'Festival Seni',
    content: 'Pertunjukan tari tradisional, gamelan, dan kerajinan lokal di pusat kota.',
    category: 'Budaya'
  }
];

export const eventData = [
  {
    id: 1,
    title: 'UMKM Expo Magelang',
    date: '2026-08-20',
    location: 'Alun-alun Magelang',
    description: 'Pameran produk UMKM dan kuliner khas Magelang.',
    image: '/images/umkm-expo.jpg'
  },
  {
    id: 2,
    title: 'Car Free Day Magelang',
    date: '2026-09-05',
    location: 'Jalan Pemuda',
    description: 'Kegiatan joging, sepeda, dan pertunjukan seni di jalan tanpa kendaraan.',
    image: '/images/car-free-day.jpg'
  }
];

export const articlesData = [
  {
    id: 1,
    title: 'Digital Heritage Magelang',
    content: 'Portal ini menampilkan sejarah, budaya, dan perkembangan smart city di Magelang.',
    category: 'Heritage'
  },
  {
    id: 2,
    title: 'Smart Tourism Guide',
    content: 'Rekomendasi perjalanan satu hari menggunakan AI Travel Assistant.',
    category: 'Tourism'
  }
];

export const aiAssistant = (timeAvailable: string | number) => {
  return {
    itinerary: [
      { time: '08:00', activity: 'Candi Borobudur' },
      { time: '11:00', activity: 'Punthuk Setumbu' },
      { time: '13:00', activity: 'Makan Getuk Trio' },
      { time: '15:00', activity: 'Nepal Van Java' }
    ],
    note: `Rekomendasi perjalanan untuk ${timeAvailable} jam di Magelang dengan kombinasi heritage dan kuliner.`
  };
};
