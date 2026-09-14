import { useState } from "react";
import { motion } from "framer-motion";
import { BookOpen, GitBranch, GraduationCap, Code, Cpu, ExternalLink, CheckCircle2 } from "lucide-react";
import { learningTracks } from "../data/learning";

const iconMap = {
  GitBranch: GitBranch,
  GraduationCap: GraduationCap,
  Code: Code,
  Cpu: Cpu,
};

export default function LearningPage() {
  const [activeTrack, setActiveTrack] = useState(learningTracks[0]);

  return (
    <div className="relative pt-32 pb-24 min-h-screen">
      {/* Ambient Background Glow */}
      <div className="absolute top-20 right-1/4 h-80 w-80 rounded-full bg-cyan-500/10 blur-[130px] pointer-events-none" />

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 rounded-full border border-cyan-500/40 bg-cyan-500/10 px-4 py-1.5 font-mono text-xs font-bold text-cyan-700 dark:text-cyan-300 mb-4 shadow-lg">
            <BookOpen size={15} className="text-cyan-600 dark:text-cyan-400" />
            <span>OSCODE LEARNING</span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-black dark:text-white text-slate-900 tracking-tight">
            Learning Pathways & Roadmaps
          </h1>
          <p className="mt-3 text-base dark:text-slate-300 text-slate-600 leading-relaxed">
            Curated technical tracks, workshop guides, GSoC preparation roadmaps, and open-source learning resources created by OSCode mentors for CIT students.
          </p>
        </div>

        {/* Layout: Sidebar Track Selector + Track Detail Panel */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Track Selector List (4 cols) */}
          <div className="lg:col-span-4 space-y-3">
            <h3 className="font-mono text-xs font-bold uppercase text-cyan-600 dark:text-cyan-400 tracking-wider mb-2 px-1">
              Select Learning Pathway
            </h3>
            {learningTracks.map((track) => {
              const IconComponent = iconMap[track.icon] || Code;
              const isActive = activeTrack.id === track.id;

              return (
                <button
                  key={track.id}
                  onClick={() => setActiveTrack(track)}
                  className={`w-full text-left p-4 rounded-2xl border transition-all flex items-start gap-3.5 ${
                    isActive
                      ? "border-cyan-500 dark:bg-linear-to-r dark:from-cyan-950/80 dark:to-[#07132a] bg-cyan-50 shadow-md"
                      : "dark:border-white/10 border-slate-200 dark:bg-[#070e1c]/80 bg-white hover:border-slate-300"
                  }`}
                >
                  <div className={`p-2.5 rounded-xl border ${isActive ? "border-cyan-400 bg-cyan-500/20 text-cyan-700 dark:text-cyan-300" : "dark:border-white/10 border-slate-200 dark:bg-white/5 bg-slate-100 text-slate-500"}`}>
                    <IconComponent size={20} />
                  </div>
                  <div>
                    <h4 className={`text-sm font-bold ${isActive ? "text-cyan-700 dark:text-cyan-300" : "dark:text-white text-slate-900"}`}>
                      {track.title}
                    </h4>
                    <span className="font-mono text-[10px] dark:text-slate-400 text-slate-500">{track.level}</span>
                  </div>
                </button>
              );
            })}
          </div>

          {/* Right Main Content Display (8 cols) */}
          <div className="lg:col-span-8">
            <motion.div
              key={activeTrack.id}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.3 }}
              className="rounded-3xl border dark:border-cyan-500/30 border-slate-300 dark:bg-[#070e1c]/90 bg-white p-6 sm:p-8 shadow-xl backdrop-blur-xl"
            >
              <div className="flex flex-wrap items-center justify-between gap-2 border-b dark:border-white/10 border-slate-200 pb-4 mb-6">
                <div>
                  <span className="rounded-full border border-cyan-400/40 bg-cyan-500/10 px-3 py-1 font-mono text-xs font-bold text-cyan-700 dark:text-cyan-300">
                    {activeTrack.category}
                  </span>
                  <h2 className="text-2xl sm:text-3xl font-black dark:text-white text-slate-900 mt-2">
                    {activeTrack.title}
                  </h2>
                </div>
                <span className="font-mono text-xs dark:text-slate-400 text-slate-600 dark:bg-white/5 bg-slate-100 border dark:border-white/10 border-slate-200 px-3 py-1 rounded-xl">
                  {activeTrack.level}
                </span>
              </div>

              <p className="text-sm sm:text-base dark:text-slate-300 text-slate-600 leading-relaxed">
                {activeTrack.description}
              </p>

              {/* Modules List */}
              <div className="mt-8">
                <h4 className="font-mono text-xs font-bold uppercase text-cyan-600 dark:text-cyan-400 tracking-wider mb-3">
                  Core Curriculum & Modules
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {activeTrack.modules.map((mod, idx) => (
                    <div
                      key={idx}
                      className="flex items-start gap-2.5 rounded-xl border dark:border-white/10 border-slate-200 dark:bg-black/40 bg-slate-50 p-3"
                    >
                      <CheckCircle2 size={16} className="text-cyan-600 dark:text-cyan-400 shrink-0 mt-0.5" />
                      <span className="text-xs dark:text-slate-200 text-slate-800 font-medium">{mod}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Verified Learning Resources */}
              <div className="mt-8 pt-6 border-t dark:border-white/10 border-slate-200">
                <h4 className="font-mono text-xs font-bold uppercase text-cyan-600 dark:text-cyan-400 tracking-wider mb-3">
                  Recommended Study Resources & Repos
                </h4>
                <div className="space-y-2">
                  {activeTrack.resources.map((res, idx) => (
                    <a
                      key={idx}
                      href={res.link}
                      target="_blank"
                      rel="noreferrer"
                      className="group flex items-center justify-between rounded-xl border dark:border-white/10 border-slate-200 dark:bg-white/5 bg-slate-100 p-3 text-xs font-bold dark:text-slate-200 text-slate-800 hover:border-cyan-500 hover:text-cyan-600 dark:hover:text-cyan-300 transition"
                    >
                      <span className="flex items-center gap-2">
                        <BookOpen size={14} className="text-cyan-600 dark:text-cyan-400" />
                        {res.name}
                      </span>
                      <ExternalLink size={14} className="text-slate-400 group-hover:text-cyan-600 transition" />
                    </a>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>

        </div>
      </div>
    </div>
  );
}
