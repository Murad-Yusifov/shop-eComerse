import React from "react";
import SingleTrendCart from "../../SingleTrendCart";

const TrendingSection4 = ({ data }) => {
  return (
    <div className="w-full max-w-[1200px] mx-auto flex flex-wrap justify-center gap-4 p-4 ">
      {data.map((item, index) => (
        <SingleTrendCart key={index} img={item.img} text={item.text} />
      ))}
    </div>
  );
};

export default TrendingSection4;
