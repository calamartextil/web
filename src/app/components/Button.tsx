'use client'

type ButtonProps = {
  children: React.ReactNode;
  handleOnClick: () => void;
};

const Button = ({ children, handleOnClick }: ButtonProps) => {
  return <button onClick={handleOnClick}>{children}</button>;
};

export default Button;
