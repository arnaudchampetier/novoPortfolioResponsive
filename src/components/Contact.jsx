import React, { useState } from "react";

function Contact(props) {
  const { lightMode } = props;

  const containerClassName = lightMode
    ? "bg-gradient-to-b from-sky-900 via-sky-700 to-sky-900"
    : "bg-gradient-to-b from-gray-800 via-zinc-800 to-purple-900 text-white";
  const titleClassName = lightMode ? "text-white" : "text-white";
  const subtitleClassName = lightMode ? "text-gray-700" : "text-gray-500";
  const [showLegalNotice, setShowLegalNotice] = useState(false);

  const handleLegalNoticeClick = () => {
    setShowLegalNotice(!showLegalNotice);
  };

  return (
    <div
      id="contact"
      name="contact"
      className={`${containerClassName} w-full min-h-screen flex flex-col items-center justify-center`}
    >
      <div className="mt-24 max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p
            className="text-4xl font-larken   inline border-b-4 border-gray-500 p-2   animate-text-gradient bg-gradient-to-r from-[#23284d] via-[#dcdfe4] to-[#cb9fe9] 
            bg-[200%_auto] bg-clip-text text-transparent  relative cursor-pointer transition-all duration-1000 "
          >
            Contact
          </p>
          <p
            className={`py-6 font-semplicita text-white text-lg ${subtitleClassName}`}
          >
            Remplissez le formulaire pour me contacter !
          </p>
        </div>
        <div className="flex justify-center items-center">
          <form
            action="https://getform.io/f/e8c06757-d7cd-472c-8f6f-e12b6dbf354e"
            method="POST"
            className="flex flex-col w-full md:w-full "
          >
            <input
              type="text"
              name="name"
              placeholder="Entrez votre nom"
              className="p-2 font-semplicita bg-transparent border-2 rounded-md text-white focus:outline-none mb-4"
            />
            <input
              type="text"
              name="mail"
              placeholder="Entrez votre mail"
              className="p-2 font-semplicita bg-transparent border-2 rounded-md text-white focus:outline-none mb-4"
            />
            <textarea
              name="message"
              placeholder="Entrez votre message"
              rows="10"
              className="p-2 font-semplicita bg-transparent border-2 rounded-md text-white focus:outline-none mb-4"
            ></textarea>
            <button className="text-white font-semplicita bg-gradient-to-b from-cyan-500 to-blue-500 px-6 py-3 mx-auto flex items-center rounded-md hover:scale-110 duration-300">
              Let's go!
            </button>
          </form>
        </div>
        <p className="text-center text-white text-sm mt-8">
          Design et développement réalisé par mes soins - Tous droits réservés ®{" "}
        </p>
        <div className="mt-4 text-center">
          <button
            className="text-gray-400 hover:text-white focus:outline-none"
            onClick={handleLegalNoticeClick}
          >
            Mentions légales
          </button>
          {showLegalNotice && (
            <div className="fixed inset-0 flex items-center justify-center z-50">
              <div className="bg-gray-800 rounded-md p-4 w-3/4 sm:w-1/2 lg:w-1/2 lg:h-1/2 text-left ">
                {" "}
                <div className="flex justify-end">
                  <button
                    className="text-gray-400 hover:text-white focus:outline-none"
                    onClick={handleLegalNoticeClick}
                  >
                    ✕
                  </button>
                </div>
                <p className="text-white mb-10 font-larken font-semibold">
                  Mentions Légales
                </p>
                <p className="text-white font-semplicita mb-2 font-semibold">
                  Propriétaire
                </p>
                <p className="text-white font-semplicita mb-6">
                  Monsieur Arnaud CHAMPETIER – Lyon, France
                </p>
                <p className="text-white font-semplicita mb-2 font-semibold">
                  Responsable de la publication
                </p>
                <p className="text-white font-semplicita mb-6">
                  Arnaud CHAMPETIER – arnaud.champetier9@gmail.com
                </p>
                <p className="text-white font-semplicita mb-2 font-semibold">
                  Webmaster
                </p>
                <p className="text-white font-semplicita mb-6">
                  Arnaud CHAMPETIER
                </p>
                <p className="text-white font-semplicita mb-2 font-semibold">
                  Hébergement
                </p>
                <p className="text-white font-semplicita mb-8">
                  Ce site est hébergé par Vercel
                </p>
                <p className="text-white font-semplicita italic">
                  Ce site ne collecte aucune donnée personnelle et n'utilise pas
                  de cookies.
                </p>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Contact;
