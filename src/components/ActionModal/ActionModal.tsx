import React from "react";
import { Link } from "react-router-dom";
import { IoClose } from "react-icons/io5";

interface ActionModalProps {
  isOpen: boolean;
  title: string;
  message: string;
  linkText: string;
  linkTo: string;
  onClose: () => void;
}

const ActionModal: React.FC<ActionModalProps> = ({
  isOpen,
  title,
  message,
  linkText,
  linkTo,
  onClose,
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/40 z-50 flex items-center justify-center">
      <div className="bg-white w-[400px] p-8 rounded-2xl shadow-lg relative animate-fadeIn">
        <button
          onClick={onClose}
          className="absolute top-3 right-3 text-gray-500 hover:text-gray-700"
        >
          <IoClose size={22} />
        </button>

        <div className="flex flex-col items-center text-center">
          <div className="bg-green-100 rounded-full p-3 mb-3">
            <svg
              className="w-10 h-10 text-green-600"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
            </svg>
          </div>

          <h2 className="text-lg font-semibold text-gray-800">{title}</h2>
          <p className="text-gray-500 text-sm mb-6">{message}</p>

          <Link
            to={linkTo}
            className="bg-green-800 hover:bg-green-700 text-white font-medium py-2 px-4 rounded transition flex items-center gap-2"
          >
            {linkText}
            <span className="text-white text-lg">→</span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ActionModal;
