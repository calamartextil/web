'use client';

import { FaWhatsapp } from 'react-icons/fa6';
import Link from 'next/link';

export default function WspIcon({ isScroll = false }: { isScroll?: boolean }) {
  return (
    <Link
      className='fixed bottom-4 right-3 lg:right-7 z-20 bg-[#ece5dd] rounded-full p-3 hover:opacity-80 drop-shadow-[0_8px_4px_rgba(0,0,0,.3)]'
      target='_blank'
      href='https://api.whatsapp.com/send?phone=5491123644913&text=Quiero%20hacer%20una%20consulta'
    >
      <div
        className={`relative ${
          isScroll ? `w-[20px] h-[20px]` : `w-[35px] h-[35px]`
        } `}
      >
        <FaWhatsapp size={isScroll ? `20` : `35`} color='#25d366' />
      </div>
    </Link>
  );
}
