'use client';
import { useCartContext } from '@/app/contexts/CartContext';
import Inner from '@/app/components/Inner';
import Link from 'next/link';
import Image from 'next/image';

export default function CartContainer() {
  const { cart } = useCartContext();
  return (
    <Inner>
      {cart.length === 0 && <h1>No hay telas en el carrito</h1>}
      {cart.map((item) => (
        <div key={item.tela.sku}>
          <Link href={`/telas/${item.tela.sku}`}>
            <h2>{item.tela.title}</h2>
          </Link>
          <p>{item.mts} metros</p>
          <p>${item.price}</p>
          <div className='flex justify-start items-center gap-2'>
            {item?.estampas?.map((estampa, index) => (
              <div key={index}>
                <Image
                  src={estampa.estampa.image}
                  alt={estampa.estampa.title}
                  width={100}
                  height={100}
                />
                <h3>{estampa.estampa.title}</h3>
                <p>{estampa.mts} metros</p>
                <p>{estampa.scale}</p>
              </div>
            ))}
          </div>
        </div>
      ))}
    </Inner>
  );
}
