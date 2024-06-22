'use client';

import { useCartContext } from '@/app/contexts/CartContext';
import { formatNumber } from '@/app/utils/prices';

export default function CartPrice() {
  const { cartTotal } = useCartContext();
  return (
    <>
      {cartTotal > 0 && (
        <div>
          <p className='bg-primary-bg-color py-5 px-6 rounded-2xl text-xl font-medium text-center'>
            {`Total $${formatNumber(cartTotal)} `}
            <span className='text-xs inline-block w-full md:inline'>(Precio final - IVA incluido)</span>
          </p>
        </div>
      )}
    </>
  );
}
