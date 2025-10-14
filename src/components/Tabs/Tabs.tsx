import {  useState } from "react";
import ButtonMotion from "../Button/Button";
import { IoStar, IoStarOutline } from "react-icons/io5";
// import userImg from "";

import { FaCheck } from "react-icons/fa6";
import type { IProducts } from "../../types/server";

import RatingStars from "../RatingStars/RatingStars";

const faqImg = "/img/faq.jpg";
const soppingImg = "/img/shipping.png";
const userImg = "/img/user.png";

interface TabsProps {
  product: IProducts;
}

const Tabs: React.FC<TabsProps> = ({ product }) => {
  const [activeTab, setActiveTab] = useState("tab1");
 
 

  const {
    productInfo: { description, information, reviews, sizeGuide },
  } = product;

 

const lastReview = reviews.length > 0 ? reviews[reviews.length - 1] : null;


  return (
    <div className="w-full max-w-5xl  mx-auto">
      {/* تب‌ها */}
      <div
        role="tablist"
        className="flex lg:justify-center gap-1.5 overflow-x-auto mx-auto w-[450px]  md:w-[700px] mb-5 scrollbar-hide lg:w-full "
      >
        <button
          role="tab"
          onClick={() => setActiveTab("tab1")}
          className={`px-6 cursor-pointer border-0   py-3 whitespace-nowrap text-gray-700 text-sm font-medium transition uppercase relative  ${
            activeTab === "tab1"
              ? "bg-green-500  before:content-[''] before:absolute before:bottom-0 before:left-0 before:w-full before:h-2 before:bg-black"
              : "  bg-[#ebebeb]"
          }`}
        >
          discription
        </button>
        <button
          role="tab"
          onClick={() => setActiveTab("tab2")}
          className={`px-6 cursor-pointer border-0    py-3 whitespace-nowrap text-gray-700 text-sm font-medium transition uppercase relative ${
            activeTab === "tab2"
              ? "bg-green-500  before:content-[''] before:absolute before:bottom-0 before:left-0 before:w-full before:h-2 before:bg-black"
              : "bg-[#ebebeb]"
          }`}
        >
          Information
        </button>
        <button
          role="tab"
          onClick={() => setActiveTab("tab3")}
          className={`px-6 cursor-pointer border-0    py-3 whitespace-nowrap text-gray-700 text-sm font-medium transition uppercase relative ${
            activeTab === "tab3"
              ? "bg-green-500  before:content-[''] before:absolute before:bottom-0 before:left-0 before:w-full before:h-2 before:bg-black"
              : "bg-[#ebebeb]"
          }`}
        >
          Reviews
        </button>
        <button
          role="tab"
          onClick={() => setActiveTab("tab4")}
          className={`px-6 cursor-pointer border-0   py-3 whitespace-nowrap text-gray-700 text-sm font-medium transition uppercase relative ${
            activeTab === "tab4"
              ? "bg-green-500  before:content-[''] before:absolute before:bottom-0 before:left-0 before:w-full before:h-2 before:bg-black"
              : "bg-[#ebebeb]"
          }`}
        >
          Size Guide
        </button>
        <button
          role="tab"
          onClick={() => setActiveTab("tab5")}
          className={`px-6  cursor-pointer border-0  py-3 whitespace-nowrap text-gray-700 text-sm font-medium transition uppercase relative ${
            activeTab === "tab5"
              ? "bg-green-500  before:content-[''] before:absolute before:bottom-0 before:left-0 before:w-full before:h-2 before:bg-black"
              : "bg-[#ebebeb]"
          }`}
        >
          FAQ
        </button>
        <button
          role="tab"
          onClick={() => setActiveTab("tab6")}
          className={`px-6 cursor-pointer border-0   py-3 whitespace-nowrap text-gray-700 text-sm font-medium transition uppercase relative ${
            activeTab === "tab6"
              ? "bg-green-500  before:content-[''] before:absolute before:bottom-0 before:left-0 before:w-full before:h-2 before:bg-black"
              : "bg-[#ebebeb]"
          }`}
        >
          Shopping & Returns
        </button>
      </div>

      {/* محتوای تب‌ها */}
      <div className="p-4 md:p-6 bg-gray-50 ">
        {activeTab === "tab1" && (
          <div className="flex flex-col gap-5 px-8">
            <h1 className="text-2xl text-black !font-semibold">
              {description.title1}
            </h1>
            <p className="text-gray-500">{description.desc1}</p>
            <h1 className="text-2xl text-black !font-semibold">
              {description.title2}
            </h1>
            <p className="text-gray-500">{description.desc2}</p>
            <h1 className="text-2xl text-black !font-semibold">
              {description.title3}
            </h1>
            <p className="text-gray-500">{description.desc3}</p>
          </div>
        )}
        {activeTab === "tab2" && (
          <div>
            <h1 className="text-2xl text-black !font-semibold">
              Additional information
            </h1>
            <table className="border-t border-[#ebebeb] mt-10 w-full lg:w-2/3 mx-auto ">
              <tbody className="text-center  ">
                <tr className="">
                  <td className=" py-4">Weight</td>
                  <td className=" py-4">{information.weight}kg</td>
                </tr>
                <tr>
                  <td className="bg-[#dfdfdf] hover:bg-[#cdcdcd] transition duration-300 ease-in-out py-4">
                    Dimensions
                  </td>
                  <td className="bg-[#ebebeb] hover:bg-[#cdcdcd] transition duration-300 ease-in-out py-4">
                    {information.dimensions}
                  </td>
                </tr>
                <tr>
                  <td className="t py-4">Product year</td>
                  <td className=" py-4">{information.productYear}</td>
                </tr>
                <tr>
                  <td className="bg-[#dfdfdf] hover:bg-[#cdcdcd] transition duration-300 ease-in-out py-4">
                    Product manual
                  </td>
                  <td className="bg-[#ebebeb] hover:bg-[#cdcdcd] transition duration-300 ease-in-out py-4">
                    {information.productManual}
                  </td>
                </tr>
                <tr>
                  <td className=" py-4"> Refundable</td>
                  <td className=" py-4">{information.refundable}</td>
                </tr>
              </tbody>
            </table>
          </div>
        )}
        {activeTab === "tab3" && (
          <div className="my-6 px-5">
            {lastReview && (
              <h1 className="text-2xl mb-4 text-black border-b border-gray-200 pb-5">
                1 review for Areca Palm
              </h1>
            )}

            {/* Review box */}
            {lastReview && (
              <div
                
                className="border border-gray-200 rounded px-10 py-7 relative"
              >
                <div className="flex justify-between items-center">
                  <div className="flex gap-2.5 flex-col md:flex-row">
                    <h6 className="text-[16px] font-semibold text-black">
                      {lastReview.name}
                    </h6>
                    <span className="bg-gray-200 px-3 py-1 text-[12px]">
                      {lastReview.date}
                    </span>
                  </div>

                  <div className="flex gap-0.5 p-3 text-amber-400">
                  
                    <RatingStars rating={lastReview?.rating || 0} />
                  </div>
                </div>
                <p className="text-gray-700 my-5">{lastReview.review}</p>
                <img
                  src={userImg}
                  alt=""
                  className="rounded-full w-14 absolute top-10 -left-7"
                />
              </div>
        )}
              
            
            {/* Add Review */}
            <div className="text-gray-900 mt-8 text-[18px] font-light  px-8 py-6">
              <p className="font-medium">Add a review</p>
              <p>
                Your email address will not be published. Required fields are
                marked *
              </p>

              <p className="mt-5">Your rating *</p>
              <div className="flex gap-1 text-2xl text-amber-400 mb-4">
                <IoStar /> <IoStarOutline /> <IoStarOutline /> <IoStarOutline />{" "}
                <IoStarOutline />
              </div>

              <form action="" className="space-y-4">
                <div className="flex flex-col gap-4">
                  <label htmlFor="review" className="text-sm font-medium">
                    Your review *
                  </label>
                  <textarea
                    id="review"
                    className="border border-gray-300 rounded w-full h-36 p-2 bg-white focus:outline-none focus:border-black  "
                  ></textarea>
                </div>

                {/* Inputs in one row */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="flex flex-col gap-4">
                    <label htmlFor="name" className="text-sm font-medium">
                      Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      className="border border-gray-300 rounded w-full p-2 bg-white focus:outline-none focus:border-black "
                    />
                  </div>

                  <div className="flex flex-col gap-4">
                    <label htmlFor="email" className="text-sm font-medium">
                      Email *
                    </label>
                    <input
                      type="email"
                      id="email"
                      className="border border-gray-300 rounded w-full p-2 bg-white focus:outline-none focus:border-black "
                    />
                  </div>

                  <div className="flex flex-col gap-4 ">
                    <label htmlFor="captcha" className="text-sm font-medium ">
                      2 + 3 = ?
                    </label>
                    <input
                      type="text"
                      id="captcha"
                      className="border border-gray-300 rounded w-full p-2 bg-white focus:outline-none focus:border-black "
                    />
                  </div>
                </div>

                {/* Save info */}
                <div className="flex items-center gap-2 mt-7">
                  <label className="flex items-center gap-2 cursor-pointer ">
                    {/* Input مخفی */}
                    <input type="checkbox" className="peer hidden " />

                    {/* دایره سفارشی */}
                    <span
                      className="w-4 h-4 flex items-center justify-center  border border-gray-400 bg-gray-100
                     peer-checked:bg-green-600 peer-checked:border-green-600 transition-colors"
                    >
                      <FaCheck className="text-gray-100 text-xs peer-checked:text-white " />
                    </span>

                    {/* متن کنارش */}
                    <span className="text-sm">
                      Save my name, email and website in this browser for the
                      next time I comment.
                    </span>
                  </label>
                </div>
                <ButtonMotion
                  text="Submit"
                  type="submit"
                  className="cursor-pointer mt-8  bg-gray-950 hover:bg-green-600  text-white px-5 py-2"
                />
              </form>
            </div>
          </div>
        )}
        {activeTab === "tab4" && (
          <div>
            <table className="w-full text-sm ">
              <thead className="bg-[#ebebeb]">
                <tr className="text-center">
                  <th className="px-4 py-2 text-xl font-semibold text-black border border-[#dedede]">
                    Size
                  </th>
                  <th className="px-4 py-2 text-xl font-semibold text-black border border-[#dedede]">
                    USA
                  </th>
                  <th className="px-4 py-2 text-xl font-semibold text-black border border-[#dedede]">
                    Europe
                  </th>
                  <th className="px-4 py-2 text-xl font-semibold text-black border border-[#dedede]">
                    Others
                  </th>
                </tr>
              </thead>
              <tbody className="bg-gray-50">
                {sizeGuide.map((item) => {
                  return (
                    <tr className="text-center">
                      <td className="px-4 py-2 text-xl font-semibold text-black border border-[#dedede]">
                        {item.size}
                      </td>
                      <td className="px-4 py-2 text-gray-600 border border-[#dedede]">
                        {item.USA}
                      </td>
                      <td className="px-4 py-2 text-gray-600 border border-[#dedede]">
                        {item.Europe}
                      </td>
                      <td className="px-4 py-2 text-gray-600 border border-[#dedede]">
                        {item.Others}
                      </td>
                    </tr>
                  );
                })}
                
              </tbody>
            </table>
          </div>
        )}
        {activeTab === "tab5" && (
          <div className=" px-10  md:px-2">
            <h1 className="text-3xl mb-4 text-black !font-semibold">FAQ</h1>
            <div className="flex flex-col md:flex-row  gap-10">
              <img src={faqImg} alt="" className="h-[500px] md:h-auto" />
              <div className="text-justify flex flex-col gap-7 mt-10 md:mt-0">
                <div>
                  <li className="list-disc mb-3 text-black !font-semibold">
                    What payment methods do you accept?
                  </li>
                  <p>
                    We accept various payment methods, including credit/debit
                    cards, PayPal, and bank transfers for your convenience.
                  </p>
                </div>
                <div>
                  <li className="list-disc mb-3 text-black !font-semibold">
                    Do you offer international shipping?
                  </li>
                  <p>
                    Yes, we offer international shipping to many countries.
                    Please check our shipping information page for details on
                    available destinations and shipping rates.
                  </p>
                </div>
                <div>
                  <li className="list-disc mb-3 text-black !font-semibold">
                    How can I track my order?
                  </li>
                  <p>
                    Once your order is shipped, you will receive a tracking
                    number via email. You can use this number to track your
                    package's delivery status on our website or through the
                    courier's tracking portal.
                  </p>
                </div>
                <div>
                  <li className="list-disc mb-3 text-black !font-semibold">
                    What is your return policy?
                  </li>
                  <p>
                    We offer a hassle-free return policy. If you're not
                    satisfied with your purchase for any reason, you can return
                    it within 30 days for a full refund or exchange. Please
                    refer to our returns page for detailed instructions.
                  </p>
                </div>
                <div>
                  <li className="list-disc mb-3 text-black !font-semibold">
                    {" "}
                    Are your products covered by a warranty?{" "}
                  </li>
                  <p>
                    Yes, most of our products come with a manufacturer's
                    warranty against defects in materials and workmanship. The
                    duration and terms of the warranty vary by product, so
                    please check the product description or contact our
                  </p>
                </div>
              </div>
            </div>
            <p className="mt-10">customer support team for specific details.</p>
          </div>
        )}
        {activeTab === "tab6" && (
          <div className="text-gray-700">
            <h1 className="text-3xl mb-4 text-black ">Shipping & Delivery</h1>

            <p className="text-gray-600">
              All estimated shipping times are in addition to fulfillment times,
              We offer a next working day delivery for orders placed before 6:30
              p.m. Monday to Friday. Orders placed after this will be delivered
              within two working days. This excludes Saturday, Sunday and
              holidays. Appointed is not responsible for any customs/duties
              related to international orders. We are unable to calculate
              charges prior to your order being delivered, and recommend
              checking with your local customs office for more information.
              Shipping fees will not be refunded if you refuse these charges.
            </p>
            <div className="flex gap-5 flex-col md:flex-row justify-between my-10 items-center ">
              <ul className="text-gray-800 flex flex-col gap-2 pl-10">
                <li className="text-[18px] list-disc ">
                  Free destination delivery above $100
                </li>
                <li className="text-[18px] list-disc">
                  Europe 1 – 3 days Free
                </li>
                <li className="text-[18px] list-disc">
                  United States 4 – 6 days Free
                </li>
                <li className="text-[18px] list-disc">Asia 3 – 6 days Free</li>
                <li className="text-[18px] list-disc">
                  Africa 5 – 7 days Free
                </li>
                <li className="text-[18px] list-disc">
                  Australia 3 – 5 days Free
                </li>
              </ul>
              <img src={soppingImg} alt="" className="md:w-1/2" />
            </div>
            <h1 className="text-3xl mb-4 text-black ">Returns & Refunds</h1>
            <p>
              We have a 14-day return policy, which means you have 14 days after
              receiving your item to request a return, To be eligible for a
              return, your item must be in the same condition that you received
              it, unused, and in its original packaging. You’ll also need the
              order confirmation, order number, or proof of purchase. We will
              notify you once we’ve received and inspected your return, and let
              you know if the refund was approved or not. If approved, you’ll be
              automatically refunded on your original payment method. Please
              remember it can take some time for your bank or credit card
              company to process and post the refund too.
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Tabs;
