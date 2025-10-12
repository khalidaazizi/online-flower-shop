import React, { useEffect, useState } from "react";

import ButtonMotion from "../Button/Button";
import Cart from "../Cart/Cart";
import { getProducts } from "../../services/api";
import type { IProducts } from "../../types/server";
import { Link } from "react-router-dom";
const BestSellerFlowers: React.FC = () => {
  const [products, setProducts] = useState<IProducts[]>([]);

  useEffect(() => {
    getProducts().then((result) => {
      setProducts(result);
    });
  }, []);
  return (
    <section className="px-6 lg:px-16 py-12 lg:mt-52 mt-80  md:mt-48">
      <h2 className="text-2xl text-center lg:text-4xl font-bold mb-12">
        <span className="text-green-600">Best seller </span>flowers{" "}
      </h2>

      <div className="flex justify-around items-center flex-wrap">
        {products
          .filter((item) => item.BestProduct) // فقط محصولات BestProduct
          .slice(0, 4) 
          .map((item) => (
            <Cart key={item.id} product={item} linkType="shop" />
          ))}
      </div>

      <div className="flex justify-center mt-6">
        <Link to="/shop">
        <ButtonMotion
          text="View More"
          className="btn-styles px-2 py-2 cursor-pointer w-max text-[10px] md:px-4 md:py-3 md:text-[16px]"
        />
        </Link>
      </div>
    </section>
  );
};

export default BestSellerFlowers;
