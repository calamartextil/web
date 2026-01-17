import { NextRequest, NextResponse } from 'next/server';
import dbConnect from '@/app/database/dbConnect';
import Cupon from '@/app/models/Cupon';

export async function POST(req: NextRequest) {
  await dbConnect();
  try {
    const data = await req.json();
    const cupon = await Cupon.findOne({ title: data.title?.toLowerCase() });
    if (cupon) {
      return NextResponse.json({
        message: 'Cupón valido',
        title: cupon.title,
        discount: cupon.discount,
        exists: true,
      });
    } else {
      return NextResponse.json({
        message: 'Cupón invalido',
        title: data.title,
        discount: 1,
        exists: false,
      });
    }
  } catch (error: any) {
    return NextResponse.json({
      error: error.message as string,
      message: 'Ocurrió un error al aplicar el cupón',
    });
  }
}
