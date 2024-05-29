import Sidebar from '@/app/components/Sidebar';

export default function TelasLayout({
  children, // will be a page or nested layout
}: {
  children: React.ReactNode;
}) {
  return (
    <div className='relative'>
      <div className=' pt-48 flex content-start gap-6 px-10 pb-60'>
        <Sidebar />
        <main>{children}</main>
      </div>
    </div>
  );
}
