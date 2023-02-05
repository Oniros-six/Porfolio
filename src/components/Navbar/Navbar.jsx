import React from "react";
import Menu from "./Menu";
import logo from "../../../assets/logo.jpg";

const Navbar = (props) => {
  const {setShowNav, showNav} = props;

  return (
    <div className="navbar ">
      <img src={logo} className="navbar-logo" />
      <div>
        <p className="nombre">
          Leandro
          <br />
          Arrigonni
        </p>
      </div>
      <Menu showNav={showNav} setShowNav={setShowNav} />
    </div>
  );
};

export default Navbar;
