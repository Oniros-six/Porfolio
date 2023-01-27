import React, { useEffect, useState } from "react";
import Header from "../components/Header/Header";
import Tecnologias from "../components/SecTecnologias/Tecnologias";

const Index = () => {

  return (
    <div className="index-main">
      <Header/>
      <Tecnologias/>
    </div>
  );
};

export default Index;