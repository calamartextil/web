import { Tela } from '@/types';
import Image from 'next/image';
import LinkButton from '@/app/components/LinkButton';

export default function CardTela({ telaId, title, sku, price, images }: Tela) {
  return (
    <div className='flex flex-col justify-center items-center'>
      <div className='relative w-40 h-40'>
        <Image fill={true} src={images.lisaUrl} alt={title} />
      </div>
      <h3>{title}</h3>
      <p>{price}</p>
      <LinkButton href={`/telas/${sku}`}>Ver tela</LinkButton>
    </div>
  );
}
