import Inner from '@/app/components/Inner';
import Image from 'next/image';
import LinkButton from '@/app/components/LinkButton';

export default function FileSend() {
  return (
    <div className='pt-40 lg:pt-48 px-5 pb-40'>
      <Inner>
        <div>
          <h1 className='text-5xl font-display mb-10 text-center lg:text-left'>
            ¿Como preparo mis archivos?
          </h1>

          <h2 className='mb-2 text-3xl'>Rapport</h2>
          <p className='mb-5'>(Estampa continua)</p>

          <div className='flex justify-center'>
            <div className='bg-primary-bg-color mb-10 w-5/6 lg:w-3/5 p-5 rounded-2xl'>
              <p className='text-lg lg:text-xl text-center lg:text-left mb-2'>
                Envianos únicamente EL MÓDULO y nosotros lo repetimos en el
                ancho de la tela y en el largo que necesites.
              </p>
              <p className='text-lg lg:text-xl text-center lg:text-left mb-2'>
                Chequear que al repetir el módulo no se formen cortes en el
                diseño.
              </p>
              <p className='text-lg lg:text-xl text-center lg:text-left mb-2'>
                <ul>
                  <li className='mb-1'>*Formato: JPG o PDF</li>
                  <li className='mb-1'>*Resolución: 150 dpi</li>
                  <li className='mb-1'>*Peso máximo por archivo: 1O MB</li>
                  <li className='mb-1'>
                    *Nombrar los archivos: Cliente-tela-metros-medida del diseño
                    Ej: gonzalez-sedita-2,5m- 20 cm x 20 cm.jpg
                  </li>
                  <li className='mb-1'>
                    *Tamaño del diseño: El módulo debe estar en la escala que lo
                    quieras ver en la tela.
                  </li>
                </ul>
              </p>
            </div>
          </div>

          <h2 className='mb-2 text-3xl'>Imagen localizada</h2>
          <p className='mb-5'>(Pañuelos, tapices, toallas, etc)</p>

          <div className='flex justify-center'>
            <div className='bg-primary-bg-color mb-10 w-5/6 lg:w-3/5 p-5 rounded-2xl'>
              <p className='text-lg lg:text-xl text-center lg:text-left mb-2'>
                Debes montar los diseños en una mesa de trabajo del ancho de la
                tela x el alto que necesites.
              </p>

              <p className='text-lg lg:text-xl text-center lg:text-left mb-2'>
                <ul>
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
              </p>
            </div>
          </div>
          <div className=' bg-black text-white rounded-2xl p-5 mb-5'>
            <h2 className='mb-2 text-2xl'>
            ¿En qué perfil de color? {" "}
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

          <h2 className='mb-2 text-3xl'>Envío de archivos</h2>
          <p className='mb-5'>(Pañuelos, tapices, toallas, etc)</p>

          <div className='flex justify-center'>
            <LinkButton href='/pedido'>Hacer mi pedido</LinkButton>
          </div>
        </div>
      </Inner>
    </div>
  );
}
