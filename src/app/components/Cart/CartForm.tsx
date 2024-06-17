'use client';

import { useState } from 'react';
import { Formik, Form, Field } from 'formik';
import axios from 'axios';
import { useCartContext } from '@/app/contexts/CartContext';

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

  const validateMessage = (value: string) => {
    let error;
    if (value === '') {
      error = 'Requerido';
    }
    return error;
  };

  const addContact = async (
    email: string,
    userName: string,
    userApellido: string,
    telefono: string,
    mensaje: string,
    resetForm: any
  ) => {
    console.log(mensaje);
    const contactData = {
      name: userName,
      apellido: userApellido,
      email,
      telefono,
      mensaje,
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
  };

  return (
    <div className='bg-primary-bg-color py-5 px-6 rounded-2xl mb-5'>
      <Formik
        initialValues={{
          email: '',
          userName: '',
          userApellido: '',
          telefono: '',
          mensaje: '',
        }}
        onSubmit={(values, { resetForm }) => {
          addContact(
            values.email,
            values.userName,
            values.userApellido,
            values.telefono,
            values.mensaje,
            resetForm
          );
        }}
      >
        {({ errors, touched, isSubmitting }) => (
          <Form>
            <div className={`grid`}>
              <div className={`col_6`}>
                <Field
                  name='userName'
                  placeholder='Nombre'
                  validate={validateUsername}
                />
                {errors.userName && touched.userName && (
                  <div className={``}>{errors.userName}</div>
                )}
              </div>
              <div className={`col_6`}>
                <Field name='userApellido' placeholder='Apellido' />
              </div>
              <div className={`col_6`}>
                <Field
                  name='email'
                  type='email'
                  placeholder='Email'
                  validate={validateEmail}
                />
                {errors.email && touched.email && (
                  <div className={``}>{errors.email}</div>
                )}
              </div>
              <div className={`col_6`}>
                <Field
                  name='telefono'
                  placeholder='Teléfono'
                  validate={validateTelefono}
                />
                {errors.telefono && touched.telefono && (
                  <div className={``}>{errors.telefono}</div>
                )}
              </div>
              <div className={`col_12`}>
                <Field
                  name='mensaje'
                  as='textarea'
                  placeholder='Mensaje'
                  validate={validateMessage}
                />
                {errors.telefono && touched.telefono && (
                  <div className={``}>{errors.telefono}</div>
                )}
              </div>
            </div>

            {mailResponse && <div className={``}>{mailResponse}</div>}
            <button
              className={`btn-primary`}
              type='submit'
              // disabled={isSubmitting} //TODO Enable when ready
            >
              Enviar
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default ContactForm;
