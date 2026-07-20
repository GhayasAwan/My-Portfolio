type GlobalBackgroundProps = {
  theme?: "dark" | "light";
};

const GlobalBackground = ({ theme = "dark" }: GlobalBackgroundProps) => {
  const isLight = theme === "light";

  return (
    <div className={`fixed inset-0 z-0 pointer-events-none overflow-hidden ${isLight ? "bg-[#eef6f8]" : "bg-[#0b1220]"}`}>
      {/* Technical Grid Overlay */}
      <div 
        className={`absolute inset-0 ${isLight ? "opacity-[0.08]" : "opacity-[0.055]"}`}
        style={{ 
          backgroundImage: isLight
            ? `linear-gradient(to right, #0f766e 1px, transparent 1px), linear-gradient(to bottom, #0f766e 1px, transparent 1px)`
            : `linear-gradient(to right, #2dd4bf 1px, transparent 1px), linear-gradient(to bottom, #38bdf8 1px, transparent 1px)`,
          backgroundSize: '44px 44px' 
        }} 
      />
      
      {/* Central Atmosphere Glow */}
      <div className={`absolute top-1/2 left-1/2 w-[60%] h-[60%] blur-[120px] rounded-full animate-pulse-slow ${isLight ? "bg-teal-200/45" : "bg-teal-500/16"}`} />
      <div className={`absolute -top-24 right-[-10%] h-[420px] w-[420px] rounded-full blur-[120px] ${isLight ? "bg-sky-200/55" : "bg-sky-400/12"}`} />
      <div className={`absolute bottom-[-18%] left-[-8%] h-[460px] w-[460px] rounded-full blur-[130px] ${isLight ? "bg-emerald-100/65" : "bg-emerald-400/10"}`} />
      
      {/* Radial Vignette */}
      <div className={`absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] ${isLight ? "from-transparent via-[#eef6f8]/70 to-[#dcecf0] opacity-95" : "from-transparent via-slate-950/34 to-[#0b1220] opacity-90"}`} />
      
      {/* Noise Texture */}
      <div className="absolute inset-0 opacity-[0.025] mix-blend-overlay bg-[url('data:image/svg+xml,%3Csvg%20viewBox=%220%200%20200%20200%22%20xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter%20id=%22noiseFilter%22%3E%3CfeTurbulence%20type=%22fractalNoise%22%20baseFrequency=%220.8%22%20numOctaves=%223%22%20stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect%20width=%22100%25%22%20height=%22100%25%22%20filter=%22url(%23noiseFilter)%22/%3E%3C/svg%3E')]" />
    </div>
  );
};

export default GlobalBackground;
