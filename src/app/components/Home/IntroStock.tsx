import Inner from '@/app/components/Inner';
import LinkButton from '@/app/components/LinkButton';
import Image from 'next/image';
const IntroStock = () => {
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
      <section>
        <Inner>
          <>
            <h2>Tienda de stock</h2>
            <p>Telas listas para que te las lleves</p>
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
      <div className="absolute w-full h-[54px] left-0 z-10 bg-[url('/images/ondas.png')] bg-cover bg-bottom"></div>
    </div>
  );
};

export default IntroStock;
