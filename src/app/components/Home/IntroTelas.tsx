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
          <LinkButton href={`/estampas`} invert={true}>
            Ver más
          </LinkButton>
        </>
      </Inner>
    </section>
  );
};

export default IntroTelas;
