import { Tela } from '@/types';
import Image from 'next/image';
import LinkButton from '@/app/components/LinkButton';

export default function TelaCard({ telaId, title, sku, price, images }: Tela) {
  return (
    <div className='flex flex-col justify-center items-center bg-primary-bg-color py-5 px-6 rounded-2xl'>
      <div className='relative w-56 h-56 mb-5'>
        <Image fill={true} src={images.lisaUrl} alt={title} className='rounded-2xl' />
      </div>
      <h3 className='text-xl'>{title}</h3>
      <p>Desde ${price}</p>
      <LinkButton href={`/telas/${sku}`}>Ver tela</LinkButton>
    </div>
  );
}
