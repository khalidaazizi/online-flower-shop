import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";
import Shop from "./pages/Shop/Shop";
import Layout from "./layouts/Layout";
import Cart from "./pages/Cart/cart";
import CheckoutPage from "./pages/Checkout/Checkout";
import Wishlist from "./pages/wishlist/Wishlist";
import LoginSignup from "./pages/login/Login";
import NotFoundPage from "./pages/notfound/NotFound";
import OrderCompletePage from "./pages/ordercomplete/OrderComplete";
import FAQSection from "./pages/FAQ/FAQ";
import Blog from "./pages/blog/Blog";
import About from "./pages/about/About";
import Compare from "./pages/Compare/Compare";
import Contact from "./pages/contact/Contact";
import ProductDetailPage from "./pages/ProductDetail/ProductDetail";

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/FAQ" element={<FAQSection />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/about" element={<About />} />
        <Route path="/compare" element={<Compare />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/product/:id" element={<ProductDetailPage />} />
        <Route path="/wishlist" element={<Wishlist />} />
        <Route path="/login" element={<LoginSignup />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/checkout" element={<CheckoutPage />} />
        <Route path="/ordercomplete" element={<OrderCompletePage />} />


          {/* مسیر 404 */}
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </Layout>
  );
}

export default App;
