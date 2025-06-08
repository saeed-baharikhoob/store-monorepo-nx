import { NextResponse } from 'next/server';
import { getProductById } from '@my-store/data';

// GET - Get single product
export async function GET(
  request: Request,
  { params }: { params: { id: string } }
) {
  const product = getProductById(params.id);

  if (!product) {
    return NextResponse.json(
      { error: 'Product not found' },
      { status: 404 }
    );
  }

  return NextResponse.json(product);
}

// PUT - Update product
export async function PUT(
  request: Request,
  { params }: { params: { id: string } }
) {
  try {
    const body = await request.json();
    const product = getProductById(params.id);

    if (!product) {
      return NextResponse.json(
        { error: 'Product not found' },
        { status: 404 }
      );
    }

    // In production, this would update the database
    const updatedProduct = {
      ...product,
      ...body,
      id: params.id, // Ensure ID doesn't change
      status: body.stock > 10 ? 'Active' : body.stock > 0 ? 'Low Stock' : 'Out of Stock'
    };

    return NextResponse.json(updatedProduct);
  } catch (error) {
    return NextResponse.json(
      { error: 'Failed to update product' },
      { status: 400 }
    );
  }
}

// DELETE - Delete product
export async function DELETE(
  request: Request,
  { params }: { params: { id: string } }
) {
  const product = getProductById(params.id);

  if (!product) {
    return NextResponse.json(
      { error: 'Product not found' },
      { status: 404 }
    );
  }

  // In production, this would delete from database
  return NextResponse.json(
    { message: 'Product deleted successfully' },
    { status: 200 }
  );
}
