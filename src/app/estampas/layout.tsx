import Sidebar from '@/app/components/Estampa/Sidebar';
import EscalaModal from '../components/Estampa/EscalasModal';

export default function EstampasLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className='relative'>
      <div className=' pt-48 flex content-start gap-6 px-10 pb-40'>
        <Sidebar />
        <main>{children}</main>
        <EscalaModal />
      </div>
    </div>
  );
}
