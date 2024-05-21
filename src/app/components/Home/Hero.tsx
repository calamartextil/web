import LinkButton from '@/app/components/LinkButton';

const Hero = () => {
  return (
    <section className='bg-fourth-bg-color'>
      <div>
        <h1>La estampa que quieras en la tela que quieras</h1>
        <p>Ahora la tela ideal para tu proyecto es posible</p>
        <LinkButton href='/telas'>Ver telas</LinkButton>
      </div>
    </section>
  );
};

export default Hero;
