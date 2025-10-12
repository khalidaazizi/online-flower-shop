// components/Breadcrumb/Breadcrumb.tsx
import { Link } from "react-router-dom";
import { MdKeyboardDoubleArrowRight } from "react-icons/md";


type BreadcrumbProps = {
  paths: { label: React.ReactNode; link?: string }[];
};

function Breadcrumb({ paths }: BreadcrumbProps) {
  return (
    <div className="bg-green-500 shadow-bread py-3 px-6 text-black  text-sm font-medium flex gap-2">
      {paths.map((path, i) => (
        <span key={i} className="flex items-center gap-2">
          {path.link ? (
            <Link to={path.link} >
              {path.label}
            </Link>
          ) : (
            <span>{path.label}</span>
          )}
          {i < paths.length - 1 && <span>{<MdKeyboardDoubleArrowRight />}</span>}
        </span>
      ))}
    </div>
  );
}

export default Breadcrumb;
