import React, { useEffect, useState } from "react";
import { ReactComponent as Moon } from "../../assets/moon.svg";
import { ReactComponent as Sun } from "../../assets/sun.svg";
import Titulo from "./Titulo";
import Boton from "./Boton";

const Header = () => {
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
    <header className="header-main">
      <Titulo />

      <Boton
        onClick={() => {
          cambiarFondo();
        }}
        nombre={tema === "dark" ? <Moon /> : <Sun />}
      />


      <div className="descripcion">
        Developer by choice and designer for fun
      </div>
    </header>
  );
};

export default Header;
