import Loading from '@/app/components/Loading';
import TelaPageContainer from '@/app/components/Tela/TelaPageContainer';
import { Suspense } from 'react';

export default async function Tela({ params }: { params: { sku: string } }) {
  return (
    <Suspense fallback={<Loading />}>
      <TelaPageContainer sku={params.sku} />
    </Suspense>
  );
}
