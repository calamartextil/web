import Link from 'next/link';
export default function Sidebar() {
  return (
    <div className='sidebar w-[250px] pl-10'>
      <nav>
        <ul>
          <li>
            <Link href='/telas/tela-plana'>Tela plana</Link>
          </li>
          <li>
            <Link href='/telas/tela-de-punto'>Tela de punto</Link>
          </li>
          <li>
            <Link href='/telas/tela-para-indumentaria'>
              Tela para indumentaria
            </Link>
          </li>
          <li>
            <Link href='/telas/tela-para-decoracion'>Tela para decoración</Link>
          </li>
          <li>
            <Link href='/telas/tela-con-elastano'>Tela con elastano</Link>
          </li>
          <li>
            <Link href='/telas/tela-impermeable'>Tela impermeable</Link>
          </li>
          <li>
            <Link href='/telas/tela-de-algodon'>Tela de algodón</Link>
          </li>
          <li>
            <Link href='/telas/tela-de-poliester'>Tela de poliéster</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}
