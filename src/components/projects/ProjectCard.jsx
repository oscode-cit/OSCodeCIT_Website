import { useState } from "react";
import { motion, AnimatePresence, useMotionTemplate, useMotionValue } from "framer-motion";
import { FaGithub } from "react-icons/fa";
import { ExternalLink, Sparkles, ArrowUpRight, X, Layers, CheckCircle2 } from "lucide-react";

const ProjectCard = ({ project }) => {
  const [isOpen, setIsOpen] = useState(false);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const handleMouseMove = ({ currentTarget, clientX, clientY }) => {
    const { left, top } = currentTarget.getBoundingClientRect();
    mouseX.set(clientX - left);
    mouseY.set(clientY - top);
  };

  return (
    <>
      {/* Clickable Card */}
      <motion.div
        onMouseMove={handleMouseMove}
        onClick={() => setIsOpen(true)}
        className="group relative flex flex-col justify-between overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-b from-[#111936]/80 via-[#0d142c]/85 to-[#090d1f]/95 p-5 backdrop-blur-xl transition-all duration-300 hover:border-[#00A8FF]/60 hover:shadow-[0_12px_35px_-8px_rgba(0,168,255,0.25)] hover:-translate-y-1.5 cursor-pointer h-full sm:p-7"
      >
        <div className="absolute inset-x-0 top-0 h-[2px] bg-gradient-to-r from-cyan-400 via-indigo-500 to-purple-500 opacity-60 transition-opacity duration-300 group-hover:opacity-100" />

        <motion.div
          className="pointer-events-none absolute -inset-px rounded-3xl opacity-0 transition-opacity duration-300 group-hover:opacity-100"
          style={{
            background: useMotionTemplate`
              radial-gradient(300px circle at ${mouseX}px ${mouseY}px, rgba(0, 168, 255, 0.15), transparent 80%)
            `,
          }}
        />

        <div className="relative z-10">
          <div className="flex items-center justify-between gap-3 text-xs">
            <span className="inline-flex items-center gap-1.5 rounded-full border border-cyan-400/30 bg-cyan-400/10 px-3 py-1 font-semibold text-cyan-300">
              <Sparkles size={12} />
              {project.status}
            </span>
            <span className="font-mono text-slate-400 truncate">
              By {project.creator}
            </span>
          </div>

          <h3 className="mt-5 text-xl font-bold text-white tracking-tight group-hover:text-[#00D2FF] transition line-clamp-1">
            {project.title}
          </h3>

          <p className="mt-3 text-sm text-slate-300 leading-relaxed line-clamp-3">
            {project.description}
          </p>

          <div className="mt-6 flex flex-wrap gap-2">
            {project.technologies.slice(0, 3).map((tech) => (
              <span
                key={tech}
                className="rounded-lg border border-white/10 bg-white/4 px-2.5 py-1 text-xs font-mono text-slate-300"
              >
                {tech}
              </span>
            ))}
            {project.technologies.length > 3 && (
              <span className="rounded-lg border border-white/5 bg-white/2 px-2 py-1 text-xs font-mono text-slate-400">
                +{project.technologies.length - 3}
              </span>
            )}
          </div>
        </div>

        <div className="relative z-10 mt-8 pt-5 border-t border-white/10 flex items-center justify-between">
          <span className="text-xs font-mono text-slate-400">
            {project.category}
          </span>

          <span className="flex items-center gap-1 text-xs font-semibold text-[#00D2FF] group-hover:underline">
            View Details <ArrowUpRight size={13} />
          </span>
        </div>
      </motion.div>

      {/* Side-by-Side Modal */}
      <AnimatePresence>
        {isOpen && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-3 sm:p-6">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="absolute inset-0 bg-black/85 backdrop-blur-md"
            />

            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ duration: 0.25 }}
              className="relative max-h-[92vh] w-full max-w-5xl overflow-hidden rounded-3xl border border-[#00A8FF]/30 bg-[#080e1e] p-6 sm:p-8 shadow-2xl z-10 flex flex-col"
            >
              <button
                onClick={() => setIsOpen(false)}
                aria-label="Close dialog"
                className="absolute right-4 top-4 z-20 flex h-9 w-9 items-center justify-center rounded-full border border-white/15 bg-black/60 text-slate-300 hover:bg-white/20 hover:text-white transition"
              >
                <X size={18} />
              </button>

              <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 items-stretch overflow-y-auto pr-1">
                {/* Left: Uncropped Media Preview & Action Box */}
                <div className="lg:col-span-5 flex flex-col items-center justify-start">
                  <div className="relative h-64 sm:h-80 lg:h-[360px] w-full overflow-hidden rounded-2xl border border-white/10 bg-black/70 flex items-center justify-center p-4">
                    <img
                      src={project.images?.[0] || "/images/logos/logo.svg"}
                      alt={project.title}
                      className="max-h-full max-w-full object-contain select-none"
                    />
                  </div>

                  <div className="mt-5 w-full rounded-2xl border border-white/10 bg-white/[0.03] p-4 flex flex-col gap-3">
                    <p className="text-xs text-slate-400">
                      Lead / Maintainer: <strong className="text-white">{project.creator}</strong>
                    </p>

                    <div className="flex items-center gap-2 pt-2 border-t border-white/10">
                      {project.github && (
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noreferrer"
                          className="flex-1 inline-flex items-center justify-center gap-2 rounded-xl border border-white/15 bg-white/5 py-2.5 text-xs font-semibold text-white transition hover:bg-white/20"
                        >
                          <FaGithub size={14} />
                          GitHub Repo
                        </a>
                      )}
                      {project.liveDemo && (
                        <a
                          href={project.liveDemo}
                          target="_blank"
                          rel="noreferrer"
                          className="flex-1 inline-flex items-center justify-center gap-2 rounded-xl border border-[#00A8FF]/40 bg-[#00A8FF]/10 py-2.5 text-xs font-semibold text-[#00D2FF] transition hover:bg-[#00A8FF] hover:text-black"
                        >
                          <ExternalLink size={14} />
                          Live Demo
                        </a>
                      )}
                    </div>
                  </div>
                </div>

                {/* Right: Detailed Structured Info */}
                <div className="lg:col-span-7 flex flex-col justify-start space-y-5">
                  <div className="flex flex-wrap items-center gap-2.5">
                    <span className="inline-flex items-center gap-1.5 rounded-full bg-[#00A8FF]/15 border border-[#00A8FF]/40 px-3 py-1 text-xs font-bold text-[#00D2FF]">
                      <Sparkles size={12} />
                      {project.status}
                    </span>

                    <span className="rounded-full bg-white/5 border border-white/10 px-3 py-1 text-xs font-mono text-slate-300">
                      {project.category}
                    </span>
                  </div>

                  <h2 className="text-2xl sm:text-3xl font-black text-white tracking-tight leading-tight">
                    {project.title}
                  </h2>

                  <div className="space-y-4 pt-2 border-t border-white/10">
                    <div>
                      <h3 className="text-xs font-bold uppercase tracking-wider text-[#00D2FF]">
                        Project Overview
                      </h3>
                      <p className="mt-1.5 text-sm text-slate-200 leading-relaxed">
                        {project.fullDescription || project.description}
                      </p>
                    </div>

                    {project.features && project.features.length > 0 && (
                      <div className="pt-2">
                        <h3 className="text-xs font-bold uppercase tracking-wider text-purple-300 flex items-center gap-1.5">
                          <Layers size={14} />
                          Key Architectural Highlights
                        </h3>
                        <ul className="mt-2 space-y-1.5">
                          {project.features.map((feat, idx) => (
                            <li key={idx} className="flex items-start gap-2 text-xs sm:text-sm text-slate-300">
                              <CheckCircle2 size={15} className="text-[#00D2FF] shrink-0 mt-0.5" />
                              <span>{feat}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}

                    <div className="pt-2">
                      <h3 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-2">
                        Tech Stack
                      </h3>
                      <div className="flex flex-wrap gap-2">
                        {project.technologies.map((tech) => (
                          <span
                            key={tech}
                            className="rounded-lg border border-white/10 bg-white/[0.04] px-2.5 py-1 text-xs font-mono text-slate-200"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
};

export default ProjectCard;