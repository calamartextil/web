'use client';

import { Estampa } from '@/types';
import Image from 'next/image';
import { useParams } from 'next/navigation';
import EstampaModal from '@/app/components/EstampaModal';

export default function EstampaCard({
  id,
  title,
  sku,
  image,
  category,
}: Estampa) {
  const telaSku = useParams<{ sku: string }>();
  return (
    <div className='flex flex-col justify-center items-center bg-primary-bg-color py-3 px-3 rounded-2xl'>
      <div className='full-img-container mb-5'>
        <Image
          fill={true}
          src={image}
          alt={title}
          className='rounded-2xl full-img'
        />
      </div>
      <h3 className='text-xl mb-3'>{title}</h3>
      {/* <h4 className='text-sm mb-5'>{category}</h4> */}
      <EstampaModal
        telaSku={telaSku.sku}
        estampaSku={sku}
        image={image}
        title={title}
        category={category}
      />
    </div>
  );
}
