import { NextRequest, NextResponse } from 'next/server';
import sgMail from '@sendgrid/mail';

export async function POST(req: NextRequest, res: NextResponse) {
  try {
    const data = await req.json();
    const contactData = data.contactData;
    sgMail.setApiKey(process.env.SENDGRID_API_KEY ?? 'DEFAULT_API_KEY');

    const msg = {
      from: {
        email: 'web@calamartextil.com',
      },
      subject: `Nuevo contacto en la web de ${contactData.name} ${contactData?.apellido}`,
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
            mensaje: contactData.mensaje,
            tuDisenio: contactData.tuDisenio,
          },
        },
      ],
      templateId: process.env.SENDGRID_TEMPLATE_CONTACT_ID ?? 'DEFAULT_TEMPLATE_ID',
    };

    await sgMail.send(msg);
    return NextResponse.json({
      message:
        'Recibimos tu constula!. Nos contactaremos en las próximas 48hrs. Muchas gracias!',
    });
  } catch (error: any) {
    return NextResponse.json({
      error: error.message as string,
      message:
        'Ocurrió un error al enviar el mail. Por favor, intentá nuevamente. O contactate con nosotros.',
    });
  }
}
