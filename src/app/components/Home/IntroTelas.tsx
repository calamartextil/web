import Inner from '@/app/components/Inner';
import LinkButton from '@/app/components/LinkButton';
import Image from 'next/image';
import Link from 'next/link';
const IntroTelas = () => {
  const telasUrl = process.env.NEXT_PUBLIC_IMAGES_URL + '/telas';
  const telas = [
    {
      image: `${telasUrl}/gabardina-impermeable-lisa.jpg`,
      name: 'Gabardina Impermeable',
      href: '/telas/GNA',
    },
    {
      image: `${telasUrl}/cordura-lisa.jpg`,
      name: 'Cordura',
      href: '/telas/COR',
    },
    {
      image: `${telasUrl}/gabardina-natural-lisa.jpg`,
      name: 'Gabardina Natural',
      href: '/telas/GNA',
    },
    {
      image: `${telasUrl}/tricot-lisa.jpg`,
      name: 'Tricot Común',
      href: '/telas/TRI',
    },
    {
      image: `${telasUrl}/polar-soft-liso.jpg`,
      name: 'Polar Soft',
      href: '/telas/GNA',
    },
    {
      image: `${telasUrl}/modal-soft-liso.jpg`,
      name: 'Modal Soft',
      href: '/telas/GNA',
    },
  ];
  return (
    <div className='relative'>
      <section className='bg-primary-bg-color'>
        <Inner>
          <>
            <h2 className='text-4xl lg:text-6xl mb-5'>Nuestras telas</h2>
            <p className='text-center text-sm lg:text-2xl mb-14 font-semibold'>
              Gran variedad de bases disponibles
            </p>
            <div className='grid mb-10 gap-3'>
              {telas.map(
                (
                  {
                    image,
                    name,
                    href,
                  }: { image: string; name: string; href: string },
                  index
                ) => (
                  <Link
                    className='col_4 col_mb_6 relative'
                    href={href}
                    key={index}
                  >
                    <div>
                      <div className='full-img-container'>
                        <Image
                          src={image}
                          sizes='100%'
                          fill={true}
                          alt={'tela'}
                          className='rounded-2xl full-img'
                        />
                      </div>
                      <div className='absolute bg-secondary-bg-color bottom-0 w-full rounded-b-2xl flex justify-center p-2 text-white font-semibold text-xs lg:text-xl uppercase text-center'>
                        {name}
                      </div>
                    </div>
                  </Link>
                )
              )}
            </div>
            <LinkButton href={`/telas`}>Ver más</LinkButton>
          </>
        </Inner>
      </section>
      <div className="absolute w-full h-[30px] left-0 z-10 bg-[url('/images/waves/wave-primary.svg')] bg-cover bg-bottom drop-shadow-[0_8px_4px_rgba(0,0,0,.1)]"></div>
    </div>
  );
};

export default IntroTelas;
