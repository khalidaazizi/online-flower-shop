import { createContext, useContext, useState } from "react";
import type { IProducts } from "../types/server";

type WishlistContextType = {
  wishlist: IProducts[];
  addToWishlist: (product: IProducts) => void;
  removeFromWishlist: (id: number) => void;
  wishlistCount: number;
  isInWishlist: (id: number) => boolean;
};

const WishlistContext = createContext<WishlistContextType | undefined>(undefined);

export const WishlistProvider = ({ children }: { children: React.ReactNode }) => {
  const [wishlist, setWishlist] = useState<IProducts[]>([]);

  const addToWishlist = (product: IProducts) => {
    if (!wishlist.find((p) => p.id === product.id)) {
      setWishlist((prev) => [...prev, product]);
    }
  };

  const removeFromWishlist = (id: number) => {
    setWishlist((prev) => prev.filter((item) => item.id !== id));
  };

  const isInWishlist = (id: number) => {
    return wishlist.some((item) => item.id === id);
  };

  return (
    <WishlistContext.Provider
      value={{
        wishlist,
        addToWishlist,
        removeFromWishlist,
        wishlistCount: wishlist.length,
        isInWishlist,
      }}
    >
      {children}
    </WishlistContext.Provider>
  );
};

export const useWishlist = () => {
  const context = useContext(WishlistContext);
  if (!context) throw new Error("useWishlist must be used within a WishlistProvider");
  return context;
};
