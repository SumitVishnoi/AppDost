// // import React from "react";

// // const Testimonial = () => {
// //   return (
// //     <div className="bg-[#0e0e0e]">
// //       <div className="flex justify-between p-5">
// //         <div className="bg-white text-black w-70 flex flex-col items-center p-3 gap-5 rounded">
// //           <div className="w-30 h-30">
// //             <img
// //               className="w-full h-full object-cover"
// //               src="https://discussions.apple.com/assets/avatar/e83f266631646e2e17a8f15569db271e/d6938b3674976ff5b3e900e02129f75388be81af30cb0453e111d6c2d592b33d"
// //               alt=""
// //             />
// //           </div>
// //           <div>
// //             <p className="text-5xl font-bold">10+</p>
// //             <p className="text-xl font-medium">Web Projects</p>
// //           </div>
// //         </div>

// //         <div className="bg-white text-black w-70 flex flex-col items-center p-3 gap-5 rounded">
// //           <div className="w-30 h-30">
// //             <img
// //               className="w-full h-full object-cover"
// //               src="https://static.vecteezy.com/system/resources/previews/041/641/699/non_2x/3d-hand-holding-phone-with-emoji-minimal-social-media-with-emoji-cartoon-minimal-icon-free-png.png"
// //               alt=""
// //             />
// //           </div>
// //           <div>
// //             <p className="text-5xl font-bold">4+</p>
// //             <p className="text-xl font-medium">Android Apps</p>
// //           </div>
// //         </div>

// //         <div className="bg-white text-black w-70 flex flex-col items-center p-3 gap-5 rounded">
// //           <div className="w-30 h-30">
// //             <img
// //               className="w-full h-full object-cover"
// //               src="https://emojigraph.org/media/facebook/direct-hit_1f3af.png"
// //               alt=""
// //             />
// //           </div>
// //           <div>
// //             <p className="text-5xl font-bold">1</p>
// //             <p className="text-xl font-medium">CRM Project</p>
// //           </div>
// //         </div>

// //         <div className="bg-white text-black w-70 flex flex-col items-center p-3 gap-5 rounded">
// //           <div className="w-30 h-30">
// //             <img
// //               className="w-full h-full object-cover"
// //               src="https://emojigraph.org/media/facebook/direct-hit_1f3af.png"
// //               alt=""
// //             />
// //           </div>
// //           <div>
// //             <p className="text-5xl font-bold">1</p>
// //             <p className="text-xl font-medium">CRM Project</p>
// //           </div>
// //         </div>
// //       </div>

// //       <div className="py-20">
// //         <h1 className="text-white text-4xl font-bold text-center mb-10">Why Choose AppDost?</h1>
// //         <div className="flex w-full gap-5">
// //             <div className="flex flex-col gap-5 w-1/2">
// //             <div className="bg-red-300 w-full p-8 flex flex-col justify-center items-end rounded rounded-l-none">
// //           <div>
// //             <h2>Complete Lifecycle Expertise</h2>
// //           <p className="">From ideation to deployment and beyond</p>
// //           </div>
// //         </div>
// //         <div className="bg-red-300 w-full p-8 flex flex-col justify-center items-end rounded rounded-l-none">
// //           <div >
// //             <h2>Cutting-Edge Technology Stack</h2>
// //           <p className="">We work with the latest tools and frameworks</p>
// //           </div>
// //         </div>
// //         <div className="bg-red-300 w-full p-8 flex flex-col justify-center items-end rounded rounded-l-none">
// //           <div>
// //             <h2>Agile Development Process</h2>
// //           <p className="">Fast iterations, continuous feedback, rapid delivery</p>
// //           </div>
// //         </div>
// //         </div>

// //         <div className="flex flex-col gap-5 w-1/2">
// //             <div className="bg-green-300 w-full p-8 flex flex-col justify-center rounded rounded-l-none">
// //           <div>
// //             <h2>Quality-First Approach</h2>
// //           <p className="">Rigorous testing and code reviews ensure excellence</p>
// //           </div>
// //         </div>
// //         <div className="bg-green-300 w-full p-8 flex flex-col justify-center rounded rounded-l-none">
// //           <div >
// //             <h2>Scalable Solutions</h2>
// //           <p className="">Built to grow with your business</p>
// //           </div>
// //         </div>
// //         <div className="bg-green-300 w-full p-8 flex flex-col justify-center rounded rounded-l-none">
// //           <div>
// //             <h2>Client-Centric Focus</h2>
// //           <p className="">Your success is our success</p>
// //           </div>
// //         </div>
// //         </div>
// //         </div>
// //       </div>

// //     </div>
// //   );
// // };

// // export default Testimonial;



// import React from "react";

// const Testimonial = () => {
//   const stats = [
//     {
//       img: "https://discussions.apple.com/assets/avatar/e83f266631646e2e17a8f15569db271e/d6938b3674976ff5b3e900e02129f75388be81af30cb0453e111d6c2d592b33d",
//       count: "10+",
//       label: "Web Projects",
//     },
//     {
//       img: "https://static.vecteezy.com/system/resources/previews/041/641/699/non_2x/3d-hand-holding-phone-with-emoji-minimal-social-media-with-emoji-cartoon-minimal-icon-free-png.png",
//       count: "4+",
//       label: "Android Apps",
//     },
//     {
//       img: "https://emojigraph.org/media/facebook/direct-hit_1f3af.png",
//       count: "1",
//       label: "CRM Project",
//     },
//     {
//       img: "https://cdn-icons-png.flaticon.com/512/992/992651.png",
//       count: "2+",
//       label: "AI Projects",
//     },
//   ];

//   return (
//     <div className="bg-[#0e0e0e] py-20 overflow-hidden">
//       {/* Animated Stats Section */}
//       <div className="flex flex-wrap justify-center gap-8 p-5">
//         {stats.map((stat, i) => (
//           <div
//             key={i}
//             className="bg-[#8150F0] from-[#8150F0] to-[#B682FF] p-0.5 rounded-xl shadow-lg hover:shadow-[#8150F0]/40 transition-all duration-500 ease-out 
//                        animate-fadeUp opacity-0"
//             style={{ animationDelay: `${i * 0.2}s`, animationFillMode: "forwards" }}
//           >
//             <div className="bg-white text-black w-[200px] flex flex-col items-center p-5 gap-5 rounded-xl hover:-translate-y-2 hover:scale-[1.05] transition-transform duration-500 ease-out">
//               <div className="w-24 h-24">
//                 <img
//                   className="w-full h-full object-contain"
//                   src={stat.img}
//                   alt={stat.label}
//                 />
//               </div>
//               <div className="text-center">
//                 <p className="text-5xl font-bold">{stat.count}</p>
//                 <p className="text-xl font-medium">{stat.label}</p>
//               </div>
//             </div>
//           </div>
//         ))}
//       </div>

//       {/* Why Choose Section */}
//       <div className="mt-20">
//         <h1 className="text-white text-4xl font-bold text-center mb-10 animate-fadeUp opacity-0" style={{ animationDelay: "1s", animationFillMode: "forwards" }}>
//           Why Choose AppDost?
//         </h1>

//         <div className="flex flex-col md:flex-row w-full gap-8 px-10">
//           {/* Left Side */}
//           <div className="flex flex-col gap-5 w-full md:w-1/2">
//             {[
//               {
//                 title: "Complete Lifecycle Expertise",
//                 desc: "From ideation to deployment and beyond",
//               },
//               {
//                 title: "Cutting-Edge Technology Stack",
//                 desc: "We work with the latest tools and frameworks",
//               },
//               {
//                 title: "Agile Development Process",
//                 desc: "Fast iterations, continuous feedback, rapid delivery",
//               },
//             ].map((item, i) => (
//               <div
//                 key={i}
//                 className="bg-[#FF9B9B] from-[#FF9B9B] to-[#FFB6B6] p-0.5 rounded-r-xl animate-fadeSlideRight opacity-0"
//                 style={{ animationDelay: `${1.2 + i * 0.2}s`, animationFillMode: "forwards" }}
//               >
//                 <div className="bg-white p-8 rounded-r-xl text-right hover:translate-x-2 transition-all duration-500 ease-out">
//                   <h2 className="text-xl font-bold">{item.title}</h2>
//                   <p className="text-gray-600">{item.desc}</p>
//                 </div>
//               </div>
//             ))}
//           </div>

//           {/* Right Side */}
//           <div className="flex flex-col gap-5 w-full md:w-1/2">
//             {[
//               {
//                 title: "Quality-First Approach",
//                 desc: "Rigorous testing and code reviews ensure excellence",
//               },
//               {
//                 title: "Scalable Solutions",
//                 desc: "Built to grow with your business",
//               },
//               {
//                 title: "Client-Centric Focus",
//                 desc: "Your success is our success",
//               },
//             ].map((item, i) => (
//               <div
//                 key={i}
//                 className="bg-green-300 from-[#8DF5A0] to-[#B1FFCF] p-0.5 rounded-l-xl animate-fadeSlideLeft opacity-0"
//                 style={{ animationDelay: `${1.4 + i * 0.2}s`, animationFillMode: "forwards" }}
//               >
//                 <div className="bg-white p-8 rounded-l-xl text-left hover:-translate-x-2 transition-all duration-500 ease-out">
//                   <h2 className="text-xl font-bold">{item.title}</h2>
//                   <p className="text-gray-600">{item.desc}</p>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Testimonial;


import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";

const Testimonial = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const stats = [
    {
      img: "https://discussions.apple.com/assets/avatar/e83f266631646e2e17a8f15569db271e/d6938b3674976ff5b3e900e02129f75388be81af30cb0453e111d6c2d592b33d",
      count: "10+",
      label: "Web Projects",
    },
    {
      img: "https://static.vecteezy.com/system/resources/previews/041/641/699/non_2x/3d-hand-holding-phone-with-emoji-minimal-social-media-with-emoji-cartoon-minimal-icon-free-png.png",
      count: "4+",
      label: "Android Apps",
    },
    {
      img: "https://emojigraph.org/media/facebook/direct-hit_1f3af.png",
      count: "1",
      label: "CRM Project",
    },
    {
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQn2sLXlyRb17651geH_LAhjVaUWDM98rmWpg&s",
      count: "2025",
      label: "Founded Year",
    },
  ];

  const leftPoints = [
    {
      title: "Complete Lifecycle Expertise",
      desc: "From ideation to deployment and beyond",
    },
    {
      title: "Cutting-Edge Technology Stack",
      desc: "We work with the latest tools and frameworks",
    },
    {
      title: "Agile Development Process",
      desc: "Fast iterations, continuous feedback, rapid delivery",
    },
  ];

  const rightPoints = [
    {
      title: "Quality-First Approach",
      desc: "Rigorous testing and code reviews ensure excellence",
    },
    {
      title: "Scalable Solutions",
      desc: "Built to grow with your business",
    },
    {
      title: "Client-Centric Focus",
      desc: "Your success is our success",
    },
  ];

  return (
    <div
      ref={ref}
      className="bg-[#0e0e0e] py-20 px-5 md:px-10 overflow-hidden relative"
    >
      {/* Background Glow */}
      <div className="absolute top-0 left-0 w-[300px] h-[300px] bg-[#8150F0]/20 blur-[120px] rounded-full"></div>
      <div className="absolute bottom-0 right-0 w-[250px] h-[250px] bg-[#4b00ff]/10 blur-[100px] rounded-full"></div>

      {/* Stats Section */}
      <motion.div
        className="flex flex-wrap justify-center gap-8 p-5 relative z-10"
        initial={{ opacity: 0, y: 80 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8 }}
      >
        {stats.map((stat, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 60 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: i * 0.2, duration: 0.8, ease: "easeOut" }}
            className="bg-gradient-to-br from-[#8150F0] to-[#B682FF] p-[2px] rounded-xl shadow-lg hover:shadow-[#8150F0]/40 transition-all duration-500"
          >
            <div className="bg-white text-black w-[200px] flex flex-col items-center p-5 gap-5 rounded-xl hover:-translate-y-2 hover:scale-[1.05] transition-transform duration-500 ease-out">
              <div className="w-20 h-20">
                <img
                  className="w-full h-full object-contain"
                  src={stat.img}
                  alt={stat.label}
                />
              </div>
              <div className="text-center">
                <p className="text-4xl font-bold">{stat.count}</p>
                <p className="text-lg font-medium">{stat.label}</p>
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>

      {/* Why Choose Section */}
      <motion.h1
        initial={{ opacity: 0, y: 50 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ delay: 0.5, duration: 0.7 }}
        className="text-white text-4xl font-bold text-center my-16"
      >
        Why Choose AppDost?
      </motion.h1>

      {/* Points */}
      <div className="flex flex-col md:flex-row w-full gap-8">
        {/* Left Side */}
        <div className="flex flex-col gap-5 w-full md:w-1/2">
          {leftPoints.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -60 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: 0.7 + i * 0.2, duration: 0.7 }}
              className="bg-gradient-to-r from-[#FF9B9B] to-[#FFB6B6] p-[2px] rounded-r-xl"
            >
              <div className="bg-white p-8 rounded-r-xl text-right hover:translate-x-2 transition-all duration-500 ease-out">
                <h2 className="text-xl font-bold">{item.title}</h2>
                <p className="text-gray-600">{item.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Right Side */}
        <div className="flex flex-col gap-5 w-full md:w-1/2">
          {rightPoints.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: 60 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: 0.9 + i * 0.2, duration: 0.7 }}
              className="bg-gradient-to-l from-[#8DF5A0] to-[#B1FFCF] p-[2px] rounded-l-xl"
            >
              <div className="bg-white p-8 rounded-l-xl text-left hover:-translate-x-2 transition-all duration-500 ease-out">
                <h2 className="text-xl font-bold">{item.title}</h2>
                <p className="text-gray-600">{item.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
