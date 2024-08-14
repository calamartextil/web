'use client';

//TODO implement reCaptcha

import { useState } from 'react';
import { Formik, Form, Field } from 'formik';
import axios from 'axios';
import { useCartContext } from '@/app/contexts/CartContext';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
type FormData = {
  email: string;
  userName: string;
  userApellido?: string;
  emprendimiento?: string;
  telefono: string;
  direccion: string;
  localidad: string;
  provincia: string;
  cp: string;
  mensaje?: string;
  tuDisenio?: string;
  cupon?: string;
};

const ContactForm = () => {
  const [mailResponse, setMailResponse] = useState(null);
  const { cart, cartTotal, cartAvailable, cupon } = useCartContext();
  const router = useRouter();

  const validateEmail = (value: string) => {
    let error;
    if (!value) {
      error = 'Requiredo';
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)) {
      error = 'Invalido';
    }
    return error;
  };

  const validateUsername = (value: string) => {
    let error;
    if (value === '') {
      error = 'Requerido';
    }
    return error;
  };
  const validateTelefono = (value: string) => {
    let error;
    if (value === '') {
      error = 'Requerido';
    }
    return error;
  };

  const validateDireccion = (value: string) => {
    let error;
    if (value === '') {
      error = 'Requerido';
    }
    return error;
  };

  const validateLocalidad = (value: string) => {
    let error;
    if (value === '') {
      error = 'Requerido';
    }
    return error;
  };

  const validateProvincia = (value: string) => {
    let error;
    if (value === '') {
      error = 'Requerido';
    }
    return error;
  };

  const validateCP = (value: string) => {
    let error;
    if (value === '') {
      error = 'Requerido';
    }
    return error;
  };

  const addContact = async (formData: FormData, resetForm: any) => {
    const contactData = {
      name: formData.userName,
      apellido: formData.userApellido,
      emprendimiento: formData.emprendimiento,
      email: formData.email,
      telefono: formData.telefono,
      direccion: formData.direccion,
      localidad: formData.localidad,
      provincia: formData.provincia,
      cp: formData.cp,
      mensaje: formData.mensaje,
      tuDisenio: formData.tuDisenio || '',
    };

    const data = { cart, contactData, cupon, total: cartTotal() };

    // console.log(JSON.stringify(cart, null, 2));
    try {
      const response = await axios.post('/api/mail', data);
      const responseSheet = await axios.post('/api/gsheet', data);
      if (response.data.error) {
        setMailResponse(response.data.error);
        return;
      }
      if (responseSheet.data.message) {
        console.log(responseSheet.data.message);
      }
      if (response.data.message) {
        // setMailResponse(response.data.message);
        setTimeout(() => {
          resetForm();
          router.push('/pedido-confirmado');
          // setCart([]);
        }, 100);
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <h3 className='mb-3 lg:hidden'>Completá el pedido</h3>
      <div className='bg-primary-bg-color py-5 px-6 rounded-2xl mb-5'>
        <Formik
          initialValues={{
            email: '',
            userName: '',
            userApellido: '',
            emprendimiento: '',
            telefono: '',
            direccion: '',
            localidad: '',
            provincia: '',
            cp: '',
            mensaje: '',
            tuDisenio: '',
          }}
          onSubmit={(values, { resetForm }) => {
            addContact(values, resetForm);
          }}
        >
          {({ errors, touched, isSubmitting }) => (
            <Form>
              <div className={`grid gap-4`}>
                <div className={`col_3 col_tb_12 relative`}>
                  <Field
                    name='userName'
                    placeholder='Nombre'
                    validate={validateUsername}
                    className={`w-full rounded-2xl py-2 px-4`}
                  />
                  {errors.userName && touched.userName && (
                    <div
                      className={`text-xs text-cancel-text-color absolute top-3 right-3`}
                    >
                      {errors.userName}
                    </div>
                  )}
                </div>
                <div className={`col_3 col_tb_12 relative`}>
                  <Field
                    name='userApellido'
                    placeholder='Apellido'
                    className={`w-full rounded-2xl py-2 px-4`}
                  />
                </div>
                <div className={`col_6 col_tb_12 relative`}>
                  <Field
                    name='emprendimiento'
                    placeholder='Emprendimiento'
                    className={`w-full rounded-2xl py-2 px-4`}
                  />
                </div>
                <div className={`col_6 col_tb_12 relative`}>
                  <Field
                    name='email'
                    type='email'
                    placeholder='Email'
                    validate={validateEmail}
                    className={`w-full rounded-2xl py-2 px-4`}
                  />
                  {errors.email && touched.email && (
                    <div
                      className={`text-xs text-cancel-text-color absolute top-3 right-3`}
                    >
                      {errors.email}
                    </div>
                  )}
                </div>
                <div className={`col_6 col_tb_12 relative`}>
                  <Field
                    name='telefono'
                    placeholder='Teléfono'
                    validate={validateTelefono}
                    className={`w-full rounded-2xl py-2 px-4`}
                  />
                  {errors.telefono && touched.telefono && (
                    <div
                      className={`text-xs text-cancel-text-color absolute top-3 right-3`}
                    >
                      {errors.telefono}
                    </div>
                  )}
                </div>
                <div className={`col_6 col_tb_12 relative`}>
                  <Field
                    name='direccion'
                    placeholder='Dirección'
                    validate={validateDireccion}
                    className={`w-full rounded-2xl py-2 px-4`}
                  />
                  {errors.direccion && touched.direccion && (
                    <div
                      className={`text-xs text-cancel-text-color absolute top-3 right-3`}
                    >
                      {errors.direccion}
                    </div>
                  )}
                </div>
                <div className={`col_6 col_tb_12 relative`}>
                  <Field
                    name='localidad'
                    placeholder='Localidad'
                    validate={validateLocalidad}
                    className={`w-full rounded-2xl py-2 px-4`}
                  />
                  {errors.localidad && touched.localidad && (
                    <div
                      className={`text-xs text-cancel-text-color absolute top-3 right-3`}
                    >
                      {errors.localidad}
                    </div>
                  )}
                </div>
                <div className={`col_6 col_tb_12 relative`}>
                  <Field
                    name='provincia'
                    placeholder='Provincia'
                    validate={validateProvincia}
                    className={`w-full rounded-2xl py-2 px-4`}
                  />
                  {errors.provincia && touched.provincia && (
                    <div
                      className={`text-xs text-cancel-text-color absolute top-3 right-3`}
                    >
                      {errors.provincia}
                    </div>
                  )}
                </div>
                <div className={`col_6 col_tb_12 relative`}>
                  <Field
                    name='cp'
                    placeholder='Código Postal'
                    validate={validateCP}
                    className={`w-full rounded-2xl py-2 px-4`}
                  />
                  {errors.cp && touched.cp && (
                    <div
                      className={`text-xs text-cancel-text-color absolute top-3 right-3`}
                    >
                      {errors.cp}
                    </div>
                  )}
                </div>
                <div className={`col_12 relative`}>
                  <Field
                    name='mensaje'
                    as='textarea'
                    placeholder='Mensaje'
                    className={`w-full rounded-2xl py-2 px-4 resize-none`}
                  />
                </div>
                <div className={`col_12 relative`}>
                  <Field
                    name='tuDisenio'
                    placeholder='Copiá acá el link de wetransfer con tus archivos'
                    className={`w-full rounded-2xl py-2 px-4`}
                  />
                </div>
              </div>

              {mailResponse && (
                <div className={`text-sm mt-4 italic`}>{mailResponse}</div>
              )}
              <div className='mt-3'>
                <p className='mb-5'>
                  <Link
                    className='text-xs underline underline-offset-4'
                    href='/envio-de-archivos'
                  >
                    ¿Cómo cargar los archivos a Wetransfer?
                  </Link>
                </p>

                <p className='text-sm mb-2'>
                  En el transcurso del día recibirás la confirmación de tu
                  pedido con los datos para poder hacer el pago. Para dar curso
                  al pedido debe abonarse el 100% de la orden.
                </p>
                <p className='text-sm mb-2'>
                  Los pedidos estarán listos para ser retirados o enviados entre
                  los 15 y 20 días hábiles desde la recepción del pago y la
                  confirmación de los archivos (tus propios diseños). Si está
                  listo antes te avisaremos.
                </p>
                <p className='text-xs italic mb-2'>
                  *Se prevé una tolerancia máxima del 5% por posibles fallas que
                  sean parte del proceso tecnológico de tejido y sublimado.
                </p>
                <p className='text-xs italic mb-2'>
                  **En caso de tratarse de productos grandes como lonas o
                  manteles, si se ven afectados por una falla no se considerará
                  el total de la dimensión del producto al calcularse el
                  porcentaje de falla. El proceso impide garantizar la
                  inexistencia total de fallas en dimensiones extensas.
                </p>
                <p className='text-xs italic mb-2'>
                  ***La cordura ocasionalmente puede presentar a lo largo algún
                  enganche de hilo propio de la tela y no tiene descuento.
                </p>
                <p className='text-xs italic mb-2'>
                  **Los pedidos mayores a 20 metros pueden entregarse en más de
                  1 paño.
                </p>
              </div>
              <div className='flex justify-center items-center mt-8 mb-3'>
                <button
                  className={`bg-third-bg-color text-white text-sm w-40 text-center py-4 px-2 rounded-2xl hover:opacity-70 mx-auto my-0 ${
                    cartAvailable() > 0 && 'cursor-not-allowed'
                  }`}
                  type='submit'
                  disabled={isSubmitting || cartAvailable() > 0}
                >
                  Enviar pedido
                </button>
              </div>
              {cartAvailable() > 0 && (
                <p className='text-cancel-text-color font-semibold text-sm mt-5'>
                  Para realizar el pedido, por favor completá las estampas de
                  las telas indicadas
                </p>
              )}
            </Form>
          )}
        </Formik>
      </div>
    </>
  );
};

export default ContactForm;
