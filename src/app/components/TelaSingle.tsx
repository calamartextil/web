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
  const [price, setPrice] = useState<number>(tela?.prices[0]);
  const { addCartItem } = useCartContext();

  const handleAddToCart = () => {
    addCartItem({ tela, mts, price, estampas: [] });
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
    <div className='grid'>
      <div className='col_6'>
        <div className='full-img-container'>
          <Image
            sizes='100%'
            fill={true}
            src={`https://app.calamartextil.com/images/telas/${tela?.images.lisaUrl}`}
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
                <p className='text-sm'>De 1 a 5 mts: ${tela?.prices[0]}</p>
              </li>
              <li>
                <p className='text-sm'>De 6 a 10 mts: ${tela?.prices[1]}</p>
              </li>
              <li>
                <p className='text-sm'>De 11 a 30 mts: ${tela?.prices[2]}</p>
              </li>
              <li>
                <p className='text-sm'>De 31 a 50 mts: ${tela?.prices[3]}</p>
              </li>
              <li>
                <p className='text-sm'>51 o más mts: ${tela?.prices[4]}</p>
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
