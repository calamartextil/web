import Image from 'next/image';
import Link from 'next/link';
import {
  FaCartShopping,
  FaSquareFacebook,
  FaSquareInstagram,
} from 'react-icons/fa6';

const Navbar = () => {
  return (
    <div className='relative'>
      <div className='flex justify-between items-center px-10 h-[120px]'>
        <div>
          <Image src='images/logo.svg' width={80} height={80} alt='Calamar' />
        </div>
        <nav>
          <ul className='flex justify-center items-center gap-6'>
            <li>
              <Link href='/telas'>Telas y precios</Link>
            </li>
            <li>
              <Link href='/telas'>Estampas</Link>
            </li>
            <li>
              <Link href='/telas'>Tu pedido</Link>
            </li>
            <li>
              <Link href='/telas'>Nosotros</Link>
            </li>
            <li>
              <Link href='/telas'>Contacto</Link>
            </li>
          </ul>
        </nav>
        <div className='flex justify-center items-center gap-2'>
          <a href=''>
            <FaSquareInstagram size='20' color='#F4C6E3' />
          </a>
          <a href=''>
            <FaSquareFacebook size='20' color='#F4C6E3' />
          </a>
          <FaCartShopping size='20' color='#F4C6E3' />
        </div>
      </div>
      <div className="absolute w-full h-[54px] left-0 z-10 bg-[url('/images/ondas.png')] bg-cover bg-bottom">
      </div>
    </div>
  );
};

export default Navbar;
