import { div } from "motion/react-client";
import { useState } from "react";
import { FaFacebookF, FaGooglePlusG, FaLinkedinIn } from "react-icons/fa";
import Breadcrumb from "../../components/Breadcrumb/Breadcrumb";
import { IoMdHome } from "react-icons/io";

const LoginSignup = () => {
  const [isActive, setIsActive] = useState(false);

  return (
    <>
      <Breadcrumb
        paths={[
          { label: <IoMdHome className="text-lg" />, link: "/" },
          { label: "My Account" },
        ]}
      />

      <div className="flex justify-center items-center my-10">
        <div
          className={`relative w-[700px] h-[450px] overflow-hidden shadow-xl bg-white flex transition-all duration-700 ${
            isActive ? "active" : ""
          }`}
        >
          {/* فرم‌ها */}
          <div
            className={`relative w-1/2 h-full flex items-center justify-center transition-transform duration-700 ${
              isActive ? "translate-x-full" : ""
            }`}
          >
            {/* Sign In */}
            <div
              className={`w-4/5 absolute transition-opacity duration-300 ${
                !isActive
                  ? "opacity-100 visible relative block"
                  : "opacity-0 invisible hidden"
              }`}
            >
              <div className="flex flex-col items-center gap-4">
                <h2 className="font-poetsen font-light tracking-wide text-center text-xl">
                  Sign In
                </h2>
                <div className="flex">
                  <a className="flex items-center justify-center w-10 h-10 rounded-full bg-gray-100 shadow mx-2 group/icons hover:bg-[#107643] transition">
                    <FaFacebookF className="text-gray-800 group-hover/icons:text-white" />
                  </a>
                  <a className="flex items-center justify-center w-10 h-10 rounded-full bg-gray-100 shadow mx-2 group/icons hover:bg-[#107643] transition">
                    <FaGooglePlusG className="text-gray-800 group-hover/icons:text-white" />
                  </a>
                  <a className="flex items-center justify-center w-10 h-10 rounded-full bg-gray-100 shadow mx-2 group/icons hover:bg-[#107643] transition">
                    <FaLinkedinIn className="text-gray-800 group-hover/icons:text-white" />
                  </a>
                </div>
                <small>or use your account</small>
              </div>

              <input
                type="email"
                placeholder="Email"
                className="w-full bg-gray-200 px-3 py-2 my-2 focus:outline-none focus:placeholder:text-[#107643]"
              />
              <input
                type="password"
                placeholder="Password"
                className="w-full bg-gray-200 px-3 py-2 my-2 focus:outline-none focus:placeholder:text-[#107643]"
              />
              <p className="text-sm text-gray-600 mt-2">
                Forgot your password ?
              </p>
              <button className="block w-2/3 mx-auto mt-5 py-2 rounded-full font-bold bg-[#107643] text-white hover:bg-[#20945a] transition">
                SIGN IN
              </button>
            </div>

            {/* Sign Up */}
            <div
              className={`w-4/5 absolute transition-opacity duration-300 ${
                isActive
                  ? "opacity-100 visible relative block"
                  : "opacity-0 invisible hidden"
              }`}
            >
              <div className="flex flex-col items-center gap-4">
                <h2 className="font-poetsen font-light tracking-wide text-center text-xl">
                  Sign Up
                </h2>
                <div className="flex">
                  <a className="flex items-center justify-center w-10 h-10 rounded-full bg-gray-100 group/icons shadow mx-2 hover:bg-[#107643] transition">
                    <FaFacebookF className="text-gray-800 group-hover/icons:text-white" />
                  </a>
                  <a className="flex items-center justify-center w-10 h-10 rounded-full bg-gray-100 group/icons shadow mx-2 hover:bg-[#107643] transition">
                    <FaGooglePlusG className="text-gray-800 group-hover/icons:text-white" />
                  </a>
                  <a className="flex items-center justify-center w-10 h-10 rounded-full bg-gray-100 group/icons shadow mx-2 hover:bg-[#107643] transition">
                    <FaLinkedinIn className="text-gray-800 group-hover/icons:text-white" />
                  </a>
                </div>
                <small>or use your email for registration</small>
              </div>

              <input
                type="text"
                placeholder="Name"
                className="w-full bg-gray-200 px-3 py-2 my-2 focus:outline-none focus:placeholder:text-[#107643]"
              />
              <input
                type="email"
                placeholder="Email"
                className="w-full bg-gray-200 px-3 py-2 my-2 focus:outline-none focus:placeholder:text-[#107643]"
              />
              <input
                type="password"
                placeholder="Password"
                className="w-full bg-gray-200 px-3 py-2 my-2 focus:outline-none focus:placeholder:text-[#107643]"
              />
              <button className="block w-2/3 mx-auto mt-5 py-2 rounded-full font-bold bg-[#107643] text-white hover:bg-[#20945a]  transition">
                SIGN UP
              </button>
            </div>
          </div>

          {/* باکس نارنجی */}
          <div
            className={`w-1/2 h-full bg-[#107643] text-white flex flex-col justify-center items-center text-center p-8 transition-transform duration-700 ${
              isActive ? "-translate-x-full" : ""
            }`}
          >
            <h2 className="mb-4 text-2xl font-poetsen">
              {isActive ? "Welcome Back!" : "Hello, Friend!"}
            </h2>
            <p className="mb-6">
              {isActive
                ? "Login with your personal information"
                : "Enter your personal details and start journey with us"}
            </p>
            <button
              onClick={() => setIsActive(!isActive)}
              className="px-8 py-2 border border-white rounded-full text-lg hover:bg-white hover:text-[#107643] transition"
            >
              {isActive ? "SIGN IN" : "SIGN UP"}
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default LoginSignup;
