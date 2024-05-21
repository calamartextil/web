import LinkButton from '@/app/components/LinkButton';


const Hero = () => {
  return (
    <div className="relative">
    <section className='bg-fourth-bg-color relative'>
      <div className='flex flex-col gap-2 ml-7'>
        <h1>La estampa que quieras en la tela que quieras</h1>
        <p>Ahora la tela ideal para tu proyecto es posible</p>
        <LinkButton className='bg-white text-black' href='/telas'>Ver telas</LinkButton>
      </div>
    </section>
    <div className="absolute w-full h-[54px] left-0 z-10 bg-[url('/images/ondas_purple_bottom.svg')] bg-cover bg-bottom"></div>
    </div>
  );
};

export default Hero;
