'use client';

import { useCartContext } from '@/app/contexts/CartContext';
import Image from 'next/image';
import Link from 'next/link';

interface TelaGraphProps {
  sku: string;
}

export default function TelaGraph({ sku }: TelaGraphProps) {
  const { cart, telaAvailable } = useCartContext();

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
            width={100}
            height={100}
          />
        ));
      });
  };

  return (
    <div className='flex items-center justify-center w-full relative min-h-5'>
      <div className='absolute top-0 right-0'>
        {availability() > 0 && (
          <p className='text-sm'>Restan: {availability()} mts</p>
        )}
        {availability() <= 0 && (
          <p className='text-sm'>
            <Link href='/pedido'>Ver pedido</Link>
          </p>
        )}
      </div>
      {generateGraph()}
    </div>
  );
}
