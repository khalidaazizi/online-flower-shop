import React, { useState } from "react";
import { HiShoppingCart } from "react-icons/hi";
import { FaCheck } from "react-icons/fa6";
import { useCart } from "../../context/CartContext";

import type { IProducts } from "../../types/server";
import ActionModal from "../ActionModal/ActionModal";
import { Link } from "react-router-dom";

interface AddToCartButtonProps {
  product: IProducts;
  onAdd: () => void; // callback برای Toast
  className?: string; 
}

const AddToCartButton: React.FC< AddToCartButtonProps > = ({product,onAdd,className})=>{
  const [showModal, setShowModal] = useState(false);

  const { addToCart, isInCart } = useCart();

  const handleClick = () => {
    if (!isInCart(product.id)) {
      addToCart(product);
      onAdd(); // این تابع را برای نمایش Toast صدا می‌زنیم
    }
  };

  return (
    <>
      <button
        onClick={handleClick}
        className={`${className || ""}  absolute top-10 py-2 px-3 text-white bg-gray-950 hover:bg-green-600 flex items-center gap-2 rounded-md transition-all cursor-pointer font-light`}
      >
        {isInCart(product.id) ? <FaCheck /> : <HiShoppingCart />}
        {isInCart(product.id) ? (
          <Link to="/cart">
            <button className="cursor-pointer font-light">View Cart</button>
          </Link>
        ) : (
          "Add to Cart"
        )}
      </button>

      <ActionModal
        isOpen={showModal}
        onClose={() => setShowModal(false)}
        title="Product Already in Cart"
        message="This product is already in your cart. You can update the quantity there."
        linkText="Go to Cart"
        linkTo="/cart"
      />
    </>
  );
};

export default AddToCartButton;
