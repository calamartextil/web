import LinkButton from '@/app/components/LinkButton';
import Inner from '@/app/components/Inner';

const IntroOwnDesigns = () => {
  return (
    <div className='relative'>
      <section className='bg-primary-bg-color'>
        <Inner>
          <>
            <p className='text-2xl font-normal'>¿Queres estampar</p>
            <div className='relative w-[400px] text-center h-36 mb-8'>
              <h2 className='text-7xl font-normal absolute top-0 left-0 right-0 w-[400px] z-20 mx-auto my-0'>
                tus propios diseños?
              </h2>
              <div className='inline-bloock bg-fourth-bg-color w-[400px] h-[70px] mx-auto my-0 absolute top-10 left-0 right-0 z-10 rounded-full'></div>
            </div>

            <p className='text-2xl text-center max-w-[500px] mb-12'>
              Envianos tus archivos y los revisamos en detalle para asegurarnos
              que estén bien y que en la tela se vayan a ver perfectos.
            </p>
            <h2>Exclusividad garantizada</h2>
            <p>
              Tus archivos serán utilizados únicamente en tus pedidos las veces
              lo necesites.
            </p>
            <LinkButton href={`/telas`}>Ver más</LinkButton>
          </>
        </Inner>
      </section>
      <div className="absolute w-full h-[54px] left-0 z-10 bg-[url('/images/ondas_cream_bottom.svg')] bg-cover bg-bottom drop-shadow-[0_8px_4px_rgba(0,0,0,.1)]"></div>
    </div>
  );
};

export default IntroOwnDesigns;
