import Footer from "../components/Footer/Footer";
import Navbar from "../components/Navbar/Navbar";
import { useWishlist } from "../context/WishlistContext";
import Toast from "../components/Toast/Toast";
interface ILayout {
  children: React.ReactNode;
}
function Layout({ children }: ILayout) {
   const { toastMessage, showToast } = useWishlist();
  return (
    <>
      <Navbar />
      {children}
       <Toast message={toastMessage} show={showToast} />
      <Footer />
    </>
  );
}

export default Layout;




