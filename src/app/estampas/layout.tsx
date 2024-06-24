import Sidebar from '@/app/components/Estampa/Sidebar';
import EscalaModal from '../components/Estampa/EscalasModal';

export default function EstampasLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className='relative'>
      <div className='pt-32 lg:pt-48 flex content-start gap-0 lg:gap-6 px-5 pb-40'>
        <div className='hidden lg:block relative w-[270px]'>
          <Sidebar />
        </div>
        <main>{children}</main>
        <EscalaModal />
      </div>
    </div>
  );
}
