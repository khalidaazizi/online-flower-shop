import ProductDetail from "../../components/ProductDetail/ProductDetail";
import Breadcrumb from "../../components/Breadcrumb/Breadcrumb";
import { IoMdHome } from "react-icons/io";
import Tabs from "../../components/Tabs/Tabs";
import RelatedProducts from "../../components/RelatedProducts/RelatedProducts";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getProduct } from "../../services/api";
import type { IProducts } from "../../types/server";

export default function ProductDetailPage() {
  const params = useParams<{ id: string }>();
  const [loading, setLoading] = useState(true);
  const [product, setProduct] = useState<IProducts | null>(null);

  useEffect(() => {
    if (!params.id) return;

    setLoading(true);
    getProduct(params.id)
      .then((data) => setProduct(data))
      .catch((err) => {
        console.error("Error fetching product:", err);
        setProduct(null);
      })
      .finally(() => setLoading(false));
  }, [params.id]);

  // رندر لودر
  if (loading) {
    return (
      <div className="flex justify-center items-center h-64">
        <div className="w-12 h-12 border-4 border-green-500 border-t-transparent rounded-full animate-spin"></div>
        <p className="ml-4 text-gray-600 text-lg">Loading product...</p>
      </div>
    );
  }

  // وقتی محصول پیدا نشد
  if (!product) {
    return <h2 className="my-40 text-center">Product not found!</h2>;
  }

  // وقتی محصول دریافت شد، دیتیل را نمایش بده
  return (
    <>
      <Breadcrumb
        paths={[
          { label: <IoMdHome className="text-lg" />, link: "/" },
          { label: "shop", link: "/shop" },
          { label: product.Title },
        ]}
      />

      <ProductDetail product={product} />

      <Tabs product={product} />

      <RelatedProducts />
    </>
  );
}
