'use client';

import { useAppSelector, useAppDispatch, hideToast } from '@my-store/store';
import { ToastContainer } from '@my-store/ui';

export default function ClientWrapper({
                                        children,
                                      }: {
  children: React.ReactNode;
}) {
  const dispatch = useAppDispatch();
  const toasts = useAppSelector(state => state.ui.toasts);

  return (
    <>
      {children}
      <ToastContainer
        toasts={toasts}
        onClose={(id) => dispatch(hideToast(id))}
      />
    </>
  );
}
