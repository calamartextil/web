'use client';
import { useCartContext } from '@/app/contexts/CartContext';
import Link from 'next/link';
import Image from 'next/image';
import Button from '@/app/components/Button';
import LinkButton from '@/app/components/LinkButton';
export default function CartContainer() {
  const { cart, removeCartItemBySku } = useCartContext();
  return (
    <section className='pt-10 px-0'>
      {cart.length === 0 && <h1>No hay telas en el carrito</h1>}
      {cart.length > 0 && (
        <div>
          <div className='grid'>
            <div className='col_6'>
              <div className='bg-primary-bg-color py-5 px-6 rounded-2xl mb-5'>
                <form action='' className='flex flex-col gap-5'>
                  <input
                    type='text'
                    placeholder='Nombre'
                    className='rounded-2xl p-2'
                  ></input>
                  <input
                    type='text'
                    placeholder='Apellido'
                    className='rounded-2xl p-2'
                  ></input>
                  <input
                    type='text'
                    placeholder='Email'
                    className='rounded-2xl p-2'
                  ></input>
                  <input
                    type='text'
                    placeholder='Teléfono'
                    className='rounded-2xl p-2'
                  ></input>
                  <input
                    type='text'
                    placeholder='Dirección'
                    className='rounded-2xl p-2'
                  ></input>
                  <input
                    type='text'
                    placeholder='Localidad'
                    className='rounded-2xl p-2'
                  ></input>
                  <input
                    type='text'
                    placeholder='Provincia'
                    className='rounded-2xl p-2'
                  ></input>
                  <input
                    type='text'
                    placeholder='Código Postal'
                    className='rounded-2xl p-2'
                  ></input>
                  <input
                    type='text'
                    placeholder='Comentarios'
                    className='rounded-2xl p-2'
                  ></input>
                  <input
                    type='submit'
                    value='Comprar'
                    className='bg-black text-white text-sm w-36 text-center py-2 px-1 rounded-3xl hover:opacity-70 mx-auto my-0'
                  ></input>
                </form>
              </div>
              <div>Comentarios del pedido</div>
            </div>
            <div className='col_6'>
              <div className='flex flex-col justify-start items-start gap-3'>
                {cart.map((item, index) => (
                  <div
                    key={item.tela.sku}
                    className=' bg-primary-bg-color py-5 px-6 rounded-2xl w-full mb-5'
                  >
                    <div className='flex gap-5 mb-5'>
                      <Link href={`/telas/${item.tela.sku}`}>
                        <Image
                          src={item.tela.images.lisaUrl}
                          alt={item.tela.title}
                          width={100}
                          height={100}
                          className='rounded-xl'
                        />
                      </Link>
                      <div className='flex justify-between items-start w-full'>
                        <div className='flex flex-col'>
                          <h2 className='leading-none mb-1'>
                            {item.tela.title}
                          </h2>
                          <p className='text-sm'>
                            Largo: {item.mts} {item.mts !== 1 ? `mts` : `mt`}
                          </p>
                          <p className='text-lg font-medium'>
                            Subtotal: ${item.price}
                          </p>
                        </div>
                        <div className='flex flex-col justify-start items-start gap-2'>
                          <LinkButton href={`/telas/${item.tela.sku}`}>Editar</LinkButton>
                          <Button
                            onClick={() => removeCartItemBySku(item.tela.sku)}
                            className='bg-red-500 text-white rounded-2xl'
                          >
                            Eliminar
                          </Button>
                        </div>
                      </div>
                    </div>

                    <div className='flex flex-wrap justify-start items-center gap-2'>
                      {item?.estampas?.map((estampa, index) => (
                        <div key={index}>
                          <Image
                            src={estampa.estampa.image}
                            alt={estampa.estampa.title}
                            width={60}
                            height={60}
                            className='mb-2 rounded-xl'
                          />

                          <h3 className='text-sm'>{estampa.estampa.title}</h3>
                          <p className='text-xs'>{estampa.mts} mts</p>
                          <p className='text-xs'>Escala: {estampa.scale}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
