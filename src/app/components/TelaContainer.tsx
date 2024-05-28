'use client';

import { useState } from 'react';
import { Tela } from '@/types';
import Image from 'next/image';
import { useCartContext } from '@/app/contexts/CartContext';

interface TelaProps {
  tela: Tela;
}

export default function TelaContainer({ tela }: TelaProps) {
  const [mts, setMts] = useState<number>(1);
  const [price, setPrice] = useState<number>(2 * tela?.price);
  const { addCartItem } = useCartContext();

  const priceFirstStep = 0.8;
  const priceSecondStep = 0.5;

  const handleAddToCart = () => {
    addCartItem({ tela, mts, price: 100, estampas: [] });
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setMts(e.target.value ? parseFloat(e.target.value) : 1);
    setPrice(
      e.target.value
        ? parseFloat(e.target.value) *
            tela?.price *
            2 *
            (parseFloat(e.target.value) > 20
              ? priceSecondStep
              : parseFloat(e.target.value) > 10
              ? priceFirstStep
              : 1)
        : 2 * tela?.price
    );
  };

  return (
    <div className='bg-primary-bg-color py-5 px-6 rounded-2xl'>
      <div className='grid'>
        <div className='col_6'>
          <div className='relative w-80 h-80'>
            <Image
              fill={true}
              src={tela?.images.lisaUrl}
              alt={tela?.title}
              className='rounded-2xl'
            />
          </div>
        </div>
        <div className='col_6'>
          <div className='flex flex-col justify-center items-start'>
            <div className='relative w-56 h-56 mb-5'>
              <h3 className='text-xl'>{tela?.title}</h3>
              <p>Precio por 1/2 metro: ${tela?.price}</p>
              <p>Más de 10 metros: ${tela?.price * priceFirstStep}</p>
              <p>Más de 20 metros: ${tela?.price * priceSecondStep}</p>
              <p>{tela?.description}</p>
            </div>
            <div className='flex items-center'>
              <label htmlFor='mts'>Metros</label>
              <input
                type='number'
                step='0.5'
                min='1'
                max='30'
                id='mts'
                value={mts}
                onChange={(e) => handleInputChange(e)}
              />
            </div>
            <div>
              <p>Total: ${price}</p>
            </div>
            <button onClick={handleAddToCart} className='btn btn-primary'>
              Agregar al carrito
            </button>
          </div>
        </div>
        {/* <pre>{JSON.stringify(getTelaBySku(params.sku), null, 2)}</pre> */}
      </div>
    </div>
  );
}
