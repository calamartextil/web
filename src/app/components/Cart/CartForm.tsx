export default function CartForm() {
  return (
    <>
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
    </>
  );
}
