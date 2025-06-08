import { configureStore } from '@reduxjs/toolkit';
import { productsReducer } from './slices/products.slice';
import { cartReducer } from './slices/cart.slice';
import { uiReducer } from './slices/ui.slice';
import { authReducer } from './slices/auth.slice';

export const makeStore = () => {
  return configureStore({
    reducer: {
      products: productsReducer,
      cart: cartReducer,
      ui: uiReducer,
      auth: authReducer,
    },
  });
};


export type AppStore = ReturnType<typeof makeStore>;
export type RootState = ReturnType<AppStore['getState']>;
export type AppDispatch = AppStore['dispatch'];
