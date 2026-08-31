import { useState } from "react";
import { motion, AnimatePresence, useMotionTemplate, useMotionValue } from "framer-motion";
import { Trophy, ArrowUpRight, X, Award, CheckCircle2 } from "lucide-react";

const AchievementCard = ({ item }) => {
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
        className="group relative flex flex-col justify-between overflow-hidden rounded-3xl border border-white/10 bg-[#0a1124]/85 p-5 backdrop-blur-xl transition-all duration-300 hover:border-cyan-400/50 hover:shadow-[0_12px_35px_-8px_rgba(6,182,212,0.25)] hover:-translate-y-1.5 cursor-pointer h-full sm:p-6"
      >
        <motion.div
          className="pointer-events-none absolute -inset-px rounded-3xl opacity-0 transition-opacity duration-300 group-hover:opacity-100"
          style={{
            background: useMotionTemplate`
              radial-gradient(300px circle at ${mouseX}px ${mouseY}px, rgba(6, 182, 212, 0.15), transparent 80%)
            `,
          }}
        />
        <div className="relative z-10">
          <div className="relative h-44 w-full overflow-hidden rounded-2xl bg-black/60 border border-white/10">
            <img
              src={item.image}
              alt={item.name}
              className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
            />
            <div className="absolute top-3 left-3 rounded-full bg-black/80 px-3 py-1 text-xs font-bold text-cyan-300 border border-white/10 backdrop-blur-md flex items-center gap-1.5">
              <Trophy size={13} className="text-cyan-400" />
              <span>{item.badge}</span>
            </div>
          </div>

          <div className="mt-5 flex items-baseline justify-between border-b border-white/10 pb-4">
            <div>
              <h3 className="text-xl font-bold text-white group-hover:text-cyan-300 transition line-clamp-1">
                {item.name}
              </h3>
              <p className="text-xs text-slate-400 mt-0.5">{item.role}</p>
            </div>
            <div className="text-right shrink-0 pl-2">
              <span className="text-lg font-black text-[#00D2FF]">
                {item.metric}
              </span>
              <p className="text-[10px] uppercase font-mono text-slate-400">
                {item.metricLabel}
              </p>
            </div>
          </div>

          <p className="mt-4 text-xs sm:text-sm text-slate-300 leading-relaxed line-clamp-3">
            {item.description}
          </p>
        </div>

        <div className="relative z-10 mt-6 pt-4 border-t border-white/10 flex items-center justify-between">
          <div className="flex flex-wrap gap-1.5">
            {item.tags.slice(0, 2).map((tag) => (
              <span
                key={tag}
                className="rounded-full bg-white/5 border border-white/10 px-2.5 py-0.5 text-[11px] font-medium text-slate-300"
              >
                {tag}
              </span>
            ))}
          </div>

          <span className="flex items-center gap-1 text-xs font-semibold text-[#00D2FF] group-hover:underline">
            Details <ArrowUpRight size={13} />
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
                {/* Left: Full Uncropped Image Preview */}
                <div className="lg:col-span-5 flex flex-col items-center justify-start">
                  <div className="relative h-64 sm:h-80 lg:h-[380px] w-full overflow-hidden rounded-2xl border border-white/10 bg-black/70 flex items-center justify-center p-3">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="max-h-full max-w-full object-contain select-none"
                    />
                  </div>

                  <div className="mt-4 w-full rounded-2xl border border-white/10 bg-white/[0.03] p-4 flex items-center justify-between">
                    <div>
                      <p className="text-xs text-slate-400">Award / Metric</p>
                      <p className="text-base font-bold text-[#00D2FF]">{item.metric}</p>
                    </div>
                    <span className="rounded-full bg-cyan-400/10 border border-cyan-400/30 px-3 py-1 text-xs font-semibold text-cyan-300">
                      {item.badge}
                    </span>
                  </div>
                </div>

                {/* Right: Detailed Content */}
                <div className="lg:col-span-7 flex flex-col justify-start space-y-5">
                  <div>
                    <span className="rounded-full bg-white/5 border border-white/10 px-3 py-1 text-xs font-mono text-slate-300">
                      {item.category} Milestone
                    </span>

                    <h2 className="mt-3 text-2xl sm:text-3xl font-black text-white tracking-tight leading-tight">
                      {item.name}
                    </h2>
                    <p className="text-sm text-slate-400 mt-1">{item.role}</p>
                  </div>

                  <div className="space-y-4 pt-2 border-t border-white/10">
                    <div>
                      <h3 className="text-xs font-bold uppercase tracking-wider text-[#00D2FF] flex items-center gap-1.5">
                        <Award size={14} />
                        Milestone Summary
                      </h3>
                      <p className="mt-1.5 text-sm text-slate-200 leading-relaxed">
                        {item.fullDetails || item.description}
                      </p>
                    </div>

                    {item.highlights && item.highlights.length > 0 && (
                      <div className="pt-2">
                        <h3 className="text-xs font-bold uppercase tracking-wider text-purple-300 mb-2">
                          Key Recognition Points
                        </h3>
                        <ul className="space-y-1.5">
                          {item.highlights.map((h, idx) => (
                            <li key={idx} className="flex items-start gap-2 text-xs sm:text-sm text-slate-300">
                              <CheckCircle2 size={15} className="text-[#00D2FF] shrink-0 mt-0.5" />
                              <span>{h}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}

                    <div className="pt-2">
                      <h3 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-2">
                        Categories & Tags
                      </h3>
                      <div className="flex flex-wrap gap-1.5">
                        {item.tags.map((tag) => (
                          <span
                            key={tag}
                            className="rounded-full bg-white/5 border border-white/10 px-2.5 py-0.5 text-xs text-slate-300"
                          >
                            {tag}
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

export default AchievementCard;