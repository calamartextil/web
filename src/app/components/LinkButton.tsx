import Link from 'next/link';

interface LinkButtonProps {
  children: React.ReactNode;
  href: string;
  invert?: boolean;
  className?: string;
}

const LinkButton = ({
  children,
  href,
  invert = false,
  className,
}: LinkButtonProps) => {
  return (
    <Link
      className={`${
        invert && `bg-transparent text-black border-white border-2`
      } ${className} bg-black text-white text-sm w-36 text-center py-2 px-1 rounded-2xl hover:opacity-70`}
      href={href}
    >
      {children}
    </Link>
  );
};

export default LinkButton;
