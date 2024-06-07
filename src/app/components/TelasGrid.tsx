import TelaCard from '@/app/components/TelaCard';
import { getAllTelas } from '@/app/database/actions';

export default async function TelasGrid({
  category = null,
}: {
  category?: string | null;
}) {
  const telasFromDb = await getAllTelas(category);

  return (
    <>
      <h1 className='font-display text-5xl mb-8'>
        {category ? telasFromDb.category?.name : `Todas las telas`}
      </h1>
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
