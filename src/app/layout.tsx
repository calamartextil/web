import type { Metadata } from 'next';
import { DM_Serif_Display, Outfit } from 'next/font/google';
import './grid.css';
import './globals.css';
import NavbarContainer from '@/app/components/Navbar/NavbarContainer';
import Footer from '@/app/components/Footer';
import { CartContextProvider } from '@/app/contexts/CartContext';
import WspIcon from '@/app/components/WspIcon';


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
  title: {
    template: '%s | Calamar Textil',
    default: 'Calamar Textil',
  },
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
        <NavbarContainer />
        {children}
        <Footer />
        </CartContextProvider>
        <WspIcon />
      </body>
    </html>
  );
}
