import CartContainer from '@/app/components/Cart/CartContainer';
import CartPrice from '@/app/components/Cart/CartPrice';

export default function Cart() {
  return (
    <div className='pt-40 lg:pt-52 px-10'>
      <div className='flex flex-col md:flex-row justify-between items-center lg:items-start w-full mb-3'>
        <h1 className='font-display text-4xl md:text-6xl mb-5'>
          Tu pedido{' '}
          <span className=' font-outfit font-light text-lg leading-none'>
            (Paso 3)
          </span>
        </h1>
        <CartPrice />
      </div>
      <CartContainer />
    </div>
  );
}
