"use client";
import { Download, Send } from "lucide-react";
import { motion } from "framer-motion";
import { personalInfo, contactItems, resume } from "../data/userData";

type HeroProps = {
  onTabChange?: (tab: string) => void;
  uiType?: "landing" | "modular";
};

const Hero = ({ onTabChange, uiType }: HeroProps) => {
  return (
    <motion.section
      id="home"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="min-h-[90vh] w-full max-w-6xl mx-auto flex flex-col lg:flex-row items-center justify-center px-4 sm:px-6 lg:px-8 gap-12 lg:gap-16 relative z-10 pt-24 pb-20 scroll-mt-20"
    >
      {/* Background Branding */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none z-0 opacity-[0.09] select-none">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 500 350" className="w-[22rem] md:w-[36rem] h-[15rem] md:h-[25rem]" fill="none">
          <g>
            {/* G (White) */}
            <path d="M 195 70 C 120 70 65 115 65 180 C 65 245 120 290 195 290 C 255 290 285 255 288 210 L 195 210 L 195 180 L 315 180 L 315 220 C 310 275 260 320 190 320 C 95 320 30 250 30 180 C 30 110 95 40 195 40 C 235 40 270 55 295 80 L 270 105 C 250 85 225 70 195 70 Z" fill="#FFFFFF" />
            {/* A (Silver) */}
            <path d="M 335 50 L 375 50 L 460 280 L 418 280 L 396 220 L 250 220 L 250 190 L 386 190 L 355 100 L 318 190 L 285 280 L 245 280 L 335 50 Z" fill="#CBD5E1" />
          </g>
        </svg>
      </div>

      {/* Left Content */}
      <div className="flex-1 text-left max-w-2xl space-y-4 relative z-10">
        <div className="space-y-4">
          {/* Status */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-sm font-bold uppercase tracking-widest"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-500 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
            </span>
            {personalInfo.status}
          </motion.div>

          {/* Name & Role */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8, ease: "circOut" }}
            className="text-4xl sm:text-6xl lg:text-8xl font-black leading-[0.9] tracking-tighter text-white"
          >
            <span className="block">{personalInfo.name}</span>
            <span className="block text-zinc-500 text-3xl sm:text-5xl lg:text-7xl">
              {personalInfo.role}
            </span>
          </motion.h1>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="text-lg md:text-xl text-zinc-400 leading-relaxed max-w-lg"
          >
            {personalInfo.aboutText}
          </motion.p>
        </div>

        {/* Actions */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="flex flex-col sm:flex-row items-center gap-4 pt-4"
        >
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4 w-full sm:w-auto">
            <a
              href="https://www.solvia.codes"
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 sm:flex-none px-6 py-3.5 rounded-full bg-white text-black font-black text-base hover:bg-zinc-100 active:scale-95 transition-all duration-300 flex items-center justify-center gap-2 group shadow-xl shadow-white/10"
            >
              Solvia Codes
            </a>

            <a
              href={resume["software-engineer"]}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 sm:flex-none px-6 py-3.5 rounded-full border border-blue-500/40 bg-blue-500/10 text-blue-300 font-black text-base hover:bg-blue-600 hover:text-white active:scale-95 transition-all duration-300 flex items-center justify-center gap-2 group shadow-xl shadow-blue-500/10"
            >
              Resume
              <Download className="group-hover:translate-y-0.5 transition-transform" size={18} />
            </a>

            <a
              href="#contact"
              onClick={(e) => {
                if (uiType === "modular" && onTabChange) {
                  e.preventDefault();
                  onTabChange("contact");
                } else {
                  e.preventDefault();
                  document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
                }
              }}
              className="flex-1 sm:flex-none px-6 py-3.5 rounded-full bg-blue-600 hover:bg-blue-700 text-white font-black text-base transition-all duration-300 flex items-center justify-center gap-2 group shadow-xl shadow-blue-500/20"
            >
              Get in Touch
              <Send className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" size={18} />
            </a>
          </div>

          {/* Social Icons */}
          <div className="flex items-center gap-6 sm:gap-5 pt-2 sm:pt-0">
            <div className="h-5 w-px bg-white/10 hidden sm:block" />
            {contactItems
              .filter((i) => ["GitHub", "LinkedIn", "Email"].includes(i.label))
              .map((item, idx) => (
                <a
                  key={idx}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-zinc-500 hover:text-white transition-all hover:scale-110 active:scale-95"
                  title={item.label}
                >
                  <item.icon size={26} strokeWidth={2.2} />
                </a>
              ))}
          </div>
        </motion.div>
      </div>

      {/* Right: Avatar */}
      <div className="relative flex-shrink-0">
        <div className="relative">
          {/* Corner Accents */}
          <div className="absolute -top-3 -left-3 w-10 h-10 border-t-2 border-l-2 border-blue-500/60 z-20" />
          <div className="absolute -bottom-3 -right-3 w-10 h-10 border-b-2 border-r-2 border-blue-500/60 z-20" />

          {/* Avatar Container */}
          <div className="relative w-[300px] md:w-[340px] lg:w-[380px] aspect-[3/4] rounded-3xl overflow-hidden border border-white/10 shadow-2xl bg-zinc-950">
            <img
              src={personalInfo.avatarUrl}
              alt={personalInfo.name}
              className="w-full h-full object-cover object-[50%_38%]"
            />
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Hero;
