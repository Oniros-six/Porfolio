import React, { useState } from "react";
import Header from "../components/Header/Header";
import LateralNav from "../components/Navbar/lateralNav";
import Navbar from "../components/Navbar/Navbar";

const Index = () => {
  const [showNav, setShowNav] = useState(false);

  return (
    <div className="index-main">
      <Navbar
      showNav={showNav}
      setShowNav={setShowNav}
      />
      <LateralNav showNav={showNav} setShowNav={setShowNav}/>
      <Header />
      
    </div>
  );
};

export default Index;
