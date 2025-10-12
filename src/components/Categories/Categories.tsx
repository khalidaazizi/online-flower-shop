import React from "react";
import ImgCart1 from "../../assets/img/c-11.png";
import ImgCart2 from "../../assets/img/c-12.png";
import ImgCart3 from "../../assets/img/c-13.png";
import ImgCart4 from "../../assets/img/c-14.png";

const Categories: React.FC = () => {
  return (
    <section className="px-6 md:px-16 py-12 mt-20">
      <h2 className="text-2xl lg:text-4xl font-bold  text-center -mb-20">
        Most popular <span className="text-green-600">Categories</span>
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-36">
        {/* ستون چپ */}
        <div>
          <div className="mb-3.5 bg-[#f6f6f6] flex justify-between  items-center p-6 shadow relative rounded-md group">
            {/* متن */}
            <div className="flex flex-col">
              <h3 className="font-bold text-xl md:text-2xl lg:text-4xl">
                House Plants
              </h3>
              <p className="text-green-600 font-simebold text-base translate-y-5 opacity-0 md:text-lg lg:text-2xl  group-hover:opacity-100 group-hover:translate-y-3 transition duration-300 ease-in-out">
                30 Items
              </p>
            </div>

            {/* عکس */}
            <div className="w-1/2 max-w-[250px]">
              <img
                src={ImgCart3}
                alt="House Plants"
                className="w-full h-auto object-contain translate-y-6 group-hover:translate-x-4 transition duration-300 ease-in-out"
              />
            </div>
          </div>
          <div className="group bg-[#f6f6f6] flex justify-between items-center p-6 shadow relative rounded-md">
            {/* متن */}
            <div className="flex flex-col">
              <h3 className="font-bold text-xl md:text-2xl lg:text-4xl">
                House Plants
              </h3>
              <p className="text-green-600 font-simebold text-base md:text-lg lg:text-2xl  translate-y-5 opacity-0 group-hover:opacity-100 group-hover:translate-y-3 transition duration-300 ease-in-out">
                30 Items
              </p>
            </div>

            {/* عکس */}
            <div className="w-1/2 max-w-[250px]">
              <img
                src={ImgCart4}
                alt="House Plants"
                className="w-full h-auto object-contain translate-y-6 group-hover:translate-x-4 transition duration-300 ease-in-out"
              />
            </div>
          </div>
        </div>

        {/* ستون راست */}
        <div className="flex gap-4 ">
          <div className="overflow-hidden group bg-[#f6f6f6] flex flex-col items-center justify-between  shadow flex-1 rounded-md">
            <div className="flex flex-col mt-12">
              <h3 className="font-bold text-xl md:text-2xl lg:text-4xl">
                House Plants
              </h3>
              <p className="text-green-600 font-simebold text-base md:text-lg  lg:text-2xl translate-y-5 opacity-0 group-hover:opacity-100 group-hover:translate-y-3 transition duration-300 ease-in-out">
                30 Items
              </p>
            </div>
            <img
              src={ImgCart2}
              alt="Wedding"
              className="w-full max-h-[409px] group-hover:translate-x-4 transition duration-300 ease-in-out"
            />
          </div>

          <div className="group bg-[#f6f6f6] flex flex-col items-center justify-between  shadow flex-1 rounded-md overflow-hidden">
            <div className="flex flex-col  mt-12">
              <h3 className="font-bold text-xl md:text-2xl lg:text-4xl">
                House Plants
              </h3>
              <p className="text-green-600 font-simebold text-base md:text-lg  lg:text-2xl translate-y-5 opacity-0 group-hover:opacity-100 group-hover:translate-y-3 transition duration-300 ease-in-out">
                30 Items
              </p>
            </div>
            <img
              src={ImgCart1}
              alt="Valentine"
              className="w-full max-h-[409px] group-hover:translate-x-4 transition duration-300 ease-in-out"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Categories;
