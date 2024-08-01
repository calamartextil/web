import { Tela } from '@/types';
import Image from 'next/image';
import LinkButton from '@/app/components/LinkButton';
import { formatNumber, salePrice } from '@/app/utils/prices';

export default function TelaCard({
  title,
  sku,
  prices,
  images,
  discount,
}: Tela) {
  return (
    <div className='flex flex-col justify-center items-center bg-primary-bg-color pt-3 pb-4 px-3 rounded-2xl'>
      <div className='relative'>
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

        {discount !== undefined && discount > 0 && (
          <div className='absolute top-2 right-2 bg-cancel-text-color text-white text-xs px-2 py-1 rounded-2xl'>
            {discount}% OFF
          </div>
        )}
      </div>

      <h3 className='text-xl text-center leading-5 mb-2'>{title}</h3>
      {prices[4] === 0 ? (
        <p className='mb-4 text-cancel-text-color'>Sin stock</p>
      ) : discount !== undefined && discount > 0 ? (
        <p className='mb-4 text-lg'>
          Desde ${formatNumber(salePrice(prices[4], discount))}{' '}
          <span className='text-sm text-cancel-text-color line-through'>
            ${formatNumber(prices[4])}
          </span>
        </p>
      ) : (
        <p className='mb-4 text-lg'>{`Desde $${formatNumber(prices[4])}`}</p>
      )}

      <LinkButton href={`/telas/${sku}`}>Ver tela</LinkButton>
    </div>
  );
}
