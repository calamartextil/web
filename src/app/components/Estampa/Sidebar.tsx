'use client';

import Link from 'next/link';
import { useActivePath } from '@/app/utils/helpers';

export default function Sidebar() {
  const checkActivePath = useActivePath();

  const categories = [
    {
      name: 'Botanico',
      description: 'Flores y muchos colores.',
      image: '/images/icons/Botanico.svg',
      href: '/estampas/catalogo/botanico',
    },
    {
      name: 'Animales',
      description: '¡Miauuuuuuu!',
      image: '/images/icons/Animales.svg',
      href: '/estampas/catalogo/animales',
    },
    {
      name: 'Kids',
      description: 'Para los más pequeños.',
      image: '/images/icons/Kids.svg',
      href: '/estampas/catalogo/kids',
    },
    {
      name: 'Popurri',
      description: 'De todo un poco.',
      image: '/images/icons/Popurri.svg',
      href: '/estampas/catalogo/popurri',
    },
    {
      name: 'Comida',
      description: 'Muchas cosas ricas.',
      image: '/images/icons/Comida.svg',
      href: '/estampas/catalogo/comida',
    },
    {
      name: 'Abstracto',
      description: 'Un mundo de formas.',
      image: '/images/icons/Abstracto.svg',
      href: '/estampas/catalogo/abstracto',
    },
    {
      name: 'Básicos',
      description: 'Para armar combinaciones.',
      image: '/images/icons/Basicos.svg',
      href: '/estampas/catalogo/basicos',
    },
  ];

  return (
    <div className='sidebar w-[250px]'>
      <h1 className='mb-8'>Catálogos</h1>
      <nav>
        <ul>
          {categories.map(({ name, href }, index) => (
            <li key={index} className={`w-full`}>
              <Link
                href={href}
                className={`block w-full mb-2 rounded-2xl hover:bg-secondary-bg-color hover:bg-opacity-0 ${
                  checkActivePath(href)
                    ? 'bg-secondary-bg-color'
                    : 'bg-primary-bg-color'
                } py-2 pl-6 transition-all`}
              >
                {name}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
}
