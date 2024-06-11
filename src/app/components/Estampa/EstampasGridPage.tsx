import EstampaCardPage from '@/app/components/Estampa/EstampaCardPage';
import { getAllEstampasPage } from '@/app/database/actions';
import { Estampa as IEstampa } from '@/types';
import TelaGraphContainer from '@/app/components/TelaGraphContainer';
import ActualTela from '@/app/components/Estampa/ActualTela';

export default async function EstampasGridPage({
  category = null,
}: {
  category?: string | null;
}) {
  const estampasDb = await getAllEstampasPage(category);

  return (
    <>
      <ActualTela />
      <div className='grid w-full'>
        {estampasDb.estampas &&
          estampasDb.estampas.map((estampa: IEstampa, index) => (
            <div key={index} className='col_3'>
              <EstampaCardPage estampa={estampa} />
            </div>
          ))}
      </div>
      <TelaGraphContainer />
    </>
  );
}
