import React from "react";
import html from "../assets/HTML5.png";
import css from "../assets/CSS.png";
import Express from "../assets/ExpressJS1.png";
import react from "../assets/REACT.png";
import Node from "../assets/NodeJS.jpg";
import GitHub from "../assets/github1.png";
import javascript from "../assets/JS.png";
import tailwind from "../assets/tailwind.jpg";
import materialUi from "../assets/materialUI.png";
import Postman from "../assets/Postman.png";
import workbench from "../assets/workbench.jpg";
import OVH from "../assets/OVHLogo.png";
import autres from "../assets/autres1.png";
import GitLab from "../assets/Gitlab-logo.png";

function Experience(props) {
  const { lightMode } = props;

  const techs = [
    { id: 1, src: html, title: "HTML", style: "shadow-orange-500" },
    { id: 2, src: css, title: "CSS", style: "shadow-blue-500" },
    { id: 7, src: javascript, title: "Javascript", style: "shadow-pink-400" },
    { id: 3, src: Express, title: "Express", style: "shadow-yellow-500" },
    { id: 4, src: react, title: "ReactJs", style: "shadow-blue-600" },
    { id: 5, src: Node, title: "NodeJs", style: "shadow-sky-400" },

    {
      id: 13,
      src: autres,
      title: "Autres technologies",
      style: "shadow-cyan-800",
    },
  ];

  const containerClassName = lightMode
    ? "bg-gradient-to-b from-sky-900 via-sky-700 to-sky-900"
    : "bg-gradient-to-b from-gray-800 via-zinc-800 to-gray-800 text-white";
  const titleClassName = lightMode ? "text-white " : "text-white";
  const subtitleClassName = lightMode ? "text-gray-900" : "text-gray-500";

  return (
    <div
      id="experience"
      name="experience"
      className={`${containerClassName} w-full min-h-screen flex flex-col items-center justify-center`}
    >
      <div className="max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full ">
        <div>
          <p
            className="text-4xl  font-larken border-b-4 border-gray-500 p-2 inline   animate-text-gradient bg-gradient-to-r from-[#23284d] via-[#dcdfe4] to-[#cb9fe9] 
            bg-[200%_auto] bg-clip-text text-transparent  relative cursor-pointer transition-all duration-1000 "
          >
            Experience
          </p>
          <p
            className={`py-6 font-semplicita text-lg text-white ${subtitleClassName}`}
          >
            Langages, frameworks, maîtrisés ...
          </p>
        </div>
        <div className="w-full grid grid-cols-2 sm:grid-cols-3 gap-8 text-center py-8 px-12 sm:px-0 cursor-pointer">
          {techs.map(({ id, src, title, style }) => (
            <div
              key={id}
              className={`flex-1 shadow-md hover:scale-105 duration-700 py-2 rounded-lg ${style} md:w-44 md:h-44 w-24 h-24 mx-auto m-4`}
            >
              <img
                src={src}
                alt={title}
                className="w-full h-full aspect-w-1 aspect-h-1 mx-auto"
              />
              <p className="text-white mt-4 font-semplicita">{title}</p>
            </div>
          ))}
        </div>
      </div>
      <div class=" mt-12 font-semplicita text-center mx-10 md:mx-0 text-3xl md:text-4xl [text-wrap:balance] bg-clip-text text-transparent bg-gradient-to-r from-slate-200/80 to-50% to-slate-200">
        J'utilise de nombreux autres outils, bibliothèques, SGBDR... tels que{" "}
        <span class="text-indigo-400 inline-flex flex-col h-[calc(theme(fontSize.3xl)*theme(lineHeight.tight))] md:h-[calc(theme(fontSize.4xl)*theme(lineHeight.tight))] overflow-hidden">
          <ul class="block animate-text-slide-6 text-left leading-tight [&_li]:block">
            <li>GitHub</li>
            <li>GitLab</li>
            <li>PostMan</li>
            <li>MySQL</li>

            <li>OVH Cloud</li>
            <li>Tailwind CSS</li>
            <li aria-hidden="true">Material UI</li>
          </ul>
        </span>
        <p className="text-white text-center">...</p>
      </div>
    </div>
  );
}

export default Experience;
