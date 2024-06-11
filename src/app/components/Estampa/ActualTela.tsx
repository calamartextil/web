'use client';
import { useCartContext } from '@/app/contexts/CartContext';
import Button from '@/app/components/Button';
import LinkButton from '../LinkButton';

export default function ActualTela() {
  const { actualTelaInfo, removeCartItemBySku } = useCartContext();
  const actualTela = actualTelaInfo();
  return (
    <>
      {actualTela && (
        <div className='mb-10 flex justify-between items-center'>
          <div className='flex justify-center items-center gap-5'>
            <h1 className='text-5xl font-display mb-5'>
              {actualTela?.tela?.title}
            </h1>
            <p className='text-lg'>(Paso 2: Elegí las estampas)</p>
          </div>
          <div>
            <Button
              className='bg-red-500 text-white'
              onClick={() => removeCartItemBySku(actualTela.tela.sku)}
            >
              Quitar tela
            </Button>
          </div>
        </div>
      )}
      {!actualTela && (
        <div className='mb-10 flex justify-between items-center'>
          <div className='flex justify-center items-center gap-5'>
            <h1 className='text-5xl font-display mb-5'>
              No hay tela seleccionada
            </h1>
          </div>
          <div className='flex'>
            <LinkButton href='/telas'>Agregar tela</LinkButton>
          </div>
        </div>
      )}
    </>
  );
}
