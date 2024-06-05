import {Suspense} from 'react';
import TelasGrid from '@/app/components/TelasGrid';
import Loading from '@/app/components/Loading';
export default function Telas() {
  return (
    <div>
      <h1 className='font-display text-5xl mb-8'>Todas las telas</h1>
      <Suspense fallback={<Loading />}>
        <TelasGrid />
      </Suspense>
    </div>
  );
}
