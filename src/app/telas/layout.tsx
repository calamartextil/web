import Sidebar from '@/app/components/Tela/Sidebar';

export default function TelasLayout({
  children, // will be a page or nested layout
}: {
  children: React.ReactNode;
}) {
  return (
    <div className='relative'>
      <div className='pt-32 lg:pt-48 flex content-start gap-6 px-10 pb-40'>
        <div className='hidden lg:block'>
          <Sidebar />
        </div>
        <main>{children}</main>
      </div>
    </div>
  );
}
