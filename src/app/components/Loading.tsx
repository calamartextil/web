import React from 'react';
import Image from 'next/image';

export default function Loading() {
  return (
    <div className='w-full h-full flex justify-center items-center flex-col'>
      <div className='relative w-50 h-50'>
        <Image src='/images/logo-color.svg' fill={true} alt='Calamar' />
      </div>
      <div className='text-gray-900 text-2xl mt-4'>Cargando...</div>
    </div>
  );
}
