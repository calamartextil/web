import {
  FaSquareFacebook,
  FaSquareInstagram,
} from 'react-icons/fa6';

const Footer = () => {
  return (
    <footer className='bg-fourth-bg-color py-5 flex justify-between px-10 pt-20 min-h-2'>
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
  );
};

export default Footer;
