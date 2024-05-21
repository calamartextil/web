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
        invert && `bg-transparent text-black border-black border-2`
      } ${className} bg-black text-white w-40 text-center py-3 px-2 rounded-3xl mt-10 `}
      href={href}
    >
      {children}
    </Link>
  );
};

export default LinkButton;
