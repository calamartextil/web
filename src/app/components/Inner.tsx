const Inner = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className='max-w-[1200px] my-0 mx-auto flex flex-col justify-center items-center gap px-2'>
      {children}
    </div>
  );
};

export default Inner;
