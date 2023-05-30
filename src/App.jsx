import React, { useEffect, useState } from "react";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import About from "./components/About";
import Project from "./components/Project";
import Tech from "./components/Tech";

function App() {
  const [isMobile, setIsMobile] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(true);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <div className={` ${isDarkMode ? "bg-slate-900" : "bg-slate-300"} overflow-y-auto`}>
      <Navbar isDarkMode={isDarkMode} toggleDarkMode={toggleDarkMode} isMobile={isMobile} />
      <Hero isMobile={isMobile} isDarkMode={isDarkMode} />
      <Project isMobile={isMobile} isDarkMode={isDarkMode} />
      <Tech isMobile={isMobile} isDarkMode={isDarkMode} />
      <About isMobile={isMobile} isDarkMode={isDarkMode} />
    </div>
  );
}

export default App;
