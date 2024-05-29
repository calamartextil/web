import { FaSquareFacebook, FaSquareInstagram } from 'react-icons/fa6';

const Footer = () => {
  return (
    <div className='absolute bottom-0 z-10 mt-5 w-full'>
      <div className='relative'>
        <div className="absolute w-full h-[54px] bottom-20 left-0 z-20 bg-[url('/images/ondas.png')] bg-cover bg-bottom drop-shadow-[0_8px_4px_rgba(0,0,0,.1)]"></div>
        <footer className=' w-full bg-fourth-bg-color py-5 flex justify-between px-10 pt-20 min-h-2 absolute bottom-0 z-10'>
          <p>Calamar Textil</p>
          <div className='flex justify-center items-center gap-2'>
            <a href='#' target='_blank'>
              <FaSquareInstagram size='20' color='#000' />
            </a>
            <a href='#' target='_blank'>
              <FaSquareFacebook size='20' color='#000' />
            </a>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default Footer;
