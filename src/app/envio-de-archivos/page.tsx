import type { Metadata } from 'next';
import Inner from '@/app/components/Inner';
import Image from 'next/image';
import LinkButton from '@/app/components/LinkButton';

export const metadata: Metadata = {
  title: `¿Como preparo mis archivos?`,
  description:
    'Conocé como tenés que preparar tus archivos para enviarlos a Calamar Textil',
};

export default function FileSend() {
  return (
    <div className='pt-40 lg:pt-48 px-5 pb-40'>
      <Inner>
        <div>
          <h1 className='text-5xl font-display mb-10 text-center lg:text-left'>
            ¿Como preparo mis archivos?
          </h1>
          <h2 className='mb-2 text-3xl'>Rapport</h2>
          <p className='mb-5 text-lg'>(Estampa continua)</p>
          <div className='flex justify-center mb-14'>
            <Image
              src='/images/tus-archivos/rapport.svg'
              width={800}
              height={600}
              alt='Rapport'
            />
          </div>
          <div className='flex justify-center mb-10'>
            <div className='bg-primary-bg-color mb-10 w-5/6 lg:w-3/5 p-5 rounded-2xl'>
              <p className='text-lg lg:text-xl text-center lg:text-left mb-2'>
                Envianos únicamente EL MÓDULO y nosotros lo repetimos en el
                ancho de la tela y en el largo que necesites.
              </p>
              <p className='text-lg lg:text-xl text-center lg:text-left mb-2'>
                Chequear que al repetir el módulo no se formen cortes en el
                diseño.
              </p>

              <ul className='text-sm lg:text-lg text-center lg:text-left mb-2'>
                <li className='mb-1'>*Formato: JPG o PDF</li>
                <li className='mb-1'>*Resolución: 150 dpi</li>
                <li className='mb-1'>*Peso máximo por archivo: 1O MB</li>
                <li className='mb-1'>
                  *Nombrar los archivos: Cliente-tela-metros-medida del diseño{' '}
                  <br />
                  Ej: gonzalez-sedita-2,5m- 20 cm x 20 cm.jpg
                </li>
                <li className='mb-1'>
                  *Tamaño del diseño: El módulo debe estar en la escala que lo
                  quieras ver en la tela.
                </li>
              </ul>
            </div>
          </div>

          <h2 className='mb-2 text-3xl'>Imagen localizada</h2>
          <p className='mb-5 text-lg'>(Pañuelos, tapices, toallas, etc)</p>
          <div className='flex justify-center mb-14'>
            <Image
              src='/images/tus-archivos/localizada.svg'
              width={800}
              height={600}
              alt='Rapport'
            />
          </div>
          <div className='flex justify-center'>
            <div className='bg-primary-bg-color mb-10 w-5/6 lg:w-3/5 p-5 rounded-2xl'>
              <p className='text-lg lg:text-xl text-center lg:text-left mb-2'>
                Debes montar los diseños en una mesa de trabajo del ancho de la
                tela x el alto que necesites.
              </p>

              <ul className='text-sm lg:text-lg text-center lg:text-left mb-2'>
                <li className='mb-1'>*Formato: JPG o PDF</li>
                <li className='mb-1'>*Resolución: 150 dpi</li>
                <li className='mb-1'>*Peso máximo por archivo: 1O MB</li>
                <li className='mb-1'>
                  Si tu archivo es largo y pesa mucho, dividilo en varios más
                  pequeños y los imprimimos de manera contínua.
                </li>
                <li className='mb-1'>
                  *Nombrar los archivos: Cliente-tela-metros-medida del diseño
                  Ej: calamar-sedita-X1 <br /> Si se repite, enviar 1 solo y
                  detallar las repeticiones que se necesitan.
                </li>
                <li className='mb-1'>
                  *En caso de enviar los diseños sueltos para que nosotros lo
                  montemos, se cobrará el tiempo de armado.
                </li>
              </ul>
            </div>
          </div>
          <div className=' bg-black text-white rounded-2xl p-5 mb-14'>
            <h2 className='mb-2 text-2xl'>
              ¿En qué perfil de color?{' '}
              <span className='text-lg'>
                (Aplica a Rapport e Imagen localizada)
              </span>
            </h2>
            <p className='text-sm text-center lg:text-left mb-5'>
              RGB. Pero ¡Ojo! No vas a ver en la tela los mismos colores que ves
              en la pantalla ya que las tintas que se utilizan para estampar en
              sublimación son CMYK. Estas tintas son menos vibrantes, es por eso
              que aconsejamos enviar el archivo en RGB para que los colores
              queden un poco más vibrantes. Si a la hora de armar tu pedido
              tenes dudas sobre cómo se va a ver, te sugerimos trabajar los
              archivos en CMYK porque lo que veas en la pantalla es lo más
              similar al resultado en la tela.
            </p>
          </div>

          <h2 className='mb-5 text-3xl'>Envío de archivos</h2>
          <p className='text-lg lg:text-xl text-center lg:text-left mb-2'>
            Al llegar al PASO 3 deberás cargar tus archivos en{' '}
            <a
              className=' underline underline-offset-4'
              target='_blank'
              href='https://wetransfer.com'
            >
              www.wetransfer.com
            </a>{' '}
            y copiar el link resultante en el casillero indicado.
          </p>
          <p className='text-lg lg:text-xl text-center lg:text-left mb-5'>
            ¡Podrás cargar super facil{' '}
            <b>todos los archivos que quieras sin limite de espacio!</b>
          </p>
          <div className='flex justify-center mb-14'>
            <Image
              src='/images/tus-archivos/pedidos.png'
              width={750}
              height={776}
              alt='Rapport'
            />
          </div>

          <div className='flex justify-center'>
            <LinkButton href='/telas'>Hacer mi pedido</LinkButton>
          </div>
        </div>
      </Inner>
    </div>
  );
}
