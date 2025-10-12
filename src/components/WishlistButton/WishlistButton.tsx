import React, { useState } from "react";
import { FaHeart, FaRegHeart } from "react-icons/fa";
import { useWishlist } from "../../context/WishlistContext";
import ActionModal from "../ActionModal/ActionModal";
import type { IProducts } from "../../types/server";

interface WishlistButtonProps {
  product: IProducts;
  onAdd: () => void; // callback برای Toast
  className?: string; 
}

const WishlistButton: React.FC<WishlistButtonProps> = ({ product, onAdd ,className }) => {
  const { wishlist, addToWishlist } = useWishlist();
  const [showModal, setShowModal] = useState(false);

  const isInWishlist = wishlist.some((p) => p.id === product.id);

  const handleClick = () => {
    if (isInWishlist) {
      setShowModal(true);
    } else {
      addToWishlist(product);
      onAdd(); // نمایش Toast
    }
  };

  return (
    <>
      <div className="relative group/icon">
        <div
          onClick={handleClick}
          className={` ${
    className || ""
  }     hover:bg-green-600 py-3 px-3 flex justify-center items-center h-10 w-10 cursor-pointer transition-colors duration-300 ease-in-out`}
        >
          {isInWishlist ? <FaHeart className="text-white" /> : <FaRegHeart className="text-white" />}
        </div>

        <span className="absolute bottom-11 left-1/2 -translate-x-1/2 whitespace-nowrap text-xs bg-green-600 text-white px-4 py-2 opacity-0 scale-75 group-hover/icon:opacity-100 group-hover/icon:scale-100 transition duration-300 ease-out rounded">
          {isInWishlist ? "Remove from Wishlist" : "Add to Wishlist"}
        </span>
      </div>

      <ActionModal
        isOpen={showModal}
        onClose={() => setShowModal(false)}
        title={product.Title || "Product"}
        message="This product is already in your wishlist."
        linkText="View Wishlist Page"
        linkTo="/wishlist"
      />
    </>
  );
};

export default WishlistButton;
