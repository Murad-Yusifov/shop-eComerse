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
    <div className="relative h-screen w-full overflow-hidden">
      {images.map((img, index) => (
        <div
          key={index}
          className={`absolute inset-0 bg-center bg-cover bg-no-repeat transition-opacity duration-1000 ease-in-out ${
            index === currentIndex ? "opacity-100 z-10" : "opacity-0 z-0"
          }`}
          style={{ backgroundImage: `url('${img}')` }}
        >
          <button
            onClick={handleNext}
            className="absolute top-1/2 left-5 px-6 py-2 bg-white text-black font-semibold rounded shadow hover:bg-gray-200 transition"
          >
            Before
          </button>

          <Content
            key={index} // `isEven` yerinə index istifadə et, çünki `key` unikal olmalıdır
            subtitle={data[currentIndex].subtitle}
            title={data[currentIndex].title}
            description={data[currentIndex].description}
            buttonText={data[currentIndex].buttonText}
            isEven={isEven}
          />

          <button
            onClick={handleNext}
            className="absolute top-1/2 right-5 px-6 py-2 bg-white text-black font-semibold rounded shadow hover:bg-gray-200 transition"
          >
            Next
          </button>
        </div>
      ))}
    </div>
  );
};

export default Section;
