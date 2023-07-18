import React from "react";
import logo3 from "../assets/images/logo3.png";

const NavSection: React.FC = () => {
  return (
    <section className="flex justify-between items-center py-6 px-10 container mx-auto">
      <div>
        <img src={logo3} alt="logo3" />
      </div>
      <div className="flex text-white items-center">
        <p>
          <a href="#history" className="text-blue-900 underline mr-4">
            01. HISTORY
          </a>
        </p>
        <p>
          <a href="#team" className="text-blue-900 underline">
            02. TEAM
          </a>
        </p>
      </div>
    </section>
  );
};

export default NavSection;
