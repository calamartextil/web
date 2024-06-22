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
        <div className='mb-10 flex flex-col-reverse lg:flex-row justify-between items-center gap-4 lg:gap-0'>
          <div className='w-full lg:w-2/3 flex flex-col lg:flex-row justify-start items-start lg:items-end gap-1 lg:gap-2'>
            <div className='flex flex-col lg:flex-row justify-start items-start lg:items-end gap-1 lg:gap-2'>
              <h1 className='text-4xl lg:text-5xl font-display mb-0'>
                Tela {actualTela?.tela?.title}
              </h1>
              <p className='text-sm mr-2 font-semibold'>
                ({actualTela.mts} mts)
              </p>
            </div>

            <p className='text-lg leading-none'>(Paso 2: Elegí las estampas)</p>
          </div>

          <div className='flex w-full lg:w-1/3 justify-end'>
            <Button
              className='bg-cancel-text-color'
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
            <h2 className='text-sm lg:text-2xl font-display lg:mb-5 leading-none'>
              Comenzá eligiendo una tela
            </h2>
          </div>
          <div className='flex'>
            <LinkButton href='/telas'>Agregar tela</LinkButton>
          </div>
        </div>
      )}
    </>
  );
}
