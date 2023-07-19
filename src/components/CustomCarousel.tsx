import React from "react";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import carouselImage1 from "../assets/images/photo-1417021423914-070979c8eb34.jpg";
import carouselImage2 from "../assets/images/photo-1443980995706-8d107e98e707.jpg";
import carouselImage3 from "../assets/images/photo-1458442310124-dde6edb43d10.jpg";

const CustomCarousel: React.FC = () => {
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
      1920: {
        items: 4,
        nav: false,
      },
      2560: {
        items: 4,
        nav: false,
      },
    },
  };
  return (
    <>
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
    </>
  );
};

export default CustomCarousel;
