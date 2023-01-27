import React, { useEffect, useRef } from "react";
import anime from "animejs";

const Titulo = (prop) => {
  const titulo = useRef();
  const colorInicial = prop.tema === "dark" ? "#701a75" : "#f0abfc";
  const colorFinal = prop.tema === "dark" ? "#f0abfc" : "#701a75";

  useEffect(() => {
    var textWrapper = titulo.current;

    textWrapper.innerHTML = textWrapper.textContent.replace(
      /\S/g,
      "<span class='letter'>$&</span>"
    );

    anime.timeline().add({
      targets: ".letter",
      easing: "easeInOutQuad",
      opacity: [0, 1],
      duration: 1000,
      keyframes: [
        { color: colorInicial },
        { color: colorFinal },
        { color: colorInicial },
        { color: colorFinal },
      ],
      delay: (el, i) => 330 + 70 * i,
    });

    const rect = titulo.current.getBoundingClientRect();
    const screenWidth = window.innerWidth;
    const xPos = (screenWidth - rect.width) / 2;

    anime.timeline().add({
      targets: ".titulo",
      translateX: xPos,
      easing: "easeInOutElastic(1, .6)",
      delay: 2300,
    });
  }, [prop.tema]);

  return (
    <>
      <h1 ref={titulo} className="titulo">
        Portfolio fullstack
      </h1>
    </>
  );
};

export default Titulo;
