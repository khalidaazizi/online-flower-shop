import { Link } from "react-router-dom";

// import PaymentImg from "../../assets/img/cards.png";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaPinterestP,
  FaWhatsapp,
} from "react-icons/fa";
import { HiArrowSmallLeft } from "react-icons/hi2";
import ButtonMotion from "../Button/Button";
import { IoCheckmarkCircleOutline } from "react-icons/io5";
import RatingStars from "../RatingStars/RatingStars";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import type { IProducts } from "../../types/server";
import AddToCartButton from "../AddToCartButton/AddToCartButton";
import QuickViewModal from "../QuickViewModal/QuickViewModal";
import Toast from "../Toast/Toast";
import WishlistButton from "../WishlistButton/WishlistButton";
import CompareButton from "../CompareButton/CompareButton";

const PaymentImg = "/img/cards.png";

export default function ProductDetail({
  product,
  isModal = false,
}: {
  product: IProducts;
  isModal?: boolean;
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

  const [open, setOpen] = useState(false);

  const { id } = useParams();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  if (!product) return <div>No product data!</div>;

  const averageRating =
    product.productInfo?.reviews?.length > 0
      ? product.productInfo.reviews.reduce(
          (sum: number, r: { rating: number }) => sum + r.rating,
          0
        ) / product.productInfo.reviews.length
      : 0;

  return (
    <>
      <div
        className={`container ${isModal ? "py-6 px-4" : "mx-auto py-10 px-6"}`}
      >
        <div className="container mx-auto px-4 py-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
            {/* LEFT: تصویر بزرگ */}
            <div>
              <div className="bg-[#f2f2f2] rounded-lg p-6 flex items-center justify-center">
                <img
                  src={product.Img}
                  alt={product.Title}
                  className="max-w-full max-h-[560px] object-contain"
                />
              </div>
            </div>

            {/* RIGHT: جزئیات */}
            <div>
              <h1 className="text-3xl font-bold">{product.Title}</h1>

              {/* رتبه‌بندی */}
              <div className="flex items-center gap-2 mt-3">
                <div className="flex gap-1">
                  <RatingStars rating={averageRating} color="text-yellow-400" />
                </div>
                <span className="text-sm text-gray-500">
                  ({product.productInfo?.reviews?.length || 0} customer review)
                </span>
              </div>

              {/* قیمت */}
              <div className="mt-4">
                {product.isOnSale && (
                  <span className="text-gray-500 line-through mr-3">
                    ${product.Discount}
                  </span>
                )}
                <span className="text-2xl font-extrabold">
                  ${product.Price}
                </span>
              </div>

              {/* توضیحات */}
              <p className="text-gray-600 mt-4">{product.Description}</p>

              {/* تعداد و دکمه‌ها */}
              <div className="flex items-center gap-2 mt-6">
                <Link to="/shop">
                  {" "}
                  <ButtonMotion
                    text="Back to shop"
                    className="bg-green-600 text-white px-3 py-2  flex items-center gap-2 hover:bg-black "
                    icon={<HiArrowSmallLeft />}
                  />{" "}
                </Link>

                <div className="flex ">
                   <AddToCartButton
                  product={product}
                  onAdd={() => showToast(product.Title || "Product", "cart")}
                  className="h-10 px-4 py-2 rounded-sm rounded-r-none relative  !top-0  !bg-red hover:bg-green-600 "
                />

                <WishlistButton
                  product={product}
                  onAdd={() =>
                    showToast(product.Title || "Product", "wishlist")
                  }
                  className="h-10  flex items-center justify-center rounded-l-none rounded-sm text-white !hover:bg-black bg-green-600 "
                />
               </div>

                <CompareButton
                  product={product}
                  onAdd={() => showToast(product.Title || "Product", "compare")}
                  className="h-10   rounded-sm text-white bg-gray-950 hover:bg-green-600"
                />
              </div>

              {/* ویژگی‌ها */}
              <ul className="mt-6 space-y-3 text-gray-700 pb-10 border-b border-[#c5c5c566]">
                <li className="flex items-start gap-3">
                  <span className="text-[#676767] text-xl mt-1">
                    <IoCheckmarkCircleOutline />
                  </span>
                  <span className="text-[#8b8b8b]">
                    Free shipping on all orders over $100
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#676767] text-xl mt-1">
                    <IoCheckmarkCircleOutline />
                  </span>
                  <span className="text-[#8b8b8b]">
                    14 days easy refund & returns
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#676767] text-xl mt-1">
                    <IoCheckmarkCircleOutline />
                  </span>
                  <span className="text-[#8b8b8b]">
                    Product taxes and customs duties included
                  </span>
                </li>
              </ul>

              {/* پرداخت */}
              <div className="mt-6 w-full flex flex-col justify-center items-center gap-1.5 lg:flex-row lg:justify-between">
                <div className="text-[#4a4a4a] mb-2">Secure payments:</div>
                <div className="flex items-center gap-3">
                  <img src={PaymentImg} alt="Payment" />
                </div>
              </div>

              {/* شبکه‌های اجتماعی */}
              <div className="mt-10 bg-[#f5f5f5] p-4">
                <div className="flex items-center justify-around">
                  {[
                    {
                      icon: <FaFacebookF />,
                      name: "Facebook",
                      url: "https://www.facebook.com",
                    },
                    {
                      icon: <FaTwitter />,
                      name: "Twitter",
                      url: "https://www.twitter.com",
                    },
                    {
                      icon: <FaInstagram />,
                      name: "Instagram",
                      url: "https://www.instagram.com",
                    },
                    {
                      icon: <FaPinterestP />,
                      name: "Pinterest",
                      url: "https://www.pinterest.com",
                    },
                    {
                      icon: <FaWhatsapp />,
                      name: "WhatsApp",
                      url: "https://wa.me/?text=YourMessageHere",
                    },
                  ].map((s) => (
                    <div key={s.name} className="relative group">
                      <a
                        href={s.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 bg-white px-6 text-gray-500 py-3 hover:bg-green-600 hover:text-white transition cursor-pointer border border-gray-300 block"
                      >
                        <span className="text-lg">{s.icon}</span>
                      </a>
                    </div>
                  ))}
                </div>
              </div>
            </div>
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
    </>
  );
}
