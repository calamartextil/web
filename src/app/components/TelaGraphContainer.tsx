'use client';
import TelaGraph from '@/app/components/TelaGraph';
import EstampasGraphSlider from '@/app/components/Estampa/EstampasGraphSlider';
import { useCartContext } from '@/app/contexts/CartContext';

export default function TelaGraphContainer() {
  const { actualTelaInfo } = useCartContext();
  const inCart = actualTelaInfo();
  return (
    <>
      {inCart && (
        <div className='bg-secondary-bg-color py-3 px-6 rounded-2xl mt-8 sticky bottom-0 w-10/12 lg:w-11/12 border-black border-1'>
          {/* <TelaGraph sku={inCart.tela?.sku} />{' '} */}
          <EstampasGraphSlider sku={inCart.tela?.sku} />
        </div>
      )}
    </>
  );
}
