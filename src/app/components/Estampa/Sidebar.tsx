'use client';

import Link from 'next/link';
import { useActivePath } from '@/app/utils/helpers';

export default function Sidebar() {
  const checkActivePath = useActivePath();

  const categories = [
    {
      name: 'Botánico',
      href: '/estampas/catalogo/botanico',
    },
    {
      name: 'Animales',
      href: '/estampas/catalogo/animales',
    },

  ];

  return (
    <div className='sidebar w-[250px]'>
      <h1 className='mb-8'>Catálogos</h1>
      <nav>
        <ul>
          {categories.map(({ name, href }, index) => (
            <li
              key={index}
              className={`w-full`}
            >
              <Link href={href} className={`block w-full mb-2 rounded-2xl hover:bg-secondary-bg-color hover:bg-opacity-0 ${
                checkActivePath(href) ? 'bg-secondary-bg-color' : 'bg-primary-bg-color'
              } py-2 pl-6`}>{name}</Link>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
}
