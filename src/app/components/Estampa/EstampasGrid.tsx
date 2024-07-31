import EstampaCard from '@/app/components/Estampa/EstampaCard';
import { getAllEstampas } from '@/app/database/actions';
import { Estampa as IEstampa } from '@/types';
import TelaGraphContainer from '@/app/components/TelaGraphContainer';
import ActualTela from '@/app/components/Estampa/ActualTela';
import Link from 'next/link';

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
    description: 'Estampa personalizada',
  } as IEstampa;

  return (
    <>
      <ActualTela />
      <div className='mb-5 flex justify-between items-center'>
        <h1 className='text-2xl leading-6'>
          {category ? estampasDb.category?.name : `Todas las estampas`}
        </h1>
        <Link
          href='/envio-de-archivos'
          className='text-xs underline underline-offset-4 text-right leading-5'
        >
          ¿Como preparo mis archivos?
        </Link>
      </div>
      {estampasDb.estampas.length === 0 && (
        <div className='w-full flex items-center justify-center mt-8'>
          <p className='text-sm'>Aún no hay estampas en este catálogo</p>
        </div>
      )}
      {estampasDb.estampas.length > 0 && (
        <>
          <div className='grid w-full gap-2 lg:gap-5'>
            {!category && (
              <div className='col_3 col_mb_6'>
                <EstampaCard estampa={estampaTuDise} />
              </div>
            )}
            {estampasDb.estampas &&
              estampasDb.estampas.map((estampa: IEstampa, index) => (
                <div key={index} className='col_3  col_mb_6'>
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
