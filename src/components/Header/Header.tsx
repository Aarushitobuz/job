
// import React from 'react';
// import Image from 'next/image';
// import Button from '../Button';
// import Link from 'next/link';


// const Header = () => {
//   return (
//     <header className=" w-full flex justify-center px-4 py-4">
//       <nav className="w-full max-w-7xl  px-6 py-3 flex flex-col md:flex-row items-center justify-between gap-4 md:gap-6">
//         <div className="flex-shrink-0">
//           <Image
//             src="/images/logo-header.jpg"
//             width={140}
//             height={50}
//             alt="Jobora Logo"
//             className="h-auto w-auto"
//           />
//         </div>

//         <ul className="flex flex-col md:flex-row items-center gap-4 md:gap-14 text-sm md:text-base font-medium text-gray-800 text-center">
//           <li><Link href="/" className="hover:text-[#55a81f] transition">Home</Link></li>
//           <li><Link href="/employers" className="hover:text-[#55a81f] transition">Employers</Link></li>
//           <li><Link href="/pricing" className="hover:text-[#55a81f] transition">Pricing</Link></li>
//           <li><Link href="/blog" className="hover:text-[#55a81f] transition">Blog</Link></li>
//           <li><Link href="/universities" className="hover:text-[#55a81f] transition">Universities</Link></li>
//           <li><Link href="/contact" className="hover:text-[#55a81f] transition">Contact Us</Link></li>
//         </ul>

//         <div className="flex-shrink-0 mr-6">
//           <Button variant= "primary">Login/Register</Button>
//         </div>
//       </nav>
//     </header>
//   );
// };

// export default Header;


'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Button from '../Button';
import { Menu, X } from 'lucide-react';
import headerImage from '../../../public/images/logo-header.jpg'

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);
  return (
    <header className="w-full bg-white shadow ">
      <nav className="w-full max-w-6xl mx-auto py-4 flex items-center justify-between  ">
          <div className="relative w-[80px] h-[80px] ">
            <Image
              src={headerImage}
              alt="Jobora Logo"
              fill
              className="w-full h-full "
            />
          </div>
        <div className="md:hidden">
          <button onClick={toggleMenu} aria-label="Toggle menu">
            {menuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        <ul className="hidden md:flex gap-10 text-sm md:text-base font-medium text-gray-800">
          <li><Link href="/" className="hover:text-[#55a81f] transition">Home</Link></li>
          <li><Link href="/employers" className="hover:text-[#55a81f] transition">Employers</Link></li>
          <li><Link href="/pricing" className="hover:text-[#55a81f] transition">Pricing</Link></li>
          <li><Link href="/blog" className="hover:text-[#55a81f] transition">Blog</Link></li>
          <li><Link href="/universities" className="hover:text-[#55a81f] transition">Universities</Link></li>
          <li><Link href="/contact" className="hover:text-[#55a81f] transition whitespace-nowrap">Contact Us</Link></li>
        </ul>

        <div className="hidden md:flex">
          <Button variant="primary">Login/Register</Button>
        </div>
      </nav>

      {menuOpen && (
        <div className="md:hidden bg-white px-4 pb-4 shadow-md">
          <ul className="flex flex-col gap-4 text-[14px] md:text-base font-medium text-gray-800">
            <li><Link href="/" onClick={() => setMenuOpen(false)} className="hover:text-[#55a81f] transition">Home</Link></li>
            <li><Link href="/employers" onClick={() => setMenuOpen(false)} className="hover:text-[#55a81f] transition">Employers</Link></li>
            <li><Link href="/pricing" onClick={() => setMenuOpen(false)} className="hover:text-[#55a81f] transition">Pricing</Link></li>
            <li><Link href="/blog" onClick={() => setMenuOpen(false)} className="hover:text-[#55a81f] transition">Blog</Link></li>
            <li><Link href="/universities" onClick={() => setMenuOpen(false)} className="hover:text-[#55a81f] transition">Universities</Link></li>
            <li><Link href="/contact" onClick={() => setMenuOpen(false)} className="hover:text-[#55a81f] transition whitespace-nowrap">Contact Us</Link></li>
          </ul>
          <div className="mt-4">
            <Button variant="primary">Login/Register</Button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
