import { Suspense } from 'react';
import EstampasGrid from '@/app/components/Estampa/EstampasGrid';
import Loading from '@/app/components/Loading';
export default function Estampas() {
  return (
    <Suspense fallback={<Loading />}>
      <EstampasGrid />
    </Suspense>
  );
}
