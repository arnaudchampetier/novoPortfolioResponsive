// About.js
import React from "react";

function About({ lightMode }) {
  const aboutClassName = lightMode
    ? "bg-gradient-to-b from-cyan-500 via-cyan-700 to-cyan-900"
    : "bg-gradient-to-b from-gray-800 to-black text-white";

  return (
    <div
      id="about"
      name="about"
      className={`w-full h-screen ${aboutClassName}`}
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center h-full w-full">
        <div className="pb-8">
          <p className="text-4xl font-bold font-larken inline border-b-4 border-gray-500">
            About
          </p>
        </div>
        <p className="text-xl ">
          Après une école de commerce et un parcours professionnel varié, j'ai
          suivi une formation intensive de développeur web & web mobile à la
          Wild Code School de Lyon. Passionné par les nouvelles technologies,
          j'ai choisi de me professionnaliser dans ce domaine. Je suis une
          personne passionnée et motivée, toujours à la recherche de nouvelles
          expériences et de défis à relever. J'aime travailler en équipe et
          apporter ma contribution à la réalisation de projets ambitieux.
        </p>
        <br />
        <p className="mb-48 md:mb-96 text-lg animate-text bg-gradient-to-r from-teal-400 via-purple-400 to-orange-400 bg-clip-text text-transparent font-black">
          Qualités : Autonome Passionné Curieux Communicatif Adaptable
        </p>
      </div>
    </div>
  );
}

export default About;
