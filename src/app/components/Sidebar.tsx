import Link from 'next/link';
export default function Sidebar() {
  return (
    <div className='sidebar w-[250px]'>
      <h1 className='mb-8'>Categorías</h1>
      <nav>
        <ul>
          <li className='mb-2 rounded-2xl bg-secondary-bg-color py-2 pl-6'>
            <Link href='/telas/categoria/tela-plana'>Plana</Link>
          </li>
          <li className='mb-2 rounded-2xl bg-primary-bg-color py-2 pl-6'>
            <Link href='/telas/categoria/tela-de-punto'>Punto</Link>
          </li>
          <li className='mb-2 rounded-2xl bg-primary-bg-color py-2 pl-6'>
            <Link href='/telas/categoria/tela-para-indumentaria'>
              Indumentaria
            </Link>
          </li>
          <li className='mb-2 rounded-2xl bg-primary-bg-color py-2 pl-6'>
            <Link href='/telas/categoria/tela-para-decoracion'>Decoración</Link>
          </li>
          <li className='mb-2 rounded-2xl bg-primary-bg-color py-2 pl-6'>
            <Link href='/telas/categoria/tela-con-elastano'>Con elastano</Link>
          </li>
          <li className='mb-2 rounded-2xl bg-primary-bg-color py-2 pl-6'>
            <Link href='/telas/categoria/tela-impermeable'>Impermeable</Link>
          </li>
          <li className='mb-2 rounded-2xl bg-primary-bg-color py-2 pl-6'>
            <Link href='/telas/categoria/tela-de-algodon'>Algodón</Link>
          </li>
          <li className='mb-2 rounded-2xl bg-primary-bg-color py-2 pl-6'>
            <Link href='/telas/categoria/tela-de-poliester'>Poliéster</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}
