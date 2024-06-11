'use server';

import dbConnect from '@/app/database/dbConnect';
import Tela from '@/app/models/Tela';
import TelaCategory from '@/app/models/TelaCategory';
import Estampa from '@/app/models/Estampa';
import {
  EstampasCategory,
  Estampa as IEstampa,
  Tela as ITela,
  TelasCategory,
} from '@/types';
import EstampaCategory from '../models/EstampaCategory';

// export async function getAllTelas() { //Posible deprecated
//   try {
//     const res = await fetch('`${process.env.NEXT_PUBLIC_URL}/api/telas');
//     const telas = await res.json();
//     return telas
//   } catch (error: any) {
//     console.log(error.message);
//   }

export async function getAllTelas(
  category: string | null = null
): Promise<{ telas: ITela[]; category: TelasCategory | null }> {
  await dbConnect();
  try {
    if (category) {
      const categoryFromDb = await TelaCategory.findOne({ slug: category });
      if (!categoryFromDb) {
        console.log(`Category "${category}" not found.`);
        return { telas: [], category: null };
      }
      const telas = await Tela.find({
        categories: { $in: [categoryFromDb._id] },
      }).populate('categories');
      if (telas?.length === 0) return { telas: [], category: categoryFromDb };

      return {
        telas: JSON.parse(JSON.stringify(telas)),
        category: categoryFromDb,
      };
    }
    const telas = await Tela.find();
    return { telas: JSON.parse(JSON.stringify(telas)), category: null };
  } catch (error: any) {
    console.log('Error: ', error.message);
    return { telas: [], category: null };
  }
}

export async function getTelaBySku(sku: string): Promise<ITela | null> {
  await dbConnect();
  try {
    const tela = await Tela.findOne({ sku });
    const plainTela = JSON.parse(JSON.stringify(tela));
    return plainTela;
  } catch (error: any) {
    console.log(error.message);
    return {} as ITela;
  }
}

// export async function getAllEstampas() { //TODO: Deprecated
//   try {
//     const res = await fetch(`${process.env.NEXT_PUBLIC_URL}/api/estampas`);
//     const estampas = await res.json();
//     console.log('fetching estampas');
//     return estampas as IEstampa[];
//   } catch (error: any) {
//     console.log(error.message);
//   }
// }

export async function getAllEstampas(
  category: string | null = null
): Promise<{ estampas: IEstampa[]; category: EstampasCategory | null }> {
  await dbConnect();
  try {
    if (category) {
      const categoryFromDb = await EstampaCategory.findOne({ slug: category });
      if (!categoryFromDb) {
        console.log(`Category "${category}" not found.`);
        return { estampas: [], category: null };
      }
      const estampas = await Estampa.find({
        category: categoryFromDb._id,
      }).populate('category');
      if (estampas?.length === 0)
        return { estampas: [], category: categoryFromDb };

      return {
        estampas: JSON.parse(JSON.stringify(estampas)),
        category: categoryFromDb,
      };
    }
    const estampas = await Estampa.find();
    return {
      estampas: JSON.parse(JSON.stringify(estampas)),
      category: null,
    } as {
      estampas: IEstampa[];
      category: EstampasCategory | null;
    };
  } catch (error: any) {
    console.log(error.message);
    return { estampas: [], category: null };
  }
}
