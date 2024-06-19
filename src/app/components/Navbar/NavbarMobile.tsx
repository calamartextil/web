import Image from 'next/image';
import Link from 'next/link';
import CartIcon from '@/app/components/Navbar/CartIcon';
import MenuMobile from '@/app/components/Navbar/MenuMobile';

const NavbarMobile = ({ isScroll }: { isScroll: boolean }) => {
  return (
    <div className='fixed top-0 right-0 z-50 w-full'>
      <div className='relative'>
        <div
          className={`flex justify-between items-center px-5 pt-2 transition-all ${
            isScroll ? `h-[50px]` : `h-[50px]`
          } bg-primary-bg-color`}
        >
          <div className='w-32'>
            <Link href='/'>
              <div
                className={`relative ${isScroll ? `w-32 h-24` : `w-32 h-24`}`}
              >
                <Image src={`/images/logo-h.svg`} fill={true} alt='Calamar' />
              </div>
            </Link>
          </div>

          <div className='flex justify-center items-center gap-4 min-w-36'>
            <CartIcon isScroll={isScroll} />
            <MenuMobile isScroll={isScroll} />
          </div>
        </div>
        <div
          className={`fixed w-full ${
            isScroll ? `h-[54px]` : `h-[55px]`
          } top-12 left-0 z-50 bg-[url('/images/ondas_cream_bottom.svg')] bg-cover bg-bottom drop-shadow-[0_8px_4px_rgba(0,0,0,.1)]`}
        ></div>
      </div>
    </div>
  );
};

export default NavbarMobile;
