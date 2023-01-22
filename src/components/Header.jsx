import React, { useEffect, useState } from "react";

const Header = () => {
  const [tema, setTema] = useState("dark");
    
  useEffect(() => {
    if (
      localStorage.theme === "dark" ||
      (!("theme" in localStorage) &&
        window.matchMedia("(prefers-color-scheme: dark)").matches)
    ) {
      document.documentElement.classList.value = localStorage.theme;
    }
  }, []);

  const cambiarFondo = () => {
    tema === "dark" ? setTema("light") : setTema("dark");
    localStorage.theme = tema;
    document.documentElement.classList.value = tema;
  };

  return (
    <div className="flex">
      <h1 className="titulo">Portfolio fullstack</h1>
      
      <button
        className="button"
        onClick={() => {
          cambiarFondo();
        }}
      >
        Cambiar fondo
      </button>
    </div>
  );
};

export default Header;
