import CartContainer from '@/app/components/Cart/CartContainer';
import CartPrice from '@/app/components/Cart/CartPrice';

export default function Cart() {
  return (
    <div className='pt-52 px-28 pb-56'>
      <div className='flex justify-between items-center w-full'>
        <h1 className='font-display text-5xl'>Tu pedido</h1>
        <CartPrice />
      </div>
      <CartContainer />
    </div>
  );
}
