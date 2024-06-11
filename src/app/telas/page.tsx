import { Suspense } from 'react';
import TelasGrid from '@/app/components/Tela/TelasGrid';
import Loading from '@/app/components/Loading';
export default function Telas() {
  return (
    <Suspense fallback={<Loading />}>
      <TelasGrid />
    </Suspense>
  );
}
