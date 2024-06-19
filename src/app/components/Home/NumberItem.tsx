import Image from 'next/image';
import LinkButton from '@/app/components/LinkButton';

interface NumberItemProps {
  image: string;
  icon: string;
  alt: string;
  title: string;
  caption?: string;
  description: string;
  href?: string;
}

const NumberItem = ({
  image,
  icon,
  alt,
  title,
  caption,
  description,
  href,
}: NumberItemProps) => {
  return (
    <div className='flex flex-col justify-center items-center text-center'>
      <div className='w-20 h-20 relative mb-5'>
        <Image src={image} alt={alt} fill={true} />
      </div>
      <h3 className='text-xl leading-0'>{title}</h3>
      <p className='text-sm lg:text-xl mb-5'>{description}</p>
      <div className='w-20 h-20 relative mb-8'>
        <Image src={icon} alt={alt} fill={true} />
      </div>
    </div>
  );
};

export default NumberItem;
