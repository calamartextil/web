import { Suspense } from 'react';
import TelasGrid from '@/app/components/Tela/TelasGrid';
import Loading from '@/app/components/Loading';
import FiltersSelect from '@/app/components/Tela/FiltersSelect';
export default function Telas() {
  return (
    <>
      <div className='lg:hidden'>
        <FiltersSelect />
      </div>
      <Suspense fallback={<Loading />}>
        <TelasGrid />
      </Suspense>
    </>
  );
}
