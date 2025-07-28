import React from "react";
import { FaCartArrowDown, FaSearch, FaUser } from "react-icons/fa";
import { Link } from "react-router";

const Navbar = ({ setSearch }) => {
  const searchUnits = [
    "Home",
    "Men",
    "Women",
    "Baby Collection",
    "Pages",
    "Blog",
    "Contact",
  ];
  return (
    <nav className="w-full flex justify-center *:text-[16px] *:cursor-pointer ">
      <div className="w-[85%] flex justify-between">
        <div className="bg-white flex items-center">
          <img
            src="https://preview.colorlib.com/theme/capitalshop/assets/img/logo/logo.png.webp"
            alt="logo"
          />
        </div>
        
        <ul className="flex *:py-[41px] *:px-[10px] *:text-[16px] *:font-bold">
          {searchUnits.map((item) => (
            <li key={item} className="hover:text-red-500 transition">
              <Link to="/">{item}</Link>
            </li>
          ))}
        </ul>

        <ul className="flex *:py-[31px] *:px-[13px] font-[400] *:text-[24px] items-center">
          <li className="hover:text-red-500 transition">
            <FaSearch onClick={() => setSearch((prev) => !prev)} />
          </li>
          <li className="hover:text-red-500 transition">
            <Link to="/user">
              <FaUser />
            </Link>
          </li>
          <li className="hover:text-red-500 transition relative group">
            <Link to="/added">
              <FaCartArrowDown />
            </Link>
            <span className="text-[20px] absolute top-0 right-0 transition duration-300 group-hover:-translate-y-1">
              0
            </span>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
