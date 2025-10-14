import { Link } from "react-router-dom";
import logo from "../../assets/img/logo.png";
import { IoMdClose } from "react-icons/io";
import { useLocation } from "react-router-dom";

import { HiOutlineShoppingCart } from "react-icons/hi2";
import {
  Bars3Icon,
  HeartIcon,

  ShoppingBagIcon,
  UserIcon,
} from "@heroicons/react/24/outline";
import { useCart } from "../../context/CartContext";
import { useState, useEffect } from "react";
import Menu from "./Menu";
import {
  FaFacebookF,
  FaInstagram,

  FaTwitter,
  FaYoutube,
} from "react-icons/fa";
import { useWishlist } from "../../context/WishlistContext";
import { FaAngleDown } from "react-icons/fa6";
import UserSearch from "../SearchBar/SearchBar";

function MobileNavbar() {
  //
  const { cart } = useCart();
  const totalItemscart = cart.reduce((sum, item) => sum + item.quantity, 0);
  //
  const { wishlist } = useWishlist();
  const totalItemswishlist = wishlist.length;
  //
  // const [isSearchActive, setIsSearchActive] = useState(false);

  //
  const [isOpen, setIsOpen] = useState(false);

  //
  const location = useLocation();

  // غیر فعال کردن اسکرول اصلی وقتی منو باز است
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
  }, [isOpen]);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <>
      <div className="md:hidden">
        <div className="flex justify-around items-center  p-4">
          <Link to="/cart">
            <div className="btn-navbar relative">
              <HiOutlineShoppingCart className="h-6 w-6 text-white" />
              <span className="bages-navbar text-white bg-gray-950 absolute -top-2 -right-2 text-xs font-bold px-2 py-0.5 pt-1 rounded-full">
                {totalItemscart}
              </span>
            </div>
          </Link>

          <Link to="/">
            <img src={logo} alt="Logo" />
          </Link>

          <div className="btn-navbar cursor-pointer" onClick={toggleMenu}>
            <Bars3Icon className="h-6 w-6 text-white" />
          </div>
        </div>

        {/* Overlay */}
        {isOpen && (
          <div
            className="fixed inset-0 bg-black/50 z-40"
            onClick={toggleMenu}
          ></div>
        )}

        {/* Sidebar */}
        <div
          className={`fixed  top-0 left-0 h-[100vh] w-[80%]    bg-white z-50 transform transition-transform duration-300 ${
            isOpen ? "translate-x-0" : "-translate-x-full"
          } overflow-y-auto`}
        >
          {/* colse btn */}
          <div className="flex justify-end p-4">
            <IoMdClose
              onClick={toggleMenu}
              className="text-black  text-2xl cursor-pointer"
            />
          </div>
          {/* search */}
          <div className="flex justify-between items-center px-3 relative">
            {/* <input
              onClick={() => setIsSearchActive(!isSearchActive)}
              type="search"
              placeholder="Search your fav..."
              className={`border rounded-xs py-2 px-3 w-full shadow focus:outline-0 transition-all duration-300 ${
                isSearchActive
                  ? "border-[#65e056] ring-2 ring-[#0baa2a40]" // حالت سبز فعال
                  : "border-gray-300"
              }`}
            />
            <MagnifyingGlassIcon
              className={`cursor-pointer w-5 absolute right-7 transition-colors duration-300 ${
                isSearchActive ? "text-[#33c160]" : "text-[#002626cc]"
              }`}
            /> */}
              <UserSearch  />
          </div>

          {/*  */}
          <ul className="flex flex-col px-3 pt-4 gap-6 text-[16px] font-semibold text-[#002626cc]">
            <div className="flex items-center gap-1  group">
              <FaAngleDown
                className={`text-[14px] group-hover:text-[#33c160]  ${
                  location.pathname === "/"
                    ? "text-[#33c160]"
                    : "text-[#002626cc] "
                }`}
              />
              <Menu
                to="/"
                label="Home"
                showLine={false}
                onClick={() => setIsOpen(false)}
              />
            </div>
            <div className="flex items-center gap-1 group">
               <FaAngleDown
                className={`text-[14px]  group-hover:text-[#33c160] ${
                  location.pathname === "/shop"
                    ? "text-[#33c160]"
                    : "text-[#002626cc]  "
                }`}
              />
              <Menu
                to="/shop"
                label="Shop"
                showLine={false}
                onClick={() => setIsOpen(false)}
              />
            </div>
            <div className="flex items-center gap-1 group">
              <FaAngleDown
                className={`text-[14px] group-hover:text-[#33c160] ${
                  location.pathname === "/FAQ"
                    ? "text-[#33c160]"
                    : "text-[#002626cc]  "
                }`}
              />
              <Menu
                to="/FAQ"
                label="FAQ"
                showLine={false}
                onClick={() => setIsOpen(false)}
              />
            </div>

            <div className="flex items-center gap-1 group">
              <FaAngleDown
                className={`text-[14px] group-hover:text-[#33c160]  ${
                  location.pathname === "/blog"
                    ? "text-[#33c160]"
                    : "text-[#002626cc]"
                }`}
              />
              <Menu
                to="/blog"
                label="Blog"
                showLine={false}
                onClick={() => setIsOpen(false)}
              />
            </div>
            <div className="flex items-center gap-1 group">
              <FaAngleDown
                className={`text-[14px]  group-hover:text-[#33c160] ${
                  location.pathname === "/about"
                    ? "text-[#33c160]"
                    : "text-[#002626cc] "
                }`}
              />
              <Menu
                to="/about"
                label="About"
                showLine={false}
                onClick={() => setIsOpen(false)}
              />
            </div>
            <div className="flex items-center gap-1 group">
               <FaAngleDown
                className={`text-[14px] group-hover:text-[#33c160]  ${
                  location.pathname === "/contact"
                    ? "text-[#33c160]"
                    : "text-[#002626cc]"
                }`}
              />
              <Menu
                to="/contact"
                label="Contact"
                showLine={false}
                onClick={() => setIsOpen(false)}
              />
            </div>
          </ul>
          {/*  */}
          <div className="absolute left-0 right-0 bottom-0 ">
            {/*  */}
            <div className="flex gap-7 justify-center   items-center">
              <Link to="/cart">
                <div className="relative" onClick={() => setIsOpen(false)}>
                  <ShoppingBagIcon className=" w-8 text-[#002626cc] " />
                  <span className="bages-navbar bg-[#33c160] text-gray-950 absolute -top-2 -right-2 text-xs font-bold px-2 py-0.5 rounded-full">
                    {totalItemscart}
                  </span>
                </div>
              </Link>
              <Link to="/wishlist">
                <div className="relative" onClick={() => setIsOpen(false)}>
                  <HeartIcon className="  w-8 text-[#002626cc] " />
                  <span className="bages-navbar bg-[#33c160] text-gray-950 absolute -top-2 -right-2 text-xs font-bold px-2 py-0.5 rounded-full">
                    {totalItemswishlist}
                  </span>
                </div>
              </Link>
              <Link to="/login" onClick={() => setIsOpen(false)}>
                <UserIcon className="  w-8  text-[#002626cc]" />
              </Link>
            </div>
            {/* media */}

            <div className="flex  justify-center bg-[#0d1e16] py-10 gap-6 mt-5  text-white ">
              <div className=" border-custom px-2.5  py-2.5 hover:bg-[#33c160] transition-colors duration-300 ease-in-out rounded-[3px]">
                <Link to="">
                  {" "}
                  <FaFacebookF />{" "}
                </Link>
              </div>
              <div className=" border-custom px-2.5  py-2.5 hover:bg-[#33c160] transition-colors duration-300 ease-in-out rounded-[3px]">
                <Link to="">
                  {" "}
                  <FaTwitter />
                </Link>
              </div>
              <div className=" border-custom px-2.5  py-2.5 hover:bg-[#33c160] transition-colors duration-300 ease-in-out rounded-[3px]">
                <Link to="">
                  <FaInstagram />
                </Link>
              </div>
              <div className=" border-custom px-2.5  py-2.5 hover:bg-[#33c160] transition-colors duration-300 ease-in-out rounded-[3px]">
                <Link to="">
                  <FaYoutube />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default MobileNavbar;
