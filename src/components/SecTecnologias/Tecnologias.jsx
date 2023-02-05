import React, { useState, useRef } from "react";
import Boton from "../Boton";

const Tecnologias = () => {
  const [clase, setClase] = useState("tecnologias-icono");
  const prueba = useRef(null);

  const cambiarVisibilidad = () => {
    if (clase === "tecnologias-icono") {
      setClase(clase + "-expand");
      const gridTemplateColumns = getComputedStyle(prueba.current).gridTemplateColumns;
      const columnCount = gridTemplateColumns.split(" ").length;
      //Dependiendo de cuantas columnas tenga que clase añado o quito para otorgar fleXIBILIDAD
      
    } else {
      setClase("tecnologias-icono");
    }
  };
  return (
    <div ref={prueba} className="tecnologias-box">
      {/* FRONT */}
      <img
        className={clase}
        src="https://skillicons.dev/icons?i=html"
        alt="HTML"
      />
      <img
        className={clase}
        src="https://skillicons.dev/icons?i=css"
        alt="Css"
      />
      <img
        className={clase}
        src="https://skillicons.dev/icons?i=js"
        alt="Javascript"
      />
      <img
        className={clase}
        src="https://skillicons.dev/icons?i=ts"
        alt="Typescript"
      />
      <img
        className={clase}
        src="https://skillicons.dev/icons?i=react"
        alt="React"
      />
      <img
        className={clase}
        src="https://skillicons.dev/icons?i=nextjs"
        alt="NextJs"
      />
      <img
        className={clase}
        src="https://skillicons.dev/icons?i=redux"
        alt="Redux"
      />
      <img
        className={clase}
        src="https://skillicons.dev/icons?i=tailwind"
        alt="Tailwind"
      />
      <img
        className={clase}
        src="https://skillicons.dev/icons?i=materialui"
        alt="Material UI"
      />
      <img
        className={clase}
        src="https://skillicons.dev/icons?i=jest"
        alt="Jest"
      />
      <img
        className={clase}
        src="https://skillicons.dev/icons?i=svelte"
        alt="Svelt"
      />
      <img
        className={clase}
        src="https://skillicons.dev/icons?i=figma"
        alt="Figma"
      />
      {/* BACK */}
      <img
        className={clase}
        src="https://skillicons.dev/icons?i=nodejs"
        alt="NodeJs"
      />
      <img
        className={clase}
        src="https://skillicons.dev/icons?i=express"
        alt="Express"
      />
      <img
        className={clase}
        src="https://skillicons.dev/icons?i=nestjs"
        alt="NestJs"
      />
      <img className={clase} src="https://skillicons.dev/icons?i=go" alt="GO" />
      <img className={clase} src="https://skillicons.dev/icons?i=cs" alt="C#" />
      <img
        className={clase}
        src="https://skillicons.dev/icons?i=aws"
        alt="AWS"
      />
      {/* DATABASE */}
      <img
        className={clase}
        src="https://skillicons.dev/icons?i=postgres"
        alt="Postgres"
      />
      <img
        className={clase}
        src="https://skillicons.dev/icons?i=mongodb"
        alt="MongoDB"
      />
      <img
        className={clase}
        src="https://skillicons.dev/icons?i=mysql"
        alt="MySql"
      />
      {/* TOOLS */}
      <img
        className={clase}
        src="https://skillicons.dev/icons?i=git"
        alt="Git"
      />
      <img
        className={clase}
        src="https://skillicons.dev/icons?i=webpack"
        alt="Webpack"
      />
      <Boton
        onClick={() => cambiarVisibilidad()}
        nombre={clase === "tecnologias-icono" ? "More" : "Less"}
      />
    </div>
  );
};

export default Tecnologias;
