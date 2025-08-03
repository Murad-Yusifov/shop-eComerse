import React from "react";

const Delivery = () => {
  const data = [
    {
      icon: "https://preview.colorlib.com/theme/capitalshop/assets/img/icon/services1.svg",
      title: "Fast & Free Delivery",
    },
    {
      icon: "https://preview.colorlib.com/theme/capitalshop/assets/img/icon/services2.svg",
      title: "Secure Payment",
    },
    {
      icon: "https://preview.colorlib.com/theme/capitalshop/assets/img/icon/services3.svg",
      title: "Money Back Guarantee",
    },
    {
      icon: "https://preview.colorlib.com/theme/capitalshop/assets/img/icon/services4.svg",
      title: "Online Support",
    },
  ];
  return (
    <div className="flex justify-around items-center pt-[70px] pb-[10px]">
      {data &&
        data.map((items, index) => (
          <div
            key={index}
            className={`relative flex flex-col items-center justify-center px-4 ${
              index !== data.length - 1
                ? "before:content-[''] before:absolute before:-right-12 before:top-1/2 before:translate-y-[-50%] before:h-[80%] before:w-[1px] before:bg-gray-300"
                : ""
            }`}
          >
            <img className="mb-[26px]" src={items.icon} alt={items.title} />
            <h2 className="mb-[12px] text-[17px]">{items.title}</h2>
            <span className="mb-[12px] text-[#57667e]">
              Free delivery on all orders
            </span>
          </div>
        ))}
    </div>
  );
};

export default Delivery;
