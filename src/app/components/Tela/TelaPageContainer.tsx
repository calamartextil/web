import LinkButton from '@/app/components/LinkButton';
import TelaSingle from '@/app/components/Tela/TelaSingle';
import { getTelaBySku } from '@/app/database/actions';

export default async function TelaPageContainer({ sku }: { sku: string }) {
  const tela = await getTelaBySku(sku);
  return (
    <div>
      {tela && <TelaSingle tela={tela} />}
      {!tela && (
        <div className='flex flex-col items-center justify-center'>
          <p>Tela no encontrada</p>
          <LinkButton href='/telas'>Ver telas</LinkButton>
        </div>
      )}
    </div>
  );
}
