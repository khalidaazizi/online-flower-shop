import { Link } from "react-router-dom";
import Breadcrumb from "../../components/Breadcrumb/Breadcrumb";
import { IoMdHome } from "react-icons/io";
import { useWishlist } from "../../context/WishlistContext";
import { IoCloseSharp } from "react-icons/io5";
import RatingStars from "../../components/RatingStars/RatingStars";

// import { FaCheck } from "react-icons/fa6";
export default function Wishlist() {
  const { wishlist, removeFromWishlist } = useWishlist();

  return (
    <>
      <Breadcrumb
        paths={[
          { label: <IoMdHome className="text-lg" />, link: "/" },
          { label: "Wishlist" },
        ]}
      />

      <div className="container mx-auto px-4 py-10">
        <h2 className="text-3xl font-bold text-center bg-green-500 text-white py-4 rounded">
          Your Wishlist
        </h2>

        {wishlist.length === 0 ? (
          <div className="text-center mt-10">
            <p className="text-gray-600 text-lg">Your wishlist is empty.</p>
            <Link
              to="/shop"
              className="mt-5 inline-block bg-green-500 text-white px-6 py-2 rounded hover:bg-green-600"
            >
              Continue Shopping
            </Link>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
            {wishlist.map((item) => (
              <div key={item.id} className="bg-[#f1f1f1]  p-4  relative">
                <button
                  onClick={() => removeFromWishlist(item.id)}
                  className="absolute top-2 right-2 text-red-500 hover:text-red-700"
                >
                  <IoCloseSharp size={20} />
                </button>

                <div className="flex justify-center items-center text-center">
                  <Link to={`/product/${item.id}`} className="block">
                    <img
                      src={item.Img}
                      alt={item.ImgAlt}
                      className="w-full h-48 object-contain"
                    />
                    <h3 className="mt-4 font-bold  text-lg">{item.Title}</h3>
                    <p className="text-gray-500">{item.SubTitle}</p>
                    <div className="mt-2">
                      {item.isOnSale && (
                        <span className="line-through text-gray-500">
                          ${item.OriginalPrice}
                        </span>
                      )}
                      <span className="font-bold  text-black">
                        ${item.Price}
                      </span>
                    </div>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </>
  );
}
