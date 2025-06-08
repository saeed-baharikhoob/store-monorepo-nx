import { NextResponse } from 'next/server';
import { products, getProductsByCategory, searchProducts } from '@my-store/data';

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const category = searchParams.get('category');
  const search = searchParams.get('search');

  let filteredProducts = products;

  if (category && category !== 'all') {
    filteredProducts = getProductsByCategory(category);
  }

  if (search) {
    filteredProducts = searchProducts(search);
  }

  return NextResponse.json(filteredProducts);
}
