
import React from 'react';
import Image from 'next/image';
import Button from '../Button';
import Link from 'next/link';


const Header = () => {
  return (
    <header className=" w-full flex justify-center px-4 py-4">
      <nav className="w-full max-w-7xl bg-white border border-gray-200 shadow-md rounded-full px-6 py-3 flex flex-col md:flex-row items-center justify-between gap-4 md:gap-6">
        <div className="flex-shrink-0">
          <Image
            src="/images/logo-header.jpg"
            width={140}
            height={50}
            alt="Jobora Logo"
            className="h-auto w-auto"
          />
        </div>

        <ul className="flex flex-col md:flex-row items-center gap-4 md:gap-14 text-sm md:text-base font-medium text-gray-800 text-center">
          <li><Link href="/" className="hover:text-[#55a81f] transition">Home</Link></li>
          <li><Link href="/employers" className="hover:text-[#55a81f] transition">Employers</Link></li>
          <li><Link href="/pricing" className="hover:text-[#55a81f] transition">Pricing</Link></li>
          <li><Link href="/blog" className="hover:text-[#55a81f] transition">Blog</Link></li>
          <li><Link href="/universities" className="hover:text-[#55a81f] transition">Universities</Link></li>
          <li><Link href="/contact" className="hover:text-[#55a81f] transition">Contact Us</Link></li>
        </ul>

        <div className="flex-shrink-0 mr-6">
          <Button variant= "primary">Login/Register</Button>
        </div>
      </nav>
    </header>
  );
};

export default Header;
