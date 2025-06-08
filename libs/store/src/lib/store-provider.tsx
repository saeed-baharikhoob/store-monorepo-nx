'use client';

import { useRef } from 'react';
import { Provider } from 'react-redux';
import { makeStore, AppStore } from './store';

interface StoreProviderProps {
  children: React.ReactNode;
  initialState?: any;
}

export default function StoreProvider({
                                        children,
                                        initialState,
                                      }: StoreProviderProps) {
  const storeRef = useRef<AppStore | null>(null);

  if (!storeRef.current) {
    // Create the store instance the first time this renders
    storeRef.current = makeStore();

    // If we have initial state (from server), dispatch it to hydrate the store
    if (initialState) {
      storeRef.current.dispatch({
        type: 'HYDRATE',
        payload: initialState,
      });
    }
  }

  return <Provider store={storeRef.current}>{children}</Provider>;
}
