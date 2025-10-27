import React from "react";
import { motion } from "framer-motion";
import { div } from "framer-motion/client";

const steps = [
  {
    number: "1",
    title: "Discovery & Planning",
    description:
      "We deep dive into your requirements, understand your business goals, analyze competitors, and create a comprehensive project roadmap with clear milestones.",
  },
  {
    number: "2",
    title: "Design & Prototype",
    description:
      "Our design team creates intuitive wireframes, stunning UI mockups, and interactive prototypes that bring your vision to life before development begins.",
  },
  {
    number: "3",
    title: "Development & Testing",
    description:
      "Expert developers write clean, scalable code while our QA team performs rigorous testing to ensure flawless functionality across all devices and platforms.",
  },
  {
    number: "4",
    title: "Deployment & Support",
    description:
      "We handle the complete deployment process and provide ongoing maintenance, updates, and 24/7 technical support to keep your solution running smoothly.",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.25,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30, scale: 0.95 },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      type: "spring",
      stiffness: 80,
      damping: 12,
    },
  },
  hover: {
    scale: 1.03,
    boxShadow: "0px 8px 25px rgba(129, 80, 240, 0.2)",
    transition: { duration: 0.3 },
  },
};

const Process = () => {
  return (
    // <div>
    //   <div className="flex flex-col items-center gap-5">
    //     <h1 className="text-6xl font-bold text-[#8150F0]">
    //       Our Development Process
    //     </h1>
    //     <p className="text-[#e3e0e0] text-xl font-medium text-center">
    //       A proven methodology that ensures quality, efficiency, and client
    //       satisfaction
    //     </p>
    //   </div>

    //   <div className="flex flex-col gap-5 px-20 py-5">
    //     {steps.map((data) => (
    //       <div className="bg-[white] flex flex-col items-center rounded p-10 gap-2">
    //         <h2 className="text-2xl font-semibold">{data.title}</h2>
    //         <p className="w-[70%] font-medium text-[#848282]">{data.description}</p>
    //       </div>
    //     ))}
    //   </div>
    // </div>

    <motion.div
      initial="hidden"
      animate="show"
      variants={containerVariants}
      className="min-h-screen flex flex-col items-center py-10"
    >
      {/* Header */}
      <motion.div
        className="flex flex-col items-center gap-5 mb-10"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h1 className="text-5xl md:text-6xl font-bold text-[#8150F0] text-center">
          Our Development Process
        </h1>
        <p className="text-[#e3e0e0] text-lg md:text-xl font-medium text-center max-w-2xl">
          A proven methodology that ensures quality, efficiency, and client satisfaction
        </p>
      </motion.div>

      {/* Steps */}
      <motion.div
        variants={containerVariants}
        className="flex flex-col gap-6 px-8 md:px-20 w-full max-w-5xl"
      >
        {steps.map((data, index) => (
          <motion.div
            key={index}
            variants={cardVariants}
            whileHover="hover"
            className="bg-white flex flex-col items-center text-center rounded-2xl p-10 gap-3 shadow-md"
          >
            <h2 className="text-2xl font-semibold text-[#8150F0]">
              {data.title}
            </h2>
            <p className="text-[#6f6f6f] font-medium max-w-[80%]">
              {data.description}
            </p>
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
    
  );
};

export default Process;
