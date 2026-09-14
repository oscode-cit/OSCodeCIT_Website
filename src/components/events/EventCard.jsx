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

const EventCard = ({ event, onCardClick }) => {
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

  const handleClick = () => {
    if (onCardClick) {
      onCardClick();
    } else {
      setIsOpen(true);
    }
  };

  return (
    <>
      {/* Clickable Event Card */}
      <div
        onClick={handleClick}
        className="group relative w-[340px] sm:w-[380px] shrink-0 min-w-0 max-w-full flex flex-col justify-between rounded-2xl sm:rounded-3xl border dark:border-white/10 border-slate-200 dark:bg-[#0a1124]/80 bg-white backdrop-blur-xl overflow-hidden transition-all duration-300 hover:border-[#00A8FF]/60 hover:shadow-[0_12px_35px_-8px_rgba(0,168,255,0.25)] hover:-translate-y-1.5 cursor-pointer shadow-sm mx-3"
      >
        {/* Card Top Photo */}
        <div className="relative h-48 sm:h-56 w-full overflow-hidden bg-slate-900 shrink-0">
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
          <div className="absolute top-3 left-3 rounded-full bg-black/80 px-3 py-1 text-[11px] sm:text-xs font-semibold !text-cyan-300 border border-white/10 backdrop-blur-md flex items-center gap-1.5 shadow-md">
            <Calendar size={12} className="!text-cyan-400" />
            <span>{event.date}</span>
          </div>

          {/* Nav Arrows */}
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
            </>
          )}
        </div>

        {/* Card Body */}
        <div className="p-5 sm:p-6 flex flex-col flex-1 justify-between min-w-0">
          <div>
            <h2 className="text-lg sm:text-xl font-bold dark:text-white text-slate-900 tracking-tight line-clamp-2 group-hover:text-cyan-600 dark:group-hover:text-[#00D2FF] transition">
              {event.title}
            </h2>
            <p className="mt-2.5 text-xs sm:text-sm dark:text-slate-300 text-slate-600 leading-relaxed line-clamp-3">
              {event.about || event.description}
            </p>
          </div>

          <div className="mt-5 pt-3.5 border-t dark:border-white/10 border-slate-200 flex items-center justify-between gap-2 text-xs dark:text-slate-400 text-slate-500 min-w-0">
            <div className="flex items-center gap-1.5 truncate">
              <MapPin size={14} className="text-cyan-600 dark:text-[#00D2FF] shrink-0" />
              <span className="truncate">{event.location}</span>
            </div>
            <span className="shrink-0 flex items-center gap-1 font-semibold text-cyan-600 dark:text-[#00D2FF] group-hover:underline">
              Details <ArrowUpRight size={13} />
            </span>
          </div>
        </div>
      </div>

      {/* Fallback internal modal if used standalone without onCardClick */}
      {!onCardClick && (
        <AnimatePresence>
          {isOpen && (
            <div className="fixed inset-0 z-[100] flex items-center justify-center p-3 sm:p-6">
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setIsOpen(false)}
                className="absolute inset-0 bg-black/80 backdrop-blur-md"
              />
              {/* Modal contents omitted for brevity, handled globally in FeaturedEvents */}
            </div>
          )}
        </AnimatePresence>
      )}
    </>
  );
};

export default EventCard;