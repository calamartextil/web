'use client';

import { useState } from 'react';
import { Tela } from '@/types';
import { useCartContext } from '@/app/contexts/CartContext';
import Button from '@/app/components/Button';
import Image from 'next/image';
import TelaMtsInput from '@/app/components/TelaMtsInput';

interface TelaProps {
  tela: Tela;
}

export default function TelaSingle({ tela }: TelaProps) {
  const [mts, setMts] = useState<number>(1);
  const [price, setPrice] = useState<number>(tela?.price);
  const { addCartItem } = useCartContext();
  const priceFirstStep = 0.8;
  const priceSecondStep = 0.5;

  const handleAddToCart = () => {
    addCartItem({ tela, mts, price, estampas: [] });
  };

  const handleInputChange = (mts: number) => {
    setMts(mts ? mts : 1);
    setPrice( //TODO: Refactor this with many prices for steps. view xls
      mts
        ? mts *
            tela?.price *
            (mts > 20 ? priceSecondStep : mts > 10 ? priceFirstStep : 1)
        : tela?.price
    );
  };
  return (
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
  );
}
