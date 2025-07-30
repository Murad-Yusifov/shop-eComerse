import React from "react";

const Cart = ({ img, text }) => {
  return (
    <>
      <div className="w-[28%] h-[270px] px-4">
        <div className="w-full h-full relative group overflow-hidden">
          <div
            className="w-full h-full flex items-end pb-[20px] justify-center shadow-lg relative transition duration-500 group-hover:scale-105"
            style={{
              backgroundImage: `url(${img})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent z-0"></div>

            <span
              className="font-semibold text-[24px] mb-[20px] text-white absolute z-10 
            transition-all duration-500 
            translate-y-0 opacity-100 
            group-hover:-translate-y-8"
            >
              {text}
            </span>
            <span
              className="absolute bottom-[20px] z-10 border-b-2 font-semibold text-[#CEBD9C] border-b-[#CEBD9C] py-1 cursor-pointer 
                 transition-all duration-500
                 translate-y-full opacity-0
                 group-hover:-translate-y-4 group-hover:opacity-100"
            >
              Shop Now
            </span>
          </div>
        </div>
      </div>
    </>
  );
};

export default Cart;
