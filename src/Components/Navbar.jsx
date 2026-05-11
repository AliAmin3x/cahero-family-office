import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = ["source", "catalyst", "unity", "ascension", "legacy", "evolution"];

  return (
    <div
      className={`w-full h-16 flex items-center fixed z-50 px-4 md:px-8 lg:px-16 transition-all duration-300 ${
        scrolled
          ? "bg-black/80 backdrop-blur-md border-b border-white/5 shadow-lg shadow-black/40"
          : "bg-transparent"
      }`}
    >
      <div className="w-1/3 flex items-center">
        <Link to="/">
          <img
            src="Images/Cahero Family.png"
            alt="Cahero Family Office"
            className="object-cover h-10 cursor-pointer hover:opacity-80 transition-opacity duration-200"
          />
        </Link>
      </div>

      <div className="w-1/3 flex justify-center">
        <div
          className={`absolute md:relative top-16 left-0 md:top-0 w-full md:w-auto bg-black/95 md:bg-transparent backdrop-blur-md md:backdrop-blur-none flex flex-col md:flex-row items-center space-y-6 md:space-y-0 md:space-x-8 p-6 md:p-0 border-b border-white/5 md:border-none transition-all duration-300 ${
            isOpen ? "flex" : "hidden md:flex"
          }`}
        >
          {navLinks.map((link) => {
            const isActive = location.pathname.toLowerCase() === `/${link.toLowerCase()}`;
            return (
              <Link
                key={link}
                to={`/${link}`}
                className={`relative font-impact text-sm tracking-widest uppercase transition-colors duration-300 group ${
                  isActive ? "text-[#4675ff]" : "text-[#888] hover:text-white"
                }`}
                onClick={() => setIsOpen(false)}
              >
                {link.charAt(0).toUpperCase() + link.slice(1)}
                <span
                  className={`absolute -bottom-1 left-0 h-px bg-[#4675ff] transition-all duration-300 ${
                    isActive ? "w-full" : "w-0 group-hover:w-full"
                  }`}
                />
              </Link>
            );
          })}
        </div>
      </div>

      <div className="w-1/3 flex justify-end items-center gap-4">
        <button className="hidden md:flex items-center gap-2 bg-[#4675ff] hover:bg-[#5a87ff] text-white text-xs font-impact tracking-widest uppercase px-4 py-2 rounded transition-all duration-200 hover:shadow-lg hover:shadow-[#4675ff]/25">
          Get Started
        </button>
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-white focus:outline-none p-1 rounded hover:bg-white/10 transition-colors"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
    </div>
  );
};

export default Navbar;
