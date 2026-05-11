import React from "react";
import Navbar from "../../Components/Navbar";
import Updates from "../../Components/Updates";
import Platforms from "../../Components/Platforms";
import SourceBanner from "../../Components/SourceBanner";
import SourceStats from "../../Components/SourceStats";
import AscensionBanner from "../../Components/AscensionBanner";
import AscensionStats from "../../Components/AscensionStats";

const SectionHeader = ({ label, title, subtitle }) => (
  <div className="w-full text-center px-6 mb-2">
    {label && (
      <span className="inline-block text-xs font-impact tracking-[0.3em] uppercase text-[#4675ff] border border-[#4675ff]/30 px-3 py-1 rounded-full mb-4 bg-[#4675ff]/5">
        {label}
      </span>
    )}
    <h1 className="font-impact text-2xl sm:text-4xl text-white">{title}</h1>
    {subtitle && (
      <p className="font-barlow opacity-50 text-sm sm:text-base mt-2 max-w-xl mx-auto">
        {subtitle}
      </p>
    )}
  </div>
);

const Divider = () => (
  <div className="flex items-center justify-center gap-4 my-6 px-16 opacity-20">
    <div className="flex-1 h-px bg-gradient-to-r from-transparent to-white" />
    <div className="w-1 h-1 bg-[#4675ff] rounded-full" />
    <div className="flex-1 h-px bg-gradient-to-l from-transparent to-white" />
  </div>
);

const HomePage = () => {
  return (
    <div className="text-white min-h-screen overflow-x-hidden">
      <Navbar />

      {/* Hero */}
      <div className="relative pt-28 pb-16 w-full flex flex-col-reverse lg:flex-row items-center px-6 lg:px-16 min-h-screen">
        {/* Background glows */}
        <div className="absolute top-1/3 left-1/4 w-96 h-96 bg-[#4675ff]/10 rounded-full blur-[120px] pointer-events-none" />
        <div className="absolute top-1/2 right-1/4 w-64 h-64 bg-[#4675ff]/5 rounded-full blur-[80px] pointer-events-none" />

        <div className="relative lg:w-1/2 flex flex-col justify-center items-center lg:items-start text-center lg:text-left z-10">
          <div className="inline-flex items-center gap-2 bg-[#4675ff]/10 border border-[#4675ff]/20 rounded-full px-4 py-1.5 mb-6">
            <span className="w-1.5 h-1.5 bg-[#4675ff] rounded-full animate-pulse" />
            <span className="text-xs font-impact tracking-widest uppercase text-[#4675ff]">
              Next-Gen Family Office
            </span>
          </div>

          <h1 className="font-impact text-4xl sm:text-5xl lg:text-6xl leading-tight">
            Transforming Growth <br />
            Through{" "}
            <span className="text-[#4675ff]">Innovation</span> &{" "}
            <span className="text-[#4675ff]">Impact</span>
          </h1>

          <p className="font-barlow text-sm sm:text-base mt-6 opacity-50 max-w-lg leading-relaxed">
            Cahero Family Office is a revolutionary platform combining
            investment expertise with personal growth — a dynamic ecosystem
            where financial returns and social impact intersect.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 mt-8">
            <button className="bg-[#4675ff] text-white px-7 py-3 text-sm font-impact tracking-widest uppercase rounded-lg hover:bg-[#5a87ff] transition-all duration-300 hover:shadow-lg hover:shadow-[#4675ff]/30 hover:-translate-y-0.5">
              Visit Platform
            </button>
            <button className="border border-white/20 text-white px-7 py-3 text-sm font-impact tracking-widest uppercase rounded-lg hover:border-[#4675ff]/50 hover:bg-white/5 transition-all duration-300">
              Learn More
            </button>
          </div>

          <div className="flex gap-8 mt-12 pt-8 border-t border-white/10 w-full">
            {[["2M+", "Users"], ["$956M+", "Invested"], ["125%", "Growth"]].map(([val, lbl]) => (
              <div key={lbl}>
                <div className="text-xl font-impact text-[#4675ff]">{val}</div>
                <div className="text-xs font-barlow opacity-40 uppercase tracking-widest">{lbl}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="relative w-full lg:w-1/2 flex justify-center mb-12 lg:mb-0 z-10">
          <div className="relative">
            <div className="absolute inset-0 bg-[#4675ff]/10 rounded-full blur-3xl scale-75" />
            <img
              src="Images/Cahero F.png"
              alt="Cahero F"
              className="relative w-3/4 sm:w-2/3 lg:w-full drop-shadow-2xl"
            />
          </div>
        </div>
      </div>

      {/* Updates */}
      <div className="w-full py-20 px-6 lg:px-16 border-t border-white/5 bg-gradient-to-b from-black to-[#050510]">
        <Updates />
      </div>

      <Divider />

      {/* Platforms */}
      <div className="w-full mt-10 pb-4">
        <SectionHeader
          label="Ecosystem"
          title="Our Platforms"
          subtitle="Exclusive private investment opportunities to support high-potential projects and drive exceptional growth."
        />
        <Platforms />
      </div>

      <Divider />

      {/* Source */}
      <div className="w-full mt-10">
        <SectionHeader
          label="Investments"
          title="CAHERO Source"
          subtitle="Curated investment insights and opportunities from the world's leading financial institutions."
        />
        <SourceBanner />
        <SourceStats />
      </div>

      <Divider />

      {/* Ascension */}
      <div className="w-full mt-10 pb-20">
        <SectionHeader
          label="Growth"
          title="CAHERO Ascension"
          subtitle="Personal development and leadership programs designed to elevate every dimension of your potential."
        />
        <AscensionBanner />
        <AscensionStats />
      </div>
    </div>
  );
};

export default HomePage;
