'use client';

import React, { useState } from 'react';
import { FaAngleUp } from 'react-icons/fa6';

interface Faqs {
  title: string;
  content: string;
  isOpen: boolean;
}

const Faqs: React.FC = () => {
  const [faqs, setFaqs] = useState<Faqs[]>([
    {
      title: 'En que formato tengo que enviar mis estampas?',
      content: 'Answer to FAQ 1',
      isOpen: false,
    },
    {
      title: 'Cuato es el tiempo de demora?',
      content: 'Answer to FAQ 2',
      isOpen: false,
    },
    {
      title: 'Hay reenvolso o garantía?',
      content: 'Answer to FAQ 3',
      isOpen: false,
    },
  ]);

  const toggleFaq = (index: number) => {
    setFaqs((prevFaqs) => {
      const updatedFaqs = prevFaqs.map((faq, i) => {
        if (i === index) {
          return {
            ...faq,
            isOpen: !faq.isOpen,
          };
        } else {
          return {
            ...faq,
            isOpen: false,
          };
        }
      });
      return updatedFaqs;
    });
  };

  return (
    <div>
      {faqs.map((faq, index) => (
        <div key={index} className='mb-5'>
          <div
            className='bg-primary-bg-color text-lg rounded-2xl px-3 max-w-3/4 min-w-[600px] mb-1 h-16 flex justify-between items-center cursor-pointer'
            onClick={() => toggleFaq(index)}
          >
            <h3>{faq.title}</h3>
            <div>
              {faq.isOpen ? (
                <FaAngleUp />
              ) : (
                <FaAngleUp className='rotate-180' />
              )}
            </div>
          </div>
          {faq.isOpen && (
            <div className='bg-white rounded-2xl px-4'>
              <p className='text-lg'>{faq.content}</p>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default Faqs;
