import React from "react";
import HeagerBg from "../images/header.jpg";
const Header = () => {
  return (
    <div
      id="header"
      className="h-screen w-full bg-center bg-contain md:bg-cover bg-no-repeat"
      style={{
        backgroundImage: `url(${HeagerBg})`,
      }}
    ></div>
  );
};

export default Header;
