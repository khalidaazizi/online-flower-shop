import { useState } from "react";
import { FaLeaf, FaShippingFast, FaUndo, FaSmile } from "react-icons/fa";
import Breadcrumb from "../../components/Breadcrumb/Breadcrumb";
import { IoMdHome } from "react-icons/io";
import img1 from "../../assets/img/gardeners.jpg";
import img2 from "../../assets/img/img2.jpg";
import bg from "../../assets/img/bg1.jpg";
import { FaPlay } from "react-icons/fa6";
import icon1 from "../../assets/img/icon1.png";
import icon2 from "../../assets/img/icon3.png";
import icon3 from "../../assets/img/icon4.png";
import icon4 from "../../assets/img/icon5.png";
import icon5 from "../../assets/img/icon7.png";
import icon6 from "../../assets/img/icon6.png";

function About() {
  const [testimonialIndex, setTestimonialIndex] = useState(0);

  const testimonials = [
    {
      name: "Mark Smith",
      role: "Businessman",
      text: "People have been using natural objects, such as tree stumps, rocks and moss, as furniture since the beginning of human civilization. ",
      image: "/img/t12.jpg",
    },
    {
      name: "Jennifer Someone",
      role: "Singer",
      text: "I wholeheartedly recommend Xtra Flower Shop for your garden needs. I have used their services on two houses.",
      image: "/img/t11.jpg",
    },
    {
      name: "Amanda Sanchez",
      role: "Artist",
      text: "I wholeheartedly recommend Xtra Flower Shop for your plant needs. I have used their services on my home and office.",
      image: "/img/t13.jpg",
    },
  ];

  return (
    <>
      {/* Breadcrumb */}
      <Breadcrumb
        paths={[
          { label: <IoMdHome className="text-lg" />, link: "/" },
          { label: "About" },
        ]}
      />

      {/* About Section */}
      <section className="container mx-auto px-4 py-12 grid md:grid-cols-2 gap-8 items-center">
        <div>
          <h2 className="text-green-600 text-4xl md:text-5xl font-bold mb-2">
            ABOUT US
          </h2>
          <p className="text-gray-500 text-xl md:text-2xl mb-6">WHO WE ARE ?</p>
          <p className="text-gray-400 text-base md:text-xl font-light mb-4">
            Floristry is the production, commerce, and trade in flowers. It
            encompasses flower care and handling, floral design, or flower
            arranging, merchandising, production, display and flower delivery.
            Wholesale florists sell bulk flowers and related supplies to
            professionals in the trade. Retail florists offer fresh flowers and
            related products and services to consumers. The first flower shop in
            the United States opened prior to 1851.
          </p>
          <p className="text-gray-400 text-base md:text-xl font-light mb-10">
            Flower Shop concerns the cultivation of flowers as well as their
            arrangement, sale. Much of the raw material supplied for the
            floristry trade comes from the cut flowers industry. Florist shops,
            along with online stores, are the main flower-only outlets, but
            supermarkets, garden supply stores, and filling stations also sell
            flowers.
          </p>

          {/* Features List */}
          <ul className="space-y-2 text-gray-500 flex flex-wrap gap-6">
            <li className="flex items-center gap-2">
              <FaLeaf className="text-green-600" /> Good Woods
            </li>
            <li className="flex items-center gap-2">
              <FaLeaf className="text-green-600" /> Natural Materials
            </li>
            <li className="flex items-center gap-2">
              <FaLeaf className="text-green-600" /> Best Fabrics
            </li>
            <li className="flex items-center gap-2">
              <FaShippingFast className="text-green-600" /> Free Shipping
            </li>
            <li className="flex items-center gap-2">
              <FaUndo className="text-green-600" /> 5 Days Refund
            </li>
            <li className="flex items-center gap-2">
              <FaSmile className="text-green-600" /> Friendly Support
            </li>
          </ul>
        </div>

        {/* About Image */}
        <div className="relative h-96 md:h-screen">
          <img
            src={img1}
            alt="Flower shop"
            className="h-full w-full object-cover"
          />
          <div className="absolute text-center bottom-0 left-0 right-0 lg:pt-15   bg-[#0d1e16] text-white p-4">
            <h3 className="text-3xl md:text-4xl font-bold">23 Years </h3>
            <h3 className="text-3xl md:text-4xl mt-3 font-bold">
              of experience
            </h3>
            <p className="text-[#33c160] mt-4 mb-2 text-sm md:text-base">
              Professional, affordable and we always <br /> leave the seat clean
            </p>
          </div>
        </div>
      </section>

      {/* History Section */}
      <section className="container mx-auto px-4 py-12 grid md:grid-cols-2 gap-8">
        <div className="relative group/img overflow-hidden h-96 md:h-screen">
          <img
            src={img2}
            alt="Plant"
            className="group-hover/img:scale-105 transition duration-600 ease-in-out h-full w-full object-cover"
          />
          <div className="group-hover/img:bg-black/40 transition duration-600 ease-in-out absolute inset-0">
            <div className="absolute bottom-6 left-6 flex items-center justify-center  md:gap-0">
              <button className="bg-green-600 py-[18px] md:py-[22px] px-4 md:px-7 transition group-hover/img:scale-105">
                <FaPlay className="text-white" />
              </button>
              <div className="bg-black/30 text-white py-2 md:py-2 px-2 md:px-3 text-center md:text-left">
                <h3 className="text-sm md:text-base"> Watch Video </h3>
                <p className="text-xs md:text-sm">See how our team Works</p>
              </div>
            </div>
          </div>
        </div>

        <div>
          <h2 className="text-green-600 text-4xl md:text-5xl font-bold mb-4">
            OUR HISTORY
          </h2>
          <p className="text-gray-500 text-xl mb-6">WHAT WE DONE ?</p>
          <p className="text-gray-400 mb-4 text-base md:text-xl font-light">
            People have been using natural objects, such as tree stumps, rocks
            and moss, as furniture since the beginning of human civilisation.
            Archaeological research shows that from around 30,000 years ago,
            people began constructing and carving their own furniture, using
            wood, stone, and animal bones.
          </p>

          {/* Icon Row */}
          <div className="flex flex-wrap justify-between items-center gap-2">
            <img src={icon1} alt="" className="w-16 md:w-17" />
            <img src={icon2} alt="" className="w-16 md:w-17" />
            <img src={icon3} alt="" className="w-16 md:w-17" />
            <img src={icon4} alt="" className="w-16 md:w-17" />
            <img src={icon5} alt="" className="w-16 md:w-17" />
            <img src={icon6} alt="" className="w-16 md:w-17" />
          </div>

          <p className="text-gray-400 mt-3 text-base md:text-xl font-light">
            All you need for your garden or office in one place, any flower or
            plant that you like and any fertilizer for any kind of plants.
          </p>
        </div>
      </section>

      {/* Numbers Section */}

      <div className="relative w-full">
        {/* Background & Numbers Section */}
        <div className="relative w-full">
          <img
            src={bg}
            alt="Background"
            className="w-full h-[700px] sm:h-[800px] md:h-[900px] lg:h-[700px] object-cover"
          />
          <section className="absolute inset-0 z-40 flex flex-col justify-center items-center text-white py-12 px-4 text-center">
            <h2 className="text-4xl sm:text-4xl md:text-5xl font-bold mb-4">
              OUR NUMBERS
            </h2>
            <p className="text-gray-400 text-base sm:text-lg md:text-2xl mb-8">
              WHAT IS OUR RESULTS ?
            </p>

            <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-7  md:gap-6 place-items-center w-full  my-4 ">
              {[
                { value: "23+", label: "Years of experience" },
                { value: "35k", label: "Happy Clients" },
                { value: "46+", label: "Award Winning" },
                { value: "33+", label: "Showrooms" },
              ].map((item, idx) => (
                <div
                  key={idx}
                  className="group/box hover:-translate-y-3.5 transition duration-300 ease-in-out flex flex-col items-center "
                >
                  <p className="text-3xl sm:text-4xl md:text-5xl font-light text-green-600  group-hover/box:bg-green-500 group-hover/box:text-black py-6 w-full md:py-10">
                    {item.value}
                  </p>
                  <p className="bg-white text-black py-2 w-[220px] md:px-6   text-center">
                    {item.label}
                  </p>
                </div>
              ))}
            </div>
          </section>
        </div>

        {/* Testimonials Section */}
        <section className="container relative w-[90%] mx-auto bg-white py-8 sm:py-12 md:py-16  -mt-32 md:-mt-30 z-50">
          <h2 className="text-green-600 text-3xl text-center  sm:text-4xl md:text-5xl font-bold mb-2">
            TESTIMONIALS
          </h2>
          <p className="text-gray-400 text-sm sm:text-base text-center md:text-xl mb-20">
            WHAT IS OUR CLIENTS SAY ?
          </p>

          <div className="relative flex border-4 border-gray-300 flex-col gap-4 md:gap-6 items-center h-[400px]">
            <img
              src={testimonials[testimonialIndex].image}
              alt={testimonials[testimonialIndex].name}
              className="w-16 h-16 sm:w-20 sm:h-20 md:w-28 md:h-28  object-cover border-2 border-black/40 -mt-12"
            />

            <h3 className="font-semibold text-lg sm:text-xl md:text-2xl mt-4">
              {testimonials[testimonialIndex].name}
            </h3>
            <p className="text-gray-500 text-sm sm:text-base md:text-lg mb-2">
              {testimonials[testimonialIndex].role}
            </p>
            <p className="italic text-gray-600 text-sm sm:text-base md:text-lg px-4 md:px-12 text-center">
              "{testimonials[testimonialIndex].text}"
            </p>

            {/* Pagination Dots */}
            <div className="flex justify-center absolute bottom-0 mt-4 gap-2">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setTestimonialIndex(i)}
                  className={`w-3 h-3 my-4 rounded-full ${
                    testimonialIndex === i ? "bg-green-600" : "bg-gray-300"
                  }`}
                ></button>
              ))}
            </div>
          </div>
        </section>
      </div>
    </>
  );
}

export default About;
