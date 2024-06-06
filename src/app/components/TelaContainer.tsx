'use client';

import { Tela } from '@/types';
import { useCartContext } from '@/app/contexts/CartContext';
import TelaGraph from '@/app/components/TelaGraph';
import EstampasGrid from '@/app/components/EstampasGrid';
import TelaSingle from '@/app/components/TelaSingle';

interface TelaProps {
  tela: Tela;
}

export default function TelaContainer({ tela }: TelaProps) {
  const { removeCartItemBySku, existsInCart } = useCartContext();

  return (
    <div className='relative'>
      <div className='flex justify-between items-center'>
        <div className='flex justify-center items-center gap-5'>
          <h1 className='text-5xl font-display mb-5'>{tela?.title}</h1>
          {existsInCart(tela.sku) ? (
            <p className='text-lg'>(Paso 2: Elegí las estampas)</p>
          ) : (
            <p className='text-lg'>(Paso 1: Elegí la tela)</p>
          )}
        </div>
        {existsInCart(tela.sku) && (
          <button onClick={() => removeCartItemBySku(tela.sku)}>
            Quitar tela
          </button>
        )}
      </div>

      <div className='bg-primary-bg-color p-10 rounded-2xl'>
        {existsInCart(tela.sku) && <EstampasGrid />}
        {!existsInCart(tela.sku) && <TelaSingle tela={tela} />}
      </div>

      {existsInCart(tela.sku) && (
        <div className='bg-secondary-bg-color py-5 px-6 rounded-2xl mt-8 sticky bottom-0 w-full border-black border-1'>
          <TelaGraph sku={tela.sku} />{' '}
        </div>
      )}
    </div>
  );
}
