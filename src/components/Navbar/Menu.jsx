import React, { useState } from "react";
import { ReactComponent as Bars } from  "../../../assets/bars-solid.svg";

const Menu = () => {
  return (
    <div className="navbar-menu">
      <Bars className="bars-logo"/>
    </div>
  );
};

export default Menu;
