import type { Metadata } from 'next';
import Inner from '@/app/components/Inner';
import LinkButton from '@/app/components/LinkButton';

export const metadata: Metadata = {
  title: `Pedido confirmado`,
  robots: {
    index: false,
    follow: false,
  },
};

export default function FileSend() {
  return (
    <div className='pt-40 lg:pt-48 px-5 pb-40'>
      <Inner>
        <div className='flex justify-start flex-col items-start w-full'>
          <h1 className='text-5xl font-display mb-10 text-center lg:text-left'>
            Recibimos tu pedido
          </h1>
          <p className='text-lg lg:text-xl text-center lg:text-left mb-2'>
          Te va a llegar un mail con el detalle de tu pedido. Nos vamos a comunicar con vos dentro de las 48hrs.
          </p>
          <p className='text-lg lg:text-xl text-center lg:text-left mb-10'>
            En caso de que no lo veas, por favor chequeá la carpeta de spam, o comunica con nosotros.
          </p>
          <div className='flex justify-center'>
            <LinkButton href='/telas'>Hacer otro pedido</LinkButton>
          </div>
        </div>
      </Inner>
    </div>
  );
}
