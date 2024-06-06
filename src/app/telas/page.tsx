import { Suspense } from 'react';
import TelasGrid from '@/app/components/TelasGrid';
import Loading from '@/app/components/Loading';
export default function Telas() {
  return (
    <Suspense fallback={<Loading />}>
      <TelasGrid />
    </Suspense>
  );
}
