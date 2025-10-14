import { Link } from "react-router-dom";
import { IoIosArrowRoundForward } from "react-icons/io";
import React from "react";
type ProcessBarProps = {
  step: number; // عدد مرحله فعلی: 1، 2 یا 3
};

const ProcessBar: React.FC<ProcessBarProps> = ({ step }) => {
  const steps = [
    { id: 1, label: "Shopping cart", link: "/cart" },
    { id: 2, label: "Checkout details", link: "/checkout" },
    { id: 3, label: "Order complete", link: "/ordercomplete" },
  ];

  return (
    <div className="container flex-wrap px-4 mt-14 flex items-center lg:justify-center space-x-6 mb-6 text-gray-400 font-medium">
      {steps.map((s, index) => {
        const isActive = step >= s.id; // اگر مرحله فعلی بزرگتر یا مساوی این مرحله باشد فعال است
        return (
          <React.Fragment key={s.id}>
            <span
              className={`w-5 h-5 text-center pt-[1.6px] rounded-full text-[12px] mr-3 ${
                isActive ? "bg-black text-white" : "bg-gray-400 text-white"
              }`}
            >
              {s.id}
            </span>
            <Link to={s.link}>
              <span className={isActive ? "text-black" : "text-gray-400"}>
                {s.label}
              </span>
            </Link>
            {index < steps.length - 1 && (
              <IoIosArrowRoundForward
                className={`text-4xl ${step > s.id ? "text-black" : "text-gray-400"}`}
              />
            )}
          </React.Fragment>
        );
      })}
    </div>
  );
};

export default ProcessBar;
