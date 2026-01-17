import { Suspense } from "react";
import EstampasGrid from "@/app/components/Estampa/EstampasGrid";
import Loading from "@/app/components/Loading";
import FiltersSelect from "@/app/components/FiltersSelect";
import { estampasCategories } from "@/app/database/staticContent";

type PageParams = Promise<{ catSlug: string }>;

export async function generateMetadata({ params }: { params: PageParams }) {
  const { catSlug } = await params;

  const catName =
    estampasCategories.find((cat) => cat.slug === catSlug)?.title ?? "Estampas";

  return {
    title: `${catName} | Estampas`,
    description: "¡Muchos diseños para que elijas!",
  };
}

export default async function Estampas({ params }: { params: PageParams }) {
  const { catSlug } = await params;

  return (
    <>
      <div className="lg:hidden">
        <FiltersSelect
          categories={estampasCategories}
          title="Catálogo de estampas"
          defaultHref="/estampas"
        />
      </div>

      <Suspense fallback={<Loading />}>
        <EstampasGrid category={catSlug} />
      </Suspense>
    </>
  );
}
