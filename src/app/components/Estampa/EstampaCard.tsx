'use client';

import { Estampa } from '@/types';
import Image from 'next/image';
import { useParams } from 'next/navigation';
import EstampaModal from '@/app/components/Estampa/EstampaModal';

interface EstampaCardProps {
  estampa: Estampa;
}

export default function EstampaCard({ estampa }: EstampaCardProps) {
  return (
    <div className='flex flex-col justify-center items-center bg-primary-bg-color py-3 px-3 rounded-2xl'>
      <div className='full-img-container mb-5'>
        <Image
          fill={true}
          src={`${process.env.NEXT_PUBLIC_IMAGES_URL}/estampas/${estampa.image}`}
          alt={estampa.title}
          className='rounded-2xl full-img'
          placeholder='blur'
          blurDataURL='/images/placeholder.jpg'
        />
      </div>
      <h3 className='text-xl mb-3'>{estampa.title}</h3>
      <EstampaModal estampa={estampa} />
    </div>
  );
}
