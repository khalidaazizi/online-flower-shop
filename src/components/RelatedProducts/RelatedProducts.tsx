import { useEffect, useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
// import "swiper/css";
// import "swiper/css/navigation";
import "swiper/swiper.css";

import Cart from "../Cart/Cart";
import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai";
import { getProducts } from "../../services/api";
import type { IProducts } from "../../types/server";

function RelatedProducts() {
  const [products, setProducts] = useState<IProducts[]>([]);
  const prevRef = useRef<HTMLButtonElement>(null);
  const nextRef = useRef<HTMLButtonElement>(null);
  const [swiperReady, setSwiperReady] = useState(false);
  const [isBeginning, setIsBeginning] = useState(true);
  const [isEnd, setIsEnd] = useState(false);

  useEffect(() => {
    getProducts().then(setProducts);
  }, []);

  return (
    <section className="py-10">
      <div className="bg-green-500 text-white py-3 px-6 font-bold flex items-center">
        <span>Recently Viewed Products</span>
        <div className="ml-auto flex gap-2">
          <button
            ref={prevRef}
            disabled={isBeginning}
            className={`rv-btn p-2 rounded bg-white/50 hover:bg-white/80 text-black ${
              isBeginning ? "opacity-50 cursor-not-allowed" : ""
            }`}
          >
            <AiOutlineLeft />
          </button>
          <button
            ref={nextRef}
            disabled={isEnd}
            className={`rv-btn p-2 rounded bg-white/50 hover:bg-white/80 text-black ${
              isEnd ? "opacity-50 cursor-not-allowed" : ""
            }`}
          >
            <AiOutlineRight />
          </button>
        </div>
      </div>

      <div className="mt-6 px-2">
        <Swiper
          modules={[Navigation, Autoplay]}
          spaceBetween={20}
          slidesPerView={1}
          breakpoints={{
            640: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
            1440: { slidesPerView: 4 },
          }}
          loop={true}
          autoplay={{
            delay: 3000,
            disableOnInteraction: true,
          }}
          
          speed={800}
          onBeforeInit={(swiper) => {
            if (
              swiper.params.navigation &&
              typeof swiper.params.navigation !== "boolean"
            ) {
              swiper.params.navigation.prevEl = prevRef.current;
              swiper.params.navigation.nextEl = nextRef.current;
            }
          }}
          onSwiper={() => setSwiperReady(true)}
          navigation={
            swiperReady
              ? { prevEl: prevRef.current, nextEl: nextRef.current }
              : undefined
          }
          onSlideChange={(swiper) => {
            setIsBeginning(swiper.isBeginning);
            setIsEnd(swiper.isEnd);
          }}
        >
          {products.map((p) => (
            <SwiperSlide key={p.id}>
              <div className="p-4">
                            
                <Cart product={p}  linkType="detail" />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}

export default RelatedProducts;
