'use client';

import { Estampa } from '@/types';
import Image from 'next/image';
import { useParams } from 'next/navigation';
import { useCartContext } from '@/app/contexts/CartContext';

export default function EstampaCard({ id, title, sku, image }: Estampa) {
  const { addEstampaToTela } = useCartContext();
  const telaSku = useParams<{ sku: string }>();
  return (
    <div className='flex flex-col justify-center items-center bg-primary-bg-color py-5 px-6 rounded-2xl'>
      <div className='relative w-56 h-56 mb-5'>
        <Image fill={true} src={image} alt={title} className='rounded-2xl' />
      </div>
      <h3 className='text-xl'>{title}</h3>
      <button
        onClick={() => addEstampaToTela(telaSku.sku, sku, 5, 'M')}
      >Agregar</button>
    </div>
  );
}
