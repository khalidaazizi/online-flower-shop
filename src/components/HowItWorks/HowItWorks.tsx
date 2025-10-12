import React from "react";
import video from "../../assets/img/video3.jpg";
import { FaPlay } from "react-icons/fa";
import { IoIosArrowForward } from "react-icons/io";
import { Link } from "react-router-dom";
import ButtonMotion from "../Button/Button";
const HowItWorks: React.FC = () => {
  return (
    <section className="px-6 md:px-16 pb-28   my-28 ">
      <div className="relative rounded-sm  hover:scale-105 transition duration-500 ease-in-out  ">
        {/* تصویر بک */}
        <div className="h-[80vh]">
          {" "}
          <img
            src={video}
            alt="Flower Shop"
            className="w-full h-[100%] object-cover"
          />
        </div>

        {/* پلی آیکن */}
        <div className="absolute inset-0 flex items-center justify-center">
          <button className="bg-[#0d1e16] py-5 px-7 rounded-sm shadow-lg hover:scale-105 transition hover:bg-green-600">
            <FaPlay className="text-white" />
          </button>
        </div>

        {/* متن پایین */}
        <div className="absolute -bottom-30  left-14 bg-white p-4 pt-8 h-60 shadow-lg pl-10">
          <h3 className="font-bold mb-6 lg:text-4xl">How it works?</h3>
          <p className="text-sm lg:text-[16px] text-gray-600 max-w-md">
            A flower, sometimes known as a bloom or blossom, is the reproductive
            structure found in flowering plants (plants of the division
            Magnoliophyta, also called angiosperms).
          </p>
      
            <Link
              to="#"
              className="flex items-center group/card w-[36%] h-[52px] mt-6"
            >
              <div className="bg-gray-900 py-[7px] px-2 md:py-[16px] md:px-4 group-hover/card:bg-green-600 ">
                
                <IoIosArrowForward className="text-white" />
              </div>
              <ButtonMotion
                text="Read More"
                className=" px-2 py-2 text-[10px] md:px-3 md:py-3 md:text-[16px] rounded-none  !group-hover/card:bg-gray-900 btn-styles cursor-pointer"
              />
            </Link>
         
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
