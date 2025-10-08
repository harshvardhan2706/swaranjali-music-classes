import React from "react";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

const Exams = () => {
  const { t } = useTranslation();

  return (
    <section id="exams" className="min-h-screen bg-black text-white flex flex-col items-center py-20 px-6">
      <motion.h2
        className="text-4xl font-bold text-yellow-400 mb-6"
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
      >
        {t("exams")}
      </motion.h2>

      <motion.div
        className="max-w-3xl text-center space-y-6"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <p className="text-lg leading-relaxed">
          Examinations are conducted under the affiliation of 
          <span className="text-yellow-400 font-semibold"> Suro Bharati Sangeet Kala Kendra, Kolkata</span>. 
          Students receive recognized certifications after successfully completing each level.
        </p>

        <p className="text-lg leading-relaxed">
          These exams evaluate vocal and instrumental proficiency, theory knowledge, and performance skills. 
          Qualified students get official certificates to enhance their musical career.
        </p>

        <a
          href="https://sskalakendra.org/"
          target="_blank"
          rel="noreferrer"
          className="inline-block mt-8"
        >
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="bg-yellow-400 text-black px-6 py-3 rounded-lg font-semibold hover:bg-yellow-500 transition"
          >
            Know More
          </motion.div>
        </a>
      </motion.div>
    </section>
  );
};

export default Exams;
