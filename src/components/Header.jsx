import anime from "animejs";
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

useEffect(() => {
  var textWrapper = document.querySelector(".titulo");

  textWrapper.innerHTML = textWrapper.textContent.replace(
    /\S/g,
    "<span class='letter'>$&</span>"
  );

  anime.timeline().add({
    targets: ".titulo .letter",
    translateY: [200, 0],
    easing: "easeInExpo",
    opacity: 100,
    duration: 1700,
    delay: (el, i) => 400 + 70 * i,
  });


}, [])


  return (
    <header className="header-main">
      <h1 className="titulo">Portfolio fullstack</h1>

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
