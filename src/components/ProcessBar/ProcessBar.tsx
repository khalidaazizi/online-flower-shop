
import { Link } from "react-router-dom";
import { IoIosArrowRoundForward } from "react-icons/io";

function ProcessBar() {
  return (
      <>
       {/* Checkout steps */}
       <div className="container flex-wrap  px-4 mt-14 flex items-center lg:justify-center space-x-6 mb-6 text-gray-400 font-medium">
         <span className="w-5 h-5 text-center pt-[1.6px] bg-black text-white rounded-full text-[12px] mr-3">
           {" "}
           1{" "}
         </span>
             
               <Link to="/cart" >  <span className="text-black">Shopping cart</span></Link>
         <IoIosArrowRoundForward className="text-4xl" />
         <span className="w-5 h-5 text-center pt-[1.6px] bg-gray-400 text-white rounded-full text-[12px] mr-3">
           {" "}
           2{" "}
         </span>
               <Link to="/Checkout" > <span>Checkout details</span></Link>
              
         <IoIosArrowRoundForward className="text-4xl" />
         <span className="w-5 h-5 text-center pt-[1.6px] bg-gray-400 text-white rounded-full text-[12px] mr-3">
           {" "}
           3{" "}
         </span>
 <Link to="/ordercomplete" > <span>Order complete</span></Link>
       
       </div>
      
      </>
  )
}

export default ProcessBar