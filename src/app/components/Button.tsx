'use client'

type ButtonProps = {
  children: React.ReactNode;
  invert?: boolean;
  className?: string;
  onClick: () => void;
};

const Button = ({ children, onClick, invert, className }: ButtonProps) => {
  return <button className={`${
    invert && `bg-transparent text-black border-white border-2`
  } ${className} bg-black text-white text-sm w-36 text-center py-2 px-1 rounded-3xl mt-10 hover:opacity-70`} onClick={onClick}>{children}</button>;
};

export default Button;
