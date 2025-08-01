import React, { useEffect, useState } from "react";
import { FaCartArrowDown, FaSearch, FaUser } from "react-icons/fa";
import { Link } from "react-router";

const Navbar = ({ setSearch }) => {

   const { handleSearchClick, isSearchActive } = setSearch;
   
  const [visible, setVisible] = useState(false);
  const [activeIndex, setActiveIndex] = useState(null);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 400) {
        setVisible(true);
      } else {
        setVisible(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const searchUnits = [
    { item: "Home", link: "/" },
    { item: "Men", link: "/men" },
    { item: "Women", link: "/women" },
    { item: "Baby Collection", link: "/" },
    { item: "Pages", link: "/" },
    { item: "Blog", link: "/" },
    { item: "Contact", link: "/" },
  ];

  const handleClick = (index) => {
    setActiveIndex(index);
  };

  return (
    <nav
      className={`w-full flex justify-center bg-white ${
        visible ? "sticky top-0 z-50 shadow-md" : ""
      }`}
    >
      <div className="w-[85%] flex justify-between items-center py-4">
        <div>
          <img
            src="https://preview.colorlib.com/theme/capitalshop/assets/img/logo/logo.png.webp"
            alt="logo"
          />
        </div>

        <ul className="flex text-[16px] font-bold">
          {searchUnits.map((item, index) => (
            <li
              key={item.item}
              className={`cursor-pointer px-4 pb-2 transition-colors duration-300 border-b-4 border-transparent hover:border-red-500 hover:text-red-500 ${
                activeIndex === index ? "border-red-500 text-red-500" : ""
              }`}
              onClick={() => handleClick(index)}
            >
              <Link to={item.link}>{item.item}</Link>
            </li>
          ))}
        </ul>

        <ul className="flex items-center text-[24px] font-normal space-x-6">
          <li>
            <FaSearch
              onClick={() => handleSearchClick()}
              className={`cursor-pointer hover:text-red-500 ${
                isSearchActive ? "text-red-500" : ""
              }`}
            />
          </li>
          <li className="cursor-pointer hover:text-red-500">
            <Link to="/user">
              <FaUser />
            </Link>
          </li>
          <li className="relative cursor-pointer hover:text-red-500 group">
            <Link to="/added">
              <FaCartArrowDown />
            </Link>
            <span className="absolute -top-5  -right-2 text-[15px] bg-red-600 rounded-full w-[18px] h-[18px] flex justify-center items-center transition duration-300 group-hover:-translate-y-1 hover:text-white">
              0
            </span>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
