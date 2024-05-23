import Inner from '@/app/components/Inner';
import LinkButton from '@/app/components/LinkButton';
import Image from 'next/image';
const IntroStock = () => {
  const telas = [
    {
      image: '/images/ui-estampas/AB-001.jpg',
    },
    {
      image: '/images/ui-estampas/AN-001.jpg',
    },
    {
      image: '/images/ui-estampas/AN-002.jpg',
    },
    {
      image: '/images/ui-estampas/CM-001.jpg',
    },
    {
      image: '/images/ui-estampas/KD-001.jpg',
    },
    {
      image: '/images/ui-estampas/BO-001..jpg',
    },
  ];
  return (
    <div className='relative'>
      <section>
        <Inner>
          <>
            <h2>Tienda de stock</h2>
            <p className='mb-10'>Telas listas para que te las lleves.</p>
            <div className='grid mb-8'>
              {telas.map(({ image }: { image: string }, index) => (
                <div key={index} className='col_4 col_mb_6'>
                  <div className='relative w-[300px] h-[300px] block'>
                    <Image
                      src={image}
                      fill={true}
                      alt={'tela'}
                      className='rounded-2xl'
                    />
                  </div>
                </div>
              ))}
            </div>
            <LinkButton href={`/estampas`}>Ver más</LinkButton>
          </>
        </Inner>
      </section>
      <div className="absolute w-full h-[54px] left-0 z-10 bg-[url('/images/ondas.png')] bg-cover bg-bottom drop-shadow-[0_8px_4px_rgba(0,0,0,.1)]"></div>
    </div>
  );
};

export default IntroStock;
