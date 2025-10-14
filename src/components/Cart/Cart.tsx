
import { Link } from "react-router-dom";
import type { IProducts } from "../../types/server";
import RatingStars from "../RatingStars/RatingStars";
import CompareButton from "../CompareButton/CompareButton";
import WishlistButton from "../WishlistButton/WishlistButton";
import AddToCartButton from "../AddToCartButton/AddToCartButton";
import Toast from "../Toast/Toast";
import { useState } from "react";
import QuickViewModal from "../QuickViewModal/QuickViewModal";
import QuickViewButton from "../QuickViewButton/QuickViewButton";
function Cart({
  product,
  linkType,
}: {
  product: IProducts;
  linkType?: "shop" | "detail";
}) {
  const [toastData, setToastData] = useState<{
    name: string;
    type: "cart" | "wishlist" | "compare";
    show: boolean;
  } | null>(null);

  const showToast = (name: string, type: "cart" | "wishlist" | "compare") => {
    setToastData({ name, type, show: true });
    setTimeout(() => setToastData(null), 4000);
  };

  // کویک ویو مودا
  const [open, setOpen] = useState(false);
  

  if (!product) return <div>Loading...</div>;
  const {
    id,
    Img,
    ImgAlt,
    Title,
    SubTitle,
    Price,
    OriginalPrice,
    isOnSale,
    Discount,
  } = product;

  const linkTarget = linkType === "shop" ? "/shop" : `/product/${id}`;

  const averageRating =
    product.productInfo &&
    product.productInfo.reviews &&
    product.productInfo.reviews.length > 0
      ? product.productInfo.reviews.reduce((sum, r) => sum + r.rating, 0) /
        product.productInfo.reviews.length
      : 0;

  return (
    <div className="p-4 text-center group ">
      <div className="bg-[#f2f2f2] relative  ">
        <Link to={linkTarget}>
          {isOnSale && (
            <div className="flex flex-col absolute gap-1.5 right-0">
              <span className="bg-[#002626cc] py-1 px-3 font-light text-[14px] text-white">
                sale!
              </span>
              <span className="bg-gray-950 py-1 px-4 text-white font-light text-[14px]">
                {`${Discount}%`}
              </span>
            </div>
          )}

          <div className="flex gap-0.5 p-3">
            <RatingStars rating={averageRating} color="text-yellow-400" />
          </div>
          <div className="w-56 h-52  lg:w-64 lg:h-60">
            <img
              src={Img}
              alt={ImgAlt}
              className="w-[100%] h-[100%]  object-contain mx-auto "
            />
          </div>
        </Link>
      </div>
      <div className="relative">
        <Link to={linkTarget}>
          <h3 className="font-semibold lg:text-2xl mt-5">{Title}</h3>
        </Link>
        <p className="font-light text-gray-500 ">{SubTitle}</p>
        <div className="mt-4">
          {isOnSale && OriginalPrice && (
            <span className="text-gray-500 font-semibold line-through text-sm mr-2">
              ${OriginalPrice}
            </span>
          )}
          {Price && <span className="text-black font-bold">${Price}</span>}
        </div>
        <div className="flex flex-col justify-center items-center opacity-0 group-hover:opacity-100 transition duration-300 ease-in-out">
          <div className="bg-gray-950 flex absolute -top-10">
            {/* Wishlist */}
            <WishlistButton
              product={product}
              onAdd={() => showToast(product.Title || "Product", "wishlist")}
            />
            {/*  Compare*/}
            <CompareButton
              product={product}
              onAdd={() => showToast(product.Title || "Product", "compare")}
            />
            {/* Quick View */}
            
            <div className="relative group/icon ">
              <QuickViewButton onClick={() => setOpen(true)}/>
              
              <span className="absolute bottom-11 left-1/2 -translate-x-1/2 whitespace-nowrap text-xs bg-green-600 text-white px-4 py-2 opacity-0 scale-75 group-hover/icon:opacity-100 group-hover/icon:scale-100 transition duration-300 ease-out">
                Quick View
              </span>
            </div>
          </div>

          <div className=" flex justify-center ">
            <AddToCartButton
              product={product}
              onAdd={() => showToast(product.Title || "Product", "cart")}
            />
          </div>
        </div>
      </div>

      {toastData && toastData.show && (
        <Toast
          show={true}
          type={toastData.type}
          productName={toastData.name}
          onClose={() => setToastData(null)}
        />
      )}

      <QuickViewModal
        product={product}
        isOpen={open}
        onClose={() => setOpen(false)}
      />
    </div>
  );
}

export default Cart;
