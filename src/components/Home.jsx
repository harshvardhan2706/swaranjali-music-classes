import React from "react";
import { useTranslation } from "react-i18next";
import s1 from "../images/SMC.jpg";

const Home = () => {
  const { t } = useTranslation();

  return (
    <section
      id="home"
      className="relative w-full overflow-hidden transition-all duration-300 bg-black justify-center"
      style={{ height: 'clamp(11vh, 88vh, 30vh)' }}
    >
      {/* On small screens show full image; on md+ fill and crop */}
      {/*
        Behavior:
        - mobile (default): show image at its intrinsic size but scale down if wider than viewport (max-width: 100%)
        - md and up: image fills the hero area and crops (object-cover)
      */}
      <img
        src={s1}
        alt={t("home.title") || "Swaranjali Music Classes"}
        className="mx-auto block md:absolute md:inset-0 md:w-full  md:object-cover md:object-top"
        style={{ width: 'auto', height: 'auto', maxWidth: '100%' }}
        sizes="100vw"
        loading="eager"
      />

      {/* optional: allow users to open the full-resolution image in a new tab */}
      <a
        href={s1}
        target="_blank"
        rel="noreferrer"
        className="absolute bottom-4 right-4 bg-black/50 text-white text-sm px-3 py-1 rounded hidden md:inline-block"
        aria-label="Open full resolution image"
      >
        View full image
      </a>
    </section>
  );
};

export default Home;
