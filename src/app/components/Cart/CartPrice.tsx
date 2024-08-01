'use client';

import { useCartContext } from '@/app/contexts/CartContext';
import { formatNumber } from '@/app/utils/prices';
import CuponForm from '@/app/components/Cart/CuponForm';

export default function CartPrice() {
  const { cartTotal } = useCartContext();
  const total = cartTotal();
  return (
    <>
      {total > 0 && (
        <div className='flex flex-col lg:flex-row gap-3 justify-center items-center'>
          <CuponForm />
          <div>
            <p className='bg-primary-bg-color py-7 px-6 rounded-2xl text-xl font-medium text-center'>
              {`Total $${formatNumber(total)} `}
              <span className='text-xs inline-block w-full md:inline'>
                (Precio final - IVA incluido)
              </span>
            </p>
          </div>
        </div>
      )}
    </>
  );
}
