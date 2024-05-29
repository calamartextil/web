import TelaCard from '@/app/components/TelaCard';

import { telas } from '@/app/database/staticContent';

export default function TelasGrid() {
  return (
    <div className='grid w-full'>
      {telas.map((tela, index) => (
        <div key={index} className='col_3'>
          <TelaCard
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
