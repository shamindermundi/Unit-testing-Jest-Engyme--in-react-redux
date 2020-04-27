import React from "react";

import Logo from "../assests/logo.png";

const Header = () => {
  return (
    <div id="header">
      <div className="wrap">
        <img src={Logo} alt="Logo" />
      </div>
    </div>
  );
};

export default Header;
