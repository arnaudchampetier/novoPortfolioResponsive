// Home.js
import React from "react";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { Link } from "react-scroll";
import Meuah from "../assets/meuah1.jpg";
import { FiSun, FiMoon } from "react-icons/fi";

function Home({ lightMode, toggleLightMode }) {
  const homeClass = lightMode
    ? "bg-gray-500"
    : "bg-gradient-to-b from-black via-black to-gray-800";

  return (
    <div
      id="home"
      name="home"
      className={`h-screen w-full text-white ${homeClass}`}
    >
      <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row">
        <div className="flex flex-col justify-center h-full">
          <h2 className="text-4xl sm:text-7xl font-bold font-semplicita text-white">
            Arnaud Champetier
          </h2>
          <p className="text-xl text-gray-700 px-4 max-w-md font-larken">
            Hello ! je suis développeur web & web mobile
          </p>
          <div>
            <Link
              to="portfolio"
              smooth={true}
              duration={1000}
              className="group text-white text-lg font-semplicita w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer"
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
            className="rounded-2xl mx-auto w-2/3 md:w-full ml-4"
          />
        </div>
      </div>
      <button
        onClick={toggleLightMode}
        className="text-2xl text-gray-500 hover:text-gray-800"
      >
        {lightMode ? <FiMoon /> : <FiSun />}
      </button>
    </div>
  );
}

export default Home;
