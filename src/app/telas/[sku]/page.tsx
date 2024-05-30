import LinkButton from '@/app/components/LinkButton';
import TelaContainer from '@/app/components/TelaContainer';
import { getTelaBySku } from '@/app/database/staticContent';

export default function Tela({ params }: { params: { sku: string } }) {
  const tela = getTelaBySku(params.sku);
  return (
    <div>
      {tela && <TelaContainer tela={tela} />}
      {!tela && (
        <div className='flex flex-col items-center justify-center'>
          <p>Tela no encontrada</p>
          <LinkButton href='/telas'>Ver telas</LinkButton>
        </div>
      )}
    </div>
  );
}
