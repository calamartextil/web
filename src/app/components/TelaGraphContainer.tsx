'use client';
import TelaGraph from '@/app/components/TelaGraph';
import { useCartContext } from '@/app/contexts/CartContext';

export default function TelaGraphContainer() {
  const { actualTelaInfo } = useCartContext();
  const inCart = actualTelaInfo();
  return <>{inCart && <TelaGraph sku={inCart.tela?.sku} />}</>;
}
