'use client';
import { useCartContext } from '@/app/contexts/CartContext';
import CartResume from '@/app/components/CartResume';
import CartForm from './CartForm';
export default function CartContainer() {
  const { cartQty } = useCartContext();
  return (
    <section className='pt-10 px-0'>
      {cartQty === 0 && <h1>No hay telas en el carrito</h1>}
      {cartQty > 0 && (
        <div>
          <div className='grid'>
            <div className='col_6'>
              <CartForm />
            </div>
            <div className='col_6'>
              <CartResume />
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
