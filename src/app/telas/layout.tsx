import Sidebar from '@/app/components/Sidebar';

export default function TelasLayout({
  children, // will be a page or nested layout
}: {
  children: React.ReactNode;
}) {
  return (
    <div className='pt-60 flex content-start'>
      <Sidebar />
      <main>{children}</main>
    </div>
  );
}
