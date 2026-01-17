import Loading from "@/app/components/Loading";
import TelaPageContainer from "@/app/components/Tela/TelaPageContainer";
import { Suspense } from "react";
import { getTelaBySku } from "@/app/database/actions";

type PageParams = Promise<{ sku: string }>;

export async function generateMetadata({ params }: { params: PageParams }) {
  const { sku } = await params;

  const tela = await getTelaBySku(sku);
  const title = tela?.title ?? "Tela";
  const description = tela?.description ?? "";

  return {
    title: `${title} | Telas`,
    description,
  };
}

export default async function Tela({ params }: { params: PageParams }) {
  const { sku } = await params;

  return (
    <Suspense fallback={<Loading />}>
      <TelaPageContainer sku={sku} />
    </Suspense>
  );
}
