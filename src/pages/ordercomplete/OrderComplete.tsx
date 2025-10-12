import { IoMdHome } from "react-icons/io";
import CartLayout from "../../layouts/LayoutCart";

function OrderCompletePage() {
    return (
      <>
      
      <CartLayout
      step={2}
      breadcrumb={[{ label: <IoMdHome className="text-lg" />, link: "/" }, { label: "Order Complete" }]}
    >
      <div className="flex flex-col items-center justify-center min-h-screen  px-4 py-10">
      {/* Success Icon */}
      <div className="bg-green-100 rounded-full p-6 mb-6">
        <svg
          className="w-16 h-16 text-green-500"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M5 13l4 4L19 7"
          />
        </svg>
      </div>

      {/* Thank You Message */}
      <h1 className="text-3xl font-bold text-gray-800">Thank you!</h1>
      <p className="mt-2 text-gray-600">
        Your order has been successfully placed.
      </p>

      {/* Order Info */}
      <div className="bg-gray-100   p-6 mt-6 w-full max-w-2xl">
        <h2 className="text-lg font-semibold text-gray-700 mb-4">
          Order Summary
        </h2>
        <div className="space-y-2 text-gray-600">
          <p><strong>Order ID:</strong> #123456</p>
          <p><strong>Date:</strong> September 29, 2025</p>
          <p><strong>Status:</strong> Processing</p>
        </div>

        <div className="mt-6 border-t border-gray-300 pt-4">
          <h3 className="font-semibold text-gray-700">Items</h3>
          <ul className="mt-2 space-y-1 text-gray-600">
            <li> Rose Bouquet × 2 — $50</li>
            <li> Sunflower × 1 — $20</li>
          </ul>
          <p className="mt-4 font-bold text-gray-800">Total: $70</p>
        </div>

        <div className="mt-6 border-t border-gray-300  pt-4">
          <h3 className="font-semibold text-gray-700">Shipping Info</h3>
          <p className="text-gray-600 mt-1">
            John Doe, 123 Main Street, New York, NY
          </p>
          <p className="text-gray-600">Estimated delivery: 3–5 business days</p>
        </div>
      </div>

      {/* Buttons */}
      <div className="mt-8 flex space-x-4">
        <a
          href="/shop"
          className="px-6 py-2 bg-green-500 text-white rounded-lg shadow hover:bg-green-600 transition"
        >
          Continue Shopping
        </a>
        <a
          href="/account/orders"
          className="px-6 py-2 bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300 transition"
        >
          View My Orders
        </a>
      </div>
    </div>
    </CartLayout>
      
      
      
      </>
    
  );
}

export default OrderCompletePage;
  