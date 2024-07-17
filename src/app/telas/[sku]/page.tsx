import Loading from '@/app/components/Loading';
import TelaPageContainer from '@/app/components/Tela/TelaPageContainer';
import { Suspense } from 'react';
import { getTelaBySku } from '@/app/database/actions';

export async function generateMetadata({
  params,
}: {
  params: { sku: string };
}) {
  const tela = await getTelaBySku(params?.sku);
  const title = tela?.title;
  const description = tela?.description
  return {
    title: `${title} | Telas`,
    description,
  };
}

export default async function Tela({ params }: { params: { sku: string } }) {
  return (
    <Suspense fallback={<Loading />}>
      <TelaPageContainer sku={params.sku} />
    </Suspense>
  );
}
