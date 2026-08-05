import { useState, lazy, Suspense, useEffect, useRef } from "react";
import Navbar from "./components/Navbar";
import GlobalBackground from "./components/Background";
import BottomNavBar from "./components/BottomNavBar";
import Hero from "./sections/Hero";
import About from "./pages/About";
import Skills from "./pages/Skills";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";

const TerminalMode = lazy(() => import("./terminal/TerminalMode"));

import { Routes, Route, Navigate } from "react-router-dom";

const App = () => {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const audioSrc = `${import.meta.env.BASE_URL}assets/sound/WhatsApp%20Audio%202026-08-05%20at%2012.55.12%20AM.ogg`;

  const [theme, setTheme] = useState<"dark" | "light">(() => {
    if (typeof window !== "undefined") {
      return (localStorage.getItem("site-theme") as "dark" | "light") || "dark";
    }
    return "dark";
  });

  const [terminalMode, setTerminalMode] = useState(() => {
    if (typeof window !== "undefined") {
      return localStorage.getItem("terminal-mode") === "true";
    }
    return false;
  });
  
  const [uiType, setUiType] = useState<"landing" | "modular">(() => {
    if (typeof window !== "undefined") {
      return (localStorage.getItem("ui-type") as "landing" | "modular") || "landing";
    }
    return "landing";
  });

  const handleTerminalToggle = (value: boolean) => {
    setTerminalMode(value);
    localStorage.setItem("terminal-mode", String(value));
  };

  const [activeTab, setActiveTab] = useState("home");

  const handleUiToggle = (type: "landing" | "modular") => {
    setUiType(type);
    localStorage.setItem("ui-type", type);
  };

  const handleThemeToggle = () => {
    const nextTheme = theme === "dark" ? "light" : "dark";
    setTheme(nextTheme);
    localStorage.setItem("site-theme", nextTheme);
  };

  useEffect(() => {
    const audio = audioRef.current;

    if (!audio) return;

    const startAudio = async () => {
      try {
        audio.volume = 1;
        audio.currentTime = 0;
        audio.loop = true;
        await audio.play();
      } catch (error) {
        console.warn("Background audio could not start automatically:", error);
      }
    };

    void startAudio();

    const handleUserInteraction = () => {
      void startAudio();
    };

    window.addEventListener("pointerdown", handleUserInteraction, { once: true });
    window.addEventListener("keydown", handleUserInteraction, { once: true });

    return () => {
      window.removeEventListener("pointerdown", handleUserInteraction);
      window.removeEventListener("keydown", handleUserInteraction);
    };
  }, []);

  const renderModularUI = () => {
    switch (activeTab) {
      case "home": return <Hero uiType={uiType} onTabChange={setActiveTab} />;
      case "about": return <About />;
      case "skills": return <Skills />;
      case "projects": return <Projects />;
      case "contact": return <Contact />;
      default: return <Hero uiType={uiType} onTabChange={setActiveTab} />;
    }
  };

  return (
    <>
      <audio ref={audioRef} src={audioSrc} preload="auto" />
      <div className={`w-full min-h-screen bg-background text-foreground relative ${theme} theme-${theme}`}>
      <GlobalBackground theme={theme} />
      <Navbar
        terminalMode={terminalMode}
        setTerminalMode={handleTerminalToggle}
        uiType={uiType}
        setUiType={handleUiToggle}
        theme={theme}
        onThemeToggle={handleThemeToggle}
      />

      {!terminalMode ? (
        <main className="w-full">
          {uiType === "landing" ? (
            <Routes>
              <Route path="/" element={
                <>
                  <Hero uiType={uiType} onTabChange={setActiveTab} />
                  <About />
                  <Projects limit={6} />
                  <Skills />
                  <Contact />
                  <BottomNavBar />
                </>
              } />
              <Route path="/projects" element={
                <div>
                  <Projects />
                  <div className="flex justify-center pb-24">
                    <a href="/" className="px-8 py-4 rounded-full border border-white/10 text-zinc-400 font-bold hover:bg-white/5 hover:text-white transition-all">
                      ← Back to Home
                    </a>
                  </div>
                </div>
              } />
              <Route path="*" element={<Navigate to="/" replace />} />
            </Routes>
          ) : (
            <div>
              {renderModularUI()}
              <BottomNavBar forcedTab={activeTab} setForcedTab={setActiveTab} />
            </div>
          )}
        </main>
      ) : (
        <Suspense fallback={<div className="min-h-screen bg-black text-green-500 font-mono p-8">Loading Terminal...</div>}>
          <TerminalMode
            setTerminalMode={handleTerminalToggle}
            setUiType={handleUiToggle}
          />
        </Suspense>
      )}
      </div>
    </>
  );
};

export default App;
