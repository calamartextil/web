import { Suspense } from 'react';
import EstampasGrid from '@/app/components/Estampa/EstampasGrid';
import Loading from '@/app/components/Loading';
import FiltersSelect from '@/app/components/FiltersSelect';
import { estampasCategories } from '@/app/database/staticContent';

export async function generateMetadata({
  params,
}: {
  params: { catSlug: string };
}) {
  const catName = estampasCategories.find(
    (cat) => cat.slug === params?.catSlug
  )?.title;
  return {
    title: `${catName} | Estampas`,
    description: '¡Muchos diseños para que elijas!',
  };
}

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
