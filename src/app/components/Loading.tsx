import React from 'react';
import Image from 'next/image';

export default function Loading() {
  return (
    <div className='w-full h-full flex justify-center items-center flex-col'>
      <div className='mt-30'>
        <Image src='/images/logo.svg' width={100} height={100} alt='Calamar' />
      </div>
      <div className='text-gray-900 text-sm mt-4'>Cargando...</div>
    </div>
  );
}
