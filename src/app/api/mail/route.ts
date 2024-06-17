import { NextRequest, NextResponse } from 'next/server';
import sgMail from '@sendgrid/mail';

export async function POST(req: NextRequest, res: NextResponse) {
  try {
    const data = await req.json();
    const contactData = data.contactData;
    const cart = data.cart;
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
          dynamic_template_data: {
            name: contactData.name,
            items: cart,
            total: cartTotal,
          },
        },
      ],
      templateId: 'd-3bc494aa6bc14cf6b275a360312e6ee9',
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
