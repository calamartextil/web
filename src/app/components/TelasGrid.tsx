import TelaCard from '@/app/components/TelaCard';
import { getAllTelas } from '@/app/database/actions';

export default async function TelasGrid({
  category = null,
}: {
  category?: string | null;
}) {
  const telas = await getAllTelas(category);

  return (
    <div className='grid w-full'>
      {telas &&
        telas.map((tela, index) => (
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
      {telas?.length === 0 && (
        <div className='col_12 w-full flex items-center justify-center mt-8'>
          <p className='text-sm'>Aún no hay telas en esta categoria</p>
        </div>
      )}
    </div>
  );
}
