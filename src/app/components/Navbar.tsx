import Image from 'next/image';
import Link from 'next/link';
import {
  FaCartShopping,
  FaSquareFacebook,
  FaSquareInstagram,
} from 'react-icons/fa6';

const Navbar = () => {
  const navBarItems = [
    {
      name: 'Telas y precios',
      href: '/telas',
    },
    {
      name: 'Estampas',
      href: '/estampas',
    },
    {
      name: 'Tu pedido',
      href: '/pedido',
    },
    {
      name: 'Nosotros',
      href: '/nosotros',
    },
    {
      name: 'Contacto',
      href: '/contacto',
    },
  ];

  return (
    <div className='fixed top-0 z-50 w-full'>
      <div className='relative'>
        <div className='flex justify-between items-center px-10 pt-1 h-[105px] bg-primary-bg-color'>
          <div className='relative w-20 h-20'>
            <Image src='/images/logo-color.svg' fill={true} alt='Calamar' />
          </div>
          <nav className='hidden md:block font-outfit font-semibold text-md'>
            <ul className='flex justify-center items-center gap-20'>
              {navBarItems.map(({ name, href }, index) => (
                <li key={index}>
                  <Link href={href}>{name}</Link>
                </li>
              ))}
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
        <div className="absolute w-full h-[54px] left-0 z-10 bg-[url('/images/ondas_cream_bottom.svg')] bg-cover bg-bottom drop-shadow-[0_8px_4px_rgba(0,0,0,.1)]"></div>
      </div>
    </div>
  );
};

export default Navbar;
