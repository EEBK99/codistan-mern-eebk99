import React from "react";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import peak from "../assets/images/peak.jpg";
import CustomCarousel from "./CustomCarousel";

const NavSection: React.FC = () => {
  return (
    <section
      className="bg-cover bg-no-repeat h-screen w-full flex flex-col justify-between"
      style={{
        backgroundImage: `url(${peak})`,
        /* Adjust the background size to cover the entire section */
        backgroundSize: "cover",
        /* Add a background position for better alignment */
        backgroundPosition: "center",
      }}
    >
      <div className="container px-6 md:px-12 lg:px-24 xl:px-40 2xl:px-80 flex flex-col">
        <div className="flex flex-wrap justify-center md:justify-start">
          <div className="flex justify-end md:justify-start">
            <span className="text-9xl text-bombay-500 font-bold">01</span>
          </div>
          <div className="flex justify-end md:justify-start flex-col pb-3">
            <span id="team" className="text-3xl font-bold text-fiord-500">
              HISTORY
            </span>
            <span className="bg-bombay-500 w-5 h-5"></span>
          </div>
        </div>
        <div className="mt-5 ml-6 md:ml-24 text-white">
          {/* Add some responsive text size */}
          <p className="text-sm md:text-base lg:text-lg xl:text-xl">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores
            voluptas, fugit illo ea totam atque quia explicabo sequi nostrum.
            Odit cum nobis perspiciatis beatae facilis, ducimus reprehenderit
            eveniet blanditiis dolorem modi! Officiis accusamus ducimus in
            pariatur.
          </p>
        </div>
      </div>

      <div className="bg-fiord-500 opacity-80 xl:px-72 lg:px-52 md:px-0 pt-3 md:pt-6 xl:h-60 lg:h-40 md:h-90">
        {/* Ensure the CustomCarousel component is responsive */}
        <CustomCarousel />
      </div>
    </section>
  );
};

export default NavSection;
