import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import GlassCard from "../common/GlassCard";

const EventCard = ({ event }) => {
  const [currentImage, setCurrentImage] = useState(0);

  const nextImage = () => {
    setCurrentImage((prev) => (prev + 1) % event.images.length);
  };

  const previousImage = () => {
    setCurrentImage(
      (prev) => (prev - 1 + event.images.length) % event.images.length
    );
  };

  const hasMultipleImages = event.images.length > 1;

  return (
    <GlassCard className="h-full flex flex-col">

      {/* Image Slideshow */}
      <div className="relative h-52 overflow-hidden">

        <AnimatePresence mode="wait">
          <motion.img
            key={currentImage}
            src={event.images[currentImage]}
            alt={`${event.title} ${currentImage + 1}`}
            className="absolute inset-0 h-full w-full object-cover"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          />
        </AnimatePresence>

        {/* Navigation buttons */}
        {hasMultipleImages && (
          <>
            <button
              onClick={previousImage}
              className="absolute left-3 top-1/2 -translate-y-1/2 rounded-full bg-black/50 p-2 text-white backdrop-blur-sm transition hover:bg-black/70"
            >
              <ChevronLeft size={20} />
            </button>

            <button
              onClick={nextImage}
              className="absolute right-3 top-1/2 -translate-y-1/2 rounded-full bg-black/50 p-2 text-white backdrop-blur-sm transition hover:bg-black/70"
            >
              <ChevronRight size={20} />
            </button>
          </>
        )}

        {/* Dots */}
        {hasMultipleImages && (
          <div className="absolute bottom-3 left-1/2 flex -translate-x-1/2 gap-2">
            {event.images.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentImage(index)}
                className={`h-2 w-2 rounded-full transition ${
                  index === currentImage
                    ? "bg-cyan-400"
                    : "bg-white/50"
                }`}
              />
            ))}
          </div>
        )}

      </div>

      {/* Event Details */}
      <div className="p-6">
        <p className="text-sm text-cyan-400">
          {event.date}
        </p>

        <h3 className="mt-2 text-2xl font-bold">
          {event.title}
        </h3>

        <p className="mt-4 text-gray-400">
          {event.description}
        </p>

        <p className="mt-5 text-sm">
          📍 {event.location}
        </p>
      </div>

    </GlassCard>
  );
};

export default EventCard;