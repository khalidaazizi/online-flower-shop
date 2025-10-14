import React, { useState } from "react";
import { LuArrowLeftRight } from "react-icons/lu";
import { useCompare } from "../../context/CompareContext";
import ActionModal from "../ActionModal/ActionModal";
import type { IProducts } from "../../types/server";
import { FaCheck } from "react-icons/fa";

import { Link } from "react-router-dom";

interface CompareButtonProps {
  product: IProducts;
  onAdd: () => void; // callback برای Toast
  className?: string;
}

const CompareButton: React.FC<CompareButtonProps> = ({
  product,
  onAdd,
  className,
}) => {
  const { compareItems, addToCompare } = useCompare();
  const [showModal, setShowModal] = useState(false);

  const isAdded = compareItems.some((p) => p.id === product.id);

  const handleClick = () => {
    if (isAdded) {
      setShowModal(true);
    } else {
      addToCompare(product);
      onAdd(); // نمایش Toast
    }
  };

  return (
    <>
      <div className="relative group/icon">
        <div
          onClick={handleClick}
          className={`${
            className || ""
          }    hover:bg-green-600 py-3 px-3 flex justify-center items-center h-10 w-10 cursor-pointer transition-colors duration-300 ease-in-out`}
        >
          {isAdded ? (
            <FaCheck className="text-white" size={18} />
          ) : (
            <LuArrowLeftRight className="text-white" size={18} />
          )}
        </div>

        <span className="absolute bottom-11 left-1/2 -translate-x-1/2 whitespace-nowrap text-xs bg-green-600 text-white px-4 py-2 opacity-0 scale-75 group-hover/icon:opacity-100 group-hover/icon:scale-100 transition duration-300 ease-out rounded">
          {isAdded ? (
            <Link to="/Compare">
              <button className="cursor-pointer">view compare</button>
            </Link>
          ) : (
            "Add to Compare "
          )}
        </span>
      </div>

      <ActionModal
        isOpen={showModal}
        onClose={() => setShowModal(false)}
        title={product.Title || "Product"}
        message="This product is already in your comparison list."
        linkText="View Compare Page"
        linkTo="/compare"
      />
    </>
  );
};

export default CompareButton;
