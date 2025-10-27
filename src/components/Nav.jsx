import React, { useState } from "react";
import logo from "../assets/logo.png";
import { Link } from "react-router-dom";
import { IoMenu, IoClose } from "react-icons/io5";


const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="bg-[#18141F]">
      <nav className="w-full text-white py-5 px-5 ">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        {/* Logo */}
        <div className="w-[50px]">
          <img src={logo} alt="logo" className="w-full h-auto" />
        </div>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-10">
          <Link to="/" className="hover:bg-[#2E1C78] py-2 px-4 rounded transition-all">
            Home
          </Link>
          <Link to="/about" className="hover:bg-[#2E1C78] py-2 px-4 rounded transition-all">
            About
          </Link>
          <Link to="/career" className="hover:bg-[#2E1C78] py-2 px-4 rounded transition-all">
            Careers
          </Link>
          <Link to="/services" className="hover:bg-[#2E1C78] py-2 px-4 rounded transition-all">
            Services
          </Link>
        </div>

        {/* Desktop Button */}
        <div className="hidden md:block">
          <a href="/"><button className="px-5 py-2 bg-[#8150F0] cursor-pointer rounded-md font-medium hover:bg-[#6e3de8] transition-all">
            Contact
          </button></a>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden text-3xl cursor-pointer" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <IoClose /> : <IoMenu />}
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden mt-3 flex flex-col items-center gap-4 bg-[#1C1250] py-5 rounded-lg animate-fadeIn">
          <Link
            to="/"
            onClick={() => setIsOpen(false)}
            className="hover:bg-[#2E1C78] py-2 px-4 rounded w-[80%] text-center transition-all"
          >
            Home
          </Link>
          <Link
            to="/about"
            onClick={() => setIsOpen(false)}
            className="hover:bg-[#2E1C78] py-2 px-4 rounded w-[80%] text-center transition-all"
          >
            About
          </Link>
          <Link
            to="/career"
            onClick={() => setIsOpen(false)}
            className="hover:bg-[#2E1C78] py-2 px-4 rounded w-[80%] text-center transition-all"
          >
            Careers
          </Link>
          <Link
            to="/services"
            onClick={() => setIsOpen(false)}
            className="hover:bg-[#2E1C78] py-2 px-4 rounded w-[80%] text-center transition-all"
          >
            Services
          </Link>
          <a href="/"><button className="px-10 flex items-center justify-center py-2 bg-[#8150F0] rounded-md font-medium w-full">
            Contact
          </button></a>
        </div>
      )}
    </nav>
    </div>
  );
};

export default Nav;
