import React from "react";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import peak from "../assets/images/peak.jpg";
import carouselImage1 from "../assets/images/photo-1417021423914-070979c8eb34.jpg";
import carouselImage2 from "../assets/images/photo-1443980995706-8d107e98e707.jpg";
import carouselImage3 from "../assets/images/photo-1458442310124-dde6edb43d10.jpg";

const NavSection: React.FC = () => {
  const options = {
    margin: 20,
    loop: true,
    autoplay: true,
    autoplayTimeout: 2000,
    autoplayHoverPause: true,
    responsive: {
      0: {
        items: 1,
        nav: false,
      },
      600: {
        items: 2,
        nav: false,
      },
      1000: {
        items: 4,
        nav: false,
      },
    },
  };

  return (
    <section
      className="bg-cover bg-no-repeat h-screen w-screen flex flex-col justify-between"
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
        <OwlCarousel className="owl-theme" {...options}>
          <div className="item">
            <img src={carouselImage1} alt="img" />
          </div>
          <div className="item">
            <img src={carouselImage2} alt="img" />
          </div>
          <div className="item">
            <img src={carouselImage3} alt="img" />
          </div>
          <div className="item">
            <img src={carouselImage1} alt="img" />
          </div>
          <div className="item">
            <img src={carouselImage2} alt="img" />
          </div>
          <div className="item">
            <img src={carouselImage3} alt="img" />
          </div>
          <div className="item">
            <img src={carouselImage1} alt="img" />
          </div>
          <div className="item">
            <img src={carouselImage2} alt="img" />
          </div>
          <div className="item">
            <img src={carouselImage3} alt="img" />
          </div>
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
