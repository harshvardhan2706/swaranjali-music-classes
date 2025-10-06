import React from "react";
import Navbar from "./components/Navbar";
import About from "./components/About";
import Exams from "./components/Exams";
import Home from "./components/Home";
import Gallery from "./components/Gallery";
import Family from "./components/Family";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import "./output.css";
import "./index.css";

import { useTranslation } from "react-i18next";

const App = () => {
  const { t } = useTranslation();

  return (
    <div className="App">
      <Navbar />

      <Home />

      {/* About Section */}
      <About />

      {/* Exams Section */}
      <Exams />
      <Gallery />
      <Family />
      <Contact />
      <Footer />
    </div>
  );
};

export default App;
