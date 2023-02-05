import React, { useState, useEffect, useRef } from "react";
import useTheme from "../../hooks/useTheme";
import Boton from "../Boton";

const LateralNav = (props) => {
  const { showNav, setShowNav } = props;
  const theme = useTheme();

  const OnThemeChange = () => {
    theme[1]()
    setShowNav(false)
  }

  return (
    <div>
      {showNav && (
        <div className="lateralNav">
          <h3>abc</h3>
          <h3>abc</h3>
          <h3>abc</h3>
          <h3>abc</h3>
          <h3>abc</h3>
          <h3>abc</h3>
          <h3>abc</h3>
          <h3>abc</h3>
          <Boton
            onClick={() => OnThemeChange()}
            nombre={theme.tema === "dark" ? "Oscurecer" : "Aclarar"}
          />
        </div>
      )}
    </div>
  );
};

export default LateralNav;
