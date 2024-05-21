import Inner from '@/app/components/Inner';
import LinkButton from '@/app/components/LinkButton';
import IconItem from '@/app/components/IconItem';

const IntroEstampas = () => {
  const estampas = [
    {
      title: 'Botanico',
      description: 'Flores y más',
      image: '/images/dummy/dummyIconAlt.png',
      href: '/estampas/?cat=botanico',
    },
    {
      title: 'Botanico',
      description: 'Flores y más',
      image: '/images/dummy/dummyIconAlt.png',
      href: '/estampas/?cat=botanico',
    },
    {
      title: 'Botanico',
      description: 'Flores y más',
      image: '/images/dummy/dummyIconAlt.png',
      href: '/estampas/?cat=botanico',
    },
    {
      title: 'Botanico',
      description: 'Flores y más',
      image: '/images/dummy/dummyIconAlt.png',
      href: '/estampas/?cat=botanico',
    },
    {
      title: 'Botanico',
      description: 'Flores y más',
      image: '/images/dummy/dummyIconAlt.png',
      href: '/estampas/?cat=botanico',
    },
    {
      title: 'Botanico',
      description: 'Flores y más',
      image: '/images/dummy/dummyIconAlt.png',
      href: '/estampas/?cat=botanico',
    },
    {
      title: 'Botanico',
      description: 'Flores y más',
      image: '/images/dummy/dummyIconAlt.png',
      href: '/estampas/?cat=botanico',
    },
    {
      title: 'Botanico',
      description: 'Flores y más',
      image: '/images/dummy/dummyIconAlt.png',
      href: '/estampas/?cat=botanico',
    },
  ];

  return (
    <section>
      <Inner>
        <>
          <h2>Catálogo de estampas</h2>
          <p>Más de mil diseños para que elijas</p>
          <div className='grid'>
            {estampas.map(({ title, description, image, href }, index) => (
              <div key={index} className='col_3'>
                <IconItem
                  title={title}
                  description={description}
                  image={image}
                  href={href}
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

export default IntroEstampas;
