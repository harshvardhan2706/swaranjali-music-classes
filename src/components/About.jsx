import React from "react";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import mclass1 from "../images/mclass1.jpg";
import instrumentImg from "../images/mclass2.jpg";

const About = () => {
  const { t } = useTranslation();

  return (
    <section id="about" className="min-h-screen bg-[#0a0a0a] text-white flex flex-col items-center py-20 px-6">
      <motion.h2
        className="text-4xl font-bold text-yellow-400 mb-6"
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
      >
        {t("about")}
      </motion.h2>

      <motion.div
        className="max-w-4xl text-center space-y-6"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <p className="text-lg leading-relaxed">
          Swaranjali Music Classes is a dedicated platform for learning Indian and Western music. 
          We offer professional training in both vocal and instrumental forms, guided by experienced mentors.
        </p>

        <p className="text-lg leading-relaxed">
          The institute focuses on developing rhythm, melody, and performance skills with personal attention to every learner. 
          We are proudly affiliated with <span className="text-yellow-400 font-semibold">Suro Bharati Sangeet Kala Kendra, Kolkata</span>.
        </p>

        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-6">
          <img
            src={mclass1}
            alt="Music class"
            className="rounded-xl shadow-lg"
          />
          <img
            src={instrumentImg}
            alt="Instruments"
            className="rounded-xl shadow-lg"
          />
        </div>
      </motion.div>
    </section>
  );
};

export default About;
