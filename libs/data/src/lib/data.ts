export interface Product {
  id: string;
  title: string;
  price: number;
  image: string;
  description: string;
  category: string;
  rating: number;
  stock: number;
  status: 'Active' | 'Low Stock' | 'Out of Stock';
}

export const products: Product[] = [
  // Laptops
  {
    id: '1',
    title: 'MacBook Pro 16" M3 Pro',
    price: 2499.99,
    image: 'https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=800&q=80',
    description: 'Powerful laptop with M3 Pro chip, 18GB RAM, 512GB SSD',
    category: 'Laptops',
    rating: 4.8,
    stock: 15,
    status: 'Active',
  },
  {
    id: '2',
    title: 'Dell XPS 15',
    price: 1899.99,
    image: 'https://images.unsplash.com/photo-1593642632823-8f785ba67e45?w=800&q=80',
    description: 'Intel Core i7, 16GB RAM, NVIDIA RTX 3050 Ti',
    category: 'Laptops',
    rating: 4.6,
    stock: 23,
    status: 'Active',
  },
  {
    id: '3',
    title: 'ASUS ROG Strix G15',
    price: 1599.99,
    image: 'https://images.unsplash.com/photo-1603302576837-37561b2e2302?w=800&q=80',
    description: 'Gaming laptop with RTX 4060, AMD Ryzen 9',
    category: 'Laptops',
    rating: 4.7,
    stock: 8,
    status: 'Low Stock',
  },

  // Smartphones
  {
    id: '4',
    title: 'iPhone 15 Pro Max',
    price: 1199.99,
    image: 'https://images.unsplash.com/photo-1696446701796-da61225697cc?w=800&q=80',
    description: '256GB, Titanium, A17 Pro chip, 48MP camera',
    category: 'Smartphones',
    rating: 4.9,
    stock: 12,
    status: 'Active',
  },
  {
    id: '5',
    title: 'Samsung Galaxy S24 Ultra',
    price: 1099.99,
    image: 'https://images.unsplash.com/photo-1610945415295-d9bbf067e59c?w=800&q=80',
    description: '512GB, S Pen, 200MP camera, AI features',
    category: 'Smartphones',
    rating: 4.8,
    stock: 0,
    status: 'Out of Stock',
  },
  {
    id: '6',
    title: 'Google Pixel 8 Pro',
    price: 899.99,
    image: 'https://images.unsplash.com/photo-1598327105666-5b89351aff97?w=800&q=80',
    description: '128GB, Tensor G3, Best-in-class AI camera',
    category: 'Smartphones',
    rating: 4.7,
    stock: 18,
    status: 'Active',
  },

  // Headphones
  {
    id: '7',
    title: 'Sony WH-1000XM5',
    price: 399.99,
    image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=800&q=80',
    description: 'Industry-leading noise cancellation, 30hr battery',
    category: 'Audio',
    rating: 4.9,
    stock: 25,
    status: 'Active',
  },
  {
    id: '8',
    title: 'Apple AirPods Pro 2',
    price: 249.99,
    image: 'https://images.unsplash.com/photo-1588423771073-b8903fbb85b5?w=800&q=80',
    description: 'Active noise cancellation, Spatial Audio, USB-C',
    category: 'Audio',
    rating: 4.8,
    stock: 5,
    status: 'Low Stock',
  },
  {
    id: '9',
    title: 'Bose QuietComfort Ultra',
    price: 429.99,
    image: 'https://images.unsplash.com/photo-1546435770-a3e426bf472b?w=800&q=80',
    description: 'Immersive audio, world-class noise cancellation',
    category: 'Audio',
    rating: 4.7,
    stock: 14,
    status: 'Active',
  },

  // Smartwatches
  {
    id: '10',
    title: 'Apple Watch Series 9',
    price: 399.99,
    image: 'https://images.unsplash.com/photo-1546868871-7041f2a55e12?w=800&q=80',
    description: 'GPS, Always-On Retina display, S9 chip',
    category: 'Wearables',
    rating: 4.8,
    stock: 0,
    status: 'Out of Stock',
  },
  {
    id: '11',
    title: 'Samsung Galaxy Watch 6',
    price: 299.99,
    image: 'https://images.unsplash.com/photo-1579586337278-3befd40fd17a?w=800&q=80',
    description: 'Body composition analysis, sleep tracking',
    category: 'Wearables',
    rating: 4.6,
    stock: 22,
    status: 'Active',
  },
  {
    id: '12',
    title: 'Garmin Fenix 7',
    price: 649.99,
    image: 'https://images.unsplash.com/photo-1557438159-51eec7a6c9e8?w=800&q=80',
    description: 'Solar charging, advanced fitness metrics',
    category: 'Wearables',
    rating: 4.9,
    stock: 7,
    status: 'Low Stock',
  },

  // Tablets
  {
    id: '13',
    title: 'iPad Pro 12.9" M2',
    price: 1099.99,
    image: 'https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?w=800&q=80',
    description: '128GB, Liquid Retina XDR display, M2 chip',
    category: 'Tablets',
    rating: 4.9,
    stock: 11,
    status: 'Active',
  },
  {
    id: '14',
    title: 'Samsung Galaxy Tab S9 Ultra',
    price: 999.99,
    image: 'https://images.unsplash.com/photo-1561154464-82e9adf32764?w=800&q=80',
    description: '14.6" AMOLED, S Pen included, 12GB RAM',
    category: 'Tablets',
    rating: 4.7,
    stock: 16,
    status: 'Active',
  },
  {
    id: '15',
    title: 'Microsoft Surface Pro 9',
    price: 899.99,
    image: 'https://images.unsplash.com/photo-1525547719571-a2d4ac8945e2?w=800&q=80',
    description: '2-in-1 design, Intel Core i5, Windows 11',
    category: 'Tablets',
    rating: 4.6,
    stock: 9,
    status: 'Low Stock',
  },

  // Cameras
  {
    id: '16',
    title: 'Sony α7 IV',
    price: 2498.99,
    image: 'https://images.unsplash.com/photo-1516035069371-29a1b244cc32?w=800&q=80',
    description: '33MP full-frame, 4K 60p video, 10fps burst',
    category: 'Cameras',
    rating: 4.9,
    stock: 6,
    status: 'Low Stock',
  },
  {
    id: '17',
    title: 'Canon EOS R6 Mark II',
    price: 2399.99,
    image: 'https://images.unsplash.com/photo-1502920917128-1aa500764cbd?w=800&q=80',
    description: '24.2MP, 40fps burst, 6K oversampled 4K video',
    category: 'Cameras',
    rating: 4.8,
    stock: 13,
    status: 'Active',
  },
  {
    id: '18',
    title: 'DJI Pocket 2',
    price: 349.99,
    image: 'https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?w=800&q=80',
    description: 'Pocket-sized gimbal camera, 4K 60fps, 64MP photos',
    category: 'Cameras',
    rating: 4.7,
    stock: 30,
    status: 'Active',
  },
];

export const categories = [
  { name: 'All', value: 'all' },
  { name: 'Laptops', value: 'Laptops' },
  { name: 'Smartphones', value: 'Smartphones' },
  { name: 'Audio', value: 'Audio' },
  { name: 'Wearables', value: 'Wearables' },
  { name: 'Tablets', value: 'Tablets' },
  { name: 'Cameras', value: 'Cameras' },
];

// Helper functions
export function getProductById(id: string): Product | undefined {
  return products.find(p => p.id === id);
}

export function getProductsByCategory(category: string): Product[] {
  if (category === 'all') return products;
  return products.filter(p => p.category === category);
}

export function searchProducts(query: string): Product[] {
  const lowerQuery = query.toLowerCase();
  return products.filter(p =>
    p.title.toLowerCase().includes(lowerQuery) ||
    p.description.toLowerCase().includes(lowerQuery)
  );
}
