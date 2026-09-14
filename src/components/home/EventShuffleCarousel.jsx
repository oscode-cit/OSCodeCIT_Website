import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Calendar, MapPin, ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";
import events from "../../data/events";

export default function EventShuffleCarousel() {
  const featuredEvents = events.slice(0, 6);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  useEffect(() => {
    if (!isAutoPlaying) return;
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % featuredEvents.length);
    }, 4500);
    return () => clearInterval(interval);
  }, [isAutoPlaying, featuredEvents.length]);

  const handleNext = () => {
    setIsAutoPlaying(false);
    setCurrentIndex((prev) => (prev + 1) % featuredEvents.length);
  };

  const handlePrev = () => {
    setIsAutoPlaying(false);
    setCurrentIndex((prev) => (prev - 1 + featuredEvents.length) % featuredEvents.length);
  };

  const activeEvent = featuredEvents[currentIndex];
  const activeImage = activeEvent?.images?.[0] || "/images/events/bengaluru-tech-summit-2025/bts25-1.webp";

  return (
    <div className="relative w-full overflow-hidden rounded-3xl border dark:border-cyan-500/30 border-slate-300 dark:bg-[#070e1c]/90 bg-white p-4 sm:p-6 shadow-xl backdrop-blur-xl transition-colors duration-300">
      {/* Decorative Top Pill */}
      <div className="mb-4 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <span className="flex h-2 w-2 rounded-full bg-cyan-400 animate-ping" />
          <span className="font-mono text-xs font-bold uppercase tracking-wider text-cyan-600 dark:text-cyan-300">
            Event Highlights
          </span>
        </div>
        
      </div>

      {/* Main Slide Window */}
      <div className="relative aspect-[16/9] w-full overflow-hidden rounded-2xl border dark:border-white/10 border-slate-300 bg-slate-900">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, scale: 1.05, filter: "blur(4px)" }}
            animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
            exit={{ opacity: 0, scale: 0.95, filter: "blur(4px)" }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="absolute inset-0"
          >
            <img
              src={activeImage}
              alt={activeEvent.title}
              className="h-full w-full object-cover object-center"
            />
            {/* Dark Gradient Overlays for Slide Photo Text Contrast */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent"></div>
            <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-transparent to-transparent"></div>

            {/* Slide Content Overlay */}
            <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-8 flex flex-col justify-end text-white!">
              <div className="flex flex-wrap items-center gap-2 mb-2">
                <span className="rounded-full border border-cyan-400/40 bg-cyan-500/20 px-3 py-0.5 text-[11px] font-mono font-bold text-cyan-300! backdrop-blur-md">
                  {activeEvent.category || "Event"}
                </span>
                <span className="flex items-center gap-1 text-[11px] font-mono text-slate-2001">
                  <Calendar size={12} className="text-cyan-400!" />
                  {activeEvent.date}
                </span>
                <span className="hidden sm:flex items-center gap-1 text-[11px] font-mono text-slate-200! truncate">
                  <MapPin size={12} className="text-cyan-400!" />
                  {activeEvent.location}
                </span>
              </div>

              <h3 className="text-xl sm:text-3xl font-extrabold text-white! leading-tight drop-shadow-md">
                {activeEvent.title}
              </h3>
              <p className="mt-1 line-clamp-2 text-xs sm:text-sm text-slate-200! max-w-2xl">
                {activeEvent.description || activeEvent.about}
              </p>

              <div className="mt-4 flex items-center gap-3">
                <Link
                  to="/events"
                  className="inline-flex items-center gap-1.5 rounded-xl border border-cyan-400/50 bg-cyan-500/30 px-4 py-1.5 text-xs font-bold text-cyan-200! transition hover:bg-cyan-500/50 active:scale-95 backdrop-blur-md"
                >
                  <span>Explore All Events</span>
                  <ArrowUpRight size={14} />
                </Link>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Slide Dots / Thumbnails */}
      <div className="mt-4 flex items-center justify-center gap-2">
        {featuredEvents.map((ev, idx) => (
          <button
            key={ev.id}
            onClick={() => {
              setIsAutoPlaying(false);
              setCurrentIndex(idx);
            }}
            className={`h-2 rounded-full transition-all duration-300 ${
              idx === currentIndex
                ? "w-8 bg-cyan-400 shadow-md shadow-cyan-400/50"
                : "w-2 dark:bg-slate-700 bg-slate-300 hover:bg-slate-400"
            }`}
            aria-label={`Go to slide ${idx + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
