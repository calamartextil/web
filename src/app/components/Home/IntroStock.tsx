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
                  <div className='full-img-container block'>
                    <Image
                      src={image}
                      fill={true}
                      alt={'tela'}
                      className='rounded-2xl full-img'
                    />
                  </div>
                </div>
              ))}
            </div>
            <LinkButton href={`/estampas`}>Ver más</LinkButton>
          </>
        </Inner>
      </section>
    </div>
  );
};

export default IntroStock;
