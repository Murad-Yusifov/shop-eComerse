import { motion } from "framer-motion";
import { FaFacebook, FaInstagram, FaYoutube } from "react-icons/fa";

const Footer = () => {
  const data = {
    header: ["Shop Men", "Shop Women", "Baby Collection", "Quick Links"],

    innerData: ["Clothing Fashion", "Winter", "Summer", "Formal", "Casual"],
  };

  return (
    <motion.footer
      initial={{ y: 100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="bg-gray-800 text-white p-8 text-center"
    >
      <div className="">
        <div className="flex justify-around mb-[40px] pb-[20px]">
          <div className="flex flex-col items-start px-4">
            <h1 className="mb-[12px] text-[23px] font-semibold ">
              Subscribe Newsletter
            </h1>
            <p className="mb-[12px] text-[15px]">
              Subscribe newsletter to get 5% on all products.
            </p>
          </div>
          <div className="w-1/2 px-4 flex justify-evenly">
            <input type="text" className="w-[75%] h-2/3 outline-none p-4 text-black text-xl"
            placeholder="Enter Your Email"
            />
            <button className="w-[20%] bg-red-600 h-2/3">Subscribe</button>
          </div>
          <div className="flex px-2 *:text-[23px] *:ml-[23px] *:text-[#677F8B]">
            <FaFacebook />
            <FaInstagram />
            <FaYoutube />
          </div>
        </div>
        <div className="flex justify-around mx-16 px-4 items-center">
          <div className="w-1/4 ">
            <img
              src="https://preview.colorlib.com/theme/capitalshop/assets/img/logo/logo2_footer.png"
              alt="logo"
              className="mb-[100px]"
            />
          </div>
          <div className="w-3/4 grid grid-cols-2 md:grid-cols-4 gap-6 text-left mt-8">
            {data.header.map((title, index) => (
              <ul key={index} className="text-sm text-gray-400 space-y-2">
                <li className="font-semibold text-white mb-4">{title}</li>
                {data.innerData.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            ))}
          </div>
        </div>

        <div className="py-8 flex justify-center items-center">
          <p>&copy; 2025 Your Website. All rights reserved.</p>
        </div>
      </div>

      
    </motion.footer>
  );
};

export default Footer;
