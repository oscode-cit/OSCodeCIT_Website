import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Terminal, ArrowRight, Sparkles, Code2, Users, Trophy } from "lucide-react";
import EventShuffleCarousel from "./EventShuffleCarousel";
import team from "../../data/team"
import event from "../../data/events"
import {projects} from "../../data/projects"

export default function Hero() {
  return (
    <section className="relative min-h-[90vh] pt-28 pb-16 overflow-hidden flex items-center">
      {/* 45-degree Dynamic Split Background */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {/* 45 degree diagonal gradient slice */}
        <div
          className="absolute -top-[20%] -right-[10%] w-[80%] h-[140%] opacity-20 dark:opacity-25 bg-gradient-to-br from-cyan-500 via-blue-600 to-indigo-900 blur-[80px]"
          style={{ transform: "rotate(-45deg)" }}
        />
        {/* Subtle grid pattern */}
        <div className="absolute inset-0 bg-dot-grid opacity-30" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          
          {/* Left Column (Text, Buttons, Badges) */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="lg:col-span-6 flex flex-col items-start text-left"
          >
            {/* Top Badge */}
            <div className="inline-flex items-center gap-2 rounded-full border border-cyan-500/40 bg-cyan-500/10 px-4 py-1.5 font-mono text-xs font-bold text-cyan-700 dark:text-cyan-300 mb-4 shadow-lg shadow-cyan-500/10 mb-6">
              <Terminal size={14} className="text-cyan-400 animate-pulse" />
              <span>OSCODE CIT CHAPTER • 2026</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black dark:text-white text-slate-900 tracking-tight leading-[1.1]">
              Open Source.<br />
              <span className="bg-gradient-to-r from-cyan-400 via-sky-300 to-blue-500 bg-clip-text text-transparent">
                Real Engineering.
              </span><br />
              Zero Boundaries.
            </h1>

            {/* Subtext */}
            <p className="mt-5 text-base sm:text-lg dark:text-slate-300 text-slate-600 leading-relaxed max-w-xl">
              The official open-source student developer community at Cambridge Institute of Technology, Bangalore. We build production-ready platforms, compete in national hackathons, and foster tech leadership.
            </p>

            {/* CTA Buttons */}
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <Link
                to="/projects"
                className="group relative inline-flex items-center gap-2 overflow-hidden rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 px-6 py-3 text-sm font-bold text-black shadow-lg shadow-cyan-500/30 transition hover:from-cyan-400 hover:to-blue-500 active:scale-95"
              >
                <span>Explore Projects</span>
                <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
              </Link>

              <Link
                to="/team"
                className="inline-flex items-center gap-2 rounded-xl border border-cyan-400/40 bg-cyan-500/10 px-6 py-3 text-sm font-bold text-cyan-300 hover:border-cyan-400 hover:bg-cyan-500/20 hover:text-white transition active:scale-95 shadow-md backdrop-blur-md"
              >
                <Sparkles size={16} className="text-cyan-400" />
                <span>Meet Team Tree</span>
              </Link>

              <Link
                to="/events"
                className="inline-flex items-center gap-2 rounded-xl border border-white/15 bg-white/5 px-5 py-3 text-sm font-bold text-slate-300 hover:border-white/30 hover:bg-white/10 hover:text-white transition active:scale-95"
              >
                <span>View Events</span>
              </Link>
            </div>

            {/* Quick Stats Banner */}
            <div className="mt-10 pt-6 border-t border-white/10 grid grid-cols-3 gap-6 w-full max-w-lg">
              <div>
                <div className="font-mono text-2xl font-black text-cyan-400">{event.length -1}+</div>
                <div className="text-xs text-slate-400 mt-0.5">Events Hosted</div>
              </div>
              <div>
                <div className="font-mono text-2xl font-black text-cyan-400">{team.length - 1}+</div>
                <div className="text-xs text-slate-400 mt-0.5">Club Members</div>
              </div>
              <div>
                <div className="font-mono text-2xl font-black text-cyan-400">{projects.length -1}+</div>
                <div className="text-xs text-slate-400 mt-0.5">Major Projects</div>
              </div>
            </div>
          </motion.div>

          {/* Right Column (Animated Picture Shuffle / Event Carousel) */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.15, ease: "easeOut" }}
            className="lg:col-span-6 relative"
          >
            {/* Background Glow */}
            <div className="absolute -inset-2 rounded-3xl bg-linear-to-r from-cyan-500 to-blue-600 opacity-20 blur-xl" />
            
            {/* Event Picture Shuffle Carousel */}
            <EventShuffleCarousel />
          </motion.div>

        </div>
      </div>
    </section>
  );
}
