import offerImg from "../../assets/img/f3.png";
import { Link } from 'react-router-dom';
import ButtonMotion from '../Button/Button';
function Offer() {
  return (
      <>
       {/* تصویر */}
        <div className="relative flex-shrink-0">
          <img
            src={offerImg}
            alt=""
            className="relative -top-6 h-40 w-40 md:h-48 md:w-48 object-cover"
          />
        </div>

        {/* متن و دکمه */}
        <div className="flex flex-col md:flex-row md:justify-center items-start lg:items-center gap-6 md:gap-0 mt-6 md:mt-0 w-full">
          <div className="w-full lg:w-[550px] ">
            <h4 className="text-[#002626cc] text-[19px]  lg:text-2xl mb-4 md:mb-6">
              Valentine’s day amazing offer!
            </h4>
            <p className="text-[14px]  text-gray-600">
              Valentine’s Day, also called Saint Valentine’s Day or the Feast of
              Saint Valentine, is celebrated annually on February 14.
            </p>
          </div>

          <div className="flex-shrink-0">
            <Link to="/shop">
             <ButtonMotion
              text="Shop Now"
              className=" btn-styles px-4 py-2 text-[12px] cursor-pointer md:px-6 md:py-3 md:text-[16px]"
            />
            </Link>
          </div>
        </div>
      </>
  )
}

export default Offer