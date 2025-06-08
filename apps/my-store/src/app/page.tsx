import HomeClient from '../componets/home-client';
import { Product } from '@my-store/data';

// Server Component - fetch data on the server
export default async function HomePage() {
  let initialProducts: Product[] = [];
  let error: string | null = null;

  try {



    const response = await fetch(`${process.env.NEXT_PUBLIC_SITE_URL}/api/products`, {
      cache: 'no-store',
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    initialProducts = await response.json();
    console.log('Fetched products:', initialProducts.length);
  } catch (err) {
    console.error('Failed to fetch products on server:', err);
    error = 'Failed to load products';
    // در production، اگر server-side fetch ناموفق بود، client-side load خواهد کرد
  }

  return <HomeClient initialProducts={initialProducts} initialError={error} />;
}
