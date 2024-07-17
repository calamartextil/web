import type { Metadata } from 'next';
import { Suspense } from 'react';
import TelasGrid from '@/app/components/Tela/TelasGrid';
import Loading from '@/app/components/Loading';
import FiltersSelect from '@/app/components/FiltersSelect';
import { telasCategories } from '@/app/database/staticContent';

export const metadata: Metadata = {
  title: `Telas`,
  description: 'Gran variedad de bases disponibles',
};

export default function Telas() {
  return (
    <>
      <div className='lg:hidden'>
        <FiltersSelect
          categories={telasCategories}
          title={`Categorías de telas`}
          defaultHref={'/telas'}
        />
      </div>
      <Suspense fallback={<Loading />}>
        <TelasGrid />
      </Suspense>
    </>
  );
}
