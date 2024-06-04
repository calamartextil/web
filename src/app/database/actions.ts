'use server';

import dbConnect from '@/app/database/dbConnect';
import Tela from '@/app/models/Tela';

// export async function getAllTelas() { //Posible deprecated
//   try {
//     const res = await fetch('http://localhost:3000/api/telas');
//     const telas = await res.json();
//     return telas
//   } catch (error: any) {
//     console.log(error.message);
//   }

export async function getAllTelas() {
  await dbConnect();
  try {
    const telas = await Tela.find();
    return telas;
  } catch (error: any) {
    console.log('Error: ', error.message);
  }
}
