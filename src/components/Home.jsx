import React, { useEffect, useRef, useState } from "react";
import { useTranslation } from "react-i18next";
import s1 from "../images/SMC.jpg";

const Home = () => {
  const { t } = useTranslation();
  const [navHeight, setNavHeight] = useState(0);

  // Reference to navbar element
  const navbarRef = useRef(null);

  useEffect(() => {
    // Try to find navbar dynamically
    const navbar = document.querySelector("nav"); // or change selector to your navbar’s tag/class
    if (navbar) {
      setNavHeight(navbar.offsetHeight); // get actual height in pixels
    }
    // Update on window resize (mobile/desktop difference)
    const handleResize = () => {
      if (navbar) setNavHeight(navbar.offsetHeight);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <section
      id="home"
      style={{ paddingTop: `${navHeight}px` }}
      className="relative w-full h-[60vh] sm:h-[70vh] md:h-[80vh] lg:h-[100vh] overflow-hidden transition-all duration-300"
    >
      {/* Background Image */}
      <img
        src={s1}
        alt={t("home.title") || "Swaranjali Music Classes"}
        className="absolute top-0 left-0 w-full h-full object-cover object-center md:object-top"
        loading="eager"
      />
    </section>
  );
};

export default Home;
