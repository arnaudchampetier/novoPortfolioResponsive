import React from "react";

function Contact(props) {
  const { lightMode } = props;

  const containerClassName = lightMode
    ? "bg-gradient-to-b from-cyan-900 via-cyan-700 to-cyan-500"
    : "bg-gradient-to-b from-black to-gray-800 text-white";
  const titleClassName = lightMode ? "text-black" : "text-white";
  const subtitleClassName = lightMode ? "text-gray-700" : "text-gray-500";

  return (
    <div
      id="contact"
      name="contact"
      className={`${containerClassName} w-full min-h-screen flex flex-col items-center justify-center`}
    >
      <div className="max-w-screen-lg p-4">
        <div className="pb-8">
          <p
            className={`text-4xl font-bold inline border-b-4 border-gray-500 p-2 ${titleClassName}`}
          >
            Contact
          </p>
          <p className={`py-6 ${subtitleClassName}`}>
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
              placeholder="entrez votre nom"
              className="p-2 bg-transparent border-2 rounded-md text-white focus:outline-none mb-4"
            />
            <input
              type="text"
              name="mail"
              placeholder="entrer votre mail"
              className="p-2 bg-transparent border-2 rounded-md text-white focus:outline-none mb-4"
            />
            <textarea
              name="message"
              placeholder="entrer votre message"
              rows="10"
              className="p-2 bg-transparent border-2 rounded-md text-white focus:outline-none mb-4"
            ></textarea>
            <button className="text-white bg-gradient-to-b from-cyan-500 to-blue-500 px-6 py-3 mx-auto flex items-center rounded-md hover:scale-110 duration-300">
              Let's go!
            </button>
          </form>
        </div>
        <p className="text-center text-white text-sm mt-8">
          Design et développement réalisé par mes soins - Tous droits réservés ®{" "}
        </p>
      </div>
    </div>
  );
}

export default Contact;
