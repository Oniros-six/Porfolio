import React, { useEffect, useRef } from "react";
import anime from "animejs";

const Titulo = () => {
  const titulo = useRef();

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
      keyframes: [{ color: "#701a75" }, { color: "#f0abfc" }],
      delay: (el, i) => 330 + 70 * i,
    });

    const rect = titulo.current.getBoundingClientRect();
    const screenWidth = window.innerWidth;
    const xPos = (screenWidth - rect.width) / 2;
    anime.timeline().add({
      targets: ".titulo",
      translateX: xPos,
      easing: 'easeInOutElastic(1, .6)',
      delay: 2300
    });

  }, []);


  return (
    <>
      <h1 ref={titulo} className="titulo">
        Portfolio fullstack
      </h1>
    </>
  );
};

export default Titulo;
