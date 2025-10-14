
import { TbSearch } from "react-icons/tb";

interface QuickViewButtonProps {
  onClick: () => void;
}

export default function QuickViewButton({ onClick }: QuickViewButtonProps){
  
  return (
    <>
      <div
        className="hover:bg-green-600 py-3 px-3 transition flex justify-center items-center h-10 w-10 cursor-pointer"
        onClick={onClick}
      >
        <TbSearch className="text-white" />
      </div>

      {/* مودال آماده */}
      
    </>
  );
}
