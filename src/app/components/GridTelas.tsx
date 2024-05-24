import CardTela from '@/app/components/CardTela';
import { telas } from '@/app/database/staticContent';

export default function GridTelas() {
  return (
    <div className='grid w-full'>
      {telas.map((tela, index) => (
        <div key={index} className='col_3'>
          <CardTela
            telaId={tela.telaId}
            title={tela.title}
            sku={tela.sku}
            price={tela.price}
            images={tela.images}
            categories={tela.categories}
          />
        </div>
      ))}
    </div>
  );
}
