import TelaCard from '@/app/components/TelaCard';

import { getAllTelas } from '@/app/database/staticContent';

export default function TelasGrid({
  category = null,
}: {
  category?: string | null;
}) {
  return (
    <div className='grid w-full'>
      {getAllTelas().map((tela, index) => (
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
