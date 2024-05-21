import Link from 'next/link';

interface LinkButtonProps {
  children: React.ReactNode;
  href: string;
  invert?: boolean;
}

const LinkButton = ({ children, href, invert }: LinkButtonProps) => {
  return <Link href={href}>{children}</Link>;
};

export default LinkButton;
