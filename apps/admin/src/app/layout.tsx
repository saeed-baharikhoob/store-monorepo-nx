import './global.css';
import { StoreProvider } from '@my-store/store';
import ClientWrapper from '../components/client-wrapper';

export const metadata = {
  title: 'TechStore Admin',
  description: 'Admin Dashboard for TechStore',
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
