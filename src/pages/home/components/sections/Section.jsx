import React, { useEffect, useState } from "react";

const Section = () => {
  const images = [
    "https://preview.colorlib.com/theme/capitalshop/assets/img/hero/h1_hero1.jpg.webp",
    "https://preview.colorlib.com/theme/capitalshop/assets/img/hero/h1_hero2.jpg.webp",
  ];
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [images.length]);

    const handleNext = () => {
    setCurrentIndex(prev => (prev + 1) % images.length);
  };

  return (
    <>
      <div
        className="h-screen bg-[url(${images[currentIndex]})] bg-center bg-cover bg-no-repeat flex items-center relative"
        style={{ backgroundImage: `url('${images[currentIndex]}')` }}
      >
      <div className="">
     
      </div>
         <button
        onClick={handleNext}
        className="absolute top-1/2 px-6 py-2 bg-white text-black font-semibold rounded shadow hover:bg-gray-200 transition"
      >
        Before
      </button>
      

        <button
          onClick={handleNext}
          className="absolute top-1/2 right-0 px-6 py-2 bg-white text-black font-semibold rounded shadow hover:bg-gray-200 transition"
        >
          Next
        </button>
      </div>

    </>
  );
};

export default Section;
