'use client';
import Button from '@/app/components/Button';
import Image from 'next/image';
import { useState } from 'react';

const TelasMedidasModal = () => {
  const [popUp, setPopUp] = useState(false);

  return (
    <div>
      <button onClick={() => setPopUp(true)} className='mt-2'>
        <span className='text-xs underline underline-offset-4'>
          ¿Cómo se estampa la tela?
        </span>
      </button>
      {popUp && (
        <div className='fixed top-0 left-0 w-full h-full bg-white bg-opacity-80 flex justify-center items-center z-20 transition-all'>
          <div className='w-full mx-5 lg:w-2/4 bg-primary-bg-color p-5 rounded-2xl shadow-lg  max-w-[800px]'>
            <div className='flex justify-center items-center'>
              <div className='full-img-container mb-5'>
                <Image
                  src='/images/TelasMedidas.svg'
                  className='full-img'
                  placeholder='blur'
                  blurDataURL='/images/placeholder.jpg'
                  fill={true}
                  alt='Escalas'
                />
              </div>
            </div>
            <div className='flex justify-end items-center'>
              <Button onClick={() => setPopUp(false)}>Cerrar</Button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default TelasMedidasModal;
