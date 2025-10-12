import React from "react";
import InfImg from "../../assets/img/gardeners.jpg";

const InfoSection: React.FC = () => {
  return (
    <section className="relative w-full h-[400px] md:h-[500px] flex items-center justify-center">
      {/* بکگراند عکس */}
      <img
        src={InfImg}
        alt="Flower Shop"
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* لایه سبز نیمه شفاف */}
      <div className="absolute inset-0 bg-[#606060]/70"></div>

      {/* محتوای متن */}
      <div className="relative z-10 text-center max-w-2xl px-6">
        <h3 className="font-bold text-2xl md:text-3xl text-white mb-4">
          XTRA is an online flower shop and delivery.
        </h3>
        <p className="text-white text-base md:text-lg">
          A flower, sometimes known as a bloom or blossom, is the reproductive
          structure found in flowering plants. The biological function of a
          flower is to facilitate reproduction.
        </p>
      </div>
    </section>
  );
};

export default InfoSection;
