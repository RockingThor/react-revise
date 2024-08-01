import React from "react";
import "../style/Header.css";

const Header = () => {
  return (
    <header className="header">
      <input type="text" placeholder="Search" className="search-bar" />
      <div className="profile">
        <img src="profile.jpg" alt="Profile" className="profile-pic" />
      </div>
    </header>
  );
};

export default Header;
