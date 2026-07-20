"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Github, ArrowUpRight, ExternalLink, Folder } from "lucide-react";
import clsx from "clsx";
import { projectData } from "../data/userData";

const Projects = ({ limit }: { limit?: number }) => {
  const [activeCategory, setActiveCategory] = useState("all");

  const categories = Array.from(new Set(projectData.map((p) => p.category)));

  const filteredProjects = projectData.filter(
    (p) => activeCategory === "all" || p.category === activeCategory
  );

  const displayProjects = limit ? filteredProjects.slice(0, limit) : filteredProjects;

  return (
    <section id="projects" className="w-full flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8 pt-24 pb-24 text-foreground relative z-10 scroll-mt-24">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true, amount: 0.05 }}
        className="w-full max-w-6xl"
      >
        <div className="flex flex-col items-center mb-10 text-center">
          <span className="text-xs font-black uppercase tracking-widest text-teal-400 mb-3 px-3 py-1 rounded-full bg-teal-500/10 border border-teal-500/20">
            Portfolio Work
          </span>
          <motion.h2
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-3xl md:text-5xl lg:text-6xl font-black mb-4 text-white tracking-tighter"
          >
            Featured Projects
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.1, duration: 0.5 }}
            className="text-base md:text-lg text-zinc-400 max-w-2xl mx-auto font-medium"
          >
            A collection of my recent software engineering projects, web applications, and digital solutions.
          </motion.p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-2 mb-10">
          <button
            onClick={() => setActiveCategory("all")}
            className={clsx(
              "px-4 py-2 rounded-full text-xs font-black transition-all duration-300 uppercase tracking-widest border",
              activeCategory === "all"
                ? "bg-teal-500 text-black border-teal-400 shadow-lg shadow-teal-500/20"
                : "text-zinc-400 border-white/10 hover:border-white/30 hover:text-white"
            )}
          >
            All Projects ({projectData.length})
          </button>
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={clsx(
                "px-5 py-2 rounded-full text-xs font-black transition-all duration-300 uppercase tracking-widest border",
                activeCategory === cat
                  ? "bg-teal-500 text-black border-teal-400 shadow-lg shadow-teal-500/20"
                  : "text-zinc-400 border-white/10 hover:border-white/30 hover:text-white"
              )}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid gap-6 md:grid-cols-2 max-w-6xl mx-auto">
          {displayProjects.map((project) => (
            <motion.div
              key={project.name}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              viewport={{ once: true }}
              className="rounded-3xl p-6 border border-white/10 bg-white/[0.03] hover:border-teal-500/40 hover:bg-white/[0.06] transition-all duration-500 text-left flex flex-col h-full group relative overflow-hidden shadow-xl"
            >
              {/* Header Info */}
              <div className="flex items-center justify-between mb-4">
                <div className="p-3 rounded-2xl bg-teal-500/10 border border-teal-500/20 text-teal-400 group-hover:scale-105 transition-transform">
                  <Folder size={22} />
                </div>
                <span className="text-[11px] font-black uppercase tracking-widest px-3 py-1 rounded-full bg-white/5 border border-white/10 text-zinc-400">
                  {project.category}
                </span>
              </div>

              <h3 className="text-2xl font-bold mb-3 text-white group-hover:text-teal-400 transition-colors">
                {project.name}
              </h3>
              
              <p className="text-sm md:text-base text-zinc-400 mb-6 flex-grow leading-relaxed">
                {project.description}
              </p>

              {/* Tech Stack Badges */}
              <div className="flex flex-wrap gap-1.5 text-xs mb-6">
                {project.tech.map((t) => (
                  <span
                    key={t}
                    className="bg-white/5 border border-white/10 px-3 py-1 rounded-lg text-zinc-300 font-semibold tracking-tight"
                  >
                    {t}
                  </span>
                ))}
              </div>

              {/* Action Buttons */}
              <div className="flex items-center justify-between mt-auto pt-4 border-t border-white/10">
                {project.github ? (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-sm text-zinc-400 hover:text-white transition-colors font-bold group/link"
                  >
                    <Github size={18} className="text-zinc-400 group-hover/link:text-white" />
                    Source Code
                  </a>
                ) : <span />}

                {project.live ? (
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1.5 text-sm font-black text-teal-400 hover:text-teal-300 transition-colors uppercase tracking-widest"
                  >
                    Live Demo <ExternalLink size={16} />
                  </a>
                ) : (
                  <span className="text-xs font-semibold text-zinc-500 italic">Code Repository Only</span>
                )}
              </div>
            </motion.div>
          ))}
        </div>

        {limit && filteredProjects.length > limit && (
          <div className="mt-12 flex justify-center">
            <a
              href="/projects"
              className="px-8 py-3.5 rounded-full border border-teal-500/30 bg-teal-500/10 text-teal-300 font-black text-sm transition-all duration-300 hover:bg-teal-500 hover:text-black flex items-center gap-2 group shadow-lg shadow-teal-500/10"
            >
              View All Projects ({filteredProjects.length})
              <ArrowUpRight className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </a>
          </div>
        )}
      </motion.div>
    </section>
  );
};

export default Projects;
