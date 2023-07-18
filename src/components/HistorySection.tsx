import React from "react";
import Carousel from "./Carousel";

const NavSection: React.FC = () => {
  return (
    <section className="history_section d-flex flex-column justify-content-between">
      <div className="container width75 d-flex flex-column">
        {/* ... Rest of the content from the history_section ... */}
      </div>
      {/* <div className="carosel-bg p-3">
        <Carousel />
      </div> */}
    </section>
  );
};

export default NavSection;
