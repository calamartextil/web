'use client';

import Link from 'next/link';
import { useActivePath } from '@/app/utils/helpers';

export default function Sidebar() {
  const checkActivePath = useActivePath();

  const categories = [
    {
      name: 'Plana',
      href: '/telas/categoria/tela-plana',
    },
    {
      name: 'Punto',
      href: '/telas/categoria/tela-de-punto',
    },
    {
      name: 'Indumentaria',
      href: '/telas/categoria/tela-para-indumentaria',
    },
    {
      name: 'Decoración',
      href: '/telas/categoria/tela-para-decoracion',
    },
    {
      name: 'Con elastano',
      href: '/telas/categoria/tela-con-elastano',
    },
    {
      name: 'Impermeable',
      href: '/telas/categoria/tela-impermeable',
    },
    {
      name: 'Algodón',
      href: '/telas/categoria/tela-de-algodon',
    },
    {
      name: 'Poliéster',
      href: '/telas/categoria/tela-de-poliester',
    },
  ];

  return (
    <div className='sidebar w-[250px]'>
      <h1 className='mb-8'>Categorías</h1>
      <nav>
        <ul>
          {categories.map(({ name, href }, index) => (
            <li
              key={index}
              className={`mb-2 rounded-2xl hover:bg-secondary-bg-color hover:bg-opacity-0 ${
                checkActivePath(href) ? 'bg-secondary-bg-color' : 'bg-primary-bg-color'
              } py-2 pl-6`}
            >
              <Link href={href} className='w-full h-full'>{name}</Link>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
}
