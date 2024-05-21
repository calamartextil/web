import LinkButton from '@/app/components/LinkButton';
import Inner from '@/app/components/Inner';

const IntroOwnDesigns = () => {
  return (
    <div className='relative'>
    <section className='bg-primary-bg-color'>
      <Inner>
        <>
          <h2>
            <span>Querés estampar</span> tus propios diseños?
          </h2>
          <p>
            Envianos tus archivos y los revisamos en detalle para asegurarnos
            que estén bien y que en la tela se vayan a ver perfectos.
          </p>
          <h3>Exclusividad garantizada</h3>
          <p>
            Tus archivos serán utilizados únicamente en tus pedidos las veces lo
            necesites.
          </p>
          <LinkButton href={`/telas`}>
            Ver más
          </LinkButton>
        </>
      </Inner>
    </section>
    <div className="absolute w-full h-[54px] left-0 z-10 bg-[url('/images/ondas_cream_bottom.svg')] bg-cover bg-bottom">
      </div>
    </div>
  );
};

export default IntroOwnDesigns;
