import React from "react";
import { useTranslation } from "react-i18next";
import s1 from "../images/SMC.jpg";

const Home = () => {
  const { t } = useTranslation();

  return (
    <section id="home" className="w-full h-[90vh] md:h-screen relative overflow-hidden pt-20">
      {/* use an absolutely-positioned img for predictable alignment; shift it down by navbar height (80px) */}
      <img
        src={s1}
        alt="SMC"
        className="absolute left-0 w-full object-cover object-center"
        style={{ top: '80px', height: 'calc(100% - 80px)' }}
      />

      <div className="relative z-10 w-full h-full flex items-center justify-center">
        {/* <div className="bg-black/50 p-8 rounded-md text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-yellow-400">{t("home.title") || "Swaranjali Music Classes"}</h1>
          <p className="mt-4 text-white">{t("home.subtitle") || "Learn Indian Classical Music"}</p>
        </div> */}
      </div>
    </section>
  );
};

export default Home;
