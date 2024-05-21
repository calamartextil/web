import {
  FaCartShopping,
  FaSquareFacebook,
  FaSquareInstagram,
} from 'react-icons/fa6';

const Footer = () => {
  return <footer className='bg-third-bg-color py-5 flex justify-between px-10 pt-20'>
    <div>Copiright</div>
    <div className='flex justify-center items-center gap-2'>
          <a href=''>
            <FaSquareInstagram size='20' color='#000' />
          </a>
          <a href=''>
            <FaSquareFacebook size='20' color='#000' />
          </a>
          <FaCartShopping size='20' color='#000' />
        </div>
  </footer>;
};

export default Footer;
