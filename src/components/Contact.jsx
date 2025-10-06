import React from "react";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

const Contact = () => {
  const { t } = useTranslation();

  return (
    <section id="contact" className="min-h-screen bg-black text-white py-20 px-6">
      <motion.h2 className="text-4xl font-bold text-yellow-400 text-center mb-6" initial={{ opacity: 0, y: -20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
        {t("contact")}
      </motion.h2>

      <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
        <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 0.8 }}>
          <p className="text-lg text-gray-300 mb-4">{t("address")}</p>
          <p className="text-lg text-gray-300 mb-4">{t("phone")}</p>
          <p className="text-lg text-gray-300 mb-4">{t("whatsapp")}</p>

          <div className="flex space-x-4 mt-4">
            <a href="#" aria-label="facebook" className="text-gray-300 hover:text-yellow-400">Facebook</a>
            <a href="#" aria-label="instagram" className="text-gray-300 hover:text-yellow-400">Instagram</a>
            <a href="#" aria-label="youtube" className="text-gray-300 hover:text-yellow-400">YouTube</a>
          </div>
        </motion.div>

        <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 0.8 }}>
          <iframe
            title="maps"
            src={t("googleMapsEmbed")}
            width="100%"
            height="300"
            className="rounded-lg border-0"
            loading="lazy"
          ></iframe>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
