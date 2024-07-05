import Image from 'next/image';
import LinkButton from '@/app/components/LinkButton';

interface NumberItemProps {
  step: string;
  icon: string;
  alt: string;
  title: string;
  caption?: string;
  description: string;
  href?: string;
}

const NumberItem = ({
  step,
  icon,
  alt,
  title,
  caption,
  description,
  href,
}: NumberItemProps) => {
  return (
    <div className='flex flex-col justify-center items-center text-center'>
      <div className='w-12 h-12 relative mb-6 text-lg text-white bg-black rounded-full flex items-center justify-center text-center'>
        {step}
      </div>
      <div className='w-28 h-28 relative mb-10'>
        <Image src={icon} alt={alt} fill={true} />
      </div>
      <h3 className='text-xl leading-0 mb-1'>{title}</h3>
      <p className='text-sm lg:text-lg mb-5'>{description}</p>
    </div>
  );
};

export default NumberItem;
