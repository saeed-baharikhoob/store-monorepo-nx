'use client';

import { useEffect, useMemo, useRef } from 'react';
import { Header, ProductCard, Cart } from '@my-store/ui';
import { Search, SlidersHorizontal } from 'lucide-react';
import {
  useAppDispatch,
  useAppSelector,
  fetchProducts,
  setSelectedCategory,
  setSearchQuery,
  setSortBy,
  addToCart,
  removeFromCart,
  updateQuantity,
  closeCart,
  openCart,
  selectCartItems,
  selectCartItemsCount,
  showToast,
} from '@my-store/store';
import { categories, Product } from '@my-store/data';

interface HomeClientProps {
  initialProducts: Product[];
  initialError: string | null;
}

export default function HomeClient({ initialProducts, initialError }: HomeClientProps) {
  const dispatch = useAppDispatch();

  // Redux state
  const { items: products, loading, selectedCategory, searchQuery, sortBy } = useAppSelector(state => state.products);
  const { isOpen: isCartOpen } = useAppSelector(state => state.cart);
  const cartItems = useAppSelector(selectCartItems);
  const cartItemsCount = useAppSelector(selectCartItemsCount);

  // Track if we've initialized
  const isInitialized = useRef(false);

  // Hydrate store with initial products from server - only once
  useEffect(() => {
    if (!isInitialized.current && initialProducts.length > 0) {
      isInitialized.current = true;
      dispatch({
        type: 'HYDRATE',
        payload: {
          products: {
            items: initialProducts,
            loading: false,
            error: initialError,
            selectedCategory: 'all',
            searchQuery: '',
            sortBy: 'featured',
          }
        }
      });
    }
  }, []);
  // Fetch products when filters change (client-side)
  useEffect(() => {
    // Skip if not initialized or no filters
    if (!isInitialized.current) return;


    // Use Redux async thunk to fetch from API
    dispatch(fetchProducts({ category: selectedCategory, search: searchQuery }));
  }, [dispatch, selectedCategory, searchQuery]);

  // Sort products (client-side)
  const sortedProducts = useMemo(() => {
    const sorted = [...products];
    switch (sortBy) {
      case 'price-low':
        return sorted.sort((a, b) => a.price - b.price);
      case 'price-high':
        return sorted.sort((a, b) => b.price - a.price);
      case 'rating':
        return sorted.sort((a, b) => b.rating - a.rating);
      default:
        return sorted;
    }
  }, [products, sortBy]);

  const handleAddToCart = (productId: string) => {
    const product = products.find(p => p.id === productId);
    if (!product) return;

    dispatch(addToCart({
      id: product.id,
      title: product.title,
      price: product.price,
      image: product.image,
    }));

    dispatch(showToast({
      message: `${product.title} added to cart!`,
      type: 'success'
    }));
  };

  const handleUpdateQuantity = (productId: string, quantity: number) => {
    dispatch(updateQuantity({ id: productId, quantity }));
  };

  const handleRemoveItem = (productId: string) => {
    const item = cartItems.find(item => item.id === productId);
    dispatch(removeFromCart(productId));

    if (item) {
      dispatch(showToast({
        message: `${item.title} removed from cart`,
        type: 'info'
      }));
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header
        cartItemsCount={cartItemsCount}
        onCartClick={() => dispatch(openCart())}
      />

      <Cart
        isOpen={isCartOpen}
        items={cartItems}
        onClose={() => dispatch(closeCart())}
        onUpdateQuantity={handleUpdateQuantity}
        onRemoveItem={handleRemoveItem}
      />

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center">
            <h1 className="text-6xl font-bold mb-6">Welcome to TechStore</h1>
            <p className="text-2xl mb-12 text-blue-100">Discover the latest tech at unbeatable prices</p>
            <div className="max-w-3xl mx-auto relative">
              <input
                type="text"
                placeholder="Search for products..."
                value={searchQuery}
                onChange={(e) => dispatch(setSearchQuery(e.target.value))}
                className="w-full px-8 py-5 rounded-full text-gray-800 pl-16 text-lg focus:outline-none focus:ring-4 focus:ring-white/30 shadow-lg"
              />
              <Search className="absolute left-6 top-5 w-7 h-7 text-gray-400" />
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <div className="max-w-[1600px] mx-auto px-6 py-12">
        <div className="flex flex-col lg:flex-row gap-12">
          {/* Sidebar */}
          <aside className="lg:w-80 xl:w-96">
            <div className="bg-white rounded-xl shadow-lg p-8 sticky top-24">
              <h3 className="font-semibold text-xl mb-6 flex items-center gap-3">
                <SlidersHorizontal className="w-6 h-6 text-blue-600" />
                Filters
              </h3>

              {/* Categories */}
              <div className="mb-8">
                <h4 className="font-semibold text-gray-700 mb-4">Categories</h4>
                <div className="space-y-3">
                  {categories.map(category => (
                    <label key={category.value} className="flex items-center gap-3 cursor-pointer hover:text-blue-600 transition-colors">
                      <input
                        type="radio"
                        name="category"
                        value={category.value}
                        checked={selectedCategory === category.value}
                        onChange={(e) => dispatch(setSelectedCategory(e.target.value))}
                        className="w-4 h-4 text-blue-600 focus:ring-blue-500"
                      />
                      <span className="text-gray-700 text-base">{category.name}</span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Sort */}
              <div>
                <h4 className="font-semibold text-gray-700 mb-4">Sort By</h4>
                <select
                  value={sortBy}
                  onChange={(e) => dispatch(setSortBy(e.target.value))}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500 text-base"
                >
                  <option value="featured">Featured</option>
                  <option value="price-low">Price: Low to High</option>
                  <option value="price-high">Price: High to Low</option>
                  <option value="rating">Highest Rated</option>
                </select>
              </div>
            </div>
          </aside>

          {/* Products Grid */}
          <main className="flex-1">
            <div className="flex justify-between items-center mb-8">
              <h2 className="text-3xl font-bold text-gray-800">
                {selectedCategory === 'all' ? 'All Products' : selectedCategory}
              </h2>
              <p className="text-gray-600 text-lg">
                {sortedProducts.length} products found
              </p>
            </div>

            {loading ? (
              <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-6">
                {[...Array(8)].map((_, i) => (
                  <div key={i} className="bg-white rounded-2xl shadow-sm h-96 animate-pulse">
                    <div className="h-64 bg-gray-200 rounded-t-2xl"></div>
                    <div className="p-6">
                      <div className="h-4 bg-gray-200 rounded mb-2"></div>
                      <div className="h-4 bg-gray-200 rounded w-2/3"></div>
                    </div>
                  </div>
                ))}
              </div>
            ) : sortedProducts.length === 0 ? (
              <div className="text-center py-24 bg-white rounded-xl shadow-sm">
                <Search className="w-20 h-20 text-gray-300 mx-auto mb-4" />
                <p className="text-gray-500 text-xl">No products found matching your criteria.</p>
                <p className="text-gray-400 mt-2">Try adjusting your filters or search query.</p>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-6">
                {sortedProducts.map((product) => (
                  <ProductCard
                    key={product.id}
                    {...product}
                    onAddToCart={handleAddToCart}
                  />
                ))}
              </div>
            )}
          </main>
        </div>
      </div>
    </div>
  );
}
