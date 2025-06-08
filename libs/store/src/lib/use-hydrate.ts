"use client"
import { useEffect, useRef } from 'react';
import { useAppDispatch } from './hooks';

export function useHydrate(initialState: any) {
  const dispatch = useAppDispatch();
  const hasHydrated = useRef(false);

  useEffect(() => {

    if (initialState && !hasHydrated.current) {
      hasHydrated.current = true;
      dispatch({
        type: 'HYDRATE',
        payload: initialState,
      });
    }
  }, []);
}
