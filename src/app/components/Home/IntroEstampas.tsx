import Inner from '@/app/components/Inner';
import LinkButton from '@/app/components/LinkButton';
import IconItem from '@/app/components/IconItem';
import { estampasCategories } from '@/app/database/staticContent';

const IntroEstampas = () => {
  return (
    <div className='relative'>
      <section>
        <Inner>
          <>
            <h2 className='text-center leading-12 text-4xl mb-5 lg:text-6xl'>
              Catálogo de estampas
            </h2>
            <p className='text-center text-sm lg:text-2xl mb-14 font-semibold'>
            ¡Muchos diseños para que elijas!
            </p>
            <div className='grid w-full mb-10'>
              {estampasCategories.map(
                ({ title, description, image, href }, index) => (
                  <div key={index} className='col_3 col_tb_6 col_mb_6 mb-5'>
                    <IconItem
                      title={title}
                      description={description}
                      image={image}
                      href={href}
                    />
                  </div>
                )
              )}
              <div className='col_3 col_tb_6 col_mb_6 mb-5'>
                <IconItem
                  title={`¡Tu diseño!`}
                  description={`Tu sueño. Tus ideas`}
                  image={`/images/icons/Tu-diseno.svg`}
                  href={`/estampas`}
                />
              </div>
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
