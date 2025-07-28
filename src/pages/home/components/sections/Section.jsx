import React, { useEffect, useState } from "react";
import Content from "../Content";

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
    setCurrentIndex((prev) => (prev + 1) % images.length);
  };

  // prps ile metin otur

  const data = [
    {
      subtitle: "Fashion Sale",
      title: "Minimal Menz Style",
      description:
        "Consectetur adipisicing elit. Laborum fuga incidunt laboriosam voluptas iure, delectus dignissimos facilis neque nulla earum.",
      buttonText: "Shop Now",
    },
    {
      subtitle: "Fashion Sale",
      title: "Minimal Menz Style",
      description:
        "Consectetur adipisicing elit. Laborum fuga incidunt laboriosam voluptas iure, delectus dignissimos facilis neque nulla earum.",
      buttonText: "Shop Now",
    },
  ];

  const isEven = currentIndex % 2 === 0;

  return (
    <>
      <div
        className="h-screen bg-[url(${images[currentIndex]})] bg-center bg-cover bg-no-repeat flex items-center relative"
        style={{ backgroundImage: `url('${images[currentIndex]}')` }}
      >
        <button
          onClick={handleNext}
          className="absolute top-1/2 px-6 py-2 bg-white text-black font-semibold rounded shadow hover:bg-gray-200 transition"
        >
          Before
        </button>
        <Content
          key={isEven}
          subtitle={data[currentIndex].subtitle}
          title={data[currentIndex].title}
          description={data[currentIndex].description}
          buttonText={data[currentIndex].buttonText}
          isEven={isEven}
        />

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
