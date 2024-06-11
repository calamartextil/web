import dbConnect from '@/app/database/dbConnect';
import Estampa from '@/app/models/Estampa';
import { NextResponse } from 'next/server';

export const dynamic = "force-dynamic"; //TODO test removing this line in the deploy vercel

export async function GET() { //Posible deprecated
  await dbConnect();
  try {
    const telas = await Estampa.find();
    return NextResponse.json(telas);
  } catch (error: any) {
    return NextResponse.json({ error: error.message as string });
  }
}
