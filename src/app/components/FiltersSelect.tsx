'use client';

import { useRouter } from 'next/navigation';

type Category = {
  title: string;
  href: string;
  description?: string;
  image?: string;
};

export default function FiltersSelect({
  categories,
  title,
  defaultHref
}: {
  categories: Category[];
  title: string;
  defaultHref: string;
}) {
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
        <option value=''>{title}</option>
        <option value={defaultHref}>Todas</option>
        {categories.map((category, index) => (
          <option key={index} value={category.href} className='text-white'>
            {category.title}
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
