import Inner from '@/app/components/Inner';
import LinkButton from '@/app/components/LinkButton';
import IconItem from '@/app/components/IconItem';

const IntroEstampas = () => {
  const estampas = [
    {
      title: 'Botanico',
      description: 'Flores y muchos colores.',
      image: '/images/icons/Botanico.svg',
      href: '/estampas/catalogo/botanico',
    },
    {
      title: 'Animales',
      description: '¡Miauuuuuuu!',
      image: '/images/icons/Animales.svg',
      href: '/estampas/catalogo/animales',
    },
    {
      title: 'Kids',
      description: 'Para los más pequeños.',
      image: '/images/icons/Kids.svg',
      href: '/estampas/catalogo/kids',
    },
    {
      title: 'Popurri',
      description: 'De todo un poco.',
      image: '/images/icons/Popurri.svg',
      href: '/estampas/catalogo/popurri',
    },
    {
      title: 'Comida',
      description: 'Muchas cosas ricas.',
      image: '/images/icons/Comida.svg',
      href: '/estampas/catalogo/comida',
    },
    {
      title: 'Abstracto',
      description: 'Un mundo de formas.',
      image: '/images/icons/Abstracto.svg',
      href: '/estampas/catalogo/abstracto',
    },
    {
      title: 'Básicos',
      description: 'Para armar combinaciones.',
      image: '/images/icons/Basicos.svg',
      href: '/estampas/catalogo/basicos',
    },
    {
      title: '¡Tu diseño!',
      description: 'Tu sueño. Tus ideas. ',
      image: '/images/icons/Tu-diseno.svg',
      href: '/estampas/catalogo/tu-diseno',
    },
  ];

  return (
    <div className='relative'>
      <section>
        <Inner>
          <>
            <h2 className='text-center'>Catálogo de estampas</h2>
            <p className='text-center mb-10'>
              Más de mil diseños para que elijas
            </p>
            <div className='grid w-full mb-10'>
              {estampas.map(({ title, description, image, href }, index) => (
                <div key={index} className='col_3 col_tb_6 col_mb_6 mb-5'>
                  <IconItem
                    title={title}
                    description={description}
                    image={image}
                    href={href}
                  />
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

export default IntroEstampas;
