import DesktopNavbar from "./DesktopNavbar";
import MobileNavbar from "./MobileNavbar";

function Navbar() {
  return (
    <div className="py-6 bg-gray-50 shadow-xl">
      <MobileNavbar  />
      <div className="hidden  md:block">
        <DesktopNavbar />
      </div>
    </div>
  );
}
export default Navbar;
