// Home.js
import React from "react";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { Link } from "react-scroll";
import Meuah from "../assets/moiSafti.jpg";

function Home({ lightMode, toggleLightMode }) {
  const homeClass = lightMode
    ? "bg-gradient-to-b from-purple-900 via-sky-700 to-sky-900"
    : "bg-gradient-to-b from-purple-900 via-zinc-800 to-gray-800";

  return (
    <div
      id="home"
      name="home"
      className={`h-screen w-full text-white ${homeClass}`}
    >
      <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row">
        <div className="flex flex-col justify-center h-full mt-48 md:mt-0">
          <h2
            className="text-3xl md:text-5xl font-light font-semplicita mt-72 md:mt-0 mb-4
          animate-text-gradient bg-gradient-to-r from-[#23284d] via-[#dcdfe4] to-[#cb9fe9] 
          bg-[200%_auto] bg-clip-text text-transparent  relative cursor-pointer transition-all duration-1000  "
          >
            Arnaud Champetier
          </h2>
          <p className="md:text-xl text-gray-300 px-4 max-w-md font-semplicita mb-8 md:mb-4">
            Bonjour ! Je suis développeur web & web mobile Full Stack, diplômé
            du titre national professionnel DWWM (Développeur Web & Web Mobile).
            <br /> <br /> N'hésitez pas à prendre contact avec moi pour tout
            projet de collaboration. 🙂
          </p>

          <div className="mb-8 md:mb-0">
            <Link
              to="portfolio"
              smooth={true}
              duration={1000}
              className="group text-gray-300 animate-pulse text-lg hover:scale-110 duration-1000 font-semplicita font-bold uppercase w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-neutral-900 via-sky-800 to-neutral-900 cursor-pointer"
            >
              Portfolio
              <span className="group-hover:rotate-90 duration-1000">
                <MdOutlineKeyboardArrowRight size={25} className="ml-2" />
              </span>
            </Link>
          </div>
        </div>

        <div>
          <img
            src={Meuah}
            alt="meuah"
            style={{ width: "170px", height: "auto" }} // ajustez la taille selon vos besoins
            className="rounded-2xl mx-auto md:ml-4 transition-transform hover:rotate-12 duration-1000 cursor-pointer mb-64 md:mb-0"
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
