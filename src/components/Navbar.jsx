import React, { useState } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import { NavLink, Link } from "react-router-dom";
import Logo from "../assets/logo.jpg";
const Navbar = () => {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <div className="bg-black flex justify-between items-center h-24 px-2 lg:px-[10%] text-white">
      <Link to={"/"}>
        <img src={Logo} alt="" className="h-20" />
      </Link>

      <nav className="hidden md:flex">
        <NavLink className="p-4 cursor-pointer" to="/">
          Home
        </NavLink>
        {/* <NavLink className="p-4 cursor-pointer" to="/shop">
          Shop
        </NavLink> */}
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
            ? "z-10 md:hidden fixed left-0 top-0 w-[60%] h-full border-r border-r-gray-900 bg-[#000300] ease-in-out duration-500"
            : "fixed left-[-100%]"
        }
      >
        <h1 className="w-full text-2xl font-bold text-[#00df9a] m-4">
          Brandings Lanka
        </h1>
        <ul className="uppercase p-4">
          <Link to="/" onClick={handleNav}>
            <li className="p-4 border-b border-b-gray-600 cursor-pointer">
              Home
            </li>
          </Link>
          <Link to="/about" onClick={handleNav}>
            <li className="p-4 border-b border-b-gray-600 cursor-pointer">
              About
            </li>
          </Link>
          <Link to="/contact" onClick={handleNav}>
            <li className="p-4 cursor-pointer">Contact</li>
          </Link>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
