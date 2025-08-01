import React, { useState } from "react";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";

const Cart = () => {
  const cartData = [
  {
    header: "Customer Testimonial",
    text: "This platform exceeded my expectations. The support team is always available and super helpful!",
    user: [
      {
        img: "https://randomuser.me/api/portraits/women/65.jpg",
        name: "Emily Carter",
        position: "UX Designer at Behance",
      },
    ],
  },
  {
    header: "Customer Testimonial",
    text: "I was able to launch my online shop in a matter of hours. Super intuitive and fast!",
    user: [
      {
        img: "https://randomuser.me/api/portraits/men/32.jpg",
        name: "Liam Johnson",
        position: "Founder of ShopSmart",
      },
    ],
  },
  {
    header: "Customer Testimonial",
    text: "Everything works perfectly. I love how smooth and fast the user experience is.",
    user: [
      {
        img: "https://randomuser.me/api/portraits/women/22.jpg",
        name: "Sophie Müller",
        position: "Frontend Developer at Dribbble",
      },
    ],
  },
  {
    header: "Customer Testimonial",
    text: "Great value for money. Highly recommended for small businesses looking to scale.",
    user: [
      {
        img: "https://randomuser.me/api/portraits/men/74.jpg",
        name: "Carlos Gómez",
        position: "Marketing Lead at WaveGrow",
      },
    ],
  },
];


  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(1); // sağa və sola keçid üçün

  const prevSlide = () => {
    setDirection(-1);
    setCurrentIndex((prev) => (prev === 0 ? cartData.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setDirection(1);
    setCurrentIndex((prev) => (prev === cartData.length - 1 ? 0 : prev + 1));
  };

  const currentItem = cartData[currentIndex];
  const user = currentItem.user[0];

  return (
    <div className="bg-[#F3EAD8] py-28 border flex flex-col items-center justify-center text-center relative">

      <div className="flex items-center justify-center">
        <button onClick={prevSlide}
        className="absolute top-1/2 left-[20%] "
        >
          <FaAngleLeft className="text-3xl hover:scale-125 transition" />
        </button>

        <AnimatePresence mode="wait">
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, x: direction * 100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -direction * 100 }}
            transition={{ duration: 0.1 }}
            className="flex flex-col items-center gap-4 px-[40px] mb-[32px] max-w-2xl"
          >
          <h1 className="text-xl font-bold mb-[32px]">{currentItem.header}</h1>
            <p className="text-sm">{currentItem.text}</p>
            <div className="flex items-center space-x-4">
              <img
                src={user.img}
                alt="user"
                className="w-12 h-12 rounded-full"
              />
              <div className="flex flex-col items-start">
                <p className="font-medium">{user.name}</p>
                <p className="text-sm text-gray-600">{user.position}</p>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>

        <button onClick={nextSlide}
        className="absolute top-1/2 right-[20%] "
        >
          <FaAngleRight className="text-3xl hover:scale-125 transition" />
        </button>
      </div>
    </div>
  );
};

export default Cart;
