'use client';

import { useState } from 'react';
import { Tela } from '@/types';
import { useCartContext } from '@/app/contexts/CartContext';
import Button from '@/app/components/Button';
import TelaMtsInput from '@/app/components/TelaMtsInput';
import { useRouter } from 'next/navigation';
import CartMiniEstampas from '@/app/components/Cart/CartMiniEstampas';
import { EstampaCart } from '@/types';
import LinkButton from '@/app/components/LinkButton';
import TelaSlider from '@/app/components/Tela/TelaSlider';
import { formatNumber, salePrice } from '@/app/utils/prices';

interface TelaProps {
  tela: Tela;
}

const pricesIntervals = [
  'De 1 a 5 mts',
  'De 6 a 10 mts',
  'De 11 a 30 mts',
  'De 31 a 50 mts',
  '51 o más mts',
];

export default function TelaSingle({ tela }: TelaProps) {
  const [mts, setMts] = useState<number>(1);
  const [price, setPrice] = useState<number>(
    tela.discount !== undefined && tela.discount > 0
      ? salePrice(tela?.prices[0], tela.discount)
      : tela?.prices[0]
  );
  const {
    addCartItem,
    handleSetActualtelas,
    existsInCart,
    removeCartItemBySku,
    findCartItemBySku,
  } = useCartContext();
  const router = useRouter();

  const handleAddToCart = () => {
    router.push('/estampas');
    handleSetActualtelas(tela);
    addCartItem({ tela, mts, price, estampas: [] });
  };

  const inCart = existsInCart(tela.sku);

  const handleEditEstampasClick = () => {
    router.push('/estampas');
    handleSetActualtelas(tela);
  };

  const handleInputChange = (mts: number) => {
    const price =
      tela?.prices[
        mts >= 0 && mts <= 5
          ? 0
          : mts >= 6 && mts <= 10
          ? 1
          : mts >= 11 && mts <= 30
          ? 2
          : mts >= 31 && mts <= 50
          ? 3
          : 4
      ] * mts;

    setMts(mts ? mts : 1);
    setPrice(
      tela.discount !== undefined && tela.discount > 0
        ? salePrice(price, tela.discount)
        : price
    );
  };

  const pricesList = pricesIntervals.map((interval, index) => (
    <li key={index}>
      {tela.discount !== undefined && tela.discount > 0 ? (
        <p className='text-sm'>
          {interval}: $
          {formatNumber(salePrice(tela.prices[index], tela.discount))}{' '}
          <span className='text-sm text-cancel-text-color line-through'>
            ${formatNumber(tela.prices[index])}
          </span>
        </p>
      ) : (
        <p className='text-sm'>{`${interval}: $${formatNumber(
          tela.prices[index]
        )}`}</p>
      )}
    </li>
  ));

  return (
    <div className='relative'>
      <div className='mb-10 flex flex-col-reverse lg:flex-row justify-between items-center gap-4 lg:gap-0'>
        <div className='w-full lg:w-2/3 flex flex-col lg:flex-row justify-start items-start lg:items-center gap-1 lg:gap-2'>
          <h1 className='text-5xl font-display mb-0 lg:mb-5'>{tela?.title}</h1>
          <p className='text-lg'>(Paso 1: Elegí la tela)</p>
        </div>
        {inCart && (
          <div className='flex w-full lg:w-1/3 justify-end'>
            <Button
              className='bg-cancel-text-color'
              onClick={() => removeCartItemBySku(tela.sku)}
            >
              Quitar tela
            </Button>
          </div>
        )}
      </div>
      <div className='bg-primary-bg-color p-10 rounded-2xl'>
        <div className='grid'>
          <div className='col_6 relative'>
            <TelaSlider images={tela?.images} />
            {tela.discount !== undefined && tela.discount > 0 && (
              <div className='absolute top-3 right-3 bg-cancel-text-color text-white text-sm px-3 py-2 rounded-2xl'>
                {tela.discount}% OFF
              </div>
            )}
          </div>
          <div className='col_6'>
            <div className='flex flex-col justify-center items-start'>
              <div className='relative w-full mb-2'>
                <p className='mb-3 mr-0 xl:mr-20'>{tela?.description}</p>
                <div className='mb-1'>
                  <h3 className='mb-0'>Color de base</h3>
                  <p className='text-sm'>{tela?.baseColor}</p>
                </div>
                <div className='mb-1'>
                  <h3 className='mb-0'>Ancho</h3>
                  <p className='text-sm'>{tela?.width} mts</p>
                </div>
                <div className='mb-1'>
                  <h3 className='mb-0'>Composición</h3>
                  <p className='text-sm'>{tela?.composition}</p>
                </div>
                <div className='mb-1'>
                  {tela?.usos && (
                    <div>
                      <h3 className='mb-0'>Usos</h3>
                      <p className='text-sm'>{tela?.usos.join(', ')}</p>
                    </div>
                  )}
                </div>
                {tela.prices[0] !== 0 && (
                  <div className='mb-5'>
                    <h3 className='mb-0'>Precios</h3>
                    <ul className='mb-1'>{pricesList}</ul>
                  </div>
                )}
              </div>
              {tela.prices[4] === 0 ? (
                <p className='mt-5 text-2xl font-medium'>Sin stock</p>
              ) : (
                <>
                  <p className='mb-8 text-2xl font-medium'>
                    Total: ${formatNumber(price)}{' '}
                    <span className='text-sm inline-block lg:inline'>
                      (Precio final - IVA incluido)
                    </span>
                  </p>
                  {inCart && (
                    <div className='bg-secondary-bg-color px-3 py-3 w-full rounded-2xl mb-6'>
                      <div className='mb-5'>
                        <CartMiniEstampas
                          estampasCart={
                            findCartItemBySku(tela.sku)?.estampas ||
                            ([] as EstampaCart[])
                          }
                        />
                      </div>
                      <p className='text-sm'>Largo seleccionado: {mts} mts</p>
                    </div>
                  )}

                  {!inCart && (
                    <div className='flex items-center gap-2 mb-8'>
                      <TelaMtsInput setMts={handleInputChange} mts={mts} />
                    </div>
                  )}

                  {inCart && (
                    <div className='flex justify-start items-center gap-5'>
                      <Button onClick={handleEditEstampasClick}>
                        Editar estampas
                      </Button>
                      <LinkButton href='/pedido'>Ver pedido</LinkButton>
                    </div>
                  )}
                  {!inCart && (
                    <Button onClick={handleAddToCart}>Agregar</Button>
                  )}
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
