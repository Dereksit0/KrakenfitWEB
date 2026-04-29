import type { Metadata } from 'next';
import { Bebas_Neue, Barlow } from 'next/font/google';
import './globals.css';

const bebasNeue = Bebas_Neue({
  weight: '400',
  subsets: ['latin'],
  variable: '--font-bebas-neue',
  display: 'swap',
});

const barlow = Barlow({
  weight: ['400', '500', '600', '700', '900'],
  subsets: ['latin'],
  variable: '--font-barlow',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Kraken Fitness — La mejor comunidad de Puebla',
  description:
    'Cross Training y HYROX Official Gym en Puebla, México. Comunidad real, coaching de élite y programación inteligente.',
  icons: {
    icon: [
      {
        url: '/faviconkraken.png?v=2',
        href: '/faviconkraken.png?v=2',
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="es"
      className={`${bebasNeue.variable} ${barlow.variable} scroll-smooth`}
    >
      <body className="bg-kraken-dark text-white antialiased">{children}</body>
    </html>
  );
}
