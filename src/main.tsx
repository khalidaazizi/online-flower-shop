import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import { BrowserRouter } from "react-router-dom";
import "./index.css";
import { CartProvider } from "./context/CartContext";
import { WishlistProvider } from "./context/WishlistContext.tsx";
import { CompareProvider } from "./context/CompareContext.tsx";
createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <CompareProvider>
      <CartProvider>
        <WishlistProvider>
          <App />
        </WishlistProvider>
        </CartProvider>
        </CompareProvider>
    </BrowserRouter>
  </StrictMode>
);
