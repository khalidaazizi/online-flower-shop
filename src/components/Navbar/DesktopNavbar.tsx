import { ShoppingBagIcon } from "@heroicons/react/24/outline";
import { HeartIcon } from "@heroicons/react/24/outline";
import { UserIcon } from "@heroicons/react/24/outline";
import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import { Link } from "react-router-dom";
import logo from "../../assets/img/logo.png";
import Menu from "./Menu";
import { useCart } from "../../context/CartContext";
import { useWishlist } from "../../context/WishlistContext";
import {  useState } from "react";

import { IoMdClose } from "react-icons/io";
import UserSearch from "../SearchBar/SearchBar";


function DesktopNavbar() {
  const { cart } = useCart(); //
  const { wishlist } = useWishlist(); //
  const totalItemscart = cart.reduce((sum, item) => sum + item.quantity, 0);
  const totalItemswishlist = wishlist.length;

  // 
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen(!isOpen);


  return (
    <div className="flex justify-around items-center ">
      <Link to="/">
        <img src={logo} alt="" className="w-36" />{" "}
      </Link>

      <ul className="flex items-center  gap-5   md:text-[16px] lg:text-[18px] font-semibold text-[#002626cc]">
        <Menu to="/" label="Home" showLine={true} />
        <Menu to="/shop" label="Shop" showLine={true} />
        <Menu to="/FAQ" label="FAQ" showLine={true} />
        <Menu to="/blog" label="Blog" showLine={true} />
        <Menu to="/about" label="About" showLine={true} />
        <Menu to="/contact" label="contact" showLine={true} />
      </ul>

      <div className="flex gap-7 justify-center items-center ">
        <div className="relative">
          <MagnifyingGlassIcon
            className="  cursor-pointer  md:w-6 lg:w-8 text-[#002626cc]"
            onClick={toggleMenu}
          />
          {isOpen && (
            <div className="bg-white shadow h-40 w-[500px] absolute   top-10 z-40 right-0">
              <div className="flex justify-end p-4">
                <IoMdClose
                  onClick={toggleMenu}
                  className="text-black  text-2xl cursor-pointer"
                />
              </div>
              <div
                className=" flex justify-center  items-center  "
                
              >
                <div>
                  <h5 className="text-green-500 font-bold text-lg mb-2 ">
                    Start Typing ...
                  </h5>
                  {/* component */}
                <UserSearch  />
                </div>
              </div>
            </div>
          )}
        </div>
        <Link to="/cart">
          <div className="relative  ">
            <ShoppingBagIcon className=" md:w-6 lg:w-8 text-[#002626cc] " />
            <span className="bages-navbar bg-[#33c160] text-gray-950 absolute -top-2 -right-2 text-xs font-bold px-2 py-0.5 rounded-full">
              {totalItemscart}
            </span>
          </div>
        </Link>
        <Link to="/wishlist">
          <div className="relative ">
            <HeartIcon className="  md:w-6 lg:w-8 text-[#002626cc] " />
            <span className="bages-navbar bg-[#33c160] text-gray-950 absolute -top-2 -right-2 text-xs font-bold px-2 py-0.5 rounded-full">
              {totalItemswishlist}
            </span>
          </div>
        </Link>
        <Link to="/login ">
          <UserIcon className="  md:w-6 lg:w-8 text-[#002626cc]" />
        </Link>

       
      </div>
    </div>
  );
}

export default DesktopNavbar;
