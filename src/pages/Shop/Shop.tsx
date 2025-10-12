import { IoMdHome } from "react-icons/io";
import Breadcrumb from "../../components/Breadcrumb/Breadcrumb";
import Shop from "../../components/Shop/Shop";
function ShopPage() {
  return (
    <>
      <Breadcrumb  paths={[
          { label: <IoMdHome className="text-lg" />, link: "/" }, 
          { label: "shop" },
        ]}/>
      <Shop />
    </>
  );
}
export default ShopPage;
