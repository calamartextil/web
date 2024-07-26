'use client';
import Button from '@/app/components/Button';
import Image from 'next/image';
import { useCartContext } from '@/app/contexts/CartContext';

const EscalaModal = () => {
  const { scalePopUp, setScalePopUp } = useCartContext();

  return (
    <div>
      {scalePopUp && (
        <div className='fixed top-0 left-0 w-full h-full bg-white bg-opacity-80 flex justify-center items-center z-20 transition-all'>
          <div className='w-full mx-5 lg:w-2/4 bg-primary-bg-color p-5 rounded-2xl shadow-lg  max-w-[700px]'>
            <div className='flex justify-center items-center'>
              <div className='full-img-container mb-5'>
                <Image
                  src='/images/Escalas.svg'
                  className='rounded-2xl full-img'
                  placeholder='blur'
                  blurDataURL='/images/placeholder.jpg'
                  fill={true}
                  alt='Escalas'
                />
              </div>
            </div>
            

            <div className='flex justify-end items-center'>
              <Button onClick={() => setScalePopUp(false)}>Cerrar</Button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default EscalaModal;
