import LinkButton from '@/app/components/LinkButton';
import Image from 'next/image';

const Hero = () => {
  return (
    <div className='relative'>
      <section className='bg-fourth-bg-color pt-60 min-h-[900px] relative mt-11'>
        <div className='absolute right-0 top-6'>
          <Image src={`/images/hero_img.png`} alt={`Calamar Textil`} width={700} height={700} />
        </div>
        <div className='flex flex-col gap-2 ml-16'>
          <h1 className='text-6xl max-w-[700px] leading-12 mb-5'>
            La estampa que quieras en la tela que quieras.
          </h1>
          <p className='text-xl mb-8'>
            Ahora la tela ideal para tu proyecto es posible!
          </p>
          <LinkButton className={`bg-white !text-black`} href='/telas'>
            Ver más
          </LinkButton>
        </div>
      </section>
      <div className="absolute w-full h-[54px] left-0 z-10 bg-[url('/images/ondas_purple_bottom.svg')] bg-cover bg-bottom drop-shadow-[0_8px_4px_rgba(0,0,0,.1)]"></div>
    </div>
  );
};

export default Hero;
