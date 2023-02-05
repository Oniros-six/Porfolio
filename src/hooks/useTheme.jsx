import { useState, useEffect } from "react";

const useTheme = () => {
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
    return tema;
}

export default useTheme