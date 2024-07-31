import { NextRequest, NextResponse } from 'next/server';
import dbConnect from '@/app/database/dbConnect';
import Cupon from '@/app/models/Cupon';

export async function POST(req: NextRequest, res: NextResponse) {
  await dbConnect();
  try {
    const data = await req.json();
    console.log(data.title?.toLowerCase());
    const cupon = await Cupon.findOne({ title: data.title });
    if (cupon) {
      return NextResponse.json({
        message: 'Cupón valido',
        discount: cupon.discount,
        exists: true,
      });
    } else {
      return NextResponse.json({
        message: 'Cupón invalido',
        discount: 0,
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
