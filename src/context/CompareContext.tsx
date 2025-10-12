import React, {
  createContext,
  useContext,
  useEffect,
  useState,

} from "react";

export interface Product {
  id: number | string;
  title?: string;
  name?: string;
  price?: number | string;
  price_html?: string;
  image?: string;
  images?: string[];
  brand?: string | { name: string };
  description?: string;
  stock_status?: string;
  in_stock?: boolean;
  individual_sale?: boolean;
  tax_status?: string;
  [key: string]: any;
}

interface CompareContextType {
  compareItems: Product[];
  addToCompare: (product: Product) => void;
  removeFromCompare: (productId: number | string) => void;
  clearCompare: () => void;
}

const CompareContext = createContext<CompareContextType | undefined>(undefined);

export const CompareProvider: React.FC<{ children: React.ReactNode; maxItems?: number }> = ({
  children,
  maxItems = 4,
}) => {
  const [compareItems, setCompareItems] = useState<Product[]>(() => {
    try {
      const raw = localStorage.getItem("compare_items");
      return raw ? JSON.parse(raw) : [];
    } catch {
      return [];
    }
  });

  useEffect(() => {
    try {
      localStorage.setItem("compare_items", JSON.stringify(compareItems));
    } catch {}
  }, [compareItems]);

  const addToCompare = (product: Product) => {
    setCompareItems((prev) => {
      if (prev.find((p) => p.id === product.id)) return prev;
      if (prev.length >= maxItems) return [...prev.slice(1), product];
      return [...prev, product];
    });
  };

  const removeFromCompare = (productId: number | string) => {
    setCompareItems((prev) => prev.filter((p) => p.id !== productId));
  };

  const clearCompare = () => setCompareItems([]);

  return (
    <CompareContext.Provider
      value={{ compareItems, addToCompare, removeFromCompare, clearCompare }}
    >
      {children}
    </CompareContext.Provider>
  );
};

export const useCompare = (): CompareContextType => {
  const context = useContext(CompareContext);
  if (!context)
    throw new Error("useCompare must be used within a CompareProvider");
  return context;
};
