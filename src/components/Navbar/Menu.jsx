import React from "react";
import { ReactComponent as Bars } from "../../../assets/bars-solid.svg";

const Menu = (props) => {
  const {setShowNav, showNav} = props;
  return (
      <button className="bars-logo" onClick={() => setShowNav(!showNav)}>
        <Bars />
      </button>
  );
};

export default Menu;
