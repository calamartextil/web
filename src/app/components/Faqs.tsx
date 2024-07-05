'use client';

import Link from 'next/link';
import React, { useState } from 'react';
import { FaAngleUp } from 'react-icons/fa6';

interface Faqs {
  title: string;
  content: string | JSX.Element;
  isOpen: boolean;
}

const Faqs: React.FC = () => {
  const [faqs, setFaqs] = useState<Faqs[]>([
    {
      title: '1. ¿Qué hacen en CALAMAR TEXTIL?',
      content: (
        <>
          <p className='text-lg'>
            Estampamos a pedido los diseños que quieras en cualquiera de
            nuestras telas. Cada pedido es personalizado, es decir, lo estampa-
            mos para vos de acuerdo a tus especificaciones. Ya no deberás
            conformarte con lo que encontras en el mercado, ahora podes tener la
            tela perfecta para tu proyecto.
          </p>
          <p className='text-lg'>
            Ya no deberás conformarte con lo que encontras en el mercado, ahora
            podes tener la tela perfecta para tu proyecto.
          </p>
        </>
      ),
      isOpen: false,
    },
    {
      title: '2. ¿Cuál es el MÍNIMO DE COMPRA?',
      content: (
        <>
          <p className='text-lg'>
            El mínimo es 1 METRO DE LA MISMA TELA. Podes elegir hasta 2 estampas
            distintas por cada metro (50 cm por estampa).
          </p>
        </>
      ),
      isOpen: false,
    },
    {
      title: '3. ¿Cuál es el MINIMO POR ESTAMPA?',
      content: (
        <>
          <p className='text-lg'>
            El mínimo es de 50 cm de alto x el ancho de la tela.
          </p>
        </>
      ),
      isOpen: false,
    },
    {
      title: '4. ¿Puedo estampar MIS PROPIOS DISEÑOS?',
      content: (
        <>
          <p className='text-lg'>
            ¡Así es! Y no te preocupes que tus archivos están protegidos y solo
            se utilizarán únicamente en tus pedidos.
          </p>
        </>
      ),
      isOpen: false,
    },
    {
      title: '5. ¿Cómo debo preprar los ARCHIVOS DE MIS DISEÑOS?',
      content: (
        <>
          <p className='text-lg'>
            <Link
              className='text-xs underline underline-offset-4'
              href='/como-preparar-archivos'
            >
              Ver detalles aqui
            </Link>
          </p>
        </>
      ),
      isOpen: false,
    },
    {
      title:
        '6. En un pedido ¿puedo elegir estampas de los catálogos y además agregar mis diseños exclusivos?',
      content: (
        <>
          <p className='text-lg'>Sí. Y no tiene costo extra.</p>
        </>
      ),
      isOpen: false,
    },
    {
      title: '7. ¿Puedo VER LAS TELAS en persona?',
      content: (
        <>
          <p className='text-lg'>
            Claro que sí! Ofrecemos muestrarios con todas las telas estampa- das
            SIN COSTO. Podes retirarlo por nuestra oficina o pedir el envío
            (costo a cargo del cliente).
          </p>
          <p className='text-lg'>
            Se solicita por wtsp al +54 9 11 2364 4913 o por mail a
            hola@calamartextil.com
          </p>
        </>
      ),
      isOpen: false,
    },
    {
      title: '8. ¿Hacen MUESTRAS con mis diseños en la tela?',
      content: (
        <>
          <p className='text-lg'>
            Sí. Hacemos muestras de 25 cm x 25 cm. Consultar precio.
          </p>
        </>
      ),
      isOpen: false,
    },
    {
      title: '8. ¿Puedo agregarle MI LOGO a sus estampas?',
      content: (
        <>
          <p className='text-lg'>
            Sí! Debes enviarnos el logo vectorizado o en PNG con buena resolu-
            ción. Consultar el costo.
          </p>
        </>
      ),
      isOpen: false,
    },
    {
      title: '9. ¿Se puede estampar de ambos LADOS DE LA TELA?',
      content: (
        <>
          <p className='text-lg'>
            No. Se estampa solo en el frente de la tela.
          </p>
        </>
      ),
      isOpen: false,
    },
    {
      title: '10. ¿Cuánto TIEMPO demora mi pedido?',
      content: (
        <>
          <p className='text-lg'>
            Los pedidos estarán listos para ser retirados o enviados entre los
            15 y 20 días hábiles desde la recepción del pago y la confirmación
            de los archivos (tus propios diseños).
          </p>
          <p className='text-lg'>Si está listo antes te avisaremos.</p>
        </>
      ),
      isOpen: false,
    },
    {
      title: '11. ¿Qué es la TIENDA DE STOCK para entrega inmediata?',
      content: (
        <>
          <p className='text-lg'>
            En esa sección podrás comprar paños de tela que ya están estam-
            pados y listos para ser entregados.
          </p>
          <p className='text-lg'>
            Estarán listos para retirar o enviar luego de 48 hs hábiles desde la
            recepción del pago.
          </p>
        </>
      ),
      isOpen: false,
    },
    {
      title: '12. ¿Hacen pedidos POR MAYOR?',
      content: (
        <>
          <p className='text-lg'>Sí, no hay límite de metros.</p>
          <p className='text-lg'>
            Por pedidos mayores a 200 metros, escribinos a hola@calamartex-
            til.com
          </p>
        </>
      ),
      isOpen: false,
    },
    {
      title: '13. ¿Puedo llevarles MI TELA para que la estampen?',
      content: (
        <>
          <p className='text-lg'>
            No. Por el momento estampamos únicamente en nuestras telas ya que
            han pasado por pruebas de calidad y de esa manera podemos garantizar
            un buen resultado.
          </p>
        </>
      ),
      isOpen: false,
    },
    {
      title: '14. ¿Tienen un local donde pueda hacer la COMPRA físicamente?',
      content: (
        <>
          <p className='text-lg'>
            Las compras se hacen exclusivamente por la página web.
          </p>
        </>
      ),
      isOpen: false,
    },
    {
      title: '15. ¿DÓNDE se encuentran?',
      content: (
        <>
          <p className='text-lg'>
            Tenemos una oficina para retiro de pedidos y muestrarios en Anto-
            nio Machado 642 7c, Caballito, CABA, CON CITA PREVIA sin exep- ción.
          </p>
          <p className='text-lg'>
            Se encuentra abierta los días lunes, miércoles y jueves de 10 hs a
            17:45 hs.
          </p>
          <p className='text-lg'>
            En semanas con feriados esto puede variar. Consultar.
          </p>
        </>
      ),
      isOpen: false,
    },
    {
      title: '16. ¿Hacen ENVÍOS?',
      content: (
        <>
          <p className='text-lg'>
            Ofrecemos envíos a todo el país por Correo Argentino, a domicilio y
            sucursal.
          </p>
          <p className='text-lg'>
            También hacemos envíos por moto en CABA y al rededores. Los costos
            de envío dependerán del tamaño de cada pedido y el destino. Para más
            información contactanos.
          </p>
        </>
      ),
      isOpen: false,
    },
    {
      title: '17. ¿Cómo me puedo COMUNICAR con uds?',
      content: (
        <>
          <p className='text-lg'>
            Podes contactarnos por wsp al +54 9 11 2364 4913 de lunes a vier-
            nes de 10 hs a 17:45 hs o escribirnos tu consulta a
            hola@calamartextil.com
          </p>
          <p className='text-lg'></p>
        </>
      ),
      isOpen: false,
    },
    {
      title: '18. ¿Cuáles son las FORMAS DE PAGO?',
      content: (
        <>
          <p className='text-lg'>
            Transferencia bancaria, mercado pago, o efectivo si retiras tu
            pedido por nuestra oficina.
          </p>
        </>
      ),
      isOpen: false,
    },
    {
      title: '19. ¿Hacen FACTURA?',
      content: (
        <>
          <p className='text-lg'>Sí, hacemos factura A y B.</p>
        </>
      ),
      isOpen: false,
    },
  ]);

  const toggleFaq = (index: number) => {
    setFaqs((prevFaqs) => {
      const updatedFaqs = prevFaqs.map((faq, i) => {
        if (i === index) {
          return {
            ...faq,
            isOpen: !faq.isOpen,
          };
        } else {
          return {
            ...faq,
            isOpen: false,
          };
        }
      });
      return updatedFaqs;
    });
  };

  return (
    <div id='faqs'>
      {faqs.map((faq, index) => (
        <div key={index} className='mb-5'>
          <div
            className='bg-primary-bg-color text-lg rounded-2xl px-3 w-full mb-1 h-16 flex justify-between items-center cursor-pointer'
            onClick={() => toggleFaq(index)}
          >
            <h3 className='leading-6'>{faq.title}</h3>
            <div>
              {faq.isOpen ? (
                <FaAngleUp />
              ) : (
                <FaAngleUp className='rotate-180' />
              )}
            </div>
          </div>
          {faq.isOpen && (
            <div className='bg-white rounded-2xl px-4'>{faq.content}</div>
          )}
        </div>
      ))}
    </div>
  );
};

export default Faqs;
