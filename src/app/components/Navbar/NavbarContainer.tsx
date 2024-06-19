'use client';
import { useState, useEffect } from 'react';
import Navbar from '@/app/components/Navbar/Navbar';
import NavbarMobile from '@/app/components/Navbar/NavbarMobile';

export default function NavbarContainer() {
  const [isScroll, setIsScroll] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      setIsScroll(window.scrollY > 250);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <div className='hidden lg:block'>
        <Navbar isScroll={isScroll} />
      </div>
      <div className='lg:hidden relative'>
        <NavbarMobile isScroll={true} />
      </div>
    </>
  );
}
