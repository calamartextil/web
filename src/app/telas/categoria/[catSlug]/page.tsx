import { Suspense } from 'react';
import TelasGrid from '@/app/components/Tela/TelasGrid';
import Loading from '@/app/components/Loading';
import FiltersSelect from '@/app/components/FiltersSelect';
import { telasCategories } from '@/app/database/staticContent';

export async function generateMetadata({
  params,
}: {
  params: { catSlug: string };
}) {
  const catName = telasCategories.find(
    (cat) => cat.slug === params?.catSlug
  )?.title;
  return {
    title: `${catName} | Telas`,
    description: 'Gran variedad de bases disponibles',
  };
}

export default function Telas({ params }: { params: { catSlug: string } }) {
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
        <TelasGrid category={params.catSlug} />
      </Suspense>
    </>
  );
}
