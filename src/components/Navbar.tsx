"use client";

import { useState, useEffect } from "react";
import { Terminal, Code2, Github, Star, Moon, Sun } from "lucide-react";
import { personalInfo } from "../data/userData";

type Props = {
  terminalMode: boolean;
  setTerminalMode: (v: boolean) => void;
  uiType?: "landing" | "modular";
  setUiType?: (v: "landing" | "modular") => void;
  theme: "dark" | "light";
  onThemeToggle: () => void;
};

const Navbar = ({ terminalMode, setTerminalMode, uiType, setUiType, theme, onThemeToggle }: Props) => {
  const [stars, setStars] = useState<number | null>(null);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    fetch("https://api.github.com/users/GhayasAwan")
      .then((res) => res.json())
      .then((data) => {
        if (typeof data.public_repos === "number") {
          setStars(data.public_repos);
        }
      })
      .catch((err) => console.error("Failed to fetch GitHub profile", err));
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${terminalMode ? "py-0" : scrolled ? "py-3" : "py-4"
        }`}
    >
      <div className={`mx-auto transition-all duration-500 ${terminalMode ? "max-w-full px-0 mt-2" : "max-w-7xl px-2 sm:px-4 lg:px-6"
        }`}>
        <div
          className={`relative flex items-center justify-between px-2 sm:px-4 transition-all duration-500 ${terminalMode
            ? "bg-black text-green-400 border-b border-green-500/30 rounded-none py-2"
            : `py-3 rounded-2xl border ${scrolled
              ? "bg-black/80 backdrop-blur-xl border-white/10 shadow-2xl"
              : "bg-transparent border-transparent"
            }`
            }`}
        >
          {/* Logo */}
          <a
            href="/"
            onClick={(e) => {
              if (terminalMode) {
                e.preventDefault();
              }
            }}
            className="flex items-center gap-2 group"
          >
            <div className={`p-2 rounded-xl border transition-all duration-300 ${terminalMode ? "border-green-500/50 bg-green-500/10" : "border-white/10 bg-white/5 group-hover:border-blue-500/50"
              }`}>
              {terminalMode ? (
                <Terminal size={22} className="text-green-500" />
              ) : (
                <svg width="22" height="22" viewBox="0 0 500 350" fill="none" className="w-5 h-5">
                  <path d="M 195 70 C 120 70 65 115 65 180 C 65 245 120 290 195 290 C 255 290 285 255 288 210 L 195 210 L 195 180 L 315 180 L 315 220 C 310 275 260 320 190 320 C 95 320 30 250 30 180 C 30 110 95 40 195 40 C 235 40 270 55 295 80 L 270 105 C 250 85 225 70 195 70 Z" fill="#FFFFFF" />
                  <path d="M 335 50 L 375 50 L 460 280 L 418 280 L 396 220 L 250 220 L 250 190 L 386 190 L 355 100 L 318 190 L 285 280 L 245 280 L 335 50 Z" fill="#CBD5E1" />
                </svg>
              )}
            </div>
            <div className="relative">
              <span className="font-black text-2xl tracking-tighter uppercase text-white flex items-baseline">
                Ghayas<span className={`text-[17px] ml-0.5 transition-colors ${terminalMode ? "text-zinc-500 group-hover:text-green-500" : "text-zinc-500 group-hover:text-blue-500"}`}>Awan</span>
              </span>
              <div className={`absolute -bottom-0.5 left-0 h-1 rounded-full transition-all duration-300 w-0 group-hover:w-full ${terminalMode ? "bg-green-500 shadow-[0_0_10px_rgba(34,197,94,0.5)]" : "bg-blue-500 shadow-[0_0_10px_rgba(59,130,246,0.5)]"}`} />
            </div>
          </a>

          {/* Controls */}
          <div className="flex items-center gap-2">
            <a
              href={personalInfo.githubUrl}
              target="_blank"
              className="flex items-center gap-2 px-3 py-1.5 rounded-xl border border-white/5 bg-white/5 hover:bg-white/10 transition-all group"
            >
              <Github size={22} className="text-zinc-400 group-hover:text-white transition-colors" />
              {stars !== null && (
                <span className="flex items-center text-base font-black text-zinc-500 group-hover:text-white transition-colors">
                  <Star size={18} className="text-yellow-500 fill-yellow-500 mr-1" />
                  {stars}
                </span>
              )}
            </a>

            {!terminalMode && (
              <button
                onClick={onThemeToggle}
                className="p-2 rounded-xl border border-white/5 bg-white/5 text-zinc-400 hover:text-white hover:border-white/20 hover:bg-white/10 transition-all duration-300"
                title={`Switch to ${theme === "dark" ? "Light" : "Dark"} Theme`}
                aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} theme`}
              >
                {theme === "dark" ? <Sun size={22} /> : <Moon size={22} />}
              </button>
            )}

            <button
              onClick={() => setTerminalMode(!terminalMode)}
              className={`p-2 rounded-xl border transition-all duration-300 ${terminalMode
                ? "border-green-500/50 bg-green-500/20 text-green-400"
                : "border-white/5 bg-white/5 text-zinc-400 hover:text-white hover:border-white/20"
                }`}
              title="Toggle Terminal"
            >
              <Terminal size={22} />
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
