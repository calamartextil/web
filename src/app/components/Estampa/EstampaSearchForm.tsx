'use client';

//TODO implement reCaptcha

import { useState } from 'react';
import { Formik, Form, Field } from 'formik';
import axios from 'axios';
import { Estampa } from '@/types';
import EstampaModal from '@/app/components/Estampa/EstampaModal';
import { FaSearch } from "react-icons/fa";
type FormData = {
  title: string;
};

const EstampaSearchForm = () => {
  const [mailResponse, setMailResponse] = useState(null);
  const [estampaInvalido, setEstampaInvalido] = useState(false);
  const [estampa, setEstampa] = useState<Estampa>({} as Estampa);
  const [showModal, setShowModal] = useState(false);

  const validateTitle = (value: string) => {
    let error;
    if (value === '') {
      error = 'Requerido';
    }
    return error;
  };

  const searchEstampa = async (formData: FormData, resetForm: any) => {
    setEstampa({} as Estampa);
    setShowModal(false);
    try {
      const response = await axios.post('/api/estampas/search', {
        title: formData.title,
      });

      if (response.data) {
        setEstampa(response.data);
        setEstampaInvalido(false);
        setShowModal(true);
      } else {
        setEstampaInvalido(true);
        setTimeout(() => {
          setEstampaInvalido(false);
        }, 2000);
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <div className='bg-primary-bg-color py-6 px-6 rounded-2xl'>
        <Formik
          initialValues={{
            title: '',
          }}
          onSubmit={(values, { resetForm }) => {
            searchEstampa(values, resetForm);
          }}
        >
          {({ errors, touched, isSubmitting }) => (
            <Form>
              <div className='flex gap-3'>
                <div className='relative'>
                  <Field
                    name='title'
                    placeholder='Código'
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
                  {estampaInvalido && !errors.title && (
                    <div
                      className={`text-xs text-cancel-text-color absolute top-3 right-3`}
                    >
                      Invalido
                    </div>
                  )}
                </div>

                <button
                  className={`bg-black text-white text-sm w-10 text-center py-1 px-1 rounded-full hover:opacity-70`}
                  type='submit'
                  // disabled={isSubmitting}
                >
                  <FaSearch className='inline-block' size={15} />
                </button>
              </div>
            </Form>
          )}
        </Formik>

        {showModal && (
          <EstampaModal estampa={estampa} visible={true} hideButton={true} />
        )}
      </div>
    </>
  );
};

export default EstampaSearchForm;
