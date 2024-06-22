'use client';

import Link from 'next/link';
import { useActivePath } from '@/app/utils/helpers';
import { estampasCategories } from '@/app/database/staticContent';

export default function Sidebar() {
  const checkActivePath = useActivePath();
  return (
    <div className='sidebar w-[250px]'>
      <h1 className='mb-8'>Catálogos</h1>
      <nav>
        <ul>
          {estampasCategories.map(({ title, href }, index) => (
            <li key={index} className={`w-full`}>
              <Link
                href={href}
                className={`block w-full mb-2 rounded-2xl hover:bg-secondary-bg-color hover:bg-opacity-0 ${
                  checkActivePath(href)
                    ? 'bg-secondary-bg-color'
                    : 'bg-primary-bg-color'
                } py-2 pl-6 transition-all`}
              >
                {title}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
}
