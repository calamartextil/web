'use client';

import { useCartContext } from '@/app/contexts/CartContext';
import Image from 'next/image';
import Link from 'next/link';

import HorizontalScrollGraph from '@/app/components/Estampa/HorizontalScrollGraph';

interface TelaGraphProps {
  sku: string;
}

const EstampasGraphSlider = ({ sku }: TelaGraphProps) => {
  const { cart, telaAvailable, removeEstampaBySku } = useCartContext();

  const availability = () => {
    const rest = telaAvailable(sku);
    return rest.telaTotal - rest.estampasTotal;
  };

  const generateGraph = () => {
    return cart
      .filter((cartItem) => cartItem.tela.sku === sku)
      .map((cartItem) => {
        return cartItem?.estampas
          ?.map((estampa, index) => (
            <div key={index}>
              <div className='flex items-center justify-center gap-2 mr-3'>
                <div className=''>
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

                <div className='flex flex-col justify-center items-start gap-0'>
                  <p className='text-sm font-medium leading-none mb-1'>
                    {estampa.estampa.title}
                  </p>
                  <p className='text-xs leading-none mb-1'>
                    Escala {estampa.scale}
                  </p>
                  <p className='text-xs leading-none mb-1'>{estampa.mts} mts</p>
                  <button
                    className='text-sm text-white leading-0 pb-0'
                    onClick={() =>
                      removeEstampaBySku(
                        sku,
                        estampa.estampa.sku,
                        estampa.scale
                      )
                    }
                  >
                    Quitar
                  </button>
                </div>
              </div>
            </div>
          ))
          .reverse();
      });
  };

  return (
    <div className='flex flex-col lg:flex-row justify-center h-22 lg:h-16'>
      <div className='slider lg:absolute top-2 left-0 w-10/12 ml-7'>
        {telaAvailable(sku).available !== telaAvailable(sku).telaTotal ? (
          <HorizontalScrollGraph>{generateGraph()}</HorizontalScrollGraph>
        ) : (
          <p className='text-sm text-white'>Todavía no hay estampas elegidas</p>
        )}
      </div>
      <div className='message lg:absolute top-2 right-3 pt-3 lg:pt-0'>
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
    </div>
  );
};

export default EstampasGraphSlider;
