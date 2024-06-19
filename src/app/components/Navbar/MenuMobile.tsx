import { useState } from 'react';
import { useActivePath } from '@/app/utils/helpers';
import Link from 'next/link';
import { FaSquareFacebook, FaSquareInstagram, FaTiktok } from 'react-icons/fa6';

const navBarItems = [
  {
    name: 'Telas y precios',
    href: '/telas',
  },
  {
    name: 'Estampas',
    href: '/estampas',
  },
  // {
  //   name: 'Tu pedido',
  //   href: '/pedido',
  // },
  {
    name: 'Nosotros',
    href: '/nosotros',
  },
  {
    name: 'Contacto',
    href: '/contacto',
  },
  {
    name: 'Tienda de stock',
    href: 'https://calamartextil.com.ar/',
    externalLink: true,
  },
];

const MenuMobile = ({ isScroll }: { isScroll: boolean }) => {
  const checkActivePath = useActivePath();
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className='relative transition-all'>
      <button
        className='fixed top-4 right-10 z-50 rounded-md text-black'
        onClick={toggleMenu}
      >
        <svg
          className='w-6 h-6'
          fill='none'
          stroke='currentColor'
          viewBox='0 0 24 24'
          xmlns='http://www.w3.org/2000/svg'
        >
          {isOpen ? (
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              strokeWidth={2}
              d='M6 18L18 6M6 6l12 12'
            />
          ) : (
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              strokeWidth={2}
              d='M4 6h16M4 12h16M4 18h16'
            />
          )}
        </svg>
      </button>

      {isOpen && (
        <>
          <div
            className={`fixed ${
              isScroll ? `top-[54px]` : `top-[62px]`
            } right-0 h-30vh w-full bg-fourth-bg-color shadow-lg h-[300px] rounded-2xl pt-20 z-50`}
          >
            <nav className='font-outfit font-semibold text-md h-full'>
              <ul className='flex flex-col justify-center items-center gap-3'>
                {navBarItems.map(({ name, href, externalLink }, index) => (
                  <li key={index}>
                    <Link
                      href={href}
                      target={externalLink ? '_blank' : ''}
                      className={checkActivePath(href) ? 'active' : ''}
                      onClick={() => setIsOpen(false)}
                    >
                      {name}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          </div>
          <div
            onClick={() => setIsOpen(false)}
            className='bg-white top-0 right-0 opacity-90 fixed w-full h-full -z-10'
          ></div>
        </>
      )}
    </div>
  );
};

export default MenuMobile;
