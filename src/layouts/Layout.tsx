import Footer from "../components/Footer/Footer";
import Navbar from "../components/Navbar/Navbar";
import Toast from "../components/Toast/Toast";
import { useState } from "react";

interface ILayout {
  children: React.ReactNode;
}

function Layout({ children }: ILayout) {
  // مدیریت محلی Toast
  const [toastData, setToastData] = useState<{
    productName: string;
    type: "cart" | "wishlist" | "compare";
    show: boolean;
  } | null>(null);

  const _showToast = (productName: string, type: "cart" | "wishlist" | "compare") => {
    setToastData({ productName, type, show: true });
    setTimeout(() => setToastData(null), 4000); // خودکار مخفی شود
  };

  const closeToast = () => setToastData(null);

  return (
    <>
      <Navbar />
      {children}
      {toastData && toastData.show && (
        <Toast
          productName={toastData.productName}
          type={toastData.type}
          show={true}
          onClose={closeToast}
        />
      )}
      <Footer />
    </>
  );
}

export default Layout;
