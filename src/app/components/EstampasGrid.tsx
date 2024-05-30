import EstampaCard from '@/app/components/EstampaCard';

import { estampas } from '@/app/database/staticContent';

export default function EstampasGrid() {
  return (
    <div className='grid w-full'>
      {estampas.map((estampa, index) => (
        <div key={index} className='col_3'>
          <EstampaCard
            id={estampa.id}
            title={estampa.title}
            sku={estampa.sku}
            image={estampa.image}
            category={estampa.category}
          />
        </div>
      ))}
    </div>
  );
}
