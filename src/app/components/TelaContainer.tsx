'use client';

import { useState } from 'react';
import { Tela } from '@/types';
import Image from 'next/image';
import { useCartContext } from '@/app/contexts/CartContext';
import Button from '@/app/components/Button';
import TelaGraph from '@/app/components/TelaGraph';
import EstampasGrid from '@/app/components/EstampasGrid';
import TelaMtsInput from '@/app/components/TelaMtsInput';

interface TelaProps {
  tela: Tela;
}

export default function TelaContainer({ tela }: TelaProps) {
  const [mts, setMts] = useState<number>(1);
  const [price, setPrice] = useState<number>(2 * tela?.price);
  const { addCartItem, removeCartItemBySku, existsInCart } = useCartContext();

  const priceFirstStep = 0.8;
  const priceSecondStep = 0.5;

  const handleAddToCart = () => {
    addCartItem({ tela, mts, price, estampas: [] });
  };

  const handleInputChange = (mts: number) => {
    const valueMts = mts;
    setMts(mts ? valueMts : 1);
    setPrice(
      mts
        ? valueMts *
            tela?.price *
            2 *
            (valueMts > 20
              ? priceSecondStep
              : valueMts > 10
              ? priceFirstStep
              : 1)
        : 2 * tela?.price
    );
  };

  return (
    <div className='relative'>
      <div className='flex justify-between items-center'>
        <h1 className='text-5xl font-display mb-5'>{tela?.title}</h1>
        {existsInCart(tela.sku) && (
          <button onClick={() => removeCartItemBySku(tela.sku)}>
            Quitar tela
          </button>
        )}
      </div>

      <div className='bg-primary-bg-color p-10 rounded-2xl'>
        {existsInCart(tela.sku) && <EstampasGrid />}
        {!existsInCart(tela.sku) && (
          <div className='grid'>
            <div className='col_6'>
              <div className='full-img-container'>
                <Image
                  sizes='100%'
                  fill={true}
                  src={tela?.images.lisaUrl}
                  alt={tela?.title}
                  className='rounded-2xl full-img'
                />
              </div>
            </div>
            <div className='col_6'>
              <div className='flex flex-col justify-center items-start'>
                <div className='relative w-full mb-5'>
                  <p className='mb-8 mr-0 xl:mr-20'>{tela?.description}</p>
                  <h3 className='mb-1'>Precios</h3>
                  <ul className='mb-8'>
                    <li>
                      <p className='text-sm'>Por 1/2 metro: ${tela?.price}</p>
                    </li>
                    <li>
                      <p className='text-sm'>
                        Más de 10 metros: ${tela?.price * priceFirstStep}
                      </p>
                    </li>
                    <li>
                      <p className='text-sm'>
                        Más de 20 metros: ${tela?.price * priceSecondStep}
                      </p>
                    </li>
                  </ul>
                </div>
                <p className='mb-8 font-medium'>Total: ${price}</p>
                <div className='flex items-center gap-2 mb-8'>
                  <TelaMtsInput setMts={handleInputChange} mts={mts} />
                </div>
                <Button onClick={handleAddToCart}>Agregar</Button>
              </div>
            </div>
          </div>
        )}
      </div>
      {existsInCart(tela.sku) && (
        <div className='bg-fourth-bg-color py-5 px-6 rounded-2xl mt-8 sticky bottom-0 w-full opacity-90'>
          <TelaGraph sku={tela.sku} />{' '}
        </div>
      )}
    </div>
  );
}
