import { Link, useLocation } from "react-router-dom";
import { useRef, useEffect } from "react";

function Menu({
  to,
  label,
  showLine = true,
  onClick,
}: {
  to: string;
  label: string;
  showLine?: boolean;
  onClick?: () => void;
}) {
  const lineRef = useRef<HTMLSpanElement | null>(null);
  const liRef = useRef<HTMLLIElement | null>(null);
  const location = useLocation();

  const isActive = location.pathname === to; // لینک فعال

  useEffect(() => {
    if (!showLine) return;

    const li = liRef.current;
    const line = lineRef.current;

    if (!li || !line) return;

    const handleEnter = () => {
      line.style.transformOrigin = "left";
      line.classList.add("scale-x-100", "opacity-100");
    };

    const handleLeave = () => {
      line.style.transformOrigin = "right";
      line.classList.remove("scale-x-100");
      line.classList.add("scale-x-0");
    };

    li.addEventListener("mouseenter", handleEnter);
    li.addEventListener("mouseleave", handleLeave);

    return () => {
      li.removeEventListener("mouseenter", handleEnter);
      li.removeEventListener("mouseleave", handleLeave);
    };
  }, [showLine]);

  return (
    <li ref={liRef} className="relative">
      <Link
        to={to}
        onClick={onClick} // این برای بستن منو در موبایل
        className={`transition-colors duration-300 ease-in-out ${
          isActive ? "text-[#33c160]" : "hover:text-[#33c160]"
        }`}
      >
        {label}
      </Link>
      {showLine && (
        <span
          ref={lineRef}
          className="absolute left-0 top-[-31px] h-[3px] w-full bg-[#33c160] scale-x-0 opacity-0 transition-transform duration-300 ease-in-out"
        ></span>
      )}
    </li>
  );
}

export default Menu;
