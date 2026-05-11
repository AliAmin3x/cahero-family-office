import React from "react";
import { FaArrowRight } from "react-icons/fa";

const platformsData = [
  {
    image: "Images/Cahero Source.png",
    title: "Cahero Source",
    description:
      "We offer exclusive private investment opportunities to support high-potential projects and drive growth.",
  },
  {
    image: "Images/Cahero C.png",
    title: "Cahero Catalyst",
    description:
      "A strategic platform that accelerates innovative projects, turning ideas into reality.",
  },
  {
    image: "Images/Cahero Unity_512x512 for any favicon 2 1.png",
    title: "Cahero Unity",
    description:
      "Connecting investors and entrepreneurs to create a thriving ecosystem of collaboration and success.",
  },
  {
    image: "Images/Cahero A.png",
    title: "Cahero Ascension",
    description:
      "Empowering businesses with the resources they need to scale and dominate their industries.",
  },
  {
    image: "Images/Cahero L.png",
    title: "Cahero Legacy",
    description:
      "Building a sustainable future through strategic investments and long-term vision.",
  },
  {
    image: "Images/Cahero Unity_512x512 for any favicon 2 1.png",
    title: "Cahero Evolution",
    description:
      "Transforming industries with cutting-edge technology and disruptive innovation.",
  },
];

const Platforms = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-6 lg:p-10 bg-black">
      {platformsData.map((platform, index) => (
        <div
          key={index}
          className="group relative border border-[#1e1e1e] hover:border-[#4675ff]/40 bg-[#080808] hover:bg-[#0a0c14] p-6 rounded-xl flex flex-row gap-5 transition-all duration-300 hover:shadow-xl hover:shadow-[#4675ff]/5 hover:-translate-y-0.5 cursor-pointer"
        >
          <div className="absolute top-0 right-0 w-px h-10 bg-gradient-to-b from-[#4675ff]/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          <div className="absolute top-0 right-0 h-px w-10 bg-gradient-to-l from-[#4675ff]/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

          <div className="flex-shrink-0">
            <div className="w-12 h-12 rounded-lg bg-[#4675ff]/10 flex items-center justify-center group-hover:bg-[#4675ff]/20 transition-colors duration-300">
              <img src={platform.image} alt={platform.title} className="w-8 h-8 object-contain" />
            </div>
          </div>

          <div className="flex flex-col flex-1 justify-between">
            <div>
              <h1 className="text-white text-base font-impact tracking-wide group-hover:text-[#4675ff] transition-colors duration-300">
                {platform.title}
              </h1>
              <p className="text-[#555] text-xs mt-1.5 leading-relaxed group-hover:text-[#888] transition-colors duration-300">
                {platform.description}
              </p>
            </div>
            <div className="flex items-center gap-1.5 text-[#4675ff] text-xs font-impact tracking-widest uppercase mt-4 opacity-0 group-hover:opacity-100 transition-all duration-300 -translate-x-1 group-hover:translate-x-0">
              Explore <FaArrowRight size={10} />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Platforms;
