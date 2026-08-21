import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Calendar, MapPin } from "lucide-react";

const EventCard = ({ event }) => {
  const [currentImage, setCurrentImage] = useState(0);

  const nextImage = (e) => {
    e.stopPropagation();
    setCurrentImage((prev) => (prev + 1) % event.images.length);
  };

  const previousImage = (e) => {
    e.stopPropagation();
    setCurrentImage((prev) => (prev - 1 + event.images.length) % event.images.length);
  };

  const hasMultipleImages = event.images && event.images.length > 1;

  return (
    <div className="w-full flex flex-col rounded-3xl border border-white/15 bg-[#121a36]/80 backdrop-blur-md overflow-hidden transition-all duration-300 hover:border-cyan-400/50 hover:shadow-2xl hover:shadow-cyan-500/10">
      
      <div className="relative h-56 w-full overflow-hidden bg-slate-950">
        <AnimatePresence mode="wait">
          <motion.img
            key={currentImage}
            src={event.images[currentImage]}
            alt={event.title}
            className="h-full w-full object-cover"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          />
        </AnimatePresence>

        <div className="absolute top-3 left-3 rounded-full bg-slate-950/80 px-3 py-1 text-xs font-semibold text-cyan-300 border border-white/10 backdrop-blur-md flex items-center gap-1.5">
          <Calendar size={13} />
          {event.date}
        </div>

        {hasMultipleImages && (
          <>
            <button
              onClick={previousImage}
              className="absolute left-2 top-1/2 -translate-y-1/2 rounded-full bg-black/60 p-1.5 text-white backdrop-blur-sm hover:bg-black/80 transition"
            >
              <ChevronLeft size={18} />
            </button>
            <button
              onClick={nextImage}
              className="absolute right-2 top-1/2 -translate-y-1/2 rounded-full bg-black/60 p-1.5 text-white backdrop-blur-sm hover:bg-black/80 transition"
            >
              <ChevronRight size={18} />
            </button>

            <div className="absolute bottom-3 left-1/2 flex -translate-x-1/2 gap-1.5">
              {event.images.map((_, index) => (
                <button
                  key={index}
                  onClick={(e) => {
                    e.stopPropagation();
                    setCurrentImage(index);
                  }}
                  className={`h-1.5 rounded-full transition-all ${
                    index === currentImage ? "w-5 bg-cyan-400" : "w-1.5 bg-white/50"
                  }`}
                />
              ))}
            </div>
          </>
        )}
      </div>

      <div className="p-6 flex flex-col flex-1 justify-between">
        <div>
          <h3 className="text-xl font-bold text-white line-clamp-2">
            {event.title}
          </h3>
          <p className="mt-3 text-sm text-slate-300 leading-relaxed line-clamp-3">
            {event.description}
          </p>
        </div>

        <div className="mt-6 pt-4 border-t border-white/10 flex items-center gap-2 text-xs text-slate-400">
          <MapPin size={15} className="text-cyan-400 shrink-0" />
          <span className="truncate">{event.location}</span>
        </div>
      </div>
    </div>
  );
};

export default EventCard;