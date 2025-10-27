import React from "react";
import logo from "../assets/logo.png";
import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <div className=" items-center justify-between py-2 px-5 hidden w-full">
      <div className="w-[50px]">
        <img src={logo} alt="" />
      </div>
      <div className="flex items-center gap-10 text-white">
        <Link to={"/"} className="hover:bg-[#2E1C78] py-2 px-4 rounded">Home</Link>
        <Link to={"/about"} className="hover:bg-[#2E1C78] p-2 rounded">About</Link>
        <Link to={"/career"} className="hover:bg-[#2E1C78] p-2 rounded">Careers</Link>
        <Link to={"/blog"} className="hover:bg-[#2E1C78] p-2 rounded">Blog</Link>
      </div>
        <button className="px-4 py-2 bg-[#8150F0] text-white rounded-md font-medium cursor-pointer">Contact</button>
    </div>
  );
};

export default Nav;
