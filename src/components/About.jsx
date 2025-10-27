import React from "react";

const About = () => {
  // const data [
  //   {
  //     img:""
  //   }
  // ]

  return (
    <div className="flex flex-col gap-10">
      <div className="flex flex-col items-center p-5">
        <h1 className="md:text-6xl text-4xl text-white font-bold text-center mb-10 w-[80%]">
          Your Trusted Partner for Complete{" "}
          <span className="text-[#8150F0] text-shadow-sm text-shadow-[#8150F0]">
            Digital Transformation
          </span>
        </h1>
        <p className="w-[80%] text-[#e3e0e0] text-xl font-medium text-center">
          AppDost is your trusted partner for complete digital transformation. We
          are a dynamic, innovation-driven IT solutions provider specializing in
          turning visionary ideas into powerful, market-ready products. Our
          mission is to empower businesses with cutting-edge technology
          solutions that drive growth, enhance user experiences, and create
          lasting digital impact.
        </p>
      </div>

      <div className="w-full flex flex-col items-center gap-5">
        <h1 className="text-6xl text-[#8150F0] text-shadow-sm text-shadow-[#8150F0] font-bold text-center">
          What We Do
        </h1>
        <p className="text-[#e3e0e0] text-xl font-medium">Our Core Expertise</p>
      </div>

      {/* Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 p-5 gap-8 place-items-center">
        {[...Array(6)].map((_, i) => (
          <div
            key={i}
            className="relative w-[90%] bg-[#a2a1a1af] from-[#8150F0] to-[#B682FF] p-0.5 rounded-xl shadow-xl hover:shadow-[#8150F0]/50 transition-shadow duration-500"
          >
            <div className="bg-white rounded-xl p-10 flex flex-col gap-3 h-full 
                            hover:-translate-y-2 hover:scale-[1.03] transition-all duration-500 ease-out">
              <div className="text-5xl">🎨</div>
              <h2 className="text-2xl font-semibold">UI/UX Design Excellence</h2>
              <p className="font-medium text-[#848282]">
                Crafting intuitive, user-centric designs that guarantee
                exceptional user satisfaction and engagement. We believe great
                design is invisible—it just works.
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default About;
