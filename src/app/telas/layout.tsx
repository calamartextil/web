import Sidebar from '@/app/components/Sidebar';

export default function TelasLayout({
  children, // will be a page or nested layout
}: {
  children: React.ReactNode;
}) {
  return (
    <div className='relative'>
      <div className='pt-60 flex content-start'>
        <Sidebar />
        <main>{children}</main>
      </div>
      <div className="absolute w-full h-[54px] left-0 z-10 bg-[url('/images/ondas.png')] bg-cover bg-bottom drop-shadow-[0_8px_4px_rgba(0,0,0,.1)]"></div>
    </div>
  );
}
