import React, { useState } from "react";
import { FiSun, FiMoon } from "react-icons/fi";
import NavBar from "./components/NavBar";
import SocialLinks from "./components/SocialLinks";
import Home from "./components/Home";
import About from "./components/About";
import Portfolio from "./components/Portfolio";
import Experience from "./components/Experience";
import Contact from "./components/Contact";

function App() {
  const [lightMode, setLightMode] = useState(false);

  const toggleLightMode = () => {
    setLightMode(!lightMode);
  };

  return (
    <div className={lightMode ? "bg-gray-500" : ""}>
      <NavBar />

      <SocialLinks />
      <Home lightMode={lightMode} toggleLightMode={toggleLightMode} />
      <About lightMode={lightMode} toggleLightMode={toggleLightMode} />
      <Portfolio lightMode={lightMode} toggleLightMode={toggleLightMode} />
      <Experience lightMode={lightMode} toggleLightMode={toggleLightMode} />
      <Contact lightMode={lightMode} toggleLightMode={toggleLightMode} />
      <button
        onClick={toggleLightMode}
        className="fixed bottom-4 right-4 text-4xl text-gray-500 hover:text-gray-800"
      >
        {lightMode ? <FiMoon /> : <FiSun />}
      </button>
    </div>
  );
}

export default App;
