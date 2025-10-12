import { IoCloseSharp } from "react-icons/io5";
import CartLayout from "../../layouts/LayoutCart";
import { FaDolly } from "react-icons/fa";
import { IoMdHome } from "react-icons/io";
import { useCart } from "../../context/CartContext";
import { useEffect, useState } from "react";
import { getProducts } from "../../services/api";
import type { IProducts } from "../../types/server";
import { Link } from "react-router-dom";
import RatingStars from "../../components/RatingStars/RatingStars";


const Cart = () => {
  
  const [products, setProducts] = useState<IProducts[]>([]);
  const { cart, removeFromCart, increaseQuantity, decreaseQuantity } =
    useCart();

  // گرفتن داده‌ها از API
  useEffect(() => {
    getProducts().then((result) => {
      setProducts(result);
    });
  }, []);

  const subtotal = cart.reduce(
    (sum, item) => sum + item.Price * item.quantity,
    0
  );
  const shippingCost = subtotal >= 500 ? 0 : 20;
  const total = subtotal + shippingCost;

  return (
    <CartLayout
      step={1}
      breadcrumb={[
        { label: <IoMdHome className="text-lg" />, link: "/" },
        { label: "Cart" },
      ]}
    >
       {/* Cart table */}
      <div className="container mx-auto px-4 py-10">
        {/* ✅ حالت خالی */}
        {cart.length === 0 ? (
          <div className="flex flex-col justify-center items-center gap-5 h-[60vh]">
            <svg
              className="w-40 h-40 fill-[#676767]"
              xmlns="http://www.w3.org/2000/svg"
              xmlnsXlink="http://www.w3.org/1999/xlink"
              viewBox="0 0 231.523 231.523"
              xmlSpace="preserve"
            >
              <g>
                <path
                  d="M107.415,145.798c0.399,3.858,3.656,6.73,7.451,6.73c0.258,0,0.518-0.013,0.78-0.04c4.12-0.426,7.115-4.111,6.689-8.231
l-3.459-33.468c-0.426-4.12-4.113-7.111-8.231-6.689c-4.12,0.426-7.115,4.111-6.689,8.231L107.415,145.798z"
                ></path>
                <path
                  d="M154.351,152.488c0.262,0.027,0.522,0.04,0.78,0.04c3.796,0,7.052-2.872,7.451-6.73l3.458-33.468
c0.426-4.121-2.569-7.806-6.689-8.231c-4.123-0.421-7.806,2.57-8.232,6.689l-3.458,33.468
C147.235,148.377,150.23,152.062,154.351,152.488z"
                ></path>
                <path
                  d="M96.278,185.088c-12.801,0-23.215,10.414-23.215,23.215c0,12.804,10.414,23.221,23.215,23.221
c12.801,0,23.216-10.417,23.216-23.221C119.494,195.502,109.079,185.088,96.278,185.088z M96.278,216.523
c-4.53,0-8.215-3.688-8.215-8.221c0-4.53,3.685-8.215,8.215-8.215c4.53,0,8.216,3.685,8.216,8.215
C104.494,212.835,100.808,216.523,96.278,216.523z"
                ></path>
                <path
                  d="M173.719,185.088c-12.801,0-23.216,10.414-23.216,23.215c0,12.804,10.414,23.221,23.216,23.221
c12.802,0,23.218-10.417,23.218-23.221C196.937,195.502,186.521,185.088,173.719,185.088z M173.719,216.523
c-4.53,0-8.216-3.688-8.216-8.221c0-4.53,3.686-8.215,8.216-8.215c4.531,0,8.218,3.685,8.218,8.215
C181.937,212.835,178.251,216.523,173.719,216.523z"
                ></path>
                <path
                  d="M218.58,79.08c-1.42-1.837-3.611-2.913-5.933-2.913H63.152l-6.278-24.141c-0.86-3.305-3.844-5.612-7.259-5.612H18.876
c-4.142,0-7.5,3.358-7.5,7.5s3.358,7.5,7.5,7.5h24.94l6.227,23.946c0.031,0.134,0.066,0.267,0.104,0.398l23.157,89.046
c0.86,3.305,3.844,5.612,7.259,5.612h108.874c3.415,0,6.399-2.307,7.259-5.612l23.21-89.25C220.49,83.309,220,80.918,218.58,79.08z
M183.638,165.418H86.362l-19.309-74.25h135.895L183.638,165.418z"
                ></path>
                <path
                  d="M105.556,52.851c1.464,1.463,3.383,2.195,5.302,2.195c1.92,0,3.84-0.733,5.305-2.198c2.928-2.93,2.927-7.679-0.003-10.607
L92.573,18.665c-2.93-2.928-7.678-2.927-10.607,0.002c-2.928,2.93-2.927,7.679,0.002,10.607L105.556,52.851z"
                ></path>
                <path
                  d="M159.174,55.045c1.92,0,3.841-0.733,5.306-2.199l23.552-23.573c2.928-2.93,2.925-7.679-0.005-10.606
c-2.93-2.928-7.679-2.925-10.606,0.005l-23.552,23.573c-2.928,2.93-2.925,7.679,0.005,10.607
C155.338,54.314,157.256,55.045,159.174,55.045z"
                ></path>
                <path
                  d="M135.006,48.311c0.001,0,0.001,0,0.002,0c4.141,0,7.499-3.357,7.5-7.498l0.008-33.311c0.001-4.142-3.356-7.501-7.498-7.502
c-0.001,0-0.001,0-0.001,0c-4.142,0-7.5,3.357-7.501,7.498l-0.008,33.311C127.507,44.951,130.864,48.31,135.006,48.311z"
                ></path>
              </g>
            </svg>

            <div className="text-center">
              <h2 className="text-lg font-semibold">
                Looks like your cart is empty!
              </h2>
              <span className="text-gray-500">Time to start your shopping</span>
            </div>
          </div>
        ) : (
          <>
            {/* ✅ Desktop Table */}
           <table className="w-full text-sm text-left hidden md:table">
          <thead className="bg-gray-100">
            <tr>
              <th className="p-3 font-semibold border border-[#dedede]"></th>
              <th className="p-3 font-semibold border border-[#dedede]"></th>
              <th className="p-3 font-semibold border border-[#dedede]">
                Product
              </th>
              <th className="p-3 font-semibold border border-[#dedede]">
                Price
              </th>
              <th className="p-3 font-semibold border border-[#dedede]">
                Quantity
              </th>
              <th className="p-3 font-semibold border border-[#dedede]">
                Subtotal
              </th>
            </tr>
          </thead>
          <tbody className="text-center">
                {cart.map((item) => (
                 <tr key={item.id}>
                    <td className="p-3 border border-[#dedede]">
                      <button onClick={() => removeFromCart(item.id)}>
                        <IoCloseSharp className=" text-red-600" />
                      </button>
                    </td>
                    <td className="border border-[#dedede]">
                      <div className="flex items-center justify-center">
                        <div className="bg-gray-100 w-16 h-16 my-3 ">
                          <img
                            src={item.Img}
                            className="w-full h-full object-contain"
                            alt={item.ImgAlt}
                          />
                        </div>
                      </div>
                    </td>
                    <td className="border border-[#dedede]">
                      <div>
                        <p>{ item.Title}</p>
                        <span className="text-xs text-gray-500">
                          SKU: SKU_1414
                        </span>
                      </div>
                    </td>
                    <td className="p-3 border border-[#dedede]">
                      ${item.Price}
                    </td>
                    <td className="p-3 border border-[#dedede]">
                      <div className="flex items-center justify-center gap-2">
                        <button
                          className="px-2 bg-green-500 text-white disabled:bg-green-200"
                          onClick={() => decreaseQuantity(item.id)}
                          disabled={item.quantity <= 1}
                        >
                          -
                        </button>

                        <div className="w-8 text-center bg-black text-white py-1">
                          {item.quantity}{" "}
                        </div>
                        <button
                          className="px-2 bg-green-500 text-white"
                          onClick={() => increaseQuantity(item.id)}
                        >
                          +
                        </button>
                      </div>
                    </td>
                    <td className="p-3 border border-[#dedede]">
                      ${(item.Price * item.quantity).toFixed(2)}
                    </td>
                  </tr>
                ))}
              </tbody>
              </table>
           

            {/* ✅ Mobile Cards */}
            <div className="block md:hidden space-y-4">
              {cart.map((item) => (
               
                 <div key={item.id} className="border border-[#dedede] p-3 rounded-md">
                 
                  <div className="flex justify-between items-center mb-2">
                    <p className="font-semibold">Fiddle Leaf Fig</p>
                    <button onClick={() => removeFromCart(item.id)}>
                      <IoCloseSharp className=" text-red-600" />
                    </button>
                  </div>
                  <span className="text-xs text-gray-500">SKU: SKU_1414</span>

                
                  <div className="flex justify-between items-center mt-3">
                    
                    <div className="flex items-center gap-3">
                      <div className="bg-gray-100 w-16 h-16 flex-shrink-0">
                        <img
                          src={item.Img}
                          className="w-full h-full object-contain"
                          alt={item.ImgAlt}
                        />
                      </div>
                      <div className="flex items-center gap-2">
                        <button
                          className="px-2 bg-green-500 text-white  disabled:bg-green-200"
                          onClick={() => decreaseQuantity(item.id)}
                          disabled={item.quantity <= 1}
                        >
                          -
                        </button>
                        <div className="w-8 text-center bg-black text-white py-1">
                          {item.quantity}{" "}
                        </div>
                        <button
                          className="px-2 bg-green-500 text-white"
                          onClick={() => increaseQuantity(item.id)}
                        >
                          +
                        </button>
                      </div>
                    </div>

                   
                    <div className="text-right">
                      <p className="text-sm">
                        Price:{" "}
                        <span className="font-semibold">${item.Price}</span>
                      </p>
                      <p className="text-sm">
                        Subtotal:{" "}
                        <span className="font-semibold">
                          ${(item.Price * item.quantity).toFixed(2)}
                        </span>
                      </p>
                    </div>
                  </div>
                </div>
                
              ))}
            </div>
          </>
        )}
      </div>
      <div className="flex flex-col md:flex-row justify-between items-center mt-4 space-y-3 md:space-y-0">
        <div className="flex">
          <input
            type="text"
            placeholder="Coupon code"
            className="border px-3 py-2"
          />
          <button className="bg-[#0d1e16] hover:bg-green-600 text-white transition duration-300 ease-in-out cursor-pointer px-4">
            Apply coupon
          </button>
        </div>
        <Link to="/shop">
          <button className="bg-green-500 hover:bg-green-600 text-white px-5 py-2 transition duration-300 ease-in-out cursor-pointer">
            Continue shopping
          </button>
        </Link>
      </div>

      {/* Suggestion + Totals */}
      <div className="container mx-auto px-4 grid md:grid-cols-2 gap-6 mt-10 mb-20">
        {/* Totals */}
        <div className="bg-[#ebebeb] p-8 ">
          <h3 className="font-bold mb-2 relative bg-green-500 py-3 text-center text-gray-900">
            <span className="w-2 h-full bg-black absolute top-0 left-0 "></span>
            Cart totals
          </h3>
          <div className="border my-8 border-gray-300">
            <div className="flex border-b border-gray-300 justify-between mb-2">
              <span className="py-4 px-10">Subtotal</span>
              <span className="py-4 px-10">${subtotal.toFixed(2)}</span>
            </div>
            <div className="flex justify-between font-bold text-lg mb-2">
              <span className="py-4 px-10">Total</span>
              <span className="py-4 px-10">${total.toFixed(2)}</span>
            </div>
          </div>

          <div className="flex  text-sm mb-4 text-gray-700">
            <span className="font-semibold text-black pr-2">
              <FaDolly size={20} />
            </span>
            {shippingCost === 0 ? (
              <>You have free shipping! 🎉</>
            ) : (
              <>
                Add{" "}
                <span className="font-semibold text-black px-1">
                  ${(500 - subtotal).toFixed(2)}
                </span>{" "}
                more to get free shipping!
              </>
            )}
          </div>

          <div className="w-full relative  my-4 bg-gray-300 rounded-full h-2 before:content''  before:w-1/2 before:h-2 before:absolute before:left-0 before:top-0 before:bg-green-600 before:rounded-l-full"></div>
          <Link to="/checkout">
            <button className="bg-[#0d1e16] cursor-pointer text-white w-1/2 float-end py-2">
              Proceed to checkout
            </button>
          </Link>
        </div>
        {/* Suggestions */}
        <div className="bg-[#ebebeb] p-8">
          <h3 className="font-bold mb-2 relative bg-green-500 py-3 text-center text-gray-900">
            <span className="w-2 h-full bg-black absolute top-0 left-0"></span>
            You may be interested in ...
          </h3>

          <div className="grid grid-cols-2 gap-4 justify-center items-center">
            {products.slice(0, 4).map((item) => {
              const averageRating =
                item.productInfo && item.productInfo?.reviews?.length > 0
                  ? item.productInfo.reviews.reduce(
                      (sum, r) => sum + r.rating,
                      0
                    ) / item.productInfo.reviews.length
                  : 0;

              return (
                <Link
                  key={`int-${item.id}`}
                  to={`/product/${item.id}`}
                  
                  className="w-full"
                >
                  <div className="border-b border-[#a7a7a766]  ">
                    <div className="w-full flex flex-col justify-center p-6 lg:flex-row gap-2  px-2.5">
                      <img
                        src={item.Img}
                        alt={item.ImgAlt}
                        className="w-24 h-24 object-contain"
                      />
                      <div>
                        <h3 className="font-bold">{item.Title}</h3>

                        <div className="flex gap-0.5 p-3 justify-center">
                          <RatingStars
                            rating={averageRating}
                            color="text-yellow-400"
                          />
                        </div>

                        <div className="flex gap-3 justify-center bg-gray-200 px-2 py-1 rounded-md">
                          {item.isOnSale && (
                            <p className="text-[#808080] line-through">
                              ${item.Discount}
                            </p>
                          )}
                          <p className="text-[#808080]">${item.Price}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    </CartLayout>
  );
};

export default Cart;
