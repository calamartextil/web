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

  const estampaTuDise = {
    title: 'Tu diseño',
    sku: 'TU-DISE',
    image: `tu-dise.jpg`,
    description: (
      <>
      <p className='text-sm'>Envianos tu propio diseño y lo estampamos.</p>
      <p className='text-sm mb-5'>
        En la sección{' '}
        <a className='text-xs underline underline-offset-4' href='dd'>TU DISEÑO</a>{' '}
        encontrarás el instructivo para tus archivos.
      </p>
      </>
      
    ),
  } as IEstampa;

  return (
    <>
      <ActualTela />
      <h1 className='text-2xl mb-5'>
        {category ? estampasDb.category?.name : `Todas las estampas`}
      </h1>
      {estampasDb.estampas.length === 0 && (
        <div className='w-full flex items-center justify-center mt-8'>
          <p className='text-sm'>Aún no hay estampas en este catálogo</p>
        </div>
      )}
      {estampasDb.estampas.length > 0 && (
        <>
          <div className='grid w-full'>
            {!category && (
              <div className='col_3'>
                <EstampaCard estampa={estampaTuDise} />
              </div>
            )}
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
