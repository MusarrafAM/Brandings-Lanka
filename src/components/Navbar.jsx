import React, { useState } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <div className="bg-black flex justify-between items-center h-24 px-2 lg:px-[10%] text-white">
      <h1 className="w-full text-3xl font-bold text-[#00df9a]">
        Brandings Lanka
      </h1>
      <nav className="hidden md:flex">
        <NavLink className="p-4 cursor-pointer" to="/">
          Home
        </NavLink>
        <NavLink className="p-4 cursor-pointer" to="/shop">
          Shop
        </NavLink>
        <NavLink className="p-4 cursor-pointer" to="/about">
          About
        </NavLink>
        <NavLink className="p-4 cursor-pointer" to="/contact">
          Contact
        </NavLink>
      </nav>
      <div onClick={handleNav} className="block md:hidden">
        {/* This size is react icon property */}
        {nav ? (
          <AiOutlineClose size={20} className="cursor-pointer" />
        ) : (
          <AiOutlineMenu size={20} className="cursor-pointer" />
        )}
      </div>
      <div
        className={
          nav
            ? "fixed left-0 top-0 w-[60%] h-full border-r border-r-gray-900 bg-[#000300] ease-in-out duration-500"
            : "fixed left-[-100%]"
        }
      >
        <h1 className="w-full text-3xl font-bold text-[#00df9a] m-4">
          Brandings Lanka
        </h1>
        <ul className="uppercase p-4">
          <li
            className="p-4 border-b border-b-gray-600 cursor-pointer"
            onClick={handleNav}
          >
            Home
          </li>
          <li
            className="p-4 border-b border-b-gray-600 cursor-pointer"
            onClick={handleNav}
          >
            Shop
          </li>
          <li
            className="p-4 border-b border-b-gray-600 cursor-pointer"
            onClick={handleNav}
          >
            About
          </li>
          <li className="p-4 cursor-pointer" onClick={handleNav}>
            Contact
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
