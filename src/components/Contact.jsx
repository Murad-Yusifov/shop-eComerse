import React from "react";
import { BsYoutube } from "react-icons/bs";
import { FaFacebook, FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import { LiaLinkedin } from "react-icons/lia";

const Contact = () => {
  return (
    <header className="w-full py-[8px] flex justify-center" style={{padding:"8px 0px"}}>
      <div className="w-3/4 flex justify-between items-center">
        <div className="flex">
          <ul className="flex">
            <li className="pr-[15px] text-md mr-[15px]">About Us </li>
            <li className="pr-[15px] text-md mr-[15px]">Privacy</li>
            <li className="pr-[15px] text-md mr-[15px]">FAQ</li>
            <li className="pr-[15px] text-md mr-[15px]">Careers</li>
          </ul>
        </div>

        <nav className="flex">
          <ul className="flex items-center">
            <li className="pr-[15px] mr-[15px]">My Wishlist</li>
            <li className="pr-[15px] mr-[15px] border-r-[1px]">Track Your Order</li>
            <li className="pr-[15px] mr-[15px] text-sm cursor-pointer hover:text-red-500 transition-transform duration-300 hover:scale-x-[-1] transform origin-center"><FaFacebook/></li>

            <li className="pr-[15px] mr-[15px] text-sm hover:text-red-500 cursor-pointer icon "><FaInstagram/></li>
            <li className="pr-[15px] mr-[15px] text-sm hover:text-red-500 cursor-pointer "><FaTwitter/></li>
            <li className="pr-[15px] mr-[15px] text-md hover:text-red-500 cursor-pointer "><LiaLinkedin/></li>
            <li className="pr-[15px] mr-[15px] text-sm hover:text-red-500 cursor-pointer "><BsYoutube/></li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Contact;
