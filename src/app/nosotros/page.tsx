import Faqs from '@/app/components/Faqs';
import Inner from '@/app/components/Inner';

export default function AboutUs() {
  return (
    <div className='pt-48 flex flex-col content-start gap-6 px-10 pb-40'>
      <h1 className='text-5xl font-display mb-5'>Nosotros</h1>
      <Inner>
        <div>
          <h2 className='mb-5'>Preguntas frecuentes</h2>
          <Faqs />
        </div>
      </Inner>
    </div>
  );
}
