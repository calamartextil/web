'use client';
import { useCartContext } from '@/app/contexts/CartContext';
import CartResume from '@/app/components/Cart/CartResume';
import CartForm from '@/app/components/Cart/CartForm';
export default function CartContainer() {
  const { cartQty } = useCartContext();
  return (
    <div className='px-0 pb-28'>
      {cartQty === 0 && <p className='text-lg'>No hay telas en el carrito</p>}
      {cartQty > 0 && (
        <div className='grid'>
          <div className='col_6 order-last lg:order-first'>
            <CartForm />
          </div>
          <div className='col_6'>
            <CartResume />
          </div>
        </div>
      )}
    </div>
  );
}
