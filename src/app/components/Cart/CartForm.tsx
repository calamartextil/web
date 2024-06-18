'use client';

//TODO implement reCaptcha

import { useState } from 'react';
import { Formik, Form, Field } from 'formik';
import axios from 'axios';
import { useCartContext } from '@/app/contexts/CartContext';
type FormData = {
  email: string;
  userName: string;
  userApellido?: string;
  telefono: string;
  direccion: string;
  localidad: string;
  provincia: string;
  cp: string;
  mensaje?: string;
  tuDisenio?: string;
};

const ContactForm = () => {
  const [mailResponse, setMailResponse] = useState(null);
  const { cart, cartTotal } = useCartContext();

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
      email: formData.email,
      telefono: formData.telefono,
      direccion: formData.direccion,
      localidad: formData.localidad,
      provincia: formData.provincia,
      cp: formData.cp,
      mensaje: formData.mensaje,
      tuDisenio: formData.tuDisenio || ''
    };

    const data = { cart, contactData, total: cartTotal };
    const response = await axios.post('/api/mail', data);
    if (response.data.error) {
      setMailResponse(response.data.error);
      return;
    }
    if (response.data.message) {
      setMailResponse(response.data.message);
    }
    console.log(response.data);
    resetForm();
  };

  return (
    <div className='bg-primary-bg-color py-5 px-6 rounded-2xl mb-5'>
      <Formik
        initialValues={{
          email: '',
          userName: '',
          userApellido: '',
          telefono: '',
          direccion: '',
          localidad: '',
          provincia: '',
          cp: '',
          mensaje: '',
          tuDisenio: ''
        }}
        onSubmit={(values, { resetForm }) => {
          addContact(values, resetForm);
        }}
      >
        {({ errors, touched, isSubmitting }) => (
          <Form>
            <div className={`grid gap-4`}>
              <div className={`col_6 col_tb_12 relative`}>
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
              <div className={`col_6 col_tb_12 relative`}>
                <Field
                  name='userApellido'
                  placeholder='Apellido'
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
                  placeholder='Tu diseño. Link a weTransfer'
                  className={`w-full rounded-2xl py-2 px-4`}
                />
              </div>
            </div>

            {mailResponse && <div className={`text-sm mt-4 italic`}>{mailResponse}</div>}
            <div className='flex justify-center items-center mt-8 mb-3'>
              <button
                className='bg-third-bg-color text-white text-sm w-40 text-center py-4 px-2 rounded-2xl hover:opacity-70 mx-auto my-0'
                type='submit'
                // disabled={isSubmitting} //TODO Enable when ready
              >
                Hacer pedido
              </button>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default ContactForm;
