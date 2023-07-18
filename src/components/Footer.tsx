import React from "react";
import logo3 from "../assets/images/logo3.png";

const Footer: React.FC = () => {
  return (
    <footer className="footer_section">
      <div className="container width75 d-flex justify-content-between">
        <div>
          <img src={logo3} alt="logo1" />
        </div>
        <div style={{ color: "#5e729a" }} className="d-flex align-items-center">
          <p>COPYRIGHT 2016. ALL RIGHTS RESERVED</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
