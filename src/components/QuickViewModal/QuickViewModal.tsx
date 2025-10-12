import { useEffect } from "react";
import ProductDetailFull from "../ProductDetail/ProductDetail";
import type { IProducts } from "../../types/server";

interface QuickViewModalProps {
  product: IProducts | null;
  isOpen: boolean;
  onClose: () => void;
}

export default function QuickViewModal({
  product,
  isOpen,
  onClose,
}: QuickViewModalProps) {
  // جلوگیری از اسکرول هنگام باز بودن مودال
  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "auto";
  }, [isOpen]);

  if (!isOpen || !product) return null;

  return (
    <div className="fixed inset-0 bg-black/50 z-50 flex justify-center items-center">
      <div
        className=" bg-white   w-[90%] sm:w-[85%] xl:w-[80%] md:w-[95%]    mx-4 sm:mx-6 md:mx-2     overflow-y-auto  max-h-[90vh]   relative    shadow-xl   transition-all duration-300 "
      >
        {/* دکمه بستن */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-600 hover:text-black text-2xl"
        >
          &times;
        </button>

        {/* محتوای جزئیات */}
        <ProductDetailFull product={product} isModal />
      </div>
    </div>
  );
}
