'use client'
import {useState, useEffect} from 'react';
import EstampaCard from '@/app/components/EstampaCard';
// import { estampas } from '@/app/database/staticContent';
import { getAllEstampas } from '../database/actions';
import { Estampa as IEstampa } from '@/types';

export default function EstampasGrid() {

  const [estampas, setEstampas] = useState<IEstampa[]>([]);

  useEffect(() => {
    const fetchEstampas = async () => {
      const estampas = await getAllEstampas();
      setEstampas(estampas);
    }
    fetchEstampas();
  }, []);

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
