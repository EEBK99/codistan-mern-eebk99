import React from "react";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import peak from "../assets/images/peak.jpg";
import carouselImage1 from "../assets/images/photo-1417021423914-070979c8eb34.jpg";
import carouselImage2 from "../assets/images/photo-1443980995706-8d107e98e707.jpg";
import carouselImage3 from "../assets/images/photo-1458442310124-dde6edb43d10.jpg";

const NavSection: React.FC = () => {
  return (
    <section
      className="bg-cover bg-no-repeat h-800 w-screen"
      style={{
        backgroundImage: `url(${peak})`,
      }}
    >
      <div className="container width75 flex flex-col">
        <div className="flex">
          <div>
            <p>
              <span className="text-7xl text-gray-400 font-bold">01</span>
            </p>
          </div>
          <div
            className="flex flex-col items-start"
            style={{ fontSize: "60px", margin: "0px" }}
          >
            <span id="history" className="text-white">
              HISTORY
            </span>
            <span className="text-white">.</span>
          </div>
        </div>
        <div className="text-white">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores
          voluptas, fugit illo ea totam atque quia explicabo sequi nostrum. Odit
          cum nobis perspiciatis beatae facilis, ducimus reprehenderit eveniet
          blanditiis dolorem modi! Officiis accusamus ducimus in pariatur
          delectus error minima, saepe cumque. Rem at suscipit, rerum laborum
          eligendi omnis nam amet.
        </div>
      </div>
      <div className="p-3">
        <OwlCarousel className="container width75">
          <div className="item">
            <img src={carouselImage1} alt="img" />
          </div>
          <div className="item">
            <img src={carouselImage2} alt="img" />
          </div>
          <div className="item">
            <img src={carouselImage3} alt="img" />
          </div>
        </OwlCarousel>
      </div>
    </section>
  );
};

export default NavSection;
