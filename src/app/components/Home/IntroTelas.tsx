import Inner from '@/app/components/Inner';
import LinkButton from '@/app/components/LinkButton';
import Image from 'next/image';
const IntroTelas = () => {
  const telas = [
    {
      image: '/images/dummy/telas/BATISTA-stampada.jpg',
    },
    {
      image: '/images/dummy/telas/CEY-estampada.jpg',
    },
    {
      image: '/images/dummy/telas/CIRE-OPACO-estampada.jpg',
    },
    {
      image: '/images/dummy/telas/CORDURA..jpg',
    },
    {
      image: '/images/dummy/telas/BATISTA-stampada.jpg',
    },
    {
      image: '/images/dummy/telas/CEY-estampada.jpg',
    },
  ];
  return (
    <div className='relative'>
      <section className='bg-primary-bg-color'>
        <Inner>
          <>
            <h2>Nuestras telas</h2>
            <p className='mb-10'>Gran variedad de bases disponibles</p>
            <div className='grid mb-8'>
              {telas.map(({ image }: { image: string }, index) => (
                <div key={index} className='col_4 col_mb_6'>
                  <div className='full-img-container'>
                    <Image
                      src={image}
                      sizes='100%'
                      fill={true}
                      alt={'tela'}
                      className='rounded-2xl full-img'
                    />
                  </div>
                </div>
              ))}
            </div>
            <LinkButton href={`/telas`}>Ver más</LinkButton>
          </>
        </Inner>
      </section>
      <div className="absolute w-full h-[54px] left-0 z-10 bg-[url('/images/ondas_cream_bottom.svg')] bg-cover bg-bottom drop-shadow-[0_8px_4px_rgba(0,0,0,.1)]"></div>
    </div>
  );
};

export default IntroTelas;
