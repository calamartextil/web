import EstampaCard from '@/app/components/Estampa/EstampaCard';
import { getAllEstampas } from '@/app/database/actions';
import { Estampa as IEstampa } from '@/types';
import TelaGraphContainer from '@/app/components/TelaGraphContainer';
import ActualTela from '@/app/components/Estampa/ActualTela';

export default async function EstampasGridPage({
  category = null,
}: {
  category?: string | null;
}) {
  const estampasDb = await getAllEstampas(category);

  return (
    <>
      <ActualTela />
      <h1 className='text-2xl mb-5'>
        {category ? estampasDb.category?.name : `Todas las estampas`}
      </h1>
      {estampasDb.estampas.length === 0 && (
        <h1>Aún hay estampas en esta catálogo</h1>
      )}
      {estampasDb.estampas.length > 0 && (
        <>
          <div className='grid w-full'>
            {estampasDb.estampas &&
              estampasDb.estampas.map((estampa: IEstampa, index) => (
                <div key={index} className='col_3'>
                  <EstampaCard estampa={estampa} />
                </div>
              ))}
          </div>
          <TelaGraphContainer />
        </>
      )}
    </>
  );
}
