'use client';

import { useCartContext } from '@/app/contexts/CartContext';
import Image from 'next/image';
import Link from 'next/link';

import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

interface TelaGraphProps {
  sku: string;
}

const EstampasGraphSlider = ({ sku }: TelaGraphProps) => {
  const { cart, telaAvailable, removeEstampaBySku } = useCartContext();

  const availability = () => {
    const rest = telaAvailable(sku);
    return rest.telaTotal - rest.estampasTotal;
  };

  const generateGraph = () => {
    return cart
      .filter((cartItem) => cartItem.tela.sku === sku)
      .map((cartItem) => {
        return cartItem?.estampas?.map((estampa, index) => (
          <div key={index}>
            <div className='flex items-center justify-center gap-2 mr-3'>
              <div className='hidden lg:block'>
                <Image
                  className='rounded-2xl'
                  src={`${process.env.NEXT_PUBLIC_IMAGES_URL}/estampas/${estampa.estampa.image}`}
                  alt={estampa.estampa.title}
                  width={70}
                  height={70}
                  placeholder='blur'
                  blurDataURL='/images/placeholder.jpg'
                />
              </div>

              <div className='flex lg:flex-col justify-center items-center lg:items-start gap-2 lg:gap-0'>
                <p className='text-sm font-medium leading-none mb-1'>
                  {estampa.estampa.title}
                </p>
                <p className='text-xs leading-none mb-1'>
                  Escala {estampa.scale}
                </p>
                <p className='text-xs leading-none mb-1'>{estampa.mts} mts</p>
                <button
                  className='text-sm text-white leading-0 pb-1 lg:pb-0'
                  onClick={() =>
                    removeEstampaBySku(sku, estampa.estampa.sku, estampa.scale)
                  }
                >
                  Quitar
                </button>
              </div>
            </div>
          </div>
        ));
      });
  };

  const sliderSettings = {
    arrows: true,
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 7,
    slidesToScroll: 1,
  };
  return (
    <div className='flex justify-center h-16'>
      <div className='slider absolute top-2 left-0 w-10/12'>
        <Slider {...sliderSettings}>{generateGraph()}</Slider>
      </div>
      <div className='messages bg-slate-400 absolute top-2 right-3'>
        Queda tanto espacio
      </div>
    </div>
  );
};

export default EstampasGraphSlider;
