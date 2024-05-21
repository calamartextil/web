import Inner from '@/app/components/Inner';
import NumberItem from '@/app/components/NumberItem';

const IntroSteps = () => {
  return (
    <div className='relative'>
      <section className='bg-secondary-bg-color'>
        <Inner>
          <>
            <h2>Tu tela ideal</h2>
            <p>en 3 simples pasos</p>
            <div className='grid'>
              <div className='col_4'>
                <NumberItem
                  image={'/images/dummy/dummyNumber.png'}
                  icon={'/images/dummy/dummyIcon.png'}
                  alt={'Paso 1'}
                  title='Elegí la tela'
                  caption='Ver todas'
                  description='Hay gran variedad de bases'
                  href='/telas'
                />
              </div>
              <div className='col_4'>
                <NumberItem
                  image={'/images/dummy/dummyNumber.png'}
                  icon={'/images/dummy/dummyIcon.png'}
                  alt={'Paso 1'}
                  title='Elegí las estampas y su tamaño'
                  caption='Estampas'
                  description='Tu producto a tu medida'
                  href='/estampas'
                />
              </div>
              <div className='col_4'>
                <NumberItem
                  image={'/images/dummy/dummyNumber.png'}
                  icon={'/images/dummy/dummyIcon.png'}
                  alt={'Paso 1'}
                  title='Envianos tu pedido'
                  caption='Pedido'
                  description='Y listo'
                  href='/cart'
                />
              </div>
            </div>
          </>
        </Inner>
      </section>
      <div className="absolute w-full h-[54px] left-0 z-10 bg-[url('/images/ondas_orange_bottom.svg')] bg-cover bg-bottom"></div>
    </div>
  );
};

export default IntroSteps;
