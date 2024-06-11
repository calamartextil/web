import { Suspense } from 'react';
import EstampasGridPage from '@/app/components/Estampa/EstampasGridPage';
import Loading from '@/app/components/Loading';
export default function Estampas({ params }: { params: { catSlug: string } }) {
  return (
    <Suspense fallback={<Loading />}>
      <EstampasGridPage category={params.catSlug} />
    </Suspense>
  );
}
