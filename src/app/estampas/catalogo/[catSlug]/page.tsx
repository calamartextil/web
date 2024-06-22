import { Suspense } from 'react';
import EstampasGrid from '@/app/components/Estampa/EstampasGrid';
import Loading from '@/app/components/Loading';
import FiltersSelect from '@/app/components/FiltersSelect';
import { estampasCategories } from '@/app/database/staticContent';

export default function Estampas({ params }: { params: { catSlug: string } }) {
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
        <EstampasGrid category={params.catSlug} />
      </Suspense>
    </>
  );
}
