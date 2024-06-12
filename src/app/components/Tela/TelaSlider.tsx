'use client';

import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Image from 'next/image';

type TelaSliderProps = {
  images: {
    lisaUrl: string;
    estampadaUrl?: string | undefined;
    usosUrl?: string | undefined;
  };
};

export default function TelaSlider({ images }: TelaSliderProps) {
  var settings = {
    arrows: true,
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    
      <Slider {...settings}>
        <div className='full-img-container'>
          <Image
            sizes='100%'
            fill={true}
            src={`${process.env.NEXT_PUBLIC_IMAGES_URL}/telas/${images.lisaUrl}`}
            alt={`Lisa`}
            className='rounded-2xl full-img'
          />
        </div>
        <div className='full-img-container'>
          <Image
            sizes='100%'
            fill={true}
            src={`${process.env.NEXT_PUBLIC_IMAGES_URL}/telas/${images.lisaUrl}`}
            alt={`Lisa`}
            className='rounded-2xl full-img'
          />
        </div>
        <div className='full-img-container'>
          <Image
            sizes='100%'
            fill={true}
            src={`${process.env.NEXT_PUBLIC_IMAGES_URL}/telas/${images.lisaUrl}`}
            alt={`Lisa`}
            className='rounded-2xl full-img'
          />
        </div>
      </Slider>
   
  );
}
