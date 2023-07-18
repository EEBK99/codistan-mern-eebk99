import React from "react";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";

const Carousel: React.FC = () => {
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
    <OwlCarousel {...options}>
      <div className="card">
        <img src="/images/photo-1443980995706-8d107e98e707.jpg" alt="img" />
      </div>
      <div className="card">
        <img src="/images/photo-1458442310124-dde6edb43d10.jpg" alt="img" />
      </div>
      {/* ... Add more images here ... */}
    </OwlCarousel>
  );
};

export default Carousel;
