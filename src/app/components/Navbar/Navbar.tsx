import Image from 'next/image';
import Link from 'next/link';
import { FaSquareFacebook, FaSquareInstagram, FaTiktok } from 'react-icons/fa6';
import CartIcon from '@/app/components/Navbar/CartIcon';
import Menu from '@/app/components/Navbar/Menu';

const Navbar = ({ isScroll }: { isScroll: boolean }) => {
  return (
    <div className='fixed top-0 z-50 w-full'>
      <div className='relative'>
        <div
          className={`flex justify-between items-center px-20 pt-1 transition-all ${
            isScroll ? `h-[50px] pt-3` : `h-[105px]`
          } bg-primary-bg-color`}
        >
          <div className='w-32'>
            <Link href='/'>
              <div
                className={`relative ${isScroll ? `w-32 h-20` : `w-24 h-24`}`}
              >
                <Image
                  src={`/images/${isScroll ? `logo-h.svg` : `logo.svg`}`}
                  fill={true}
                  alt='Calamar'
                />
              </div>
            </Link>
          </div>

          <Menu />

          <div className='flex justify-center items-center gap-4 min-w-40'>
            <a href='https://www.instagram.com/calamartextil/' target='_blank'>
              <FaSquareInstagram
                size={isScroll ? `20` : `30`}
                color='#F4C6E3'
              />
            </a>
            <a href='https://www.facebook.com/calamartextil' target='_blank'>
              <FaSquareFacebook size={isScroll ? `20` : `30`} color='#F4C6E3' />
            </a>
            <a href='https://www.tiktok.com/@calamartextil' target='_blank'>
              <FaTiktok size={isScroll ? `20` : `30`} color='#F4C6E3' />
            </a>
            <CartIcon isScroll={isScroll} />
          </div>
        </div>
        <div className="absolute w-full h-[30px] -bottom-[30px] left-0 z-10 bg-[url('/images/waves/wave-primary.svg')] bg-cover bg-bottom drop-shadow-[0_8px_4px_rgba(0,0,0,.1)]"></div>
      </div>
    </div>
  );
};

export default Navbar;
