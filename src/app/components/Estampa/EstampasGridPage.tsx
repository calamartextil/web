import {useState, useEffect} from 'react';
import EstampaCard from '@/app/components/EstampaCard';
// import { estampas } from '@/app/database/staticContent';
import { getAllEstampas } from '@/app/database/actions';
import { Estampa as IEstampa } from '@/types';

export default async function EstampasGrid() {

const estampas = await getAllEstampas();

  return (
    <div className='grid w-full'>
      {estampas && estampas.map((estampa, index) => (
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
