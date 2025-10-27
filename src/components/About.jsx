import React from "react";

const About = () => {
  const data = [
    {
      number: "1",
      img: "🎨",
      title: "UI/UX Design Excellence",
      description: "Crafting intuitive, user-centric designs that guarantee exceptional user satisfaction and engagement. We believe great design is invisible—it just works."
    },
    {
      number: "2",
      img: "💻",
      title: "Custom Software Development",
      description: "Building robust, scalable enterprise solutions tailored to your unique business requirements. From concept to deployment, we deliver excellence at every stage."
    },
    {
      number: "3",
      img: "🌐",
      title: "Web Application Development",
      description: "Creating responsive, high-performance web applications using the latest frameworks and technologies. Your digital presence, perfected."
    },
    {
      number: "4",
      img: "📱",
      title: "Mobile App Development",
      description: "Developing native and cross-platform mobile applications that users love. iOS, Android, or hybrid—we've got you covered."
    },
    {
      number: "5",
      img: "🔧",
      title: "Full-Stack Development",
      description: "End-to-end development expertise covering frontend elegance, backend power, database optimization, and cloud infrastructure."
    },
    {
      number: "6",
      img: "🚀",
      title: "Digital Transformation Consulting",
      description: "Strategic guidance to help businesses navigate their digital journey, from legacy system modernization to cloud migration."
    },
  ]

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
        {data.map((data, i) => (
          <div
            key={i}
            className="relative w-[90%] bg-[#a2a1a1af] from-[#8150F0] to-[#B682FF] p-0.5 rounded-xl shadow-xl hover:shadow-[#8150F0]/50 transition-shadow duration-500"
          >
            <div className="bg-white rounded-xl p-10 flex flex-col gap-3 h-full 
                            hover:-translate-y-2 hover:scale-[1.03] transition-all duration-500 ease-out">
              <div className="text-5xl">{data.img}</div>
              <h2 className="text-2xl font-semibold">{data.title}</h2>
              <p className="font-medium text-[#848282]">
                {data.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default About;
