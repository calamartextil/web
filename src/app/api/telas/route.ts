import dbConnect from '@/app/database/dbConnect';
import Tela from '@/app/models/Tela';
import { NextResponse } from 'next/server';

export async function GET() { //Posible deprecated
  await dbConnect();
  try {
    const telas = await Tela.find();
    return NextResponse.json(telas);
  } catch (error: any) {
    return NextResponse.json({ error: error.message as string });
  }
}
