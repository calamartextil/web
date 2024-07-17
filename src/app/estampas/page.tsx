import type { Metadata } from 'next';
import { Suspense } from 'react';
import EstampasGrid from '@/app/components/Estampa/EstampasGrid';
import Loading from '@/app/components/Loading';
import FiltersSelect from '@/app/components/FiltersSelect';
import { estampasCategories } from '@/app/database/staticContent';

export const metadata: Metadata = {
  title: `Estampas`,
  description: '¡Muchos diseños para que elijas!',
};

export default function Estampas() {
  return (
    <>
      <div className='lg:hidden'>
        <FiltersSelect
          categories={estampasCategories}
          title={`Catálogo de estampas`}
          defaultHref={'/estampas'}
        />
      </div>
      <Suspense fallback={<Loading />}>
        <EstampasGrid />
      </Suspense>
    </>
  );
}
