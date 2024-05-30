'use client';

import React, { useState, WheelEventHandler } from 'react';

interface TelaMtsInputProps {
  setMts: (mts: number) => void;
  mts: number;
}

export default function TelaMtsInput({ setMts, mts }: TelaMtsInputProps) {
  const handleDecrement = () => {
    if (mts <= 1) return;
    setMts(mts - 0.5);
  };

  const handleIncrement = () => {
    setMts(mts + 0.5);
  };

  const preventWheel: WheelEventHandler<HTMLInputElement> = (
    e
  ) => {
    const inputElement = e.target as HTMLInputElement; 
    // Prevent the input value change
    inputElement.blur();
    // Prevent the page/container scrolling
    e.stopPropagation();
    // Refocus immediately, on the next tick (after the current function is done)
    // setTimeout(() => {
    //   inputElement.focus();
    // }, 0);
  };

  return (
    <div className='flex items-center'>
      <div
        className='py-2 px-3 bg-gray-100 rounded-2xl bg-third-bg-color'
        data-hs-input-number=''
      >
        <div className='w-full flex justify-between items-center gap-x-5'>
          <div className='grow'>
            <input
              className='pl-3 w-8 p-0 bg-transparent border-0 focus:ring-0 text-white'
              type='number'
              value={mts}
              data-hs-input-number-input=''
              onChange={(e) => setMts(Number(e.target.value))}
              onWheel={preventWheel}
            />
          </div>
          <div className='flex justify-end items-center gap-x-1.5'>
            <button
              type='button'
              className='size-6 inline-flex justify-center items-center gap-x-2 text-sm font-medium border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-white dark:hover:bg-neutral-800 rounded-2xl'
              data-hs-input-number-decrement=''
              onClick={handleDecrement}
            >
              <svg
                className='flex-shrink-0 size-3.5'
                xmlns='http://www.w3.org/2000/svg'
                width='24'
                height='24'
                viewBox='0 0 24 24'
                fill='none'
                stroke='currentColor'
                strokeWidth='2'
                strokeLinecap='round'
                strokeLinejoin='round'
              >
                <path d='M5 12h14'></path>
              </svg>
            </button>
            <button
              type='button'
              className='size-6 inline-flex justify-center items-center gap-x-2 text-sm font-medium rounded-2xl border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-white dark:hover:bg-neutral-800'
              data-hs-input-number-increment=''
              onClick={handleIncrement}
            >
              <svg
                className='flex-shrink-0 size-3.5'
                xmlns='http://www.w3.org/2000/svg'
                width='24'
                height='24'
                viewBox='0 0 24 24'
                fill='none'
                stroke='currentColor'
                strokeWidth='2'
                strokeLinecap='round'
                strokeLinejoin='round'
              >
                <path d='M5 12h14'></path>
                <path d='M12 5v14'></path>
              </svg>
            </button>
            <p className='text-white text-lg ml-1'>{mts !== 1 ? `mts` : `mt  `}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
