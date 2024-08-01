'use client';

//TODO implement reCaptcha

import { useState } from 'react';
import { Formik, Form, Field } from 'formik';
import axios from 'axios';
import { useCartContext } from '@/app/contexts/CartContext';
type FormData = {
  title: string;
};

const ContactForm = () => {
  const [mailResponse, setMailResponse] = useState(null);
  const [cuponInvalido, setCuponInvalido] = useState(false);
  const { cupon, setCupon } = useCartContext();

  const validateTitle = (value: string) => {
    let error;
    if (value === '') {
      error = 'Requerido';
    }
    return error;
  };

  const addCupon = async (formData: FormData, resetForm: any) => {
    try {
      const response = await axios.post('/api/cupones', {
        title: formData.title,
      });

      if (response.data.error) {
        setMailResponse(response.data.error);
        return;
      }

      if (response.data.exists) {
        setCupon({ title: formData.title, discount: response.data.discount });
        setCuponInvalido(false);
      } else {
        setCuponInvalido(true);
        setTimeout(() => {
          setCuponInvalido(false);
        }, 2000);
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <div className='bg-primary-bg-color py-6 px-6 rounded-2xl'>
        {cupon && (
          <div className='flex flex-col lg:flex-row gap-3 justify-center items-center'>
            <p className='text-sm font-medium'>
              Cupón aplicado: {cupon.title?.toUpperCase()}{' '}
              <span className='text-xs inline-block w-full md:inline'>
                ({cupon?.discount}% OFF)
              </span>
            </p>
            <button
              className='bg-cancel-text-color text-white text-sm w-36 text-center py-2 px-1 rounded-2xl hover:opacity-70'
              onClick={() => setCupon(null)}
            >
              Quitar cupón
            </button>
          </div>
        )}
        {!cupon && (
          <Formik
            initialValues={{
              title: '',
            }}
            onSubmit={(values, { resetForm }) => {
              addCupon(values, resetForm);
            }}
          >
            {({ errors, touched, isSubmitting }) => (
              <Form>
                <div className='flex gap-3'>
                  <div className='relative'>
                    <Field
                      name='title'
                      placeholder='Cupón'
                      validate={validateTitle}
                      className={`w-32 lg:w-40 rounded-2xl py-2 px-4`}
                    />
                    {errors.title && touched.title && (
                      <div
                        className={`text-xs text-cancel-text-color absolute top-3 right-3`}
                      >
                        {errors.title}
                      </div>
                    )}
                    {cuponInvalido && !errors.title && (
                      <div
                        className={`text-xs text-cancel-text-color absolute top-3 right-3`}
                      >
                        Invalido
                      </div>
                    )}
                  </div>

                  <button
                    className={`bg-black text-white text-sm w-36 text-center py-2 px-1 rounded-2xl hover:opacity-70`}
                    type='submit'
                    // disabled={isSubmitting}
                  >
                    Aplicar
                  </button>
                </div>
              </Form>
            )}
          </Formik>
        )}
      </div>
    </>
  );
};

export default ContactForm;
