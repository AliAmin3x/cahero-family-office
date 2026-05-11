import React from 'react';

const stats = [
  {
    value: "2M",
    title: "Users and Counting",
    description:
      "With over 2M users worldwide, our platform has become a go-to destination for those seeking quality services.",
  },
  {
    value: "$956M+",
    title: "Shares and Investments",
    description:
      "Billions deployed across high-conviction opportunities, generating consistent returns for our partners.",
  },
  {
    value: "125%",
    title: "Exceeding Success Rate",
    description:
      "Our portfolio companies consistently outperform benchmarks, delivering exceptional results.",
  },
  {
    value: "4.9★",
    title: "Our Users Love Us",
    description:
      "Rated by thousands of investors and entrepreneurs who trust CAHERO to power their ambitions.",
  },
];

const SourceStats = () => {
  return (
    <div className="w-full flex flex-col lg:flex-row flex-wrap my-20 px-6 lg:px-16 gap-12 lg:gap-0">
      {/* Title */}
      <div className="w-full lg:w-2/5 flex items-center justify-center lg:justify-start">
        <div>
          <span className="text-xs font-impact tracking-[0.3em] uppercase text-[#4675ff] mb-3 block">
            By The Numbers
          </span>
          <h1 className="text-white text-4xl sm:text-5xl font-impact leading-tight">
            Successful Stats <br /> of{" "}
            <span className="text-[#4675ff]">CAHERO</span>
            <br />
            Source
          </h1>
          <div className="mt-6 w-12 h-0.5 bg-[#4675ff]" />
        </div>
      </div>

      {/* Stats Grid */}
      <div className="w-full lg:w-3/5 grid grid-cols-1 sm:grid-cols-2 gap-8">
        {stats.map((stat, index) => (
          <div
            key={index}
            className="group p-6 rounded-xl border border-[#1a1a1a] hover:border-[#4675ff]/30 bg-[#050505] hover:bg-[#080a12] transition-all duration-300 cursor-pointer"
          >
            <h2 className="text-4xl sm:text-5xl font-impact text-white group-hover:text-[#4675ff] transition-colors duration-300">
              {stat.value}
            </h2>
            <h3 className="text-sm font-impact tracking-widest uppercase text-[#4675ff]/70 mt-1 group-hover:text-[#4675ff] transition-colors duration-300">
              {stat.title}
            </h3>
            <p className="text-xs font-barlow text-[#444] mt-3 leading-relaxed group-hover:text-[#666] transition-colors duration-300 max-w-xs">
              {stat.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SourceStats;
