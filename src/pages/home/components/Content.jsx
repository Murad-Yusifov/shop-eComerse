import React from "react";

const Content = ({ title, subtitle, description, buttonText, isEven }) => {
  return (
    <div className={`w-full flex mx-24 ${isEven ? "justify-start animate-fadeUp" : "justify-end animate-fadeUp"}`}>
      <div className=" max-w-md p-8  rounded-md m-4 flex flex-col items-center justify-center">
        <span className="text-[30px] uppercase tracking-widest text-[#ff2020] font-clicker leading-[1.75]">{subtitle}</span>
        <h1 className="text-[40px] font-bold my-2 ">{title}</h1>
        <p className="text-gray-800 mb-4 text-[18px] text-center">{description}</p>
        <button className="bg-black text-white px-5 py-2 rounded hover:bg-gray-800 transition">{buttonText}</button>
      </div>
    </div>
  );
};



export default Content;
