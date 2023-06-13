import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { BsFillPersonLinesFill } from "react-icons/bs";

function SocialLinks() {
  const links = [
    {
      id: 1,
      child: (
        <>
          Linkedin <FaLinkedin size={30} />{" "}
        </>
      ),
      href: "https://www.linkedin.com/in/arnaud-champetier-030b0797/",
      style: "rounded-tr-md",
    },
    {
      id: 2,
      child: (
        <>
          GitHub <FaGithub size={30} />{" "}
        </>
      ),
      href: "https://github.com/arnaudchampetier",
    },
    {
      id: 3,
      child: (
        <>
          Mail <HiOutlineMail size={30} />{" "}
        </>
      ),
      href: "mailto:arnaud.champetier9@gmail.com",
    },
    {
      id: 4,
      child: (
        <>
          CV <BsFillPersonLinesFill size={30} />{" "}
        </>
      ),
      href: "/Arnaud-Champetier-CV-2023-YES.pdf",
      style: "rounded-br-md",
      download: true,
    },
  ];
  return (
    <div className="hidden lg:flex flex-col top-[35%] left-0 fixed">
      <ul>
        {links.map(({ id, child, href, style, download }) => (
          <li
            key={id}
            className={
              "flex justify-between items-center w-40 h-14 px-4 ml-[-100px] bg-cyan-500 hover:ml-[-10px] hover:rounded-r-md duration-800" +
              "" +
              style
            }
          >
            <a
              href={href}
              className="flex justify-between items-center w-full text-white font-larken "
              download={download}
              target="__blank"
              rel="noreferrer"
            >
              {child}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default SocialLinks;
