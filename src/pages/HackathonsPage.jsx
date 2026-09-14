import { useState } from "react";
import { motion } from "framer-motion";
import { Flame, Trophy } from "lucide-react";
import { FaGithub } from "react-icons/fa";
import { hackathons } from "../data/hackathons";

export default function HackathonsPage() {
  const [filter, setFilter] = useState("All");

  const filteredHackathons =
    filter === "All"
      ? hackathons
      : filter === "Winners"
      ? hackathons.filter((h) => h.status.includes("Winner") || h.status.includes("Runner Up"))
      : hackathons;

  return (
    <div className="relative pt-32 pb-24 min-h-screen">
      {/* Background Orbs */}
      <div className="absolute top-20 left-1/4 h-80 w-80 rounded-full bg-cyan-500/10 blur-[130px] pointer-events-none" />
      <div className="absolute bottom-40 right-1/4 h-80 w-80 rounded-full bg-blue-600/10 blur-[130px] pointer-events-none" />

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 rounded-full border border-cyan-500/40 bg-cyan-500/10 px-4 py-1.5 font-mono text-xs font-bold text-cyan-600 dark:text-cyan-300 mb-4 shadow-lg shadow-cyan-500/10">
            <Flame size={15} className="text-cyan-600 dark:text-cyan-400 animate-bounce" />
            <span>OSCODE HACKATHON ARENA</span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-black dark:text-white text-slate-900 tracking-tight">
            Hackathons & Innovation Sprints
          </h1>
          <p className="mt-3 text-base dark:text-slate-300 text-slate-600 leading-relaxed">
            Showcasing hackathon projects, national finalist teams, and award-winning solutions engineered by OSCode CIT members in 24 to 48-hour continuous hackathons.
          </p>

          {/* Filter Pills */}
          <div className="mt-8 flex items-center justify-center gap-2">
            {["All", "Winners"].map((f) => (
              <button
                key={f}
                onClick={() => setFilter(f)}
                className={`rounded-full px-5 py-2 text-xs font-bold font-mono transition-all ${
                  filter === f
                    ? "bg-cyan-500 text-black shadow-lg shadow-cyan-500/30"
                    : "border dark:border-white/10 border-slate-300 dark:bg-white/5 bg-slate-100 dark:text-slate-300 text-slate-700 hover:border-cyan-500"
                }`}
              >
                {f === "Winners" ? "🏆 Award Winners" : "All Hackathons"}
              </button>
            ))}
          </div>
        </div>

        {/* Hackathon Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {filteredHackathons.map((h, idx) => (
            <motion.div
              key={h.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: idx * 0.1 }}
              className="group relative flex flex-col justify-between overflow-hidden rounded-3xl border dark:border-cyan-500/30 border-slate-300 dark:bg-[#070e1c]/90 bg-white p-6 sm:p-8 shadow-xl backdrop-blur-xl transition hover:border-cyan-500"
            >
              <div>
                {/* Top Badge Row */}
                <div className="flex flex-wrap items-center justify-between gap-2 mb-4">
                  <span className="rounded-full border border-cyan-400/40 bg-cyan-500/10 px-3 py-1 font-mono text-xs font-bold text-cyan-700 dark:text-cyan-300">
                    {h.category}
                  </span>
                  <span className="inline-flex items-center gap-1.5 rounded-full border border-amber-400/40 bg-amber-500/15 px-3.5 py-1 font-mono text-xs font-bold text-amber-800 dark:text-amber-300 shadow-md">
                    <Trophy size={13} className="text-amber-500" />
                    {h.status}
                  </span>
                </div>

                <h3 className="text-2xl font-black dark:text-white text-slate-900 group-hover:text-cyan-600 dark:group-hover:text-cyan-300 transition-colors">
                  {h.title}
                </h3>
                <p className="font-mono text-xs dark:text-slate-400 text-slate-500 mt-1">
                  Organized by <span className="dark:text-slate-200 text-slate-800 font-semibold">{h.organizer}</span> • {h.date}
                </p>

                <p className="mt-4 text-sm dark:text-slate-300 text-slate-600 leading-relaxed">
                  {h.description}
                </p>

                {/* Problem Statement Box */}
                <div className="mt-4 rounded-2xl border dark:border-white/10 border-slate-200 dark:bg-black/40 bg-slate-50 p-4">
                  <span className="font-mono text-[10px] uppercase text-cyan-600 dark:text-cyan-400 font-bold tracking-wider block mb-1">
                    Problem Statement
                  </span>
                  <p className="text-xs dark:text-slate-200 text-slate-800 font-medium italic">
                    "{h.problemStatement}"
                  </p>
                </div>

                {/* Team Members */}
                <div className="mt-4">
                  <span className="font-mono text-[10px] uppercase dark:text-slate-400 text-slate-500 font-bold tracking-wider block mb-2">
                    OSCode Team: <span className="text-cyan-600 dark:text-cyan-300 font-bold">{h.teamName}</span>
                  </span>
                  <div className="flex flex-wrap gap-1.5">
                    {h.members.map((m) => (
                      <span
                        key={m}
                        className="rounded-lg border dark:border-white/10 border-slate-200 dark:bg-white/5 bg-slate-100 px-2.5 py-1 text-xs dark:text-slate-300 text-slate-700 font-medium"
                      >
                        {m}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Tech Stack */}
                <div className="mt-4 flex flex-wrap gap-1.5">
                  {h.techStack.map((tech) => (
                    <span
                      key={tech}
                      className="rounded-md bg-cyan-500/10 px-2 py-0.5 font-mono text-[10px] text-cyan-700 dark:text-cyan-300 border border-cyan-500/20"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Card Footer Links */}
              <div className="mt-6 pt-4 border-t dark:border-white/10 border-slate-200 flex items-center justify-between">
                <a
                  href={h.github}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-xl border border-cyan-400/40 bg-cyan-500/10 px-4 py-2 text-xs font-bold text-cyan-700 dark:text-cyan-300 hover:border-cyan-500 transition"
                >
                  <FaGithub size={15} />
                  <span>View Repository</span>
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
