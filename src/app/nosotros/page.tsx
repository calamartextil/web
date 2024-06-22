import Faqs from '@/app/components/Faqs';
import Inner from '@/app/components/Inner';

export default function AboutUs() {
  return (
    <div className='pt-40 lg:pt-48 px-5 pb-40'>
      <Inner>
        <div>
          <h1 className='text-5xl font-display mb-5 text-center lg:text-left'>
            Nosotros
          </h1>
          <p className='mb-10 text-xl text-center lg:text-left'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc non
            consequat quam, non ullamcorper turpis. Aenean dignissim diam diam,
            vitae semper erat maximus interdum. Suspendisse lacinia non turpis
            quis auctor. Sed gravida tellus dui, quis dignissim erat venenatis
            eget. Nulla sed tristique enim.
          </p>
          <h2 className='mb-5 text-2xl'>Preguntas frecuentes</h2>
          <Faqs />
        </div>
      </Inner>
    </div>
  );
}
