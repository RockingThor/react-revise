import React from "react";
import { NETFLIX_LOGO } from "../constants/images";

const Header = () => {
  return (
    <div className="absolute">
      <img src={NETFLIX_LOGO} alt="logo" className="p-5 " />
    </div>
  );
};

export default Header;
