import React from "react";

const LatestCart = ({ data }) => {
  return (
    <div className="pb-[29px] bg-[#F6F6F6] pt-32 ">
      <h1 className="mb-[22px] px-2 text-center text-4xl font-medium">
        Latest News
      </h1>

      <div className="flex mx-4 px-4 gap-8">
        {data.map((items, index) => (
          <div
            key={index}
            className="h-[500px] mb-[30px] flex flex-col  items-center justify-evenly gap-8"
          >
            <div className="w-full  mx-4 overflow-hidden">
              <img
                src={items.img}
                alt="image"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="flex flex-col items-start justify-center *:w-full">
              <span className="mb-4 text-[#74706B] ">Fashion Tips</span>
              <h2 className="mb-4 hover:text-red-500 transition cursor-pointer text-[22px] font-semibold">
                {items.text}
              </h2>
              <p className="mb-4">{items.detail}</p>
              <div className="mb-4 flex justify-start">
                <span className="text-base text-gray-800 underline font-semibold transition-transform duration-300 transform hover:scale-110">
                  Read More
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LatestCart;
