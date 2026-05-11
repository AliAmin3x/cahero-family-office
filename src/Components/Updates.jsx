import React from "react";
import { CgInsights } from "react-icons/cg";
import { FaMoneyBill } from "react-icons/fa6";
import { RiUserCommunityLine } from "react-icons/ri";
import { HiTrendingUp } from "react-icons/hi";

const updates = [
  {
    icon: <CgInsights size={22} />,
    title: "1.5% growth graph",
    description: "Consistent portfolio performance with steady upward momentum across all sectors.",
  },
  {
    icon: <RiUserCommunityLine size={22} />,
    title: "30-day mentorship",
    description: "Personalized coaching from industry leaders to accelerate your growth.",
  },
  {
    icon: <FaMoneyBill size={22} />,
    title: "Save Money",
    description: "Smart financial strategies that optimize your returns and reduce overhead.",
  },
  {
    icon: <HiTrendingUp size={22} />,
    title: "Investment Growth",
    description: "Maximize your financial growth with data-driven strategic investments.",
  },
];

const Updates = () => {
  return (
    <div className="w-full flex flex-col lg:flex-row gap-12 lg:gap-0">
      <div className="lg:w-1/3 flex flex-col justify-center">
        <span className="text-xs font-impact tracking-[0.3em] uppercase text-[#4675ff] mb-3">
          What's New
        </span>
        <h1 className="text-white font-impact text-3xl sm:text-4xl leading-tight">
          Latest updates<br />for you
        </h1>
        <p className="font-barlow text-sm opacity-40 mt-4 max-w-xs leading-relaxed">
          Important updates and insights from our major platforms and investment ecosystem.
        </p>
        <button className="mt-6 self-start text-xs font-impact tracking-widest uppercase text-[#4675ff] border border-[#4675ff]/30 px-4 py-2 rounded hover:bg-[#4675ff]/10 transition-colors duration-200">
          View All Updates
        </button>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 w-full lg:w-2/3">
        {updates.map((item, i) => (
          <div
            key={i}
            className="group p-5 rounded-xl border border-[#1a1a1a] hover:border-[#4675ff]/30 bg-[#050505] hover:bg-[#080a12] transition-all duration-300 cursor-pointer"
          >
            <div className="w-10 h-10 rounded-lg bg-[#4675ff]/10 flex items-center justify-center text-[#4675ff] mb-4 group-hover:bg-[#4675ff]/20 transition-colors duration-300">
              {item.icon}
            </div>
            <h2 className="text-white font-impact text-lg tracking-wide group-hover:text-[#4675ff] transition-colors duration-300">
              {item.title}
            </h2>
            <p className="font-barlow text-xs text-[#555] mt-2 leading-relaxed group-hover:text-[#777] transition-colors duration-300">
              {item.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Updates;
