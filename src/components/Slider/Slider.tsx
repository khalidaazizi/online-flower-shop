import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import type { Variants } from "framer-motion"; // فقط type
import sliderImg1 from "../../assets/img/f4.png";
import sliderImg2 from "../../assets/img/f1.png";
import ButtonMotion from "../Button/Button";
import { Link } from "react-router-dom";
import Offer from "../Offer/Offer";

// ------------------- Variants -------------------
const containerVariants: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.4 } },
};

const titleVariants: Variants = {
  hidden: { x: 100, opacity: 0 },
  visible: { x: 0, opacity: 1, transition: { duration: 1.8, ease: "easeOut" } },
};

const subtitleVariants: Variants = {
  hidden: { x: 100, opacity: 0 },
  visible: { x: 0, opacity: 1, transition: { duration: 1.8, ease: "easeOut" } },
};

const paragraphVariants: Variants = {
  hidden: { y: 50, opacity: 0 },
  visible: { y: 0, opacity: 1, transition: { duration: 0.8, ease: "easeOut" } },
};

const buttonVariants: Variants = {
  hidden: { y: 50, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { duration: 1, ease: "easeOut", delay: 1.2 },
  },
};

const imageVariants: Variants = {
  hidden: { y: 100, opacity: 0 },
  visible: { y: 0, opacity: 1, transition: { duration: 1.8, ease: "easeOut" } },
};

const navVariants: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 1.5, ease: "easeOut" } },
};

// ------------------- Slider Component -------------------
function Slider() {
  const slides = [
    {
      title: ["Make your life", "more natural"],
      desc: "A flower, sometimes known as a bloom or blossom, is the reproductive structure found in flowering plants.",
      img: sliderImg1,
    },
    {
      title: ["Send a Gift ", "To your friends"],
      desc: "Natural products for a healthier life. Enjoy fresh and organic goods delivered to you.",
      img: sliderImg2,
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

  // تابع استارت/ریست تایمر
  const startAutoSlide = () => {
    if (intervalRef.current) clearInterval(intervalRef.current);
    intervalRef.current = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % slides.length);
    }, 8000); // هر 8 ثانیه
  };

  // شروع تایمر وقتی کامپوننت mount میشه
  useEffect(() => {
    startAutoSlide();
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, []);

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
    startAutoSlide(); // ریست تایمر
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % slides.length);
    startAutoSlide(); // ریست تایمر
  };

  const slide = slides[currentIndex];

  return (
    <div className="bg-[#f3f3f365] relative   w-full  lg:h-[100vh] md:h-[80vh] h-[70vh]">

      {/* slider section */}
      <div className="flex justify-center items-center container mx-auto md:px-12 px-10 py-10  group">
        {/* pseudo-element */}
        <div className="after:content-[''] after:absolute after:top-0 after:right-0 after:w-1/3 after:h-full after:bg-[#e6e6e695] after:z-0"></div>

        <AnimatePresence mode="wait">
          {/* Text Content */}
          <motion.div
            key={currentIndex}
            className="font-light"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            exit="hidden"
          >
            <motion.span
              className="text-[#002626cc] md:text-5xl text-2xl block "
              variants={titleVariants}
            >
              {slide.title[0]}
            </motion.span>
            <motion.span
              className="md:mt-4 mt-1 text-[#33c160] md:text-5xl text-2xl block "
              variants={subtitleVariants}
            >
              {slide.title[1]}
            </motion.span>
            <motion.p
              className="mt-4 font-[400] text-[12px] md:text-[16px] text-[#555]"
              variants={paragraphVariants}
            >
              {slide.desc}
            </motion.p>

            <div className=" inline-block">
              <Link to="/shop " >
            <ButtonMotion
              text="Shop Now"
              className="mt-5 px-2 py-2 w-max text-[10px] cursor-pointer md:px-4 md:py-3 btn-styles md:text-[16px] btn-style "
              variants={buttonVariants}
            />
            </Link>
            </div>
          </motion.div>

          {/* Image */}
          <motion.div
            key={currentIndex + "-img"}
            className="w-[622px] h-[500px] relative z-10 overflow-hidden"
            variants={imageVariants}
            initial="hidden"
            animate="visible"
            exit="hidden"
          >
            <img
              src={slide.img}
              alt=""
              className="w-full h-full object-contain"
            />
          </motion.div>
        </AnimatePresence>

        {/* Prev / Next Buttons */}
        <motion.button
          onClick={prevSlide}
          className="absolute top-[50%] left-5  bg-gray-600 hover:bg-gray-900 text-white px-3 py-1.5 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-900 ease-in-outt"
          variants={navVariants}
        >
          &#10094;
        </motion.button>
        <motion.button
          onClick={nextSlide}
          className="absolute top-[48%] right-5 bg-gray-600 hover:bg-gray-900 text-white px-3 py-1.5 rounded opacity-0  group-hover:opacity-100 transition-opacity duration-900 ease-in-out"
          variants={navVariants}
        >
          &#10095;
        </motion.button>
      </div>
      {/* offer section */}
      <div className="relative w-[80%] md:w-[90%] lg:w-[80%] mx-auto bottom-[30%] md:bottom-[20%] lg:-bottom-[3%] bg-white shadow-2xl flex flex-col md:flex-row items-center md:justify-around px-7 py-4 z-20">
       <Offer/>
      </div>
    </div>
  );
}

export default Slider;
