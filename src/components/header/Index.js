import React from "react";

import Logo from "../../assests/logo.png";

const Header = () => {
  return (
    <div id="header" data-test="header">
      <div className="wrap">
        <img data-test="logoImg" src={Logo} alt="Logo" />
      </div>
    </div>
  );
};

export default Header;
