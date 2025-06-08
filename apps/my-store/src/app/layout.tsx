import './global.css';
import { StoreProvider } from '@my-store/store';
import ClientWrapper from '../componets/client-wrapper';

export const metadata = {
  title: 'TechStore',
  description: 'Your favorite tech store',
};

export default function RootLayout({
                                     children,
                                   }: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
    <body>
    <StoreProvider>
      <ClientWrapper>{children}</ClientWrapper>
    </StoreProvider>
    </body>
    </html>
  );
}
