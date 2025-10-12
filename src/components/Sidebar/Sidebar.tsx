import ButtonMotion from "../Button/Button";
import { useEffect, useState } from "react";
import { getProducts } from "../../services/api";
import type { IProducts } from "../../types/server";
import RatingStars from "../RatingStars/RatingStars";
import { Link } from "react-router-dom";

function Sidebar() {
  const [products, setProducts] = useState<IProducts[]>([]);

  // گرفتن داده‌ها از API
  useEffect(() => {
    getProducts().then((result) => {
      setProducts(result);
    });
  }, []);

  return (
    <aside className="bg-gray-50 px-4 py-10 rounded shadow sticky top-5 h-max">
      {/* فیلتر قیمت */}
      <div className="mb-10 text-center">
        <h3 className="font-bold mb-2 relative bg-green-500 py-3 text-gray-900">
          <span className="w-2 h-full bg-black absolute top-0 left-0"></span>
          Filter by Price
        </h3>
        <input type="range" min="10" max="500" className="w-full" />
        <p>
          Price: <span>$10 - $260</span>
        </p>
        <ButtonMotion
          text="filter"
          className="mt-3 btn-styles w-full flex justify-center py-2"
        >
          Filter
        </ButtonMotion>
      </div>

      {/* سایر محصولات */}
      <div>
        <h3 className="font-bold mb-2 relative bg-green-500 py-3 text-center text-gray-900">
          <span className="w-2 h-full bg-black absolute top-0 left-0"></span>
          Other Products
        </h3>

        <div>
          {products.slice(0, 4).map((item) => {
            //
            const averageRating =
              item.productInfo && item.productInfo?.reviews?.length > 0
                ? item.productInfo.reviews.reduce(
                    (sum, r) => sum + r.rating,
                    0
                  ) / item.productInfo.reviews.length
                : 0;

            return (
              <Link to={`/product/${item.id}`}  key={`sidebar-${item.id}`}>
                <div
                  
                  className="pb-6 border-b border-[#a7a7a766] mb-5"
                >
                  <div className="text-center w-1/2 mx-auto mt-5 lg:flex justify-center items-center gap-1 lg:px-2.5">
                    <img src={item.Img} alt={item.ImgAlt} />
                    <div>
                      <h3 className="!font-bold">{item.Title}</h3>
                      <div className="flex gap-0.5 p-3">
                        <RatingStars
                          rating={averageRating}
                          color="text-yellow-400"
                        />
                      </div>
                      <div className="flex gap-3 justify-center bg-gray-200">
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
    </aside>
  );
}

export default Sidebar;
