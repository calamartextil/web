import { Estampa } from '@/types';
import Image from 'next/image';
import { EstampaCart } from '@/types';

type CartMiniEstampasProps = {
  estampasCart: EstampaCart[];
};

export default function CartMiniEstampas({
  estampasCart,
}: CartMiniEstampasProps) {
  return (
    <div className='flex flex-wrap justify-start items-center gap-2'>
      {estampasCart?.length !== 0 &&
        estampasCart?.map((estampaItem, index) => (
          <div key={index}>
            <Image
              src={`${process.env.NEXT_PUBLIC_IMAGES_URL}/estampas/${estampaItem.estampa.image}`}
              alt={estampaItem.estampa.title}
              width={60}
              height={60}
              className='mb-2 rounded-xl'
              placeholder='blur'
              blurDataURL='/images/placeholder.jpg'
            />
            <h3 className='text-sm'>{estampaItem.estampa.title}</h3>
            <p className='text-xs'>{estampaItem.mts} mts</p>
            <p className='text-xs'>Escala: {estampaItem.scale}</p>
          </div>
        ))}
    </div>
  );
}
