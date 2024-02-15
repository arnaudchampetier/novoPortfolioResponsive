// About.js
import React from "react";

function About({ lightMode }) {
  const aboutClassName = lightMode
    ? "bg-gradient-to-b from-sky-900 via-sky-700 to-sky-900"
    : "bg-gradient-to-b from-gray-800 via-zinc-800 to-black text-white";

  return (
    <div
      id="about"
      name="about"
      className={`w-full h-screen text-white ${aboutClassName}`}
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center h-full md:h-1/2 w-full ">
        <div className="pb-8">
          <p
            className="text-4xl  font-larken inline border-b-4 border-gray-500   animate-text-gradient bg-gradient-to-r from-[#23284d] via-[#dcdfe4] to-[#cb9fe9] 
          bg-[200%_auto] bg-clip-text text-transparent  relative cursor-pointer transition-all duration-1000   "
          >
            About
          </p>
        </div>
        <p
          className="md:text-xl font-semplicita  bg-gradient-to-r from-[#cfb6e6] via-[#d6dde6] to-[#677dd4] 
                bg-[200%_auto] bg-clip-text text-transparent  relative cursor-pointer transition-all duration-1000  
                 "
        >
          Après une école de commerce et un parcours professionnel varié, j'ai
          suivi une formation intensive de développeur web & web mobile à la
          Wild Code School de Lyon. <br /> <br /> Passionné par les nouvelles
          technologies, j'ai choisi de me professionnaliser dans ce domaine et
          je cherche constamment à monter en compétences. <br /> <br />{" "}
          Trilingue et passionné de voyages, je suis toujours à la recherche de
          nouvelles expériences et de défis à relever. J'aime apporter ma
          contribution à la réalisation de projets complexes et ambitieux.
        </p>
        <br />
        <p className="mb-0 md:mb-0 md:mt-20 mt-8 text-lg animate-text bg-gradient-to-r from-teal-200 via-purple-300 to-orange-500 bg-clip-text text-transparent font-black">
          Qualités : Autonome Passionné Curieux Communicatif Adaptable
        </p>
      </div>
    </div>
  );
}

export default About;
