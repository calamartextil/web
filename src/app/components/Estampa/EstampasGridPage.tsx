import EstampaCardPage from '@/app/components/Estampa/EstampaCardPage';
import { getAllEstampasPage } from '@/app/database/actions';
import { Estampa as IEstampa } from '@/types';

export default async function EstampasGridPage({
  category = null,
}: {
  category?: string | null;
}) {
  const estampasDb = await getAllEstampasPage(category);

  return (
    <div className='grid w-full'>
      {estampasDb.estampas &&
        estampasDb.estampas.map((estampa: IEstampa, index) => (
          <div key={index} className='col_3'>
            <EstampaCardPage
              estampa={estampa}
            />
          </div>
        ))}
    </div>
  );
}
