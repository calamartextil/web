'use client';

import { useCartContext } from '@/app/contexts/CartContext';
import Image from 'next/image';
import Link from 'next/link';

interface TelaGraphProps {
  sku: string;
}

export default function TelaGraph({ sku }: TelaGraphProps) {
  const { cart, telaAvailable, removeEstampaBySku } = useCartContext();

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
            <div className='hidden lg:block'>
              <Image
                className='rounded-2xl'
                src={`${process.env.NEXT_PUBLIC_IMAGES_URL}/estampas/${estampa.estampa.image}`}
                alt={estampa.estampa.title}
                width={70}
                height={70}
                placeholder='blur'
                blurDataURL='/images/placeholder.jpg'
              />
            </div>

            <div className='flex lg:flex-col justify-center items-center lg:items-start gap-2 lg:gap-0'>
              <p className='text-sm font-medium leading-none mb-1'>
                {estampa.estampa.title}
              </p>
              <p className='text-xs leading-none mb-1'>
                Escala {estampa.scale}
              </p>
              <p className='text-xs leading-none mb-1'>{estampa.mts} mts</p>
              <button
                className='text-sm text-white leading-0 pb-1 lg:pb-0'
                onClick={() =>
                  removeEstampaBySku(sku, estampa.estampa.sku, estampa.scale)
                }
              >
                Quitar
              </button>
            </div>
          </div>
        ));
      });
  };

  return (
    <div
      className={`flex flex-wrap items-center justify-start lg:justify-center w-full relative gap-2 min-h-4
      } gap-y-1 lg:gap-y-5 transition-all pt-8 lg:pt-0`}
    >
      <div className='absolute top-0 right-0'>
        {telaAvailable(sku).available > 0 ? (
          <p className='text-sm text-white font-semibold'>
            Restan: {availability()} mts
          </p>
        ) : (
          <div className='flex flex-row-reverse lg:flex-col items-end gap-3 lg:gap-2'>
            <p className='text-sm text-white font-semibold'>
              <Link href='/pedido'>Ver pedido</Link>
            </p>
            <p className='text-sm text-white font-semibold'>
              <Link href='/telas'>Elegir otra tela</Link>
            </p>
          </div>
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
