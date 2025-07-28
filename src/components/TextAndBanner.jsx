import React, { useState } from "react";

const TextAndBanner = ({ search, setSearch }) => {
  // const [search, setSearch]= useState(false);

  return (
    <div className="w-full flex  items-center justify-center bg-black py-[14px] relative h-[60px] overflow-hidden text-white">
      {/* Input absolute olaraq yuxarıdan enir */}
      <div
        className={`w-[94%] h-full border-none absolute left-1/2 -translate-x-1/2 top-0 transition-all duration-500 px-4 py-[14px] rounded bg-[#FF2020]  flex justify-between items-center
      ${
        search
          ? "opacity-100 translate-y-0"
          : "opacity-0 -translate-y-10 pointer-events-none"
      }
    `}
      >
        <input
          type="text"
          placeholder="Search Here"
          className="bg-transparent  placeholder-white border-none outline-none text-white"
        />
        <span
          className="cursor-pointer font-semibold  text-2xl "
          onClick={() => setSearch((prev) => !prev)}
        >
          X
        </span>
      </div>

      {/* Banner yazısı yalnız search false olduqda */}
      {!search && (
        <p
          className={`
    transition-opacity duration-500
    ${search ? "opacity-0 pointer-events-none" : "opacity-100"}
    `}
        >
          Sale Up To 50% Biggest Discounts. Hurry! Limited Perriod Offer <span className="border-b-2 font-semibold text-[#CEBD9C] border-b-[#CEBD9C] py-1 cursor-pointer hover:tracking-wider hover:text-red-600 transition-all t duration-500">
            Shop Now
          </span>
        </p>
      )}
    </div>
  );
};

export default TextAndBanner;
