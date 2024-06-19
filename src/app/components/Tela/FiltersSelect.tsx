'use client';

import { useRouter } from 'next/navigation';

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

export default function FiltersSelect() {
  const router = useRouter();

  const handleSelect = (e: React.ChangeEvent<HTMLSelectElement>) => {
    router.push(e.target.value);
  };

  return (
    <div className='bg-primary-bg-color p-3 mb-8 rounded-2xl'>
      <select
        className='bg-primary-bg-color w-full appearance-none border-none focus:outline-none transition-all'
        onChange={(e) => handleSelect(e)}
      >
        <option value=''>Ver categorías</option>
        <option value='/telas'>Todas</option>
        {categories.map((category, index) => (
          <option key={index} value={category.href} className='text-white'>
            {category.name}
          </option>
        ))}
      </select>
      <div className='absolute right-3 top-1/2 transform -translate-y-1/2 pointer-events-none'>
        <svg
          xmlns='http://www.w3.org/2000/svg'
          className='h-5 w-5 text-white'
          viewBox='0 0 20 20'
          fill='currentColor'
        >
          <path
            fillRule='evenodd'
            d='M10 3a1 1 0 00-.707.293l-6 6a1 1 0 101.414 1.414L10 5.414l5.293 5.293a1 1 0 001.414-1.414l-6-6A1 1 0 0010 3z'
            clipRule='evenodd'
          />
        </svg>
      </div>
    </div>
  );
}
