'use client';

import { useState } from 'react';
import { Tela } from '@/types';
import { useCartContext } from '@/app/contexts/CartContext';
import Button from '@/app/components/Button';
import Image from 'next/image';
import TelaMtsInput from '@/app/components/TelaMtsInput';
import { useRouter } from 'next/navigation';
import CartMiniEstampas from '@/app/components/Cart/CartMiniEstampas';
import { EstampaCart } from '@/types';
import LinkButton from '@/app/components/LinkButton';
import TelaSlider from '@/app/components/Tela/TelaSlider';

interface TelaProps {
  tela: Tela;
}

export default function TelaSingle({ tela }: TelaProps) {
  const [mts, setMts] = useState<number>(1);
  const [price, setPrice] = useState<number>(tela?.prices[0]);
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
    setMts(mts ? mts : 1);
    setPrice(
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
      ] * mts
    );
  };
  return (
    <div className='relative'>
      <div className='flex justify-between items-center'>
        <div className='flex justify-center items-center gap-5'>
          <h1 className='text-5xl font-display mb-5'>{tela?.title}</h1>
          <p className='text-lg'>(Paso 1: Elegí la tela)</p>
        </div>
        {inCart && (
          <Button
            className='bg-cancel-text-color'
            onClick={() => removeCartItemBySku(tela.sku)}
          >
            Quitar tela
          </Button>
        )}
      </div>
      <div className='bg-primary-bg-color p-10 rounded-2xl'>
        <div className='grid'>
          <div className='col_6'>
            <TelaSlider images={tela?.images} />
          </div>
          <div className='col_6'>
            <div className='flex flex-col justify-center items-start'>
              <div className='relative w-full mb-2'>
                <p className='mb-8 mr-0 xl:mr-20'>{tela?.description}</p>
                <div className='mb-2'>
                  <h3 className='mb-1'>Color de base</h3>
                  <p className='text-sm'>{tela?.baseColor}</p>
                </div>
                <div className='mb-2'>
                  <h3 className='mb-1'>Composición</h3>
                  <p className='text-sm'>{tela?.composition}</p>
                </div>
                <div className='mb-2'>
                {tela?.usos && (
                  <div>
                    <h3 className='mb-1'>Usos</h3>
                    <p className='text-sm'>{tela?.usos.join(', ')}</p>
                  </div>
                )}
              </div>
                <div className='mb-5'>
                  <h3 className='mb-1'>Precios</h3>
                  <ul className='mb-1'>
                    <li>
                      <p className='text-sm'>
                        De 1 a 5 mts: ${tela?.prices[0]}
                      </p>
                    </li>
                    <li>
                      <p className='text-sm'>
                        De 6 a 10 mts: ${tela?.prices[1]}
                      </p>
                    </li>
                    <li>
                      <p className='text-sm'>
                        De 11 a 30 mts: ${tela?.prices[2]}
                      </p>
                    </li>
                    <li>
                      <p className='text-sm'>
                        De 31 a 50 mts: ${tela?.prices[3]}
                      </p>
                    </li>
                    <li>
                      <p className='text-sm'>
                        51 o más mts: ${tela?.prices[4]}
                      </p>
                    </li>
                  </ul>
                </div>
              </div>
              <p className='mb-8 text-2xl font-medium'>Total: ${price} <span className='text-sm'>(Precio final - IVA incluido)</span></p>
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
              {!inCart && <Button onClick={handleAddToCart}>Agregar</Button>}
            </div>
          </div>
        </div>
      </div>
      {/* <TelaGraphContainer /> */}
    </div>
  );
}
