import React, { useState, useRef } from "react";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

// Import images from src/images so CRA bundles them
import g1 from "../images/img1.jpg";
import g2 from "../images/img2.jpg";
import g3 from "../images/vido1.mp4";
import g4 from "../images/video4.mp4";
import g5 from "../images/video2.mp4";
import g6 from "../images/video3.mp4";

const Gallery = () => {
  const { t } = useTranslation();

  /*
    The galleryItems array supports both images and videos.
    - For images: { type: 'image', src: g1 }
    - For videos: { type: 'video', src: require('../images/sample.mp4') }

    To add a video: put the video file in src/images (e.g. sample.mp4) and import/require it,
    then add an item with type 'video'. Videos are rendered autoplayed, muted, looped and playsInline.
  */
  const galleryItems = [
    { type: "image", src: g1 },
    { type: "image", src: g2 },
    { type: "video", src: g3 },
    { type: "video", src: g4 },
    { type: "video", src: g5 },
    { type: "video", src: g6 },
    // Example video entry (uncomment after adding sample.mp4 to src/images):
    // { type: 'video', src: require('../images/sample.mp4') },
  ];

  // Track muted state per item index (true = muted). Initialize videos muted.
  const [mutedStates, setMutedStates] = useState(
    galleryItems.map((it) => (it.type === "video" ? true : false))
  );

  // Refs to video elements so we can attempt to play when unmuting
  const videoRefs = useRef([]);

  const toggleMute = async (idx) => {
    const newMuted = !mutedStates[idx];
    setMutedStates((prev) => {
      const next = [...prev];
      next[idx] = newMuted;
      return next;
    });

    const videoEl = videoRefs.current[idx];
    if (videoEl) {
      try {
        videoEl.muted = newMuted;
        videoEl.volume = newMuted ? 0 : 1;
        if (!newMuted) {
          // try to play after user interaction
          await videoEl.play();
        }
      } catch (e) {
        console.debug("video play blocked", e);
      }
    }
  };

  return (
    <section id="gallery" className="min-h-screen bg-[#0a0a0a] text-white py-20 px-6">
      <motion.h2
        className="text-4xl font-bold text-yellow-400 text-center mb-4"
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
      >
        {t("galleryTitle")}
      </motion.h2>

      <p className="text-center text-lg text-gray-300 mb-12">{t("galleryDesc")}</p>

      <motion.div
        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-6xl mx-auto"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        {galleryItems.map((item, index) => (
          <div key={index} className="relative rounded-xl overflow-hidden shadow-lg">
            {item.type === "image" ? (
              <motion.img
                src={item.src}
                alt={`Gallery ${index + 1}`}
                className="w-full h-64 object-cover hover:scale-105 transition-transform duration-300"
                whileHover={{ scale: 1.03 }}
              />
            ) : (
              <div className="relative">
                <motion.video
                  ref={(el) => (videoRefs.current[index] = el)}
                  src={item.src}
                  className="w-full h-64 object-cover z-0"
                  autoPlay
                  muted={mutedStates[index]}
                  loop
                  playsInline
                />

                {/* mute/unmute button */}
                <button
                  onClick={() => toggleMute(index)}
                  className="absolute top-2 right-2 z-30 bg-black bg-opacity-60 text-white p-3 rounded-full hover:bg-opacity-80 shadow-lg"
                  aria-label={mutedStates[index] ? "Unmute video" : "Mute video"}
                >
                  {mutedStates[index] ? (
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5L6 9H2v6h4l5 4V5z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M23 9l-6 6" />
                    </svg>
                  ) : (
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5L6 9H2v6h4l5 4V5z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 9.5a3.5 3.5 0 010 5" />
                    </svg>
                  )}
                </button>
              </div>
            )}
          </div>
        ))}
      </motion.div>
    </section>
  );
};

export default Gallery;
