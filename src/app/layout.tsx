import type { Metadata } from 'next';
import { DM_Serif_Display, Outfit } from 'next/font/google';
import './grid.css';
import './globals.css';
import Navbar from '@/app/components/Navbar/Navbar';
import Footer from '@/app/components/Footer';
import { CartContextProvider } from '@/app/contexts/CartContext';


const dmSerifDisplay = DM_Serif_Display({ 
  subsets: ['latin'],
  weight: ['400'],
  variable: '--font-display',
});

const outfit = Outfit({
  subsets: ['latin'],
  weight: ['200','400', '600', '700'],
  variable: '--font-outfit',
});

export const metadata: Metadata = {
  title: 'Calamar',
  description: 'Calamar Textil',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='es'>
      <body className={`${dmSerifDisplay.variable} ${outfit.variable} relative`}>
        <CartContextProvider>
        <Navbar />
        {children}
        <Footer />
        </CartContextProvider>
      </body>
    </html>
  );
}
