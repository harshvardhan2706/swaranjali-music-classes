import React from "react";
import { Link } from "react-scroll";
import { useTranslation } from "react-i18next";

const Navbar = () => {
  const { t, i18n } = useTranslation();

  const changeLanguage = (lang) => {
    i18n.changeLanguage(lang);
  };

  return (
    <nav className="fixed w-full z-20 top-0 left-0 bg-black bg-opacity-70 backdrop-blur-md shadow-lg">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <h1 className="text-2xl font-bold text-yellow-400">
          Swaranjali <span className="text-white">Music</span> Classes
        </h1>

        <ul className="hidden md:flex space-x-8 text-lg">
          <li>
            <Link to="home" smooth duration={500} offset={-80} className="cursor-pointer hover:text-yellow-400">
              {t("home")}
            </Link>
          </li>
          <li>
            <Link to="about" smooth duration={500} offset={-80} className="cursor-pointer hover:text-yellow-400">
              {t("about")}
            </Link>
          </li>
          <li>
            <Link to="exams" smooth duration={500} offset={-80} className="cursor-pointer hover:text-yellow-400">
              {t("exams")}
            </Link>
          </li>
          <li>
            <Link to="contact" smooth duration={500} offset={-80} className="cursor-pointer hover:text-yellow-400">
              {t("contact")}
            </Link>
          </li>
        </ul>

        <div className="flex space-x-3">
          <button
            onClick={() => changeLanguage("en")}
            className="px-3 py-1 rounded-md border border-yellow-400 text-yellow-400 hover:bg-yellow-400 hover:text-black transition"
          >
            EN
          </button>
          <button
            onClick={() => changeLanguage("hi")}
            className="px-3 py-1 rounded-md border border-yellow-400 text-yellow-400 hover:bg-yellow-400 hover:text-black transition"
          >
            HI
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
