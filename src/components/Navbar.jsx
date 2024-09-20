import React, { useState } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";

const Navbar = () => {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <div className="flex justify-between items-center h-24 max-w-[1240px] mx-auto px-4 text-white">
      <h1 className="w-full text-3xl font-bold text-[#00df9a]">Brandings Lanka</h1>
      <ul className="hidden md:flex">
        <li className="p-4 cursor-pointer">Home</li>
        <li className="p-4 cursor-pointer">Shop</li>
        <li className="p-4 cursor-pointer">About</li>
        <li className="p-4 cursor-pointer">Contact</li>
      </ul>
      <div onClick={handleNav} className="block md:hidden">
        {/* This size is react icon property */}
        {nav ? <AiOutlineClose size={20} className="cursor-pointer"/> : <AiOutlineMenu size={20} className="cursor-pointer"/>}
      </div>
      <div
        className={
          nav
            ? "fixed left-0 top-0 w-[60%] h-full border-r border-r-gray-900 bg-[#000300] ease-in-out duration-500"
            : "fixed left-[-100%]"
        }
      >
        <h1 className="w-full text-3xl font-bold text-[#00df9a] m-4">Brandings Lanka</h1>
        <ul className="uppercase p-4">
          <li className="p-4 border-b border-b-gray-600 cursor-pointer" onClick={handleNav}>Home</li>
          <li className="p-4 border-b border-b-gray-600 cursor-pointer" onClick={handleNav}>Shop</li>
          <li className="p-4 border-b border-b-gray-600 cursor-pointer" onClick={handleNav}>About</li>
          <li className="p-4 cursor-pointer" onClick={handleNav}>Contact</li>
        </ul>
      </div>
    </div>
  ); 
};

export default Navbar;
