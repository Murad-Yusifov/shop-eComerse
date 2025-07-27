import React from "react";
import { BsYoutube } from "react-icons/bs";
import { FaFacebook, FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import { LiaLinkedin } from "react-icons/lia";

const Contact = () => {
  return (
    <header className="w-full py-[8px] flex justify-center" style={{padding:"8px 0px"}}>
      <div className="w-[90%] flex justify-between items-center px-2 mx-2">
        <div className="flex">
          <ul className="flex *:text-[14px]">
            <li className="pr-[15px] text-md mr-[15px]">About Us </li>
            <li className="pr-[15px] text-md mr-[15px]">Privacy</li>
            <li className="pr-[15px] text-md mr-[15px]">FAQ</li>
            <li className="pr-[15px] text-md mr-[15px]">Careers</li>
          </ul>
        </div>

        <div className="flex">
          <ul className="flex items-center *:text-[14px] *:text-[#74706B]">
            <li className="pr-[15px] mr-[15px]">My Wishlist</li>
            <li className="pr-[15px] mr-[15px] border-r-[1px] border-gray-200">Track Your Order</li>
            <li className="pl-[14px] cursor-pointer hover:text-red-500"><FaFacebook className="transition-transform duration-300 hover:scale-x-[-1] "/></li>

            <li className="pl-[14px] hover:text-red-500 cursor-pointer "><FaInstagram className="transition-transform duration-300 hover:scale-x-[-1] "/></li>
            <li className="pl-[14px] hover:text-red-500 cursor-pointer "><FaTwitter className="transition-transform duration-300 hover:scale-x-[-1] "/></li>
            <li className="pl-[14px] text-md hover:text-red-500 cursor-pointer ">< LiaLinkedin className="text-md transition-transform duration-300 hover:scale-x-[-1] "/></li>
            <li className="pl-[14px] hover:text-red-500 cursor-pointer "><BsYoutube className="transition-transform duration-300 hover:scale-x-[-1] "/></li>
          </ul>
        </div>
      </div>
    </header>
  );
};

export default Contact;
