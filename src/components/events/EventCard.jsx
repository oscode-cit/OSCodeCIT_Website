import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ChevronLeft,
  ChevronRight,
  Calendar,
  MapPin,
  X,
  ArrowUpRight,
  Award,
  Users,
  BookOpen,
} from "lucide-react";

const EventCard = ({ event }) => {
  const [currentImage, setCurrentImage] = useState(0);
  const [isOpen, setIsOpen] = useState(false);

  const nextImage = (e) => {
    e?.stopPropagation();
    setCurrentImage((prev) => (prev + 1) % event.images.length);
  };

  const previousImage = (e) => {
    e?.stopPropagation();
    setCurrentImage(
      (prev) => (prev - 1 + event.images.length) % event.images.length,
    );
  };

  const hasMultipleImages = event.images && event.images.length > 1;

  return (
    <>
      {/* Clickable Event Card */}
      <div
        onClick={() => setIsOpen(true)}
        className="group relative w-full min-w-0 max-w-full flex flex-col justify-between rounded-2xl sm:rounded-3xl border border-white/10 bg-[#0a1124]/80 backdrop-blur-xl overflow-hidden transition-all duration-300 hover:border-[#00A8FF]/60 hover:shadow-[0_12px_35px_-8px_rgba(0,168,255,0.25)] hover:-translate-y-1.5 cursor-pointer"
      >
        {/* Card Top Carousel */}
        <div className="relative h-48 sm:h-56 w-full overflow-hidden bg-slate-950 shrink-0">
          <AnimatePresence mode="wait">
            <motion.img
              key={currentImage}
              src={event.images[currentImage]}
              alt={event.title}
              className="h-full w-full object-cover select-none"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
            />
          </AnimatePresence>

          {/* Date Badge */}
          <div className="absolute top-3 left-3 rounded-full bg-slate-950/85 px-3 py-1 text-[11px] sm:text-xs font-semibold text-cyan-300 border border-white/10 backdrop-blur-md flex items-center gap-1.5 shadow-md">
            <Calendar size={12} className="text-[#00D2FF]" />
            <span>{event.date}</span>
          </div>

          {/* Nav Arrows & Dots */}
          {hasMultipleImages && (
            <>
              <button
                onClick={previousImage}
                aria-label="Previous Slide"
                className="absolute left-2 top-1/2 -translate-y-1/2 rounded-full bg-black/60 p-1.5 text-white backdrop-blur-sm hover:bg-black/90 transition active:scale-95"
              >
                <ChevronLeft size={16} />
              </button>
              <button
                onClick={nextImage}
                aria-label="Next Slide"
                className="absolute right-2 top-1/2 -translate-y-1/2 rounded-full bg-black/60 p-1.5 text-white backdrop-blur-sm hover:bg-black/90 transition active:scale-95"
              >
                <ChevronRight size={16} />
              </button>

              <div className="absolute bottom-2.5 left-1/2 flex -translate-x-1/2 gap-1.5 bg-black/40 px-2 py-1 rounded-full backdrop-blur-xs">
                {event.images.map((_, index) => (
                  <button
                    key={index}
                    aria-label={`Go to slide ${index + 1}`}
                    onClick={(e) => {
                      e.stopPropagation();
                      setCurrentImage(index);
                    }}
                    className={`h-1.5 rounded-full transition-all duration-300 ${
                      index === currentImage
                        ? "w-4 bg-[#00A8FF]"
                        : "w-1.5 bg-white/50"
                    }`}
                  />
                ))}
              </div>
            </>
          )}
        </div>

        {/* Card Body */}
        <div className="p-5 sm:p-6 flex flex-col flex-1 justify-between min-w-0">
          <div>
            <h2 className="text-lg sm:text-xl font-bold text-white tracking-tight line-clamp-2 group-hover:text-[#00D2FF] transition">
              {event.title}
            </h2>
            <p className="mt-2.5 text-xs sm:text-sm text-slate-300 leading-relaxed line-clamp-3">
              {event.about || event.description}
            </p>
          </div>

          <div className="mt-5 pt-3.5 border-t border-white/10 flex items-center justify-between gap-2 text-xs text-slate-400 min-w-0">
            <div className="flex items-center gap-1.5 truncate">
              <MapPin size={14} className="text-[#00D2FF] shrink-0" />
              <span className="truncate">{event.location}</span>
            </div>
            <span className="shrink-0 flex items-center gap-1 font-semibold text-[#00D2FF] group-hover:underline">
              Details <ArrowUpRight size={13} />
            </span>
          </div>
        </div>
      </div>

      {/* Side-by-Side Detailed Event Modal */}
      <AnimatePresence>
        {isOpen && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-3 sm:p-6">
            {/* Backdrop Blur */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="absolute inset-0 bg-black/85 backdrop-blur-md"
            />

            {/* Modal Container */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ duration: 0.25 }}
              className="relative max-h-[92vh] w-full max-w-5xl overflow-hidden rounded-3xl border border-[#00A8FF]/30 bg-[#080e1e] p-6 sm:p-8 shadow-2xl z-10 flex flex-col"
            >
              {/* Close Button */}
              <button
                onClick={() => setIsOpen(false)}
                aria-label="Close dialog"
                className="absolute right-4 top-4 z-20 flex h-9 w-9 items-center justify-center rounded-full border border-white/15 bg-black/60 text-slate-300 hover:bg-white/20 hover:text-white transition"
              >
                <X size={18} />
              </button>

              {/* 2-Column Split */}
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 items-stretch overflow-y-auto pr-1">
                {/* Left Column: Full Uncropped Media Viewer */}
                <div className="lg:col-span-5 flex flex-col items-center justify-start">
                  <div className="relative h-72 sm:h-96 lg:h-[460px] w-full overflow-hidden rounded-2xl border border-white/10 bg-black/70 flex items-center justify-center p-2">
                    <img
                      src={event.images[currentImage]}
                      alt={`${event.title} view ${currentImage + 1}`}
                      className="max-h-full max-w-full object-contain select-none"
                    />

                    {/* Slideshow Arrows */}
                    {hasMultipleImages && (
                      <>
                        <button
                          onClick={previousImage}
                          aria-label="Previous Image"
                          className="absolute left-3 top-1/2 -translate-y-1/2 rounded-full bg-black/70 p-2 text-white hover:bg-black transition active:scale-95 shadow-lg"
                        >
                          <ChevronLeft size={18} />
                        </button>
                        <button
                          onClick={nextImage}
                          aria-label="Next Image"
                          className="absolute right-3 top-1/2 -translate-y-1/2 rounded-full bg-black/70 p-2 text-white hover:bg-black transition active:scale-95 shadow-lg"
                        >
                          <ChevronRight size={18} />
                        </button>

                        {/* Image Dots */}
                        <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex items-center gap-1.5 bg-black/60 px-3 py-1 rounded-full backdrop-blur-md">
                          {event.images.map((_, index) => (
                            <button
                              key={index}
                              onClick={() => setCurrentImage(index)}
                              className={`h-2 rounded-full transition-all duration-300 ${
                                index === currentImage
                                  ? "w-5 bg-[#00A8FF]"
                                  : "w-2 bg-white/40"
                              }`}
                            />
                          ))}
                        </div>
                      </>
                    )}
                  </div>

                  {/* Venue / Location Details Below Photo */}
                  <div className="mt-4 w-full rounded-2xl border border-white/10 bg-white/[0.03] p-4 text-xs text-slate-300 space-y-1.5">
                    <p className="font-semibold text-white flex items-center gap-1.5">
                      <MapPin size={14} className="text-[#00D2FF]" />
                      Venue & Location
                    </p>
                    <p className="text-slate-300 pl-5">
                      {event.venue || event.location}
                    </p>
                    {event.address && event.address !== event.venue && (
                      <p className="text-slate-400 pl-5 text-[11px]">
                        {event.address}
                      </p>
                    )}
                  </div>
                </div>

                {/* Right Column: Structured Report Headings */}
                <div className="lg:col-span-7 flex flex-col justify-start space-y-5">
                  {/* Badges */}
                  <div className="flex flex-wrap items-center gap-2.5">
                    <span className="inline-flex items-center gap-1.5 rounded-full bg-[#00A8FF]/15 border border-[#00A8FF]/40 px-3 py-1 text-xs font-bold text-[#00D2FF]">
                      <Calendar size={13} />
                      {event.date}
                    </span>

                    <span className="inline-flex items-center gap-1.5 rounded-full bg-white/5 border border-white/10 px-3 py-1 text-xs text-slate-300">
                      <MapPin size={13} className="text-[#00D2FF]" />
                      {event.venue ? event.venue.split(",")[0] : event.location}
                    </span>
                  </div>

                  {/* Title */}
                  <h2 className="text-2xl sm:text-3xl font-black text-white tracking-tight leading-tight">
                    {event.title}
                  </h2>

                  {/* Structured Details */}
                  <div className="space-y-4 pt-2 border-t border-white/10">
                    {/* About the Event */}
                    {event.about && (
                      <div>
                        <h3 className="text-xs font-bold uppercase tracking-wider text-[#00D2FF] flex items-center gap-1.5">
                          <BookOpen size={14} />
                          About the Event
                        </h3>
                        <p className="mt-1.5 text-sm text-slate-200 leading-relaxed">
                          {event.about}
                        </p>
                      </div>
                    )}

                    {/* OSCode CIT Participation */}
                    {event.participation && (
                      <div className="pt-2">
                        <h3 className="text-xs font-bold uppercase tracking-wider text-purple-300 flex items-center gap-1.5">
                          <Users size={14} />
                          OSCode CIT Participation
                        </h3>
                        <p className="mt-1.5 text-sm text-slate-200 leading-relaxed">
                          {event.participation}
                        </p>
                      </div>
                    )}

                    {/* Key Learning / Outcome */}
                    {event.outcome && (
                      <div className="pt-2">
                        <h3 className="text-xs font-bold uppercase tracking-wider text-emerald-400 flex items-center gap-1.5">
                          <Award size={14} />
                          Key Learning & Outcomes
                        </h3>
                        <p className="mt-1.5 text-sm text-slate-200 leading-relaxed">
                          {event.outcome}
                        </p>
                      </div>
                    )}
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

export default EventCard;
