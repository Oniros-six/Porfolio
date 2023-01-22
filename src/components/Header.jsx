import React, { useEffect, useState } from "react";
import { ReactComponent as Moon } from "../../assets/moon.svg";
import { ReactComponent as Sun } from "../../assets/sun.svg";

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
      <h1 className="titulo animation-fadeInLeft">Portfolio fullstack</h1>

      <button
        onClick={() => {
          cambiarFondo();
        }}
      >
        {tema === "dark" ? <Moon /> : <Sun />}
      </button>

      {/* <div className="text-xl font-semibold md:text-3xl">
        developer by choice and designer for fun
      </div> */}
    </header>
  );
};

export default Header;
