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
    let xPos = (screenWidth - rect.width) / 2;
    //60; 20; 30 son valores que consegui a ensayo y error, seguramente alguna formula me de el valor mas apropiado
    if(rect.width < 305){
      xPos += 60
    } else if (rect.width < 360){
      xPos += 20
    } else if (rect.width < 388){
      xPos += 30
    }

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
