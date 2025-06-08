import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';
import { Product } from '@my-store/data';

export  interface ProductsState {
  items: Product[];
  loading: boolean;
  error: string | null;
  selectedCategory: string;
  searchQuery: string;
  sortBy: string;
}

const initialState: ProductsState = {
  items: [],
  loading: false,
  error: null,
  selectedCategory: 'all',
  searchQuery: '',
  sortBy: 'featured',
};

// Async thunks for API calls
export const fetchProducts = createAsyncThunk<Product[], { category?: string; search?: string }>(
  'products/fetchProducts',
  async ({ category, search } = {}) => {
    const params = new URLSearchParams();
    if (category && category !== 'all') params.append('category', category);
    if (search) params.append('search', search);

    const response = await fetch(`/api/products?${params}`);
    if (!response.ok) throw new Error('Failed to fetch products');

    return (await response.json()) as Product[]; // Type assertion اضافه شد
  }
);

export const fetchProductById = createAsyncThunk<Product, string>(
  'products/fetchProductById',
  async (id) => {
    const response = await fetch(`/api/products/${id}`);
    if (!response.ok) throw new Error('Product not found');

    return (await response.json()) as Product;
  }
);

export const updateProduct = createAsyncThunk<Product, { id: string; data: Partial<Product> }>(
  'products/updateProduct',
  async ({ id, data }) => {
    const response = await fetch(`/api/products/${id}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data),
    });

    if (!response.ok) throw new Error('Failed to update product');
    return (await response.json()) as Product;
  }
);

export const deleteProduct = createAsyncThunk<string, string>(
  'products/deleteProduct',
  async (id) => {
    const response = await fetch(`/api/products/${id}`, {
      method: 'DELETE',
    });

    if (!response.ok) throw new Error('Failed to delete product');
    return id;
  }
);

const productsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    setSelectedCategory: (state, action: PayloadAction<string>) => {
      state.selectedCategory = action.payload;
    },
    setSearchQuery: (state, action: PayloadAction<string>) => {
      state.searchQuery = action.payload;
    },
    setSortBy: (state, action: PayloadAction<string>) => {
      state.sortBy = action.payload;
    },
  },
  extraReducers: (builder) => {
    // Handle hydration
    builder.addCase('HYDRATE', (state, action: any) => {
      // Update state with hydrated data
      if (action.payload?.products) {
        return {
          ...state,
          ...action.payload.products,
        };
      }
      return state;
    });

    // Fetch products
    builder
      .addCase(fetchProducts.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.loading = false;
        state.items = action.payload;
      })
      .addCase(fetchProducts.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || 'Failed to fetch products';
      });

    // Update product
    builder
      .addCase(updateProduct.fulfilled, (state, action) => {
        const index = state.items.findIndex(p => p.id === action.payload.id);
        if (index !== -1) {
          state.items[index] = action.payload;
        }
      });

    // Delete product
    builder
      .addCase(deleteProduct.fulfilled, (state, action) => {
        state.items = state.items.filter(p => p.id !== action.payload);
      });
  },
});

export const { setSelectedCategory, setSearchQuery, setSortBy } = productsSlice.actions;
export const productsReducer = productsSlice.reducer;
