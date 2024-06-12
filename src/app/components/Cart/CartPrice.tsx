'use client';

import { useCartContext } from '../../contexts/CartContext';

export default function CartPrice() {
  const { cartTotal } = useCartContext();
  return (
    <div>
      <p className='bg-primary-bg-color py-5 px-6 rounded-2xl text-xl font-medium'>{`Total $${cartTotal}`}</p>
    </div>
  );
}
