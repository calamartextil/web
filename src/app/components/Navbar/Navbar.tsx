import Image from 'next/image';
import Link from 'next/link';
import { FaSquareFacebook, FaSquareInstagram } from 'react-icons/fa6';
import CartIcon from '@/app/components/Navbar/CartIcon';
import Menu from '@/app/components/Navbar/Menu';

const Navbar = () => {

  return (
    <div className='fixed top-0 z-50 w-full'>
      <div className='relative'>
        <div className='flex justify-between items-center px-20 pt-1 h-[105px] bg-primary-bg-color'>
          <Link href='/'>
            <div className='relative w-20 h-20'>
              <Image src='/images/logo.svg' fill={true} alt='Calamar' />
            </div>
          </Link>
          <Menu />
          
          <div className='flex justify-center items-center gap-4'>
            <a href=''>
              <FaSquareInstagram size='30' color='#F4C6E3' />
            </a>
            <a href=''>
              <FaSquareFacebook size='30' color='#F4C6E3' />
            </a>
            <CartIcon />
          </div>
        </div>
        <div className="absolute w-full h-[54px] left-0 z-10 bg-[url('/images/ondas_cream_bottom.svg')] bg-cover bg-bottom drop-shadow-[0_8px_4px_rgba(0,0,0,.1)]"></div>
      </div>
    </div>
  );
};

export default Navbar;
