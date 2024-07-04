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
    <section className='pb-52'>
      <Inner>
        <>
          <h2 className='text-4xl lg:text-6xl mb-5'>Tienda de stock</h2>
          <p className='text-center text-sm lg:text-2xl mb-14 font-semibold'>
            Telas listas para que te las lleves.
          </p>
          <div className='grid mb-10 gap-3'>
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
          <LinkButton externalLink={true} href={`https://tienda.calamartextil.com`}>
            Visitar tienda
          </LinkButton>
        </>
      </Inner>
    </section>
  );
};

export default IntroStock;
