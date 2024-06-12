'use client'
import { useCartContext } from '@/app/contexts/CartContext';
import { FaCartShopping } from 'react-icons/fa6';
import Link from 'next/link';

export default function CartIcon({isScroll = false}: {isScroll: boolean}) {
  const { cartQty } = useCartContext();
  return (
    <Link href='/pedido'>
      <div className={`relative ${isScroll ? `w-[20px] h-[20px]` : `w-[30px] h-[30px]`} `}>
        <FaCartShopping
          size={isScroll ? `20` : `30`}
          color='#F4C6E3'
          className='absolute bottom-0 z-0'
        />
        <div className={`text-sm absolute -bottom-2 left-5 z-10 rounded-full bg-black ${isScroll ? `w-4 h-4 text-xs` : `w-6 h-6`} text-white flex items-center justify-center text-center`}>
          {cartQty}
        </div>
      </div>
    </Link>
  );
}
