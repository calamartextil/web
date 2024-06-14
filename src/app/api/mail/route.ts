import { NextRequest, NextResponse } from 'next/server';
import sgMail from '@sendgrid/mail';
import dynamic from 'next/dynamic';

export async function POST(req: NextRequest, res: NextResponse) {
  try {
    const { body } = req;
    sgMail.setApiKey(process.env.SENDGRID_API_KEY ?? 'DEFAULT_API_KEY');
    // const msg = {
    //   to: 'leanamaro@gmail.com', // Change to your recipient
    //   from: 'web@calamartextil.com', // Change to your verified sender
    //   subject: 'Sending with SendGrid is Fun',
    //   text: 'and easy to do anywhere, even with Node.js',
    //   html: '<strong>and easy to do anywhere, even with Node.js</strong>',
    // };

    const msg = {
      from: {
        email: 'web@calamartextil.com',
      },
      subject: 'Nuevo pedido en la web',
      personalizations: [
        {
          to: [
            {
              email: 'leanamaro@gmail.com',
              name: 'Leandro Amaro',
            },
          ],
          dynamic_template_data: {
            name: 'Leandrito',
          },
        },
      ],
      templateId: 'd-3bc494aa6bc14cf6b275a360312e6ee9',
    };

    await sgMail.send(msg);
    return NextResponse.json({ message: 'Email enviado com sucesso!' });
  } catch (error: any) {
    return NextResponse.json({
      error: error.message as string,
      message: 'Ha ocurrido un error',
    });
  }
}
