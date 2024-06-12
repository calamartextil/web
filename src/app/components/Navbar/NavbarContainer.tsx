'use client'
import { useState, useEffect } from 'react';
import Navbar from '@/app/components/Navbar/Navbar';

export default function NavbarContainer() {
  const [isScroll, setIsScroll] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      setIsScroll(window.scrollY > 250);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return <Navbar isScroll={isScroll} />;
}
