import { Link } from "react-router-dom";
import logo from "../../assets/img/logo2.png";
import { FaTwitter, FaInstagram, FaYoutube } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa6";
function Footer() {
  return (
    <div
      className="md:flex  w-full shadow-custom
"
    >
      <div className="bg-[#0d1e16] text-gray-50 h-56 flex flex-col items-center md:w-[35%] lg:w-[30%]   ">
        <Link to="/">
          <img src={logo} alt="" className=" mt-6" />
        </Link>
        <div className="flex  gap-6 mt-10  ">
          <div className=" border-custom px-2.5  py-2.5 hover:bg-[#33c160] transition-colors duration-300 ease-in-out rounded-[3px]">
            <Link to="">
              {" "}
              <FaFacebookF />{" "}
            </Link>
          </div>
          <div className=" border-custom px-2.5  py-2.5 hover:bg-[#33c160] transition-colors duration-300 ease-in-out rounded-[3px]">
            <Link to="">
              {" "}
              <FaTwitter />
            </Link>
          </div>
          <div className=" border-custom px-2.5  py-2.5 hover:bg-[#33c160] transition-colors duration-300 ease-in-out rounded-[3px]">
            <Link to="">
              <FaInstagram />
            </Link>
          </div>
          <div className=" border-custom px-2.5  py-2.5 hover:bg-[#33c160] transition-colors duration-300 ease-in-out rounded-[3px]">
            <Link to="">
              <FaYoutube />
            </Link>
          </div>
        </div>
      </div>
      <div className="bg-[#f6f6f6] flex md:justify-start justify-between  flex-wrap p-6 gap-5 lg:gap-10 items-center px-10 md:w-[65%] lg:w-[70%] ">
        <div>
          <h4 className="text-[#33c160] font-semibold">CONTACT</h4>
          <p className="text-[#002626cc] mt-2">
            info@xtraflower.com <br />
            +1 (800) 345 – 678
          </p>
        </div>
        <div>
          <h4 className="text-[#33c160] font-semibold">ADDRESS</h4>
          <p className="text-[#002626cc] mt-2">
            1079 Terry Lane, <br />
            Winter Park, Florida
          </p>
        </div>
        <div>
          <h4 className="text-[#33c160] font-semibold">WORKING HOURS</h4>
          <p className="text-[#002626cc] mt-2">
            Mon-Fri 9 ~ 18 <br />
            Sat-Sun 10~ 20
          </p>
        </div>
      </div>
    </div>
  );
}

export default Footer;
