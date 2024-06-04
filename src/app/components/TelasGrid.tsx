import TelaCard from '@/app/components/TelaCard';

import { getAllTelas } from '@/app/database/staticContent';
import { getAllTelas as getAllTelasDb } from '@/app/database/actions';

export default async function TelasGrid({
  category = null,
}: {
  category?: string | null;
}) {
  const telas = await getAllTelasDb();

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
    </div>
  );
}
