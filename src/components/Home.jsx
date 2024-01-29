// Home.js
import React from "react";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { Link } from "react-scroll";
import Meuah from "../assets/meuah1.jpg";

function Home({ lightMode, toggleLightMode }) {
  const homeClass = lightMode
    ? "bg-gradient-to-b from-cyan-900 via-cyan-700 to-cyan-500"
    : "bg-gradient-to-b from-black via-zinc-800 to-gray-800";

  return (
    <div
      id="home"
      name="home"
      className={`h-screen w-full text-white ${homeClass}`}
    >
      <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row">
        <div className="flex flex-col justify-center h-full mt-24 md:mt-0">
          <h2 className="text-4xl sm:text-7xl font-light font-semplicita text-white mt-56 md:mt-0 mb-4">
            Arnaud Champetier
          </h2>
          <p className="text-xl text-gray-300 px-4 max-w-md font-semplicita mb-8 md:mb-4">
            Bonjour ! Je suis développeur web & web mobile Full Stack, diplômé
            du titre national professionnel DWWM (Développeur Web & Web Mobile).
            <br /> <br /> N'hésitez pas à prendre contact avec moi pour tout
            projet de collaboration. 🙂
          </p>

          <div className="mb-8 md:mb-0 ">
            <Link
              to="portfolio"
              smooth={true}
              duration={1000}
              className="group text-white text-lg font-semplicita font-bold uppercase w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer"
            >
              Portfolio
              <span className="group-hover:rotate-90 duration-300">
                <MdOutlineKeyboardArrowRight size={25} className="ml-2" />
              </span>
            </Link>
          </div>
        </div>

        <div>
          <img
            src={Meuah}
            alt="meuah"
            className="rounded-2xl mx-auto w-2/3 md:w-2/3 ml-4 transition-transform hover:rotate-12 duration-1000 cursor-pointer mb-64 md:mb-0"
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
