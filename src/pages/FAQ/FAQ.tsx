import { useState } from "react";
import { FaAngleDown } from "react-icons/fa6";
import { FaRegQuestionCircle } from "react-icons/fa";

import { MdOutlineComment } from "react-icons/md";
import Breadcrumb from "../../components/Breadcrumb/Breadcrumb";
import { label } from "motion/react-client";
import { IoMdHome } from "react-icons/io";

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      question: "Your Question Title?",
      answer:
        "I am text block. Click edit button to change this text. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo. I am text block. Click edit button to change this text. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.",
    },
    {
      question: "Do eiusmod tempor incidit?",
      answer:
        "I am text block. Click edit button to change this text. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo. I am text block. Click edit button to change this text. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.",
    },
    {
      question: "Cupidatat iusmod tempor incid idun?",
      answer:
        "I am text block. Click edit button to change this text. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo. I am text block. Click edit button to change this text. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.",
    },
    {
      question: "Excepteur sint occaecat cupidatat iusmod tempor incid idun?",
      answer:
        "I am text block. Click edit button to change this text. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo. I am text block. Click edit button to change this text. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo..",
    },
    {
      question:
        "Consectetur adipiscing elit, sed do eiusmod tempor incididunt?",
      answer: "I am text block. Click edit button to change this text. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo. I am text block. Click edit button to change this text. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.",
    },
    {
      question:
        "Cupidatat iusmod tempor incid idun?",
      answer: "I am text block. Click edit button to change this text. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo. I am text block. Click edit button to change this text. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.",
    },
  ];

  return (
    <>
    
      <Breadcrumb paths={[
       { label: <IoMdHome className="text-lg" /> , link: "/"},
      {label: "FAQ"}
    ]}/>
     <div>
      <div className="text-center mb-10 mt-20">
        <div className="text-green-600 text-2xl font-semibold ">F . A . Q</div>
        <h1 className="text-3xl mt-3">Do You Hava any Question ? </h1>
        <p className="text-gray-500 mt-6">
          Please read questions bellow and if you can not find your answer,
          please send us your question, we will answer you as soon as possible.
        </p>
      </div>
      <div className="container mx-auto px-4 py-12 grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* FAQ Left */}
        <div>
          <div className="flex items-center gap-5  mb-6">
            <div className="bg-green-600  p-3">
              {" "}
              <FaRegQuestionCircle className="text-white" />
            </div>
            <h2 className="text-2xl font-semibold ">F.A.Qs</h2>
          </div>
          <div className="space-y-2">
            {faqs.map((item, idx) => (
              <div key={idx} className="border border-gray-400">
                {/* دکمه */}
                <button
                  onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
                  className={`w-full flex justify-between items-center px-4 py-4 text-left font-medium cursor-pointer transition-colors duration-300  focus:outline-none 
                ${openIndex === idx ? "bg-black text-white" : " text-gray-400"}
              `}
                >
                  {item.question}

                  {/* آیکن */}
                  <FaAngleDown
                    className={`text-green-600  transform transition-transform duration-300 ${
                      openIndex === idx ? "rotate-180 text-white" : ""
                    }`}
                  />
                </button>

                
                <div
                  className={` overflow-hidden transition-all duration-500 ease-in-out 
                ${
                  openIndex === idx
                    ? "max-h-40  opacity-100"
                    : "max-h-0 opacity-0"
                }
              `}
                >
                  <p className="text-gray-700 py-10 px-7 bg-[#f5f5f5] text-sm">{item.answer}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Ask Us Form Right */}
        <div>
          <div className="flex items-center gap-5  mb-6">
            <div className="bg-green-600  p-3">
              {" "}
          <MdOutlineComment className="text-white" />
            </div>
            <h2 className="text-2xl font-semibold ">Ask Us</h2>
          </div>

          <form className="space-y-4">
            <div>
              <label htmlFor="name" className="text-gray-500 ">
                Your Name (*)
              </label>
              <input
                type="text"
                id="name"
                className="focus:outline-none w-full mt-2 border border-gray-400  px-3 py-2  focus:border-green-600"
              />
            </div>
            <div>
              <label htmlFor="email" className="text-gray-500 ">
                Your Email (*)
              </label>
              <input
                type="email"
                id="email"
                className="focus:outline-none w-full mt-2 border border-gray-400   px-3 py-2 focus:border-green-600"
              />
            </div>
            <div>
              <label htmlFor="Subject" className="text-gray-500 ">
                Subject
              </label>
              <input
                type="text"
                id="Subject"
                className="focus:outline-none w-full mt-2 border border-gray-400   px-3 py-2 focus:border-green-600"
              />
            </div>
            <div>
              <label htmlFor="Department" className="text-gray-500 ">
                Department
              </label>
              <select className="w-full mt-2 text-gray-800 border text border-gray-400   px-3 py-2 focus:outline-none focus:border-green-600">
                <option className=" text-[16px] text-gray-600   ">
                  Business Department
                </option>
                <option className=" text-[16px] text-gray-600   ">
                  personal Department{" "}
                </option>
                <option className=" text-[16px] text-gray-600   ">
                  support Department{" "}
                </option>
                <option className=" text-[16px] text-gray-600   ">
                  others
                </option>
              </select>
            </div>
            <div>
              <label htmlFor="Your Question" className="text-gray-500 ">
                Your Question
              </label>
              <textarea className="focus:outline-none w-full border mt-2 border-gray-400 h-40  px-3 py-2 focus:border-green-600"></textarea>
            </div>
            <button
              type="submit"
              className="bg-green-600 text-white px-6 py-2  hover:bg-green-700"
            >
              Ask
            </button>
          </form>
        </div>
      </div>
    </div>
    
    </>
  );
}
