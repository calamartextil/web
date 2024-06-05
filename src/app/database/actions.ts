'use server';

import dbConnect from '@/app/database/dbConnect';
import Tela from '@/app/models/Tela';
import TelaCategory from '@/app/models/TelaCategory';

// export async function getAllTelas() { //Posible deprecated
//   try {
//     const res = await fetch('http://localhost:3000/api/telas');
//     const telas = await res.json();
//     return telas
//   } catch (error: any) {
//     console.log(error.message);
//   }

export async function getAllTelas(category: string | null = null) {
  await dbConnect();
  try {
    if (category) {
      const categoryFromDb = await TelaCategory.findOne({ slug: category });
      if (!categoryFromDb) {
        console.log(`Category "${category}" not found.`);
        return [];
      }
      const telas = await Tela.find({
        categories: { $in: [categoryFromDb._id] },
      }).populate('categories');

      return telas;
    }
    const telas = await Tela.find();
    return telas;
  } catch (error: any) {
    console.log('Error: ', error.message);
  }
}
