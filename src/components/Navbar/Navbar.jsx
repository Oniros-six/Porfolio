import React from "react";
import Menu from "./Menu";

const Navbar = () => {
  return (
    <div className="navbar flex gap-2">
      <img src="../../../assets/favicon.png" className="navbar-logo" />
      <div>
        Leandro
        <br />
        Arrigonni
      </div>
      <Menu />
    </div>
  );
};

export default Navbar;
