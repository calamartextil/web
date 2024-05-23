import Inner from '@/app/components/Inner';
import LinkButton from '@/app/components/LinkButton';
import Image from 'next/image';
const IntroTelas = () => {
  const telas = [
    {
      image: '/images/dummy/dummyTela.png',
    },
    {
      image: '/images/dummy/dummyTela.png',
    },
    {
      image: '/images/dummy/dummyTela.png',
    },
    {
      image: '/images/dummy/dummyTela.png',
    },
    {
      image: '/images/dummy/dummyTela.png',
    },
    {
      image: '/images/dummy/dummyTela.png',
    },
  ];
  return (
    <div className='relative'>
      <section className='bg-primary-bg-color'>
        <Inner>
          <>
            <h2>Nuestras telas</h2>
            <p>Gran variedad de bases disponibles</p>
            <div className='grid'>
              {telas.map((tela, index) => (
                <div key={index} className='col_4 col_mb_6'>
                  <Image
                    src={'/images/dummy/dummyTela.png'}
                    width={200}
                    height={200}
                    alt={'tela'}
                  />
                </div>
              ))}
            </div>
            <LinkButton href={`/estampas`}>Ver más</LinkButton>
          </>
        </Inner>
      </section>
      <div className="absolute w-full h-[54px] left-0 z-10 bg-[url('/images/ondas_cream_bottom.svg')] bg-cover bg-bottom drop-shadow-[0_8px_4px_rgba(0,0,0,.1)]"></div>
    </div>
  );
};

export default IntroTelas;
