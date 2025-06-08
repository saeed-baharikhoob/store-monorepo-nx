// Store
export { makeStore } from './lib/store';
export type { RootState, AppDispatch, AppStore } from './lib/store';

// Provider
export { default as StoreProvider } from './lib/store-provider';

// Hooks
export { useAppDispatch, useAppSelector, useAppStore } from './lib/hooks';
export { useHydrate } from './lib/use-hydrate';

// Products slice
export {
  fetchProducts,
  fetchProductById,
  updateProduct,
  deleteProduct,
  setSelectedCategory,
  setSearchQuery,
  setSortBy,
} from './lib/slices/products.slice';

// Cart slice
export {
  addToCart,
  removeFromCart,
  updateQuantity,
  clearCart,
  toggleCart,
  openCart,
  closeCart,
  selectCartItems,
  selectCartTotal,
  selectCartItemsCount,
} from './lib/slices/cart.slice';
export type { CartItem } from './lib/slices/cart.slice';

// UI slice
export {
  showToast,
  hideToast,
  clearToasts,
  openModal,
  closeModal,
  toggleSidebar,
  setSidebarOpen,
  setTheme,
  toggleTheme,
} from './lib/slices/ui.slice';

// Auth slice
export {
  login,
  logout,
  checkAuth,
  setUser,
  setToken,
  clearAuth,
} from './lib/slices/auth.slice';
