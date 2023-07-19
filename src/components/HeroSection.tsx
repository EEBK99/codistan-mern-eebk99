import React from "react";
import logo from "../assets/images/logo.png";
import hero from "../assets/images/hero.jpg";

const HeroSection: React.FC = () => {
  return (
    <section
      className="bg-cover bg-no-repeat h-screen w-full"
      style={{
        backgroundImage: `url(${hero})`,
      }}
    >
      <div className="flex justify-between items-center py-6 px-10 container mx-auto">
        <div>
          <img className="w-12" src={logo} alt="logo1" />
        </div>
        <div className="flex text-white items-center">
          <p>
            <a href="#history" className="text-white underline mr-4">
              01. HISTORY
            </a>
          </p>
          <p>
            <a href="#team" className="text-white underline">
              02. TEAM
            </a>
          </p>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
