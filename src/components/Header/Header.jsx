import React from "react";
import { ReactComponent as Moon } from "../../../assets/moon.svg";
import { ReactComponent as Sun } from "../../../assets/sun.svg";
import Titulo from "./Titulo";
import Boton from "../Boton";
import useTheme from "../../hooks/useTheme";


const Header = () => {
  const theme = useTheme();
  

  return (
    <header className="header-main">
      <Titulo tema={localStorage.theme} />

       <Boton
        onClick={() => theme[1]()}
        clases="icon-theme"
        nombre={theme.tema === "dark" ? <Moon /> : <Sun />}
      />

      <div className="descripcion">
        Developer by choice and designer for fun
      </div>

    </header>
  );
};

export default Header;
