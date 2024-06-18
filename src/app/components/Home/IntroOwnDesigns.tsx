import LinkButton from '@/app/components/LinkButton';
import Inner from '@/app/components/Inner';

const IntroOwnDesigns = () => {
  return (
    <div className='relative'>
      <section className='bg-primary-bg-color overflow-y-hidden'>
        <Inner>
          <>
            <div className='relative w-[600px] text-center h-44 mb-8'>
              <p className='text-2xl font-semibold absolute -top-8 left-0 right-0 z-20'>
                ¿Queres estampar
              </p>
              <h2 className='text-7xl font-normal absolute top-0 left-0 right-0 w-[600px] z-20 mx-auto my-0'>
                tus propios diseños?
              </h2>
              <div className='inline-bloock bg-fourth-bg-color w-[600px] h-[600px] mx-auto my-0 absolute -top-[400px] left-0 right-0 z-10 rounded-full'></div>
            </div>

            <p className='text-2xl text-center max-w-[500px] mb-12'>
              Envianos tus archivos y los revisamos en detalle para asegurarnos
              que estén bien y que en la tela se vayan a ver perfectos.
            </p>
            <h2>Exclusividad garantizada</h2>
            <p className='mb-10'>
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
