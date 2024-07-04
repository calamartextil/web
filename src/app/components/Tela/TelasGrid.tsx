import TelaCard from '@/app/components/Tela/TelaCard';
import { getAllTelas } from '@/app/database/actions';
import Link from 'next/link';

export default async function TelasGrid({
  category = null,
}: {
  category?: string | null;
}) {
  const telasFromDb = await getAllTelas(category);

  return (
    <>
      <div className='flex flex-col lg:flex-row lg:justify-between lg:items-center mb-10 lg:mb-0'>
        <h1 className='font-display text-5xl mb-4 lg:mb-8'>
          {category ? telasFromDb.category?.name : `Todas las telas`}
        </h1>
        <Link
          href='/envio-de-archivos'
          className='text-xs underline underline-offset-4'
        >
          ¿Como preparo mis archivos?
        </Link>
      </div>

      <div className='grid w-full'>
        {telasFromDb?.telas &&
          (telasFromDb?.telas).map((tela, index) => (
            <div key={index} className='col_3'>
              <TelaCard
                telaId={tela.telaId}
                title={tela.title}
                sku={tela.sku}
                prices={tela.prices}
                images={tela.images}
                categories={tela.categories}
              />
            </div>
          ))}
        {telasFromDb.telas.length === 0 && (
          <div className='col_12 w-full flex items-center justify-center mt-8'>
            <p className='text-sm'>Aún no hay telas en esta categoria</p>
          </div>
        )}
      </div>
    </>
  );
}
