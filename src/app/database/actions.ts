'use server';

import dbConnect from '@/app/database/dbConnect';
import Tela from '@/app/models/Tela';
import TelaCategory from '@/app/models/TelaCategory';
import { Tela as ITela, TelasCategory } from '@/types';

// export async function getAllTelas() { //Posible deprecated
//   try {
//     const res = await fetch('http://localhost:3000/api/telas');
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

      

      return { telas, category: categoryFromDb };
    }
    const telas = await Tela.find();
    return { telas, category: null };
  } catch (error: any) {
    console.log('Error: ', error.message);
    return { telas: [], category: null };
  }
}
