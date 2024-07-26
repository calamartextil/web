import type { Metadata } from 'next';

import Faqs from '@/app/components/Faqs';
import Inner from '@/app/components/Inner';
import LinkButton from '@/app/components/LinkButton';

export const metadata: Metadata = {
  title: `Información`,
  description: 'Informacion y FAQs sobre Calamar Textil',
};

export default function AboutUs() {
  return (
    <div className='pt-40 lg:pt-48 px-5 pb-40'>
      <Inner>
        <div className='mb-10 w-full'>
          <h1 className='text-5xl font-display mb-5 text-center lg:text-left'>
            Información
          </h1>
          <p className='mb-10 text-xl text-center lg:text-left'>
            ¡Todas tus dudas en esta sección!
          </p>

          <h2 className='mb-5 text-2xl'>Preguntas frecuentes</h2>
          <Faqs />
        </div>
        <div className='flex justify-center'>
          <LinkButton href='/telas'>Ver telas</LinkButton>
        </div>
      </Inner>
    </div>
  );
}
