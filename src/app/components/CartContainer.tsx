'use client';
import { useCartContext } from '@/app/contexts/CartContext';
import Inner from '@/app/components/Inner';

export default function CartContainer() {
  const { cart } = useCartContext();
  return (
    <Inner>
      {cart.map((item) => (
        <div key={item.tela.sku}>
          <h1>{item.tela.title}</h1>
          <p>{item.mts} metros</p>
          <p>${item.price}</p>
        </div>
      ))}
    </Inner>
  );
}
