'use client';

import { FaWhatsapp } from 'react-icons/fa6';
import Link from 'next/link';
import Image from 'next/image';

export default function WspIcon({ isScroll = false }: { isScroll?: boolean }) {
  return (
    <Link
      className='fixed bottom-5 right-4 lg:right-8 z-20 hover:opacity-80 drop-shadow-[0_8px_4px_rgba(0,0,0,.3)]'
      target='_blank'
      href='https://api.whatsapp.com/send?phone=5491123644913&text=Quiero%20hacer%20una%20consulta'
    >
      <div
        className={`relative ${
          isScroll ? `w-[30px] h-[30px]` : `w-[45px] h-[45px]`
        } `}
      >
        <Image src='/images/icons/wsp.svg' alt='whatsapp' width={isScroll ? `30` : `45`} height={isScroll ? `30` : `45`} />
      </div>
    </Link>
  );
}
