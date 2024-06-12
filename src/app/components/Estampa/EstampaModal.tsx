'use client';

import { useState, useEffect } from 'react';
import Button from '@/app/components/Button';
import { useCartContext } from '@/app/contexts/CartContext';
import Image from 'next/image';
import TelaMtsInput from '@/app/components/TelaMtsInput';
import type { Estampa } from '@/types';

interface EstampaModalProps {
  estampa: Estampa;
}

enum Scale {
  S = 'S',
  M = 'M',
  L = 'L',
}

const EstampaModal = ({ estampa }: EstampaModalProps) => {
  const { addEstampaToTela, telaAvailable, actualTela } = useCartContext();
  const [available, setAvailable] = useState<number>(0.5);
  const [openModal, setModal] = useState(false);
  const [mts, setMts] = useState<number>(0.5);
  const [scale, setScale] = useState<string>(Scale.S);
  const handleModal = () => {
    setMts(0.5);
    setModal(!openModal);
  };

  useEffect(() => {
    setAvailable(telaAvailable(actualTela.sku).available);
  }, [actualTela.sku, telaAvailable]);

  const handleAddEstampa = () => {
    addEstampaToTela(actualTela.sku, estampa, mts, scale);
    handleModal();
  };

  const handleInputChange = (mts: number) => {
    if (telaAvailable(actualTela.sku).available === 0) return;
    setMts(mts ? mts : 0.5);
  };

  return (
    <div>
      <Button onClick={handleModal}>Elegir</Button>
      {openModal && (
        <div className='fixed top-0 left-0 w-full h-full bg-white bg-opacity-80 flex justify-center items-center z-20 transition-all'>
          <div className=' w-3/4 lg:w-2/4 bg-primary-bg-color p-10 rounded-2xl shadow-lg '>
            <div className='grid'>
              <div className='col_6'>
                <div className='full-img-container mb-5'>
                  <Image
                    fill={true}
                    src={`https://app.calamartextil.com/images/estampas/${estampa.image}`}
                    alt={estampa.title}
                    className='rounded-2xl full-img'
                  />
                </div>
              </div>
              <div className='col_6'>
                <div className='flex flex-col justify-between h-full'>
                  <div>
                    <h2 className='text-4xl mb-5'>{estampa?.title}</h2>
                    {estampa?.description !== '' && (
                      <p className='text-sm mb-5'>{estampa?.description}</p>
                    )}

                    <div className='pb-2'>
                      {available > 0 && (
                        <>
                          <TelaMtsInput
                            setMts={handleInputChange}
                            mts={mts}
                            interval={0.5}
                            available={telaAvailable(actualTela?.sku).available}
                          />
                          <p className='text-xs'>
                            Espacio en tela disponible:{' '}
                            {telaAvailable(actualTela?.sku).available} mts
                          </p>
                        </>
                      )}
                      {!actualTela.sku ? (
                        <p className='text-xs'>
                          Por favor seleccioná una tela para agregar la estampa
                        </p>
                      ) : (
                        available === 0 && (
                          <p className='text-xs'>
                            No hay espacio disponible en la tela. Por favor
                            quitá alguna estampa
                          </p>
                        )
                      )}
                    </div>
                    {available > 0 && (
                      <div className='pb-5'>
                        <div className='flex justify-start gap-2 mt-4'>
                          <p className='text-lg'>Escala:</p>
                          <button
                            className={`rounded-full w-8 h-8 flex justify-center items-center ${
                              scale === Scale.S
                                ? 'bg-third-bg-color'
                                : 'bg-gray-200'
                            }`}
                            onClick={() => setScale(Scale.S)}
                          >
                            {Scale.S}
                          </button>
                          <button
                            className={`rounded-full w-8 h-8 flex justify-center items-center ${
                              scale === Scale.M
                                ? 'bg-third-bg-color'
                                : 'bg-gray-200'
                            }`}
                            onClick={() => setScale(Scale.M)}
                          >
                            {Scale.M}
                          </button>
                          <button
                            className={`rounded-full w-8 h-8 flex justify-center items-center ${
                              scale === Scale.L
                                ? 'bg-third-bg-color'
                                : 'bg-gray-200'
                            }`}
                            onClick={() => setScale(Scale.L)}
                          >
                            {Scale.L}
                          </button>
                        </div>
                      </div>
                    )}
                  </div>

                  <div className='flex justify-end items-center gap-5'>
                    {available > 0 && (
                      <Button onClick={handleAddEstampa}>Agregar</Button>
                    )}
                    <Button
                      className='bg-cancel-text-color'
                      onClick={handleModal}
                    >
                      Cancelar
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default EstampaModal;
