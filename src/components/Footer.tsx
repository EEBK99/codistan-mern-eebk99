import React from "react";
import logo3 from "../assets/images/logo3.png";

const Footer: React.FC = () => {
  return (
    <footer className="bg-fiord-500 w-screen">
      <div className="flex justify-between items-center py-1 px-10 container mx-auto">
        <div>
          <img src={logo3} alt="logo1" />
        </div>
        <div className="text-white flex items-center">
          <p>COPYRIGHT 2016. ALL RIGHTS RESERVED</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
