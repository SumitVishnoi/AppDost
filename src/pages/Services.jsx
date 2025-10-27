import React from "react";

const ServiceCard = ({ icon, title, description, points }) => {
  return (
    <div className="group perspective:[1000px] w-full">
      {/* Inner wrapper for 3D flip */}
      <div className="relative w-full h-[60vh] transition-transform duration-700 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
        
        {/* Front Side */}
        <div className="absolute inset-0 bg-white rounded-xl p-5 flex flex-col justify-center gap-5 shadow-lg backface-visibility:hidden">
          <div className="flex justify-center text-5xl">{icon}</div>
          <h2 className="text-2xl font-semibold text-center">{title}</h2>
          
          
        </div>

        {/* Back Side */}
        <div className="absolute inset-0 bg-[#8150F0] text-white rounded-xl p-5 flex flex-col items-center justify-center text-center [transform:rotateY(180deg)] [backface-visibility:hidden]">
          <h3 className="text-3xl font-semibold mb-3 text-[#8150F0] text-shadow-lg text-shadow-white">More Info</h3>
          <p className="font-medium text-lg  text-center">{description}</p>
          <ul className="mt-2 text-start">
            {points.map((item, i) => (
              <li key={i} className="font-medium text-gray-300">
                {item}
              </li>
            ))}
          </ul>
        </div>

      </div>
    </div>
  );
};

const Services = () => {
  const data = [
    {
      icon: "📱",
      title: "Android App Development",
      description:
        "Custom Android applications built with the latest technologies to bring your ideas to life.",
      points: [
        "Native & Hybrid Apps",
        "Play Store Deployment",
        "Maintenance & Support",
      ],
    },
    {
      icon: "💻",
      title: "Web Development",
      description:
        "Responsive and high-performance web applications using modern frameworks.",
      points: ["Frontend & Backend", "API Integration", "SEO Optimization"],
    },
    {
      icon: "☁️",
      title: "Cloud Solutions",
      description:
        "Secure cloud-based architecture and deployment for scalability and efficiency.",
      points: ["AWS & Azure", "Cloud Migration", "Monitoring & Optimization"],
    },
    {
      icon: "🛍️",
      title: "E-Commerce Development",
      description:
        "Build feature-rich online stores that boost sales and enhance customer experience.",
      points: ["Shopify / MERN", "Payment Integration", "Inventory Management"],
    },
    {
      icon: "🤖",
      title: "AI & Automation",
      description:
        "Integrate AI models to automate tasks, enhance decision-making, and optimize workflows.",
      points: ["ML Models", "Data Processing", "Predictive Analytics"],
    },
    {
      icon: "🎨",
      title: "UI/UX Design",
      description:
        "Design visually stunning and user-friendly interfaces that engage your audience.",
      points: ["Wireframes & Prototypes", "Modern UI Trends", "User Testing"],
    },
  ];

  return (
    <div className="w-full p-5">
      <div className="w-full flex flex-col items-center gap-5">
        <h1 className="text-6xl text-[#8150F0] text-shadow-sm text-shadow-[#8150F0] font-bold text-center">Our Services</h1>
        <p className="text-[#e3e0e0] text-xl font-medium text-center">
          We deliver end-to-end IT solutions that drive business growth and digital transformation
        </p>
      </div>

      <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6">
        {data.map((service, index) => (
          <ServiceCard key={index} {...service} />
        ))}
      </div>
    </div>
  );
};

export default Services;
