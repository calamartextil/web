import { NextRequest, NextResponse } from 'next/server';
import sgMail from '@sendgrid/mail';
import { formatNumber } from '@/app/utils/prices';
import { estampas } from '@/app/database/staticContent';

export async function POST(req: NextRequest, res: NextResponse) {
  try {
    const data = await req.json();
    const contactData = data.contactData;
    const cart = data.cart;
    const cartFormated = cart.map((item: any) => {
      return {
        ...item,
        price: formatNumber(item.price),
      };
    });
    const cartTotal = data.total;
    sgMail.setApiKey(process.env.SENDGRID_API_KEY ?? 'DEFAULT_API_KEY');

    const msg = {
      from: {
        email: 'web@calamartextil.com',
      },
      subject: `Nuevo pedido en la web de ${contactData.name} ${contactData.apellido}`,
      personalizations: [
        {
          to: [
            {
              email: contactData.email,
              name: contactData.name,
            },
          ],
          bcc: [
            {
              email: `calamartextilweb@gmail.com`,
              name: `calamarTextil`,
            },
          ],
          dynamic_template_data: {
            name: contactData.name,
            apellido: contactData.apellido,
            email: contactData.email,
            telefono: contactData.telefono,
            direccion: contactData.direccion,
            localidad: contactData.localidad,
            provincia: contactData.provincia,
            cp: contactData.cp,
            mensaje: contactData.mensaje,
            tuDisenio: contactData.tuDisenio,
            items: cartFormated,
            total: formatNumber(cartTotal),
          },
        },
      ],
      templateId: process.env.SENDGRID_TEMPLATE_ID ?? 'DEFAULT_TEMPLATE_ID',
    };

    await sgMail.send(msg);
    return NextResponse.json({
      message:
        'Recibimos tu pedido!. Nos contactaremos en las próximas 48hrs. Muchas gracias!',
    });
  } catch (error: any) {
    return NextResponse.json({
      error: error.message as string,
      message:
        'Ocurrió un error al enviar el mail. Por favor, intentá nuevamente. O contactate con nosotros.',
    });
  }
}
