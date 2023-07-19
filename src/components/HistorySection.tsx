import React from "react";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import peak from "../assets/images/peak.jpg";
import CustomCarousel from "./CustomCarousel";

const NavSection: React.FC = () => {
  return (
    <section
      className="bg-cover bg-no-repeat h-screen  w-full flex flex-col justify-between"
      style={{
        backgroundImage: `url(${peak})`,
      }}
    >
      <div className="container px-80 flex flex-col">
        <div className="flex">
          <div className="flex justify-end">
            <span className="text-9xl text-bombay-500 font-bold">01</span>
          </div>
          <div className="flex justify-end flex-col pb-3">
            <span id="team" className="text-3xl font-bold text-fiord-500">
              HISTORY
            </span>
            <span className="bg-bombay-500 w-5 h-5"></span>
          </div>
        </div>
        <div className="mt-5 ml-24 text-white">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores
          voluptas, fugit illo ea totam atque quia explicabo sequi nostrum. Odit
          cum nobis perspiciatis beatae facilis, ducimus reprehenderit eveniet
          blanditiis dolorem modi! Officiis accusamus ducimus in pariatur.
        </div>
      </div>

      <div className="bg-fiord-500 opacity-80 px-72 pt-3 h-60">
        <CustomCarousel />
      </div>
    </section>
  );
};

export default NavSection;
