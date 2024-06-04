'use client';
import { useState, useEffect } from 'react';

import { useCartContext } from '@/app/contexts/CartContext';
import Image from 'next/image';
import Link from 'next/link';

interface TelaGraphProps {
  sku: string;
}

export default function TelaGraph({ sku }: TelaGraphProps) {
  const { cart, telaAvailable, removeEstampaBySku} = useCartContext();
  const [isScroll, setIsScroll] = useState(false);

  // useEffect(() => { //Use this only if need scroll animation - deprecated
  //   const handleScroll = () => {
  //     setIsScroll(window.scrollY > 170);
  //   };
  //   window.addEventListener('scroll', handleScroll);
  //   return () => window.removeEventListener('scroll', handleScroll);
  // }, []);

  const availability = () => {
    const rest = telaAvailable(sku);
    return rest.telaTotal - rest.estampasTotal;
  };

  const generateGraph = () => {
    return cart
      .filter((cartItem) => cartItem.tela.sku === sku)
      .map((cartItem) => {
        return cartItem?.estampas?.map((estampa, index) => (
          <div
            key={index}
            className='flex items-center justify-center gap-2 mr-3'
          >
            <Image
              className='rounded-2xl'
              src={estampa.estampa.image}
              alt={estampa.estampa.title}
              width={isScroll ? 80 : 80}
              height={isScroll ? 80 : 80}
            />
            <div>
              <p className='text-sm'>{estampa.estampa.title}</p>
              <p className='text-sm'>Escala {estampa.scale}</p>
              <p className='text-sm'>{estampa.mts} mts</p>
              <button
                className='text-sm text-white'
                onClick={() =>
                  removeEstampaBySku(sku, estampa.estampa.sku, estampa.scale)
                } >Quitar</button>
            </div>
          </div>
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
        {telaAvailable(sku).available > 0 ? (
          <p className='text-sm text-white font-semibold'>
            Restan: {availability()} mts
          </p>
        ) : (
          <p className='text-sm text-white font-semibold'>
            <Link href='/pedido'>Ver pedido</Link>
          </p>
        )}
      </div>
      {telaAvailable(sku).available !== telaAvailable(sku).telaTotal ? (
        generateGraph()
      ) : (
        <p className='text-sm text-white'>Todavía no hay estampas elegidas</p>
      )}
    </div>
  );
}
