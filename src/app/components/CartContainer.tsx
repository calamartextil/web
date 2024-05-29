'use client';
import { useCartContext } from '@/app/contexts/CartContext';
import Inner from '@/app/components/Inner';
import Link from 'next/link';

export default function CartContainer() {
  const { cart } = useCartContext();
  return (
    <Inner>
      {cart.map((item) => (
        <div key={item.tela.sku}>
          <Link href={`/telas/${item.tela.sku}`}>
            <h1>{item.tela.title}</h1>
          </Link>
          <p>{item.mts} metros</p>
          <p>${item.price}</p>
        </div>
      ))}
    </Inner>
  );
}
