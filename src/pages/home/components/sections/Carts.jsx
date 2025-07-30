import React from "react";
import Cart from "../Cart";

const Carts = () => {
  const images = [
    {
      img: "https://preview.colorlib.com/theme/capitalshop/assets/img/gallery/items1.jpg",
      text: "Men's Fashion",
    },
    {
      img: "https://preview.colorlib.com/theme/capitalshop/assets/img/gallery/items2.jpg",
      text: "Women's Fashion",
    },
    {
      img: "https://preview.colorlib.com/theme/capitalshop/assets/img/gallery/items3.jpg",
      text: "Baby's Fashion",
    },
  ];
  return (
    <>
      <div className="w-full flex justify-center gap-8 pt-[30px]">
        {images &&
          images.map((image) => <Cart img={image.img} text={image.text} />)}
      </div>
    </>
  );
};

export default Carts;
