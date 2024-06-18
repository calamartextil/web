'use client';

import Link from 'next/link';
import Image from 'next/image';
import Button from '@/app/components/Button';
import LinkButton from '@/app/components/LinkButton';
import { useCartContext } from '@/app/contexts/CartContext';
import CartMiniEstampas from './CartMiniEstampas';
import { EstampaCart } from '@/types';
import { formatNumber } from '@/app/utils/prices';

export default function CartResume() {
  const { cart, removeCartItemBySku } = useCartContext();
  return (
    <div className='flex flex-col justify-start items-start gap-3'>
      {cart.map((item, index) => (
        <div
          key={item.tela.sku}
          className=' bg-primary-bg-color py-5 px-6 rounded-2xl w-full mb-5'
        >
          <div className='flex gap-5 mb-5'>
            <Link href={`/telas/${item.tela.sku}`}>
              <Image
                src={`${process.env.NEXT_PUBLIC_IMAGES_URL}/telas/${item.tela.images.lisaUrl}`}
                alt={item.tela.title}
                width={100}
                height={100}
                className='rounded-xl'
                placeholder='blur'
                blurDataURL='/images/placeholder.jpg'
              />
            </Link>
            <div className='flex justify-between items-start w-full'>
              <div className='flex flex-col'>
                <h2 className='leading-none mb-1'>{item.tela.title}</h2>
                <p className='text-sm'>
                  Largo: {item.mts} {item.mts !== 1 ? `mts` : `mt`}
                </p>
                <p className='text-lg font-medium'>Subtotal: ${formatNumber(item?.price)}</p>
              </div>
              <div className='flex flex-col justify-start items-start gap-2'>
                <LinkButton href={`/telas/${item.tela.sku}`}>
                  Ver tela
                </LinkButton>
                <Button
                  onClick={() => removeCartItemBySku(item.tela.sku)}
                  className='bg-cancel-text-color'
                >
                  Quitar tela
                </Button>
              </div>
            </div>
          </div>
          <CartMiniEstampas
            estampasCart={item?.estampas || ([] as EstampaCart[])}
          />
        </div>
      ))}
    </div>
  );
}
