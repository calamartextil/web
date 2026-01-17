import dbConnect from '@/app/database/dbConnect';
import Estampa from '@/app/models/Estampa';
import { NextRequest, NextResponse } from 'next/server';

export const dynamic = 'force-dynamic'; //TODO test removing this line in the deploy vercel

export async function POST(req: NextRequest) {
  await dbConnect();
  try {
    const data = await req.json();
    const estampa = await Estampa.findOne({ title: data.title?.toUpperCase() });
    return NextResponse.json(estampa);
  } catch (error: any) {
    return NextResponse.json({ error: error.message as string });
  }
}
