import Sidebar from '@/app/components/Estampa/Sidebar';
import ActualTela from '@/app/components/Estampa/ActualTela';
import TelaGraphContainer from '@/app/components/TelaGraphContainer';

export default function EstampasLayout({
  children, // will be a page or nested layout
}: {
  children: React.ReactNode;
}) {
  return (
    <div className='relative'>
      <div className=' pt-48 flex content-start gap-6 px-10 pb-40'>
        <Sidebar />

        <main>
          <ActualTela />
          {children}
          <div className='bg-secondary-bg-color py-5 px-6 rounded-2xl mt-8 sticky bottom-0 w-full border-black border-1'>
          <TelaGraphContainer />
        </div>
        </main>
      </div>
    </div>
  );
}
