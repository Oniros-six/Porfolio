import React, {useState, useEffect, forwardRef} from "react";
import withClickOutside from "../../hooks/withClickOutside";

import Boton from "../Boton";

const LateralNav = ({ showNav}, ref) => {

  const [tema, setTema] = useState("dark");

  useEffect(() => {
    if (
      localStorage.theme === "dark" ||
      (!("theme" in localStorage) &&
        window.matchMedia("(prefers-color-scheme: dark)").matches)
    ) {
      document.documentElement.classList.value = localStorage.theme;
      cambiarFondo();
    }
  }, []);

  const cambiarFondo = () => {
    tema === "dark" ? setTema("light") : setTema("dark");
    localStorage.theme = tema;
    document.documentElement.classList.value = tema;
  };

  return (
    <div ref={ref}>
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
        onClick={() => {
          cambiarFondo();
        }}
        
        nombre={tema === "dark" ? "Oscurecer" : "Aclarar"}
      />
        </div>
      )}
    </div>
  );
};

export default withClickOutside(LateralNav);

 