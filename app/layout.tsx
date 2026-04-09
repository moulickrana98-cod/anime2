import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Anime Treasury — Official Anime Merchandise',
  description: 'Your ultimate destination for licensed anime merchandise. Keychains, figures, collectibles and more. Curated by Moulick Rana.',
  keywords: 'anime merchandise, naruto keychain, anime figures, official licensed, anime treasury',
  openGraph: {
    title: 'Anime Treasury',
    description: 'Official anime merchandise — keychains, figures, collectibles',
    images: ['/images/logo.png'],
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
