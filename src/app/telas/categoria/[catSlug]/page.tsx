import TelasGrid from '@/app/components/TelasGrid';
export default function Telas({ params }: { params: { catSlug: string } }) {
  // const tela = getTelaBySku(params.catSlug);
  return (
    <div>
      <h1 className='font-display text-5xl mb-8'>Todas las telas</h1>
      <TelasGrid />
    </div>
  );
}
