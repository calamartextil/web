'use client';
import { useActivePath } from '@/app/utils/helpers';
import Link from 'next/link';

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

export default function Menu() {
  const checkActivePath = useActivePath();
  return (
    <nav className='hidden md:block font-outfit font-semibold text-md'>
      <ul className='flex justify-center items-center gap-20'>
        {navBarItems.map(({ name, href, externalLink }, index) => (
          <li key={index}>
            <Link href={href} target={externalLink ? '_blank' : '' } className={checkActivePath(href) ? 'active' : ''}>
              {name}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
