import { useState } from "react";
import { TbSearch } from "react-icons/tb";
import type { IProducts } from "../../types/server";
import QuickViewModal from "../QuickViewModal/QuickViewModal";

export default function QuickViewButton({ product }: { product: IProducts }) {
  const [open, setOpen] = useState(false);

  return (
    <>
      <div
        className="hover:bg-green-600 py-3 px-3 transition flex justify-center items-center h-10 w-10 cursor-pointer"
        onClick={() => setOpen(true)}
      >
        <TbSearch className="text-white" />
      </div>

      {/* مودال آماده */}
      
    </>
  );
}
