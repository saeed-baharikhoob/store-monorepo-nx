import { NextResponse } from 'next/server';
import { products, getProductsByCategory, searchProducts, Product } from '@my-store/data';

// GET - Get all products
export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const category = searchParams.get('category');
  const search = searchParams.get('search');
  const status = searchParams.get('status');

  let filteredProducts = products;

  if (category && category !== 'all') {
    filteredProducts = getProductsByCategory(category);
  }

  if (search) {
    filteredProducts = searchProducts(search);
  }

  if (status && status !== 'all') {
    filteredProducts = filteredProducts.filter(p => p.status === status);
  }

  return NextResponse.json(filteredProducts);
}

// POST - Add new product
export async function POST(request: Request) {
  try {
    const body = await request.json();

    // In production, this would save to database
    const newProduct: Product = {
      id: Date.now().toString(),
      ...body,
      status: body.stock > 10 ? 'Active' : body.stock > 0 ? 'Low Stock' : 'Out of Stock'
    };

    return NextResponse.json(newProduct, { status: 201 });
  } catch (error) {
    return NextResponse.json(
      { error: 'Failed to create product' },
      { status: 400 }
    );
  }
}
