import React from "react";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <div className="w-full min-h-[90vh] bg-[#0e0e0e] flex flex-col md:flex-row items-center justify-between px-10 py-16 overflow-hidden relative">

      <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-[#8150F0]/20 blur-[180px] rounded-full" />
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-[#4b00ff]/10 blur-[180px] rounded-full" />

      <motion.div
        initial={{ opacity: 0, x: -60 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        className="w-full md:w-1/2 z-10 flex flex-col gap-6"
      >

        <motion.div
          whileHover={{ scale: 1.05 }}
          className="flex items-center gap-3 bg-white/10 border border-white/20 backdrop-blur-lg px-5 py-2 rounded-full w-fit text-white text-sm shadow-md"
        >
          🚀 <span>Complete IT Solution Provider Since 2025</span>
        </motion.div>

        <h1 className="text-5xl md:text-6xl font-extrabold text-white leading-tight">
          Transform Your Ideas Into{" "}
          <span className=" bg-[#8150F0] from-[#8150F0] to-[#A88CF0] bg-clip-text text-transparent">
            Digital Reality
          </span>
        </h1>

        <p className="text-[#d1cfcf] text-lg leading-relaxed">
          Your trusted partner for comprehensive IT solutions. From mobile apps
          to enterprise software, we bring innovation, precision, and excellence
          to every project.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 mt-3">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="py-4 px-6 bg-[#8150F0] text-white font-medium rounded-lg border-2 border-[#8150F0] transition-all hover:shadow-[0_0_20px_#8150F0]"
          >
            Explore Our Services
          </motion.button>

          <motion.button
            whileHover={{ scale: 1.05, backgroundColor: "#8150F0" }}
            whileTap={{ scale: 0.95 }}
            className="py-4 px-6 bg-transparent text-white font-medium rounded-lg border-2 border-[#8150F0] hover:bg-[#8150F0]/20 transition-all"
          >
            Get Free Consultation
          </motion.button>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, x: 60 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        className="w-full md:w-1/2 mt-10 md:mt-0 hover:shadow-[#8150F0] z-10 bg-[#1a1a1a]/70 backdrop-blur-md border border-[#ffffff20] rounded-2xl shadow-md p-10 flex flex-col gap-8"
      >
        <h2 className="text-3xl font-semibold text-center text-white">
          Get In Touch
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-white">
          <div className="flex flex-col gap-4">
            <div>
              <h3 className="font-medium text-xl">🌐 Website</h3>
              <a
                href="https://appdost.in/"
                target="_blank"
                rel="noreferrer"
                className="text-[#c8bfff] hover:underline"
              >
                www.appdost.in
              </a>
            </div>
            <div>
              <h3 className="font-medium text-xl">📧 Email</h3>
              <a href="mailto:contact@appdost.in" className="text-[#c8bfff]">
                contact@appdost.in
              </a>
              <br />
              <a href="mailto:hr@appdost.in" className="text-[#c8bfff]">
                hr@appdost.in
              </a>
            </div>
          </div>

          <div className="flex flex-col gap-4">
            <div>
              <h3 className="font-medium text-xl">📍 Location</h3>
              <p>HQ — Patna, Motihari, Banka</p>
            </div>
            <div>
              <h3 className="font-medium text-xl">📞 Phone</h3>
              <p>+91 76350 75422</p>
              <p>+91 11692 90750</p>
            </div>
          </div>
        </div>

        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="bg-white cursor-pointer text-[#0e0e0e] font-semibold py-4 rounded-lg shadow-lg hover:bg-[#f3f3f3] transition-all"
        >
          Join Our Team
        </motion.button>
      </motion.div>
    </div>
  );
};

export default Hero;

