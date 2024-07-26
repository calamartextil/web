'use client';

import Link from 'next/link';
import React, { useState } from 'react';
import { FaAngleUp } from 'react-icons/fa6';

interface Faqs {
  title: string | JSX.Element;
  content: string | JSX.Element;
  isOpen: boolean;
}

const Faqs: React.FC = () => {
  const [faqs, setFaqs] = useState<Faqs[]>([
    {
      title: (
        <h3 className='leading-6'>
          1. ¿Qué hacen en{' '}
          <span className='text-secondary-bg-color'>CALAMAR TEXTIL</span>?
        </h3>
      ),
      content: (
        <>
          <p className='text-lg'>
            Estampamos a pedido los diseños que quieras en cualquiera de nuestras telas. Cada pedido es personalizado, es deci lo estampamos para vos de acuerdo a tus especificaciones. Ya no deberás conformarte con lo que encontras en el mercado, ahora podes tener la tela perfecta para tu proyecto.
          </p>
          <p className='text-lg'>
            Ya no deberás conformarte con lo que encontras en el mercado, ahora podes tener la tela perfecta para tu proyecto.
          </p>
        </>
      ),
      isOpen: false,
    },
    {
      title: (
        <h3 className='leading-6'>
          2. ¿Cuál es el{' '}
          <span className='text-secondary-bg-color'>MÍNIMO DE COMPRA</span>?
        </h3>
      ),
      content: (
        <>
          <p className='text-lg'>
            El mínimo es 1 METRO DE LA MISMA TELA. Podes elegir hasta 2 estampas distintas por cada metro (50 cm por estampa).
          </p>
        </>
      ),
      isOpen: false,
    },
    {
      title: (
        <h3 className='leading-6'>
          3. ¿Cuál es el{' '}
          <span className='text-secondary-bg-color'>MINIMO POR ESTAMPA</span>?
        </h3>
      ),

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
      title: (
        <h3 className='leading-6'>
          4. ¿Puedo estampar{' '}
          <span className='text-secondary-bg-color'>MIS PROPIOS DISEÑOS</span>?
        </h3>
      ),
      content: (
        <>
          <p className='text-lg'>
            ¡Así es! Y no te preocupes que tus archivos están protegidos y solo se utilizarán únicamente en tus pedidos.
          </p>
        </>
      ),
      isOpen: false,
    },
    {
      title: (
        <h3 className='leading-6'>
          5. ¿Cómo debo preprar los{' '}
          <span className='text-secondary-bg-color'>
            ARCHIVOS DE MIS DISEÑOS
          </span>
          ?
        </h3>
      ),

      content: (
        <>
          <p className='text-lg'>
            <Link
              className='text-xs underline underline-offset-4'
              href='/envio-de-archivos'
            >
              Ver detalles aqui
            </Link>
          </p>
        </>
      ),
      isOpen: false,
    },
    {
      title: (
        <h3 className='leading-6'>
          6. En un pedido ¿puedo elegir estampas de los catálogos y además agregar mis diseños exclusivos?
        </h3>
      ),

      content: (
        <>
          <p className='text-lg'>Sí. Y no tiene costo extra.</p>
        </>
      ),
      isOpen: false,
    },
    {
      title: (
        <h3 className='leading-6'>
          7. ¿Puedo{' '}
          <span className='text-secondary-bg-color'>VER LAS TELAS</span> en
          persona?
        </h3>
      ),

      content: (
        <>
          <p className='text-lg'>
            Claro que sí! Ofrecemos muestrarios con todas las telas estampadas SIN COSTO. Podes retirarlo por nuestra oficina o pedir el envío (costo a cargo del cliente).
          </p>
          <p className='text-lg'>
            Se solicita por wtsp al +54 9 11 2364 4913 o por mail a hola@calamartextil.com
          </p>
        </>
      ),
      isOpen: false,
    },
    {
      title: (
        <h3 className='leading-6'>
          8. ¿Hacen{' '}
          <span className='text-secondary-bg-color'>MUESTRAS</span> con mis diseños en la tela?
        </h3>
      ),

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
      title: (
        <h3 className='leading-6'>
          9. ¿Puedo agregarle{' '}
          <span className='text-secondary-bg-color'>MI LOGO</span> a sus estampas?
        </h3>
      ),
      content: (
        <>
          <p className='text-lg'>
            Sí! Debes enviarnos el logo vectorizado o en PNG con buena resolución. Consultar el costo.
          </p>
        </>
      ),
      isOpen: false,
    },
    {
      title: (
        <h3 className='leading-6'>
          10. ¿Se puede estampar de ambos{' '}
          <span className='text-secondary-bg-color'>LADOS DE LA TELA</span>?
        </h3>
      ),

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
      title: (
        <h3 className='leading-6'>
          11. ¿Cuánto{' '}
          <span className='text-secondary-bg-color'>TIEMPO</span> demora mi pedido?
        </h3>
      ),

      content: (
        <>
          <p className='text-lg'>
            Los pedidos estarán listos para ser retirados o enviados entre los 15 y 20 días hábiles desde la recepción del pago y la confirmación de los archivos (tus propios diseños).
          </p>
          <p className='text-lg'>Si está listo antes te avisaremos.</p>
        </>
      ),
      isOpen: false,
    },
    {
      title: (
        <h3 className='leading-6'>
         12. ¿Qué es la{' '}
          <span className='text-secondary-bg-color'>TIENDA DE STOCK</span> para entrega inmediata?
        </h3>
      ),
      
      content: (
        <>
          <p className='text-lg'>
            En esa sección podrás comprar paños de tela que ya están estampados y listos para ser entregados.
          </p>
          <p className='text-lg'>
            Estarán listos para retirar o enviar luego de 48 hs hábiles desde la recepción del pago.
          </p>
        </>
      ),
      isOpen: false,
    },
    {
      title: (
        <h3 className='leading-6'>
         13. ¿Hacen pedidos{' '}
          <span className='text-secondary-bg-color'>POR MAYOR</span>?
        </h3>
      ),
      
      content: (
        <>
          <p className='text-lg'>Sí, no hay límite de metros.</p>
          <p className='text-lg'>
            Por pedidos mayores a 200 metros, escribinos a hola@calamartextil.com
          </p>
        </>
      ),
      isOpen: false,
    },
    {
      title: (
        <h3 className='leading-6'>
         14. ¿Puedo llevarles{' '}
          <span className='text-secondary-bg-color'>MI TELA</span> para que la estampen?
        </h3>
      ),
     
      content: (
        <>
          <p className='text-lg'>
            No. Por el momento estampamos únicamente en nuestras telas ya que han pasado por pruebas de calidad y de esa manera podemos garantizar un buen resultado.
          </p>
        </>
      ),
      isOpen: false,
    },
    {
      title: (
        <h3 className='leading-6'>
         15. ¿Tienen un local donde pueda hacer la{' '}
          <span className='text-secondary-bg-color'>COMPRA</span> físicamente?
        </h3>
      ),
      
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
      title: (
        <h3 className='leading-6'>
         16. ¿
          <span className='text-secondary-bg-color'>DÓNDE</span> se encuentran?
        </h3>
      ),
     
      content: (
        <>
          <p className='text-lg'>
            Tenemos una oficina para retiro de pedidos y muestrarios en Antonio Machado 642 7c, Caballito, CABA, CON CITA PREVIA sin exepción.
          </p>
          <p className='text-lg'>
            Se encuentra abierta los días lunes, miércoles y jueves de 10 hs a 17:45 hs.
          </p>
          <p className='text-lg'>
            En semanas con feriados esto puede variar. Consultar.
          </p>
        </>
      ),
      isOpen: false,
    },
    {
      title: (
        <h3 className='leading-6'>
         17. ¿Hacen{' '} 
          <span className='text-secondary-bg-color'>ENVÍOS</span>?
        </h3>
      ),
      
      content: (
        <>
          <p className='text-lg'>
            Ofrecemos envíos a todo el país por Correo Argentino, a domicilio y sucursal.
          </p>
          <p className='text-lg'>
            También hacemos envíos por moto en CABA y al rededores. Los costos de envío dependerán del tamaño de cada pedido y el destino. Para más información contactanos.
          </p>
        </>
      ),
      isOpen: false,
    },
    {
      title: (
        <h3 className='leading-6'>
         18. ¿Cómo me puedo{' '}
          <span className='text-secondary-bg-color'>COMUNICARME</span> con uds?
        </h3>
      ),
      
      content: (
        <>
          <p className='text-lg'>
            Podes contactarnos por wsp al +54 9 11 2364 4913 de lunes a viernes de 10 hs a 17:45 hs o escribirnos tu consulta a hola@calamartextil.com
          </p>
          <p className='text-lg'></p>
        </>
      ),
      isOpen: false,
    },
    {
      title: (
        <h3 className='leading-6'>
         19. ¿Cuáles son las{' '} 
          <span className='text-secondary-bg-color'>FORMAS DE PAGO</span>?
        </h3>
      ),
      
      content: (
        <>
          <p className='text-lg'>
            Transferencia bancaria, mercado pago, o efectivo si retiras tu pedido por nuestra oficina.
          </p>
        </>
      ),
      isOpen: false,
    },
    {
      title: (
        <h3 className='leading-6'>
         20. ¿Hacen{' '}
          <span className='text-secondary-bg-color'>FACTURA</span>?
        </h3>
      ),
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
    <div id='faqs w-full'>
      {faqs.map((faq, index) => (
        <div key={index} className='mb-5 w-full'>
          <div
            className='bg-primary-bg-color text-lg rounded-2xl px-3 py-3 w-full mb-1 min-h-16 flex justify-between items-center cursor-pointer'
            onClick={() => toggleFaq(index)}
          >
            {faq.title}
            <div className='ml-3'>
              {faq.isOpen ? (
                <FaAngleUp />
              ) : (
                <FaAngleUp className='rotate-180' />
              )}
            </div>
          </div>
          {faq.isOpen && (
            <div className='bg-white rounded-2xl px-4 w-full pt-2'>{faq.content}</div>
          )}
        </div>
      ))}
    </div>
  );
};

export default Faqs;
