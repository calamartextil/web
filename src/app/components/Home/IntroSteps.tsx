import Inner from '@/app/components/Inner';
import NumberItem from '@/app/components/Home/NumberItem';
import LinkButton from '@/app/components/LinkButton';

const IntroSteps = () => {
  return (
    <div className='relative'>
      <section className='bg-secondary-bg-color'>
        <Inner>
          <>
            <h2 className='font-outfit text-2xl mb-1 font-semibold'>
              Tu tela ideal
            </h2>
            <p className='font-display text-4xl lg:text-6xl text-black mb-10 lg:mb-20 text-center'>
              en 3 simples pasos
            </p>
            <div className='grid'>
              <div className='col_4'>
                <NumberItem
                  step={'1'}
                  icon={'/images/icons/Tela.svg'}
                  alt={'Paso 1'}
                  title='ELEGÍ LA TELA'
                  caption='Ver todas'
                  description='Hay gran variedad de bases'
                  href='/telas'
                />
              </div>
              <div className='col_4'>
                <NumberItem
                  step={'2'}
                  icon={'/images/icons/Estampa.svg'}
                  alt={'Paso 1'}
                  title='ELEGÍ LAS ESTAMPAS'
                  caption='Estampas'
                  description='Tu producto a tu medida'
                  href='/estampas'
                />
              </div>
              <div className='col_4'>
                <NumberItem
                  step={'3'}
                  icon={'/images/icons/Pedido.svg'}
                  alt={'Paso 1'}
                  title='ENVIANOS TU PEDIDO'
                  caption='Pedido'
                  description='¡Y listo!'
                  href='/pedido'
                />
              </div>
            </div>
            <div className='mt-8 flex'>
              <LinkButton href={'/telas'} invert={true}>
                Comenzar
              </LinkButton>
            </div>
          </>
        </Inner>
      </section>
      <div className="absolute w-full h-[30px] left-0 z-20 bg-[url('/images/waves/wave-secondary.svg')] bg-cover bg-bottom drop-shadow-[0_8px_4px_rgba(0,0,0,.1)]"></div>
    </div>
  );
};

export default IntroSteps;
