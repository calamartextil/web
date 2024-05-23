import Image from 'next/image';
import Link from 'next/link';

interface IconItemProps {
  title: string;
  description: string;
  image: string;
  href: string;
}

const IconItem = ({ title, description, image, href }: IconItemProps) => {
  return (
    <Link href={href} className='flex flex-col items-center content-center'>
      <div className='relative w-24 h-24 mb-5'>
        <Image src={image} fill={true} alt={title} />
      </div>
      <h3 className='text-center text-2xl'>{title}</h3>
      <p className='text-center'>{description}</p>
    </Link>
  );
};

export default IconItem;
