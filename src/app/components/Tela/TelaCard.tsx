import { Tela } from '@/types';
import Image from 'next/image';
import LinkButton from '@/app/components/LinkButton';
import { formatNumber } from '@/app/utils/prices';

export default function TelaCard({ title, sku, prices, images }: Tela) {
  return (
    <div className='flex flex-col justify-center items-center bg-primary-bg-color py-5 px-6 rounded-2xl'>
      <div className='full-img-container mb-5'>
        <Image
          fill={true}
          sizes='100%'
          src={`https://app.calamartextil.com/images/telas/${images?.lisaUrl}`}
          alt={title}
          placeholder='blur'
          blurDataURL='/images/placeholder.jpg'
          className='rounded-2xl full-img'
        />
      </div>
      <h3 className='text-xl'>{title}</h3>
      {prices[4] === 0 ? (
        <p className='mb-4 text-cancel-text-color'>Sin stock</p>
      ) : (
        <p className='mb-4'>{`Desde $${formatNumber(prices[4])}`}</p>
      )}

      <LinkButton href={`/telas/${sku}`}>Ver tela</LinkButton>
    </div>
  );
}
