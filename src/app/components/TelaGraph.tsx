'use client';

import { useCartContext } from '@/app/contexts/CartContext';

interface TelaGraphProps {
  sku: string;
}

export default function TelaGraph({ sku }: TelaGraphProps) {
  const { findCartItemBySku } = useCartContext();
  const cartItem = findCartItemBySku(sku);

  const generateTelaGraph = () => {
    const spaces = cartItem?.mts ? cartItem?.mts * 2 : 0;
    const graph = Array.from({ length: spaces }, (_, i) => (
      <div key={i} className='w-4 h-4 bg-primary-bg-color rounded-full'>
        {cartItem?.estampas && cartItem?.estampas[i].estampa.title}
      </div>
    ));
    return graph;
  };

  return <div>{generateTelaGraph()}</div>;
}
