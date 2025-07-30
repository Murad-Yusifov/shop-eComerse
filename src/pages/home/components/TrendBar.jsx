import React, { useRef } from "react";

const TrendBar = () => {
  const activeRef = useRef(null);

  const handleClick = (e) => {
    // Əvvəlki aktiv olandan class-ları sil
    if (activeRef.current) {
      activeRef.current.classList.remove("text-red-500", "after:!bg-red-500", "after:!scale-x-100");
    }

    // Yeni aktiv elementə class-lar əlavə et
    e.target.classList.add("text-red-500", "after:!bg-red-500", "after:!scale-x-100");

    activeRef.current = e.target;
  };

  const items = ["Men", "Women", "Baby", "Fashion"];

  return (
    <div className="mb-[40px] border-b border-b-gray-400 flex justify-between mt-[20px]">
      <h1 className="text-xl font-bold">Trending This Week</h1>

      <ul className="flex justify-around w-1/4">
        {items.map((item) => (
          <li
            key={item}
            className="relative pb-[36px] px-[12px] mr-[15px] last:mr-0 cursor-pointer text-[16px] font-semibold
              after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-full after:h-[4px]
              after:scale-x-0 after:origin-left after:bg-red-500
              hover:after:scale-x-100 after:transition-transform"
            onClick={handleClick}
          >
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TrendBar;
