import React, { useEffect, useState } from "react";
import SingleTrendCart from "./SingleTrendCart";
import TrendBar from "./TrendBar";

const TrendingCarts = ({ data }) => {
  const visibleCount = Math.min(data.length, 4);

  const [items, setItems] = useState(data);

  const slide = () => {
    setItems((prev) => {
      const first = prev[0];
      const rest = prev.slice(1);
      return [...rest, first]; // başdakını sona at
    });
  };

  // Auto scroll
  useEffect(() => {
    const interval = setInterval(slide, 5000);
    return () => clearInterval(interval);
  }, []);

  const handlePrev = () => {
    setItems((prev) => {
      const last = prev[prev.length - 1];
      const rest = prev.slice(0, -1);
      return [last, ...rest]; // sondakını başa at
    });
  };

  const handleNext = slide;

  return (
    <div className="relative w-full max-w-[1200px] mx-auto overflow-hidden ">
      <TrendBar />
      <div className="flex justify-center transition-transform duration-300">
        {items.slice(0, visibleCount).map((item, i) => (
          <div
            key={i}
            className={`flex-shrink-0 px-2 ${
              visibleCount === 3 ? "w-1/3" : "w-1/4"
            }`}
          >
            <SingleTrendCart img={item.img} text={item.text} />
          </div>
        ))}
      </div>

      {/* Buttons */}
      <button
        onClick={handlePrev}
        className={`absolute ... ${
          visibleCount < 4 ? "top-[60%] left-0" : "top-[60%] left-[-15px]"
        }`}
      >
        ◀
      </button>
      <button
        onClick={handleNext}
        className={`absolute transform -translate-y-1/2 px-3 py-1 bg-transparent z-10 ${
          visibleCount < 4 ? "top-[60%] right-[-10px]" : "top-[60%] right-[-15px]"
        }`}
      >
        ▶
      </button>
    </div>
  );
};

export default TrendingCarts;
