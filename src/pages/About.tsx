"use client";

import { motion, AnimatePresence } from "framer-motion";
import { certifications, education, experience, facts, timeline, personalInfo } from "../data/userData";
import { useState } from "react";
import { Plus, Minus } from "lucide-react";

const About = () => {
  const [expandedIds, setExpandedIds] = useState<Record<number, boolean>>({});

  const toggleExpand = (index: number) => {
    setExpandedIds((prev) => ({ ...prev, [index]: !prev[index] }));
  };

  return (
    <section id="about" className="w-full flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8 pt-32 pb-24 min-h-screen text-foreground relative z-10 scroll-mt-32">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="w-full max-w-6xl"
      >
        <div className="flex flex-col items-center mb-12 text-center">
          <motion.h2
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-3xl md:text-5xl lg:text-6xl font-black mb-6 text-white tracking-tighter"
          >
            Who Am I
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="text-base md:text-lg lg:text-xl text-zinc-500 max-w-2xl mx-auto font-medium"
          >
            A chronological journey through professional evolution and engineering milestones.
          </motion.p>
        </div>

        {/* Intro */}
        <div className="grid lg:grid-cols-5 gap-12 items-start mb-12">
          <div className="lg:col-span-3">
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1, duration: 0.6 }}
              className="text-base md:text-xl lg:text-2xl text-zinc-400 leading-relaxed font-medium"
            >
              {personalInfo.aboutText1}
              {personalInfo.college && personalInfo.collegeUrl && (
                <a
                  href={personalInfo.collegeUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white hover:text-blue-500 underline decoration-blue-500/30 transition-colors"
                >
                  {personalInfo.college}
                </a>
              )}
              {personalInfo.aboutText2}
            </motion.p>
          </div>

          <div className="lg:col-span-2 flex flex-wrap gap-2">
            {facts.map((fact, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: i * 0.05, duration: 0.4 }}
                className="px-4 py-2 rounded-xl text-xs font-black uppercase tracking-widest border border-white/5 bg-white/[0.02] text-zinc-500 hover:text-white hover:border-blue-500/30 transition-all duration-300"
              >
                {fact}
              </motion.div>
            ))}
          </div>
        </div>

        {/* Education */}
        <div className="mb-16">
          <div className="flex flex-col items-center mb-8 text-center">
            <h3 className="text-sm font-black text-blue-600 uppercase tracking-[0.3em]">
              Education
            </h3>
            <div className="h-px w-24 bg-blue-600/30" />
          </div>

          <div className="grid gap-4 max-w-3xl mx-auto">
            {education.map((item, i) => (
              <motion.div
                key={`${item.degree}-${item.institute}`}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.08, duration: 0.4 }}
                className="p-5 rounded-3xl border border-white/5 bg-white/[0.02] hover:border-blue-500/30 hover:bg-white/[0.04] transition-all duration-500 text-left"
              >
                <p className="text-xs font-black text-zinc-500 uppercase tracking-widest mb-2">
                  {item.years}
                </p>
                <h4 className="text-xl font-bold text-white mb-2">{item.degree}</h4>
                <p className="text-blue-500 font-bold mb-3">{item.institute}</p>
                <p className="text-zinc-400 leading-relaxed">{item.details}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Experience */}
        <div className="mb-16">
          <div className="flex flex-col items-center mb-8 text-center">
            <h3 className="text-sm font-black text-blue-600 uppercase tracking-[0.3em]">
              Experience
            </h3>
            <div className="h-px w-24 bg-blue-600/30" />
          </div>

          <div className="grid gap-4 max-w-3xl mx-auto">
            {experience.map((item, i) => (
              <motion.div
                key={`${item.role}-${item.company}`}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.08, duration: 0.4 }}
                className="p-5 rounded-3xl border border-white/5 bg-white/[0.02] hover:border-blue-500/30 hover:bg-white/[0.04] transition-all duration-500 text-left"
              >
                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-2 mb-3">
                  <div>
                    <h4 className="text-xl font-bold text-white">{item.role}</h4>
                    <p className="text-blue-500 font-bold">{item.company}</p>
                  </div>
                  <div className="text-left md:text-right">
                    <p className="text-xs font-black text-zinc-500 uppercase tracking-widest">
                      {item.years}
                    </p>
                    <p className="text-sm text-zinc-500 font-medium">{item.location}</p>
                  </div>
                </div>
                <ul className="space-y-2 text-zinc-400 leading-relaxed">
                  {item.responsibilities.map((responsibility) => (
                    <li key={responsibility} className="flex gap-3">
                      <span className="mt-2 h-1.5 w-1.5 rounded-full bg-blue-500 flex-shrink-0" />
                      <span>{responsibility}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Certifications */}
        <div className="mb-16">
          <div className="flex flex-col items-center mb-8 text-center">
            <h3 className="text-sm font-black text-blue-600 uppercase tracking-[0.3em]">
              Certifications
            </h3>
            <div className="h-px w-24 bg-blue-600/30" />
          </div>

          <div className="grid gap-4 md:grid-cols-2 max-w-3xl mx-auto">
            {certifications.map((cert, i) => (
              <motion.div
                key={`${cert.name}-${cert.issuer}`}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.08, duration: 0.4 }}
                className="p-5 rounded-3xl border border-white/5 bg-white/[0.02] hover:border-blue-500/30 hover:bg-white/[0.04] transition-all duration-500 text-left"
              >
                <p className="text-xs font-black text-zinc-500 uppercase tracking-widest mb-2">
                  {cert.year}
                </p>
                <h4 className="text-xl font-bold text-white mb-2">{cert.name}</h4>
                <p className="text-zinc-400 font-medium">{cert.issuer}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Timeline Header */}
        <div className="flex flex-col items-center mb-12 text-center">
          <h3 className="text-sm font-black text-blue-600 uppercase tracking-[0.3em]">
            Timeline
          </h3>
          <div className="h-px w-24 bg-blue-600/30" />
        </div>

        {/* Timeline Grid */}
        <div className="max-w-3xl mx-auto text-left relative border-l border-white/10 ml-4 md:mx-auto pl-8">
          {timeline.map((item, i) => {
            const hasMore = "more" in item && typeof item.more === "string";

            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                className="mb-10 relative group last:mb-0"
              >
                {/* Node Dot */}
                <span className="absolute flex h-4 w-4 rounded-full bg-black border-2 border-blue-600 -left-[41px] top-1.5 transition-all duration-500 group-hover:bg-blue-600 shadow-[0_0_15px_rgba(37,99,235,0.3)]" />

                <div className="flex flex-col gap-2">
                  <span className="text-xs font-black text-zinc-500 uppercase tracking-widest">
                    {item.year}
                  </span>

                  <div className="p-4 rounded-3xl border border-white/5 bg-white/[0.01] hover:bg-white/[0.03] hover:border-white/10 transition-all duration-500 relative overflow-hidden">
                    <p className="text-lg md:text-xl font-bold text-white leading-relaxed">
                      {item.detail}
                    </p>

                    <AnimatePresence>
                      {expandedIds[i] && (
                        <motion.p
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: "auto" }}
                          exit={{ opacity: 0, height: 0 }}
                          className="text-zinc-500 mt-2 text-base leading-relaxed"
                        >
                          {item.more}
                        </motion.p>
                      )}
                    </AnimatePresence>

                    {hasMore && (
                      <button
                        onClick={() => toggleExpand(i)}
                        className="mt-4 flex items-center gap-2 text-xs font-black uppercase tracking-widest text-blue-600 hover:text-blue-400 transition-colors"
                      >
                        {expandedIds[i] ? (
                          <><Minus size={14} /> Show Less</>
                        ) : (
                          <><Plus size={14} /> Read Insight</>
                        )}
                      </button>
                    )}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </motion.div>
    </section>
  );
};

export default About;
