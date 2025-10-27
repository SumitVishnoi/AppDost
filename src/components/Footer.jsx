import React from "react";
import logo from "../assets/logo.png";
import { FaLinkedinIn } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="bg-[#111C2C] text-white flex flex-col items-center gap-10 pt-5">
      <div className="flex justify-center items-center gap-2">
        <div>
            <img className="w-20 h-15" src={logo} alt="" />
        </div>
        <div>
            <h1 className="text-4xl font-semibold">AppDost</h1>
        <p className="text-[#8150F0]">Complete Solution</p>
        </div>
      </div>

      <div className="w-full flex flex-wrap md:flex-nowrap justify-center items-start gap-10 lg:gap-30 mt-5 p-2">
        <ul className="w-1/2 flex flex-col items-center">
          <h2 className="font-medium text-xl ">Quick Links</h2>
          <li className="text-[#a6a1a1] text-lg">Home</li>
          <li className="text-[#a6a1a1] text-lg">Services</li>
          <li className="text-[#a6a1a1] text-lg">Careers</li>
          <li className="text-[#a6a1a1] text-lg">Blog</li>
          <li className="text-[#a6a1a1] text-lg">Contact</li>
        </ul>
        <ul className="w-1/2 flex flex-col items-center">
          <h2 className="font-medium text-lg">Our Services</h2>
          <li className="text-[#a6a1a1] text-lg">Android App Development</li>
          <li className="text-[#a6a1a1] text-lg">Web Development</li>
          <li className="text-[#a6a1a1] text-lg">UI/UX Design</li>
          <li className="text-[#a6a1a1] text-lg">CRM Software</li>
          <li className="text-[#a6a1a1] text-lg">Cloud Solutions</li>
          <li className="text-[#a6a1a1] text-lg">Cybersecurity</li>
        </ul>
        <ul className="w-1/2 flex flex-col items-center">
          <h2 className="font-medium text-lg">Contact Info</h2>
          <li className="text-[#a6a1a1] text-lg">contact@appdost.in</li>
          <li className="text-[#a6a1a1] text-lg">+91 76350 75422 / +91 11 6929 0750</li>
          <li className="text-[#a6a1a1] text-lg">Mon - Sat: 9:00 AM - 6:00 PM IST</li>
          <li className="text-[#a6a1a1] text-lg">3 Offices: Banka (HQ), Motihari, Patna</li>
        </ul>
      </div>

      <div className="flex flex-wrap gap-5 items-center justify-between border-t-2 border-zinc-600 w-full py-2 px-5">
        <p>© 2025 AppDost - Complete IT Solution. All rights reserved.</p>
        <div>
            <span>Privacy Policy | </span>
            <span>Terms of Service | </span>
            <span>Sitemap</span>
        </div>
        <div className="flex items-center gap-3">
            <div className="border-2 border-white rounded-full p-2 bg-[black]">
                <FaLinkedinIn />
            </div>
            <div className="border-2 border-white rounded-full p-2 bg-[black]">
                <FaXTwitter />
            </div>
            <div className="border-2 border-white rounded-full p-2 bg-[black]">
                <FaFacebookF />
            </div>
            <div className="border-2 border-white rounded-full p-2 bg-[black]">
                <FaInstagram />
            </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
