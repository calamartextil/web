import { NextRequest, NextResponse } from 'next/server';
import { appendToSheet } from '@/app/services/google-spreadsheet';

export async function POST(req: NextRequest) {
  try {
    const data = await req.json();
    const {
      name,
      apellido,
      emprendimiento,
      email,
      telefono,
      direccion,
      localidad,
      provincia,
      cp,
      mensaje,
      tuDisenio,
    } = data.contactData;

    const concatCart = data.cart
      .map((item: any) => {
        const concatItemEstampa = item.estampas
          .map((estampa: any) => {
            return `${estampa.estampa.title} (${estampa.mts} - ${estampa.scale})`;
          })
          .join(', ');

        return `${item.tela.sku} - $${item.price} - ${item.mts} mts - [${concatItemEstampa}]`;
      })
      .join(', ');

    await appendToSheet({
      name,
      apellido,
      emprendimiento,
      email,
      telefono,
      direccion,
      localidad,
      provincia,
      cp,
      mensaje,
      tuDisenio,
      cart: concatCart,
    });

    return NextResponse.json({
      message: 'Agregado a google sheet',
    });
  } catch (error: any) {
    return NextResponse.json({
      error: error.message as string,
      message: 'Ocurrió un error al agregar a google sheets',
    });
  }
}
