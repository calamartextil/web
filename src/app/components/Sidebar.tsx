import Link from 'next/link';
export default function Sidebar() {
  return (
    <div className='sidebar w-[250px] pl-10'>
      <h1>Tipo de tela</h1>
      <nav>
        <ul>
          <li>
            <Link href='/telas/tela-plana'>Plana</Link>
          </li>
          <li>
            <Link href='/telas/tela-de-punto'>Punto</Link>
          </li>
          <li>
            <Link href='/telas/tela-para-indumentaria'>
              Indumentaria
            </Link>
          </li>
          <li>
            <Link href='/telas/tela-para-decoracion'>Decoración</Link>
          </li>
          <li>
            <Link href='/telas/tela-con-elastano'>Con elastano</Link>
          </li>
          <li>
            <Link href='/telas/tela-impermeable'>Impermeable</Link>
          </li>
          <li>
            <Link href='/telas/tela-de-algodon'>Algodón</Link>
          </li>
          <li>
            <Link href='/telas/tela-de-poliester'>Poliéster</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}
