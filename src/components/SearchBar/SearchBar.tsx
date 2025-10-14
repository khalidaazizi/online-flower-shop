import { MagnifyingGlassIcon, XMarkIcon } from "@heroicons/react/24/outline";
import { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";

// ✅ نوع داده محصول
type Product = {
  id: number;
  Title: string;
  Img: string;
  Price: number;
};

type Props = {
  placeholder?: string;
};

export default function UserSearch({
  placeholder = "Search your favorite...",
}: Props) {
  // ✅ state‌ها
  const [query, setQuery] = useState("");
  const [isFocused, setIsFocused] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [results, setResults] = useState<Product[]>([]);
  const [noResult, setNoResult] = useState(false);

  const inputRef = useRef<HTMLInputElement>(null);
  const navigate = useNavigate();

  // ✅ Debounce برای جلوگیری از درخواست‌های زیاد هنگام تایپ
  useEffect(() => {
    if (!query.trim()) {
      setResults([]);
      setNoResult(false);
      return;
    }

    const timer = setTimeout(() => {
      handleSearch();
    }, 500); // بعد از ۰.۵ ثانیه جستجو انجام می‌شود

    return () => clearTimeout(timer);
  }, [query]);

  // ✅ بستن نتایج هنگام کلیک بیرون از input
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        inputRef.current &&
        !inputRef.current.contains(event.target as Node)
      ) {
        setIsFocused(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // ✅ تابع سرچ (دریافت از سرور لوکال)
  const handleSearch = async () => {
    if (!query.trim()) return;

    setIsLoading(true);
    setNoResult(false);
    setResults([]);

    try {
      const res = await fetch("http://localhost:3000/products");
      const data = await res.json();

      // حذف فاصله و حساسیت به حروف بزرگ
      const normalize = (str: string) =>
        str.toLowerCase().replace(/['’]/g, "").replace(/\s+/g, " ").trim();

      // فیلتر محصولات
      const filtered = data.filter((item: Product) =>
        normalize(item.Title).includes(normalize(query))
      );

      setResults(filtered);
      setNoResult(filtered.length === 0);
    } catch (error) {
      console.error("Search failed:", error);
      setNoResult(true);
    } finally {
      setIsLoading(false);
    }
  };

  // ✅ وقتی روی نتیجه کلیک شود
  const handleSelect = (product: Product) => {
    setIsFocused(false);
    setTimeout(() => {
      navigate(`/product/${product.id}`);
    }, 150);
  };

  // ✅ پاک کردن ورودی جستجو
  const handleClear = () => {
    setQuery("");
    setResults([]);
    setNoResult(false);
    setIsFocused(false);
  };

  return (
    <div className="relative w-[400px]">
      {/* فیلد سرچ */}
      <input
        ref={inputRef}
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        onFocus={() => setIsFocused(true)}
        onKeyDown={(e) => {
          if (e.key === "Enter") handleSearch();
        }}
        type="search"
        placeholder={placeholder}
        className={`w-full border rounded-md py-2 pl-3 pr-10 text-sm outline-none transition-all duration-300 ${
          isFocused
            ? "border-[#65e056] ring-2 ring-[#0baa2a40]"
            : "border-gray-300"
        }`}
      />

      {/* آیکن سرچ یا پاک کردن */}
      <button
        onClick={query ? handleClear : handleSearch}
        className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-600 hover:text-[#33c160]"
      >
        {query ? (
          <XMarkIcon className="w-5" />
        ) : (
          <MagnifyingGlassIcon className="w-5" />
        )}
      </button>

      {/* نتایج جستجو */}
      {isFocused && query && (
        <div className="absolute top-full mt-1 left-0 w-full bg-white border border-gray-200 rounded-md shadow-lg z-10 max-h-60 overflow-y-auto">
          {/* لودینگ */}
          {isLoading ? (
            <div className="p-4 flex justify-center">
              <div className="w-6 h-6 border-2 border-gray-300 border-t-[#33c160] rounded-full animate-spin"></div>
            </div>
          ) : noResult ? (
            // نتیجه‌ای پیدا نشد
            <p className="p-3 text-sm text-gray-500 text-center">
              No results found
            </p>
          ) : (
            // نمایش لیست محصولات
            results.map((product) => (
              <div
                key={product.id}
                onClick={() => handleSelect(product)}
                className="flex items-center gap-3 p-2 px-3 hover:bg-gray-100 cursor-pointer transition-colors"
              >
                <img
                  src={product.Img}
                  alt={product.Title}
                  className="w-10 h-10 object-contain"
                />
                <div>
                  <p className="text-sm font-medium text-gray-800">
                    {product.Title}
                  </p>
                  <p className="text-xs text-gray-500">${product.Price}</p>
                </div>
              </div>
            ))
          )}
        </div>
      )}
    </div>
  );
}
