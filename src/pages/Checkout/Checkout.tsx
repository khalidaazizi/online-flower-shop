import { IoMdHome } from "react-icons/io";
import CartLayout from "../../layouts/LayoutCart";
import { FaDolly } from "react-icons/fa"
const CheckoutPage = () => {
  return (
    <CartLayout
      step={2}
      breadcrumb={[{ label: <IoMdHome className="text-lg" />, link: "/" }, { label: "Checkout" }]}
    >
      <div className="mb-20  ">
        {/* Coupon Section */}
        <div className="container mx-auto px-4 mt-6">
          <div className=" rounded p-4 flex items-center bg-gray-100">
            <span className="text-sm font-bold  text-gray-700">
              Have a coupon?{" "}
              <span className="text-blue-500 cursor-pointer">
                Click here to enter your code
              </span>
            </span>
          </div>
        </div>

        {/* Main Content */}
        <div className="container mx-auto px-4 mt-8 grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Billing Details */}
          <div className="lg:col-span-2 bg-gray-100 p-6">
            <h3 className=" font-bold mb-2 relative bg-green-500 py-3 text-center text-gray-900">
              <span className="w-2 h-full bg-black absolute top-0 left-0 "></span>
              Billing details
            </h3>
            <form className="space-y-4 mt-10">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-gray-500 text-sm mb-1">
                    First name *
                  </label>
                  <input
                    type="text"
                    className="w-full border rounded px-3 py-2  bg-white text-gray-400"
                  />
                </div>
                <div>
                  <label className="text-gray-500 block text-sm mb-1">
                    Last name *
                  </label>
                  <input
                    type="text"
                    className="w-full border rounded px-3 py-2  bg-white text-gray-400"
                  />
                </div>
              </div>

              <div>
                <label className="text-gray-500 block text-sm mb-1">
                  Company name (optional)
                </label>
                <input
                  type="text"
                  className="w-full border rounded px-3 py-2  bg-white text-gray-400"
                />
              </div>

              <div>
                <label className="text-gray-500 block text-sm mb-1">
                  Country / Region *
                </label>
                <select className="w-full border rounded px-3 py-2  bg-white text-gray-400">
                  <option>United States (US)</option>
                </select>
              </div>

              <div>
                <label className="text-gray-500 block text-sm mb-1">
                  Street address *
                </label>
                <input
                  type="text"
                  placeholder="House number and street name"
                  className="w-full border rounded px-3 py-2 mb-2  bg-white text-gray-400"
                />
              </div>
              <div>
                <input
                  type="text"
                  placeholder="Apartment, suite, unit, etc. (optional)"
                  className="w-full border rounded px-3 py-2  bg-white text-gray-400"
                />
              </div>

              <div>
                <label className="text-gray-500 block text-sm mb-1">
                  Town / City *
                </label>
                <input
                  type="text"
                  className="w-full border rounded px-3 py-2  bg-white text-gray-400"
                />
              </div>

              <div>
                <label className="text-gray-500 block text-sm mb-1">
                  State *
                </label>
                <select className="w-full border rounded px-3 py-2  bg-white text-gray-400">
                  <option>California</option>
                </select>
              </div>

              <div>
                <label className="text-gray-500 block text-sm mb-1">
                  ZIP Code *
                </label>
                <input
                  type="text"
                  className="w-full border rounded px-3 py-2  bg-white text-gray-400"
                />
              </div>

              <div>
                <label className="text-gray-500 block text-sm mb-1">
                  Phone *
                </label>
                <input
                  type="text"
                  className="w-full border rounded px-3 py-2  bg-white text-gray-400"
                />
              </div>

              <div>
                <label className="text-gray-500 block text-sm mb-1">
                  Email address *
                </label>
                <input
                  type="email"
                  className=" w-full border bg-white text-gray-400 rounded px-3 py-2"
                />
              </div>

              {/* Additional Information */}
              <div>
                <h3 className="text-gray-900 border-b border-gray-300 pb-4  mt-4 mb-10 font-medium">
                  Additional information
                </h3>
                <label className="text-gray-500 block text-sm mb-3">
                  Order notes (optional)
                </label>
                <textarea
                  className="w-full border rounded px-3 py-2 h-36 bg-white text-gray-400"
                  placeholder="Notes about your order, e.g. special notes for delivery."
                ></textarea>
              </div>
            </form>
          </div>

          {/* Order Summary */}
          <div className="  bg-gray-100 p-6">
            <h3 className=" font-bold mb-2 relative bg-green-500 py-3 text-center text-gray-900">
              <span className="w-2 h-full bg-black absolute top-0 left-0 "></span>
              Your order
            </h3>
            {/* <div className="space-y-2 border border-gray-400  ">
            <div className="grid grid-cols-2 text-[18px] font-semibold   ">
              <span className="border-r border-b py-6  border-gray-400 px-5 bg-[#ebebeb]">Product</span>
              <span className="border-b  py-6  border-gray-400  px-5 bg-[#ebebeb]">Subtotal</span>
            </div>
            <div className="flex justify-between">
              <span>Snake Plant × 1</span>
              <span>$249</span>
            </div>
            <div className="flex justify-between">
              <span>Angel's Wing × 2</span>
              <span>$50</span>
            </div>
            <div className="flex justify-between font-semibold border-t pt-2">
              <span>Subtotal</span>
              <span>$557</span>
            </div>
            <div className="flex justify-between font-bold">
              <span>Total</span>
              <span>$557</span>
            </div>
          </div> */}
            <table className="border border-gray-300 w-full mt-10 ">
              <thead className="bg-[#ebebeb] ">
                <tr className="">
                  <th className="border border-gray-300 py-5 px-4">Product</th>
                  <th className="border border-gray-300 ">Subtotal</th>
                </tr>
              </thead>
              <tbody>
                <tr className="">
                  <td className="border border-gray-300 py-5 px-4">
                    Fiddle Leaf Fig&nbsp;{" "}
                    <strong className="product-quantity">×&nbsp;2</strong>{" "}
                  </td>
                  <td className="border border-gray-300 py-5 px-4">
                   <span >   $258  </span>
                  </td>
                </tr>
                <tr className="cart_item">
                  <td className="border border-gray-300 py-5 px-4">
                    Snake Plant&nbsp;{" "}
                    <strong className="product-quantity">×&nbsp;1</strong>{" "}
                  </td>
                  <td className="border border-gray-300 py-5 px-4">
                   <span >   $249  </span>
                  </td>
                </tr>
                <tr className="">
                  <td className="border border-gray-300 py-5 px-4">
                    Angel's Wing&nbsp;{" "}
                    <strong className="product-quantity">×&nbsp;2</strong>{" "}
                  </td>
                  <td className="border border-gray-300 py-5 px-4">
                   <span >   $50  </span>
                  </td>
                </tr>
                <tr className="font-bold">
                  <td className="border border-gray-300 py-5 px-4">
                 Subtotal
                    
                  </td>
                  <td className="border border-gray-300 py-5 px-4">
                   <span  >$557 </span>
                  </td>
                </tr>
                <tr  className="font-bold">
                  <td className="border border-gray-300 py-5 px-4">
                 Total
                    
                  </td>
                  <td className="border border-gray-300 py-5 px-4">
                    <span >   $557  </span>
                  </td>
                </tr>
              </tbody>
              
            </table>
            {/* Free shipping progress */}
            <div className="flex  text-sm mb-4 ml-2 text-gray-700 mt-10">
              <span className="font-semibold text-black pr-2  "><FaDolly size={20} /> </span> Add <span className="font-semibold text-black px-1">$442</span>
              more to get free shipping!
            </div>
            <div className="w-full relative  my-4 bg-gray-300 rounded-full h-2 before:content''  before:w-1/2 before:h-2 before:absolute before:left-0 before:top-0 before:bg-green-600 before:rounded-l-full">
            </div>

            {/* Payment error */}
            <div className="mt-4 p-3 text-xl bg-[#ebebeb] text-black">
              Sorry, it seems that there are no available payment methods.
              Please contact us if you require assistance or wish to make
              alternate arrangements.
            </div>

            {/* Place Order Button */}
            <button
              type="submit"
              className="mt-6 w-full bg-[#0d1e16] text-white py-3  hover:bg-green-600 transition"
            >
              Place order
            </button>
          </div>
        </div>

       
      </div>
    </CartLayout>
  );
};

export default CheckoutPage;
