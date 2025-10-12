import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { FaCheck } from "react-icons/fa6";

type ToastType = "cart" | "wishlist" | "compare";

type ToastProps = {
  productName: string;
  show: boolean;
  type: ToastType;
  onClose: () => void
};

export default function Toast({ productName, show, type,onClose }: ToastProps) {
  const [expanded, setExpanded] = useState(false);

  useEffect(() => {
    if (show) {
      const expandTimeout = setTimeout(() => setExpanded(true), 1000);
      const shrinkTimeout = setTimeout(() => setExpanded(false), 3500);
 const hideTimeout = setTimeout(() => onClose(), 4500);
      return () => {
           clearTimeout(expandTimeout);
      clearTimeout(shrinkTimeout);
      clearTimeout(hideTimeout);
      };
    }
  }, [show]);

  // تابع برای تولید متن مناسب بر اساس نوع
  const getMessage = () => {
    switch (type) {
      case "wishlist":
        return "has been added to your wishlist.";
      case "cart":
        return "has been added to your cart.";
      case "compare":
        return "has been added to compare.";
      default:
        return "has been added.";
    }
  };

  // تابع برای تولید لینک مناسب
  const getLink = () => {
    switch (type) {
      case "wishlist":
        return "/wishlist";
      case "cart":
        return "/cart";
      case "compare":
        return "/compare";
      default:
        return "/";
    }
  };

  // تابع برای تولید متن دکمه
  const getButtonText = () => {
    switch (type) {
      case "wishlist":
        return "Wishlist";
      case "cart":
        return "View Cart";
      case "compare":
        return "View Compare";
      default:
        return "View";
    }
  };

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed bottom-10 left-1/2 -translate-x-1/2 z-50 flex items-center"
        >
          <motion.div
            initial={{ width: 64, height: 64 }}
            animate={{ 
              width: expanded ? 500 : 64, 
              height: 64 
            }}
            transition={{ duration: 0.6, ease: "easeInOut" }}
            className="bg-black rounded-full flex items-center pr-[7px] overflow-hidden"
          >
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0 }}
              transition={{ duration: 0.4 }}
              className="bg-green-600 p-[13px] flex justify-center items-center text-2xl text-white rounded-full ml-2"
            >
              <FaCheck />
            </motion.div>

            {expanded && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.4 }}
                className="flex justify-between items-center w-full px-4 text-white"
              >
                <p className="flex-1 text-[14px]">
                  <span className="font-semibold">"{productName}"</span>{" "}
                  <span className="text-gray-200">
                    {getMessage()}
                  </span>
                </p>
                
                <Link to={getLink()}>
                  <button className="text-white bg-green-500 px-3 py-2 rounded-full hover:bg-white hover:text-green-600 transition duration-300 ease-in-out">
                    {getButtonText()}
                  </button>
                </Link>
              </motion.div>
            )}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}