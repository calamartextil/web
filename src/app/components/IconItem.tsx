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
      <h3>{title}</h3>
      <p>{description}</p>
      <Link href={href}>
        <Image src={image} width={100} height={100} alt={title} />
      </Link>
    </div>
  );
};

export default IconItem;
