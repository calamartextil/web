import LinkButton from '@/app/components/LinkButton';
import Inner from '@/app/components/Inner';

const IntroOwnDesigns = () => {
  return (
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
          <LinkButton href={`/telas`} invert={true}>
            Ver más
          </LinkButton>
        </>
      </Inner>
    </section>
  );
};

export default IntroOwnDesigns;
