import { getTelaBySku } from '@/app/database/staticContent';
import Image from 'next/image';

//TODO: Agregar boton para agregar al carrito client component

export default function Tela({ params }: { params: { sku: string } }) {
  const tela = getTelaBySku(params.sku);
  return (
    <div>
      {tela && (
        <div className='bg-primary-bg-color py-5 px-6 rounded-2xl'>
          <div className='grid'>
            <div className='col_6'>
              <div className='relative w-80 h-80'>
                <Image
                  fill={true}
                  src={tela?.images.lisaUrl}
                  alt={tela?.title}
                  className='rounded-2xl'
                />
              </div>
            </div>
            <div className='col_6'>
              <div className='flex flex-col justify-center items-start'>
                <div className='relative w-56 h-56 mb-5'>
                  <h3 className='text-xl'>{tela?.title}</h3>
                  <p>Desde ${tela?.price}</p>
                  <p>{tela?.description}</p>
                </div>
              </div>
            </div>
            {/* <pre>{JSON.stringify(getTelaBySku(params.sku), null, 2)}</pre> */}
          </div>
        </div>
      )}
      {!tela && <p>Tela no encontrada</p>}
    </div>
  );
}
