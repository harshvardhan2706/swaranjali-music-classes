import React from "react";
import Navbar from "./components/Navbar";
import { useTranslation } from "react-i18next";
import "./index.css";

const App = () => {
  const { t } = useTranslation();

  return (
    <div className="App">
      <Navbar />

      {/* Home Section */}
      <section
        id="home"
        className="h-screen flex flex-col justify-center items-center text-center bg-cover bg-center"
        style={{
          backgroundImage: "url('/images/class-bg.jpg')",
        }}
      >
        <div className="bg-black bg-opacity-60 p-10 rounded-lg">
          <h1 className="text-5xl font-bold text-yellow-400 mb-4">
            {t("tagline")}
          </h1>
          <p className="text-xl text-white">{t("subtitle")}</p>
        </div>
      </section>
    </div>
  );
};

export default App;
