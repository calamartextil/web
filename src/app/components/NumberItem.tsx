import Image from 'next/image';
import LinkButton from '@/app/components/LinkButton';

interface NumberItemProps {
  image: string;
  icon: string;
  alt: string;
  title: string;
  caption: string;
  description: string;
  href: string;
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
    <div className='flex flex-col justify-center items-center gap-5'>
      <Image src={image} alt={alt} width={100} height={100} />
      <h3>{title}</h3>
      <p>{description}</p>
      <Image src={icon} alt={alt} width={100} height={100} />
      <LinkButton href={href} invert={true}>
        {caption}
      </LinkButton>
    </div>
  );
};

export default NumberItem;
