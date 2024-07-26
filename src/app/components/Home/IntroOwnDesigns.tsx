import LinkButton from '@/app/components/LinkButton';
import Inner from '@/app/components/Inner';

const IntroOwnDesigns = () => {
  return (
    <div className='relative'>
      <section className='bg-primary-bg-color overflow-x-hidden'>
        <Inner>
          <>
            <div className='relative w-[600px] text-center h-28 mb-8 lg:h-44 lg:mb-12'>
              <p className='text-2xl font-semibold absolute -top-10 lg:-top-8 left-0 right-0 z-20'>
                ¿Queres estampar
              </p>
              <h2 className='text-4xl lg:text-6xl font-normal absolute -top-2 lg:top-0 left-0 right-0 w-[300px] lg:w-[500px] z-20 mx-auto my-0'>
                tus propios diseños?
              </h2>
              <div className='inline-bloock bg-fourth-bg-color w-[500px] h-[500px] lg:w-[600px] lg:h-[600px] mx-auto my-0 absolute -top-[400px] left-0 right-0 z-10 rounded-full'></div>
            </div>

            <p className='lg:text-2xl text-center max-w-[500px] mb-12'>
              Revisamos en detalle tus archivos para asegurarte un resultado
              perfecto.
            </p>
            <h2 className='text-center leading-10 mb-1 lg:mb-3 text-2xl lg:text-4xl'>
              Exclusividad garantizada
            </h2>
            <p className='lg:text-2xl mb-14 text-center max-w-[500px]'>
              Tus archivos serán utilizados únicamente en tus pedidos las veces
              que quieras.
            </p>
            <LinkButton href={`/envio-de-archivos`}>Ver más</LinkButton>
          </>
        </Inner>
      </section>
      <div className="absolute w-full h-[30px] left-0 z-10 bg-[url('/images/waves/wave-primary.svg')] bg-cover bg-bottom drop-shadow-[0_8px_4px_rgba(0,0,0,.1)]"></div>
    </div>
  );
};

export default IntroOwnDesigns;
