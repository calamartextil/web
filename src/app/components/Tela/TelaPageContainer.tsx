import LinkButton from '@/app/components/LinkButton';
import TelaContainer from '@/app/components/TelaContainer';
import { getTelaBySku } from '@/app/database/actions';

export default async function TelaPageContainer({sku}:{sku:string}) {
  const tela = await getTelaBySku(sku);
  return (
    <div>
      {tela && <TelaContainer tela={tela} key={tela.sku} />}
      {!tela && (
        <div className='flex flex-col items-center justify-center'>
          <p>Tela no encontrada</p>
          <LinkButton href='/telas'>Ver telas</LinkButton>
        </div>
      )}
    </div>
  )
}
