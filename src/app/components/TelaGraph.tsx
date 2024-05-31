'use client';
import { useState, useEffect } from 'react';

import { useCartContext } from '@/app/contexts/CartContext';
import Image from 'next/image';
import Link from 'next/link';

interface TelaGraphProps {
  sku: string;
}

export default function TelaGraph({ sku }: TelaGraphProps) {
  const { cart, telaAvailable } = useCartContext();
  const [isScroll, setIsScroll] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      console.log('scroll', window.scrollY);
      setIsScroll(window.scrollY > 170);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const availability = () => {
    const rest = telaAvailable(sku);
    return rest.telaTotal - rest.estampasTotal;
  };

  const generateGraph = () => {
    return cart
      .filter((cartItem) => cartItem.tela.sku === sku)
      .map((cartItem) => {
        return cartItem?.estampas?.map((estampa, index) => (
          <Image
            key={index}
            src={estampa.estampa.image}
            alt={estampa.estampa.title}
            width={isScroll ? 80 : 80}
            height={isScroll ? 80 : 80}
          />
        ));
      });
  };

  
  return (
    <div
      className={`flex flex-wrap items-center justify-center w-full relative gap-2 ${
        isScroll ? 'min-h-1' : 'min-h-4'
      } gap-y-5`}
    >
      <div className='absolute top-0 right-0'>
        {availability() > 0 && (
          <p className='text-sm text-white font-semibold'>
            Restan: {availability()} mts
          </p>
        )}
        {availability() <= 0 && (
          <p className='text-sm text-white font-semibold'>
            <Link href='/pedido'>Ver pedido</Link>
          </p>
        )}
      </div>
      {availability() !== telaAvailable(sku).telaTotal ? (
        generateGraph()
      ) : (
        <p className='text-sm text-white'>Todavía no hay estampas elegidas</p>
      )}
    </div>
  );
}
