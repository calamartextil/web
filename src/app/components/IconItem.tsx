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
    <div className='flex flex-col items-center'>
      <Link href={href}>
        <div className='relative w-36 h-36'>

        <Image src={image} fill={true} alt={title} />
        </div>
        <h3 className='text-center text-2xl'>{title}</h3>
        <p className='text-center'>{description}</p>
      </Link>
    </div>
  );
};

export default IconItem;
