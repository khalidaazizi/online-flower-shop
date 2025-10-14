import { motion,  type MotionProps } from "framer-motion";
import React, { type ComponentProps } from "react";

type ButtonMotionProps = ComponentProps<"button"> &
  MotionProps & {
    text: string;
    className?: string;
    icon?: React.ReactNode;
  };

const ButtonMotion: React.FC<ButtonMotionProps> = ({
  text,
  className = "",
  variants,
  onClick,
  icon,
  ...rest
}) => {
  return (
    <motion.button
      type="button"
      className={`flex items-center gap-2 text-center rounded-[3px] font-light  transition-colors duration-300 ease-in-out ${className}`}
      variants={variants}
      initial="hidden"
      animate="visible"
      onClick={onClick}
      {...rest} // ✅ همه پراپ‌های معتبر به motion.button میره، پراپ اضافی مثل t خط نمیده
    >
      {icon && <span>{icon}</span>}
      {text}
    </motion.button>
  );
};

export default ButtonMotion;
