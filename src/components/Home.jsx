import React from "react";
import { useTranslation } from "react-i18next";
import s1 from "../images/SMC.jpg";

const Home = () => {
  const { t } = useTranslation();

  return (
    <section
      id="home"
      className="relative w-full h-[60vh] sm:h-[70vh] md:h-[80vh] lg:h-[100vh] overflow-hidden transition-all duration-300"
    >
      {/* Background Image fills the section; body already reserves navbar space */}
      <img
        src={s1}
        alt={t("home.title") || "Swaranjali Music Classes"}
        className="absolute inset-0 w-full h-full object-cover object-center md:object-top"
        loading="eager"
      />
    </section>
  );
};

export default Home;
