import Inner from '@/app/components/Inner';
import Image from 'next/image';
import LinkButton from '@/app/components/LinkButton';

export default function FileSend() {
  return (
    <div className='pt-40 lg:pt-48 px-5 pb-40'>
      <Inner>
        <div>
          <h1 className='text-5xl font-display mb-10 text-center lg:text-left'>
            ¿Como preparo mis archivos?
          </h1>

          <h2 className='mb-2 text-3xl'>Rapport</h2>
          <p className='mb-5'>(Estampa continua)</p>

          <div className='bg-primary-bg-color mb-10 w-3/5 p-5 rounded-2xl'>
            <p className='text-xl text-center lg:text-left'>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc non
              consequat quam, non ullamcorper turpis. Aenean dignissim diam
              diam, vitae semper erat maximus interdum. Suspendisse lacinia non
              turpis quis auctor. Sed gravida tellus dui, quis dignissim erat
              venenatis eget. Nulla sed tristique enim.
            </p>
          </div>

          <h2 className='mb-2 text-3xl'>Imagen localizada</h2>
          <p className='mb-5'>(Pañuelos, tapices, toallas, etc)</p>


          <h2 className='mb-2 text-3xl'>Envío de archivos</h2>
          <p className='mb-5'>(Pañuelos, tapices, toallas, etc)</p>

          <div className='flex justify-center'>
            <LinkButton href='/telas'>Hacer mi pedido</LinkButton>
          </div>
        </div>
      </Inner>
    </div>
  );
}
