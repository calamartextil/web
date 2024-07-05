import LinkButton from '@/app/components/LinkButton';
import Image from 'next/image';

const Hero = () => {
  return (
    <div className='relative'>
      <section className='bg-fourth-bg-color lg:pt-60 lg:min-h-[900px] relative mt-11'>
        <div className='absolute right-0 top-1 sm:top-6'>
          <div className='hidden lg:block w-[600px] h-[600px]'>
            <Image
              className='full-img'
              src={`/images/hero_img.png`}
              alt={`Calamar Textil`}
             fill={true}
            />
          </div>
        </div>
        <div className='flex flex-col gap-2 ml-0 lg:ml-8'>
          <h1 className='text-4xl lg:text-6xl sm:max-w-[400px] lg:max-w-[500px] xl:max-w-[700px] leading-12 mb-3 lg:mb-5'>
            La estampa que quieras en la tela que quieras.
          </h1>
          <p className='text-2xl mb-5 lg:mb-8'>
            Ahora la tela ideal para tu proyecto es posible!
          </p>
          <LinkButton className={`bg-white !text-black`} href='/telas'>
            Ver más
          </LinkButton>
        </div>
      </section>
      <div className="absolute w-full h-[30px] left-0 z-10 bg-[url('/images/waves/wave-fourth.svg')] bg-cover bg-bottom drop-shadow-[0_8px_4px_rgba(0,0,0,.1)]"></div>
    </div>
  );
};

export default Hero;
