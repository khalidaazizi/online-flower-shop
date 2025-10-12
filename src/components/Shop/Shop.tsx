import { useEffect, useState } from "react";
import Cart from "../Cart/Cart";
import Sidebar from "../Sidebar/Sidebar";
import { getProducts } from "../../services/api";
import type { IProducts } from "../../types/server";

function Shop() {
  //  State for storing products fetched from API
  const [products, setProducts] = useState<IProducts[]>([]);
  
  //  State for limiting visible products
  const [visibleCount, setVisibleCount] = useState(9);
  
  //  State for controlling sorting type
  const [sortType, setSortType] = useState("Default");
  
  //  State for showing loader when fetching or sorting products
  const [loading, setLoading] = useState(false);

  //  Fetch products from API on component mount
  useEffect(() => {
    setLoading(true);
    getProducts().then((result) => {
      setProducts(result);
      setLoading(false);
    });
  }, []);

  // Helper function to calculate average rating of a product
  const getAverageRating = (product: IProducts) => {
    const reviews = product.productInfo.reviews;
    return reviews.length > 0
      ? reviews.reduce((sum, r) => sum + r.rating, 0) / reviews.length
      : 0;
  };

  // Sort products based on selected sorting type
  const sortedProducts = [...products].sort((a, b) => {
    switch (sortType) {
      case "priceLowHigh":
        return a.Price - b.Price;
      case "priceHighLow":
        return b.Price - a.Price;
      case "latest":
        return b.productInfo.information.productYear - a.productInfo.information.productYear;
      case "oldest":
        return a.productInfo.information.productYear - b.productInfo.information.productYear;
      case "AtoZ":
        return a.Title.localeCompare(b.Title);
      case "ZtoA":
        return b.Title.localeCompare(a.Title);
      case "TopRated":
        return getAverageRating(b) - getAverageRating(a);
      case "Popular":
        return b.popularity - a.popularity;
      case "HighostDiscount":
        //  Use default value 0 if Discount is undefined
        return (b.Discount ?? 0) - (a.Discount ?? 0);
      case "LowostDiscount":
        return (a.Discount ?? 0) - (b.Discount ?? 0);
      case "Relevance":
        return b.relevance - a.relevance;
      default:
        return 0;
    }
  });

  //  Limit the number of products shown
  const visibleProducts = sortedProducts.slice(0, visibleCount);

  //  Handle filter changes with loader effect
  const handleFilterChange = (callback: () => void) => {
    setLoading(true);
    setTimeout(() => {
      callback();
      setLoading(false);
    }, 600); // slight delay to show loader
  };

  return (
    <div className="mx-auto px-4 py-10 md:px-3 xl:px-20 lg:px-6 overflow-hidden">
      {/* Header section */}
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-3xl font-bold">Shop</h2>

        <div className="flex justify-center items-center gap-2">
          {/* Products count selector */}
          <select
            className="py-3 px-4 text-[#444] border text-[16px] border-[#a7a7a766]"
            onChange={(e) =>
              handleFilterChange(() => setVisibleCount(Number(e.target.value)))
            }
          >
            <option value="9">9 Products</option>
            <option value="18">18 Products</option>
            <option value="36">36 Products</option>
            <option value="45">45 Products</option>
          </select>

          {/* Sorting selector */}
          <select
            className="py-3 px-4 text-[#444] border text-[16px] border-[#a7a7a766]"
            onChange={(e) =>
              handleFilterChange(() => setSortType(e.target.value))
            }
          >
            <option value="Default">Default</option>
            <option value="Popular">Popular</option>
            <option value="TopRated">Top Rated</option>
            <option value="Relevance">Relevance</option>
            <option value="latest">Sort by latest</option>
            <option value="oldest">Sort by oldest</option>
            <option value="priceLowHigh">Price low to high</option>
            <option value="priceHighLow">Price high to low</option>
            <option value="HighostDiscount">Highest Discount</option>
            <option value="LowostDiscount">Lowest Discount</option>
            <option value="AtoZ">Alphabetically A–Z</option>
            <option value="ZtoA">Alphabetically Z–A</option>
          </select>
        </div>
      </div>

      {/* Main layout */}
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
        {/* Products grid */}
        <div className="lg:col-span-3">
          {loading ? (
            //  Simple loader
            <div className="flex justify-center items-center h-64">
              <div className="w-12 h-12 border-4 border-green-500 border-t-transparent rounded-full animate-spin"></div>
              <p className="ml-4 text-gray-600 text-lg">Loading products...</p>
            </div>
          ) : (
            <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
              {visibleProducts.map((item) => (
                <Cart
                  key={`shop-${item.id}`}
                  product={item}
                  linkType="detail"
                />
              ))}
            </div>
          )}
        </div>

        {/* Sidebar */}
        <div className="lg:col-span-1 lg:order-last md:w-2/3 md:mx-auto lg:w-full">
          <Sidebar />
        </div>
      </div>
    </div>
  );
}

export default Shop;
