import React from "react";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import mlImg from "../images/m-l-gandharv.jpg";
import radhikaImg from "../images/radhika.png";
import harshImg from "../images/pic.jpg";
import narendraImg from "../images/NICKYIMG.jpg";
import deepakImg from "../images/deepak1.png";


const Family = () => {
  const { t } = useTranslation();

  const members = [
    {
      name: "M. L. Gandharv",
      role: "Founder & Mentor",
      about: t("mlAbout"),
      img: mlImg,
    },
    {
      name: "Deepak Gandharv",
      role: "Co-Founder & Mentor",
      about: t("deepakAbout"),
      img: deepakImg
    },
    {
      name: "Radhika Gandharv",
      role: "Mentor",
      about: t("radhikaAbout"),
      img: radhikaImg
    },
        {
      name: "Narendra Kumar Gandharv",
      role: "Mentor",
      about: t("narendraAbout"),
      img: narendraImg
    },
    {
      name: "Harshvardhan Gandharv",
      role: "Mentor, Editorial & Tech Support",
      about: t("harshAbout"),
      img: harshImg
    }
  ];

  return (
    <section id="family" className="min-h-screen bg-black text-white py-20 px-6">
      <motion.h2
        className="text-4xl font-bold text-yellow-400 text-center mb-10"
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
      >
        {t("familyTitle")}
      </motion.h2>

      <div className="flex flex-wrap justify-center gap-10 max-w-6xl mx-auto">
        {members.map((member, index) => (
          <motion.div
            key={index}
            className="bg-[#121212] rounded-2xl p-6 shadow-lg w-80 text-center hover:shadow-yellow-400/30 transition-all duration-300"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.2 }}
          >
            <img
              src={member.img}
              alt={member.name}
              className="w-40 h-40 rounded-full object-cover mx-auto mb-4 border-4 border-yellow-400"
            />
            <h3 className="text-2xl font-bold text-yellow-400">{member.name}</h3>
            <p className="text-sm text-gray-300 mt-1 italic">{member.role}</p>
            <p className="mt-4 text-base text-gray-200 leading-relaxed">
              {member.about}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Family;
