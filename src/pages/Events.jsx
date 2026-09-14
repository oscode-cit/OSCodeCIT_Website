import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Calendar,
  Bell,
  Sparkles,
  MapPin,
  X,
  Award,
  Users,
  BookOpen,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import Container from "../components/common/Container";
import SectionBadge from "../components/common/SectionBadge";
import EventCard from "../components/events/EventCard";
import events from "../data/events";

const Events = () => {
  const [tab, setTab] = useState("all"); // "all" | "upcoming" | "past"
  const [selectedEvent, setSelectedEvent] = useState(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const handleOpenModal = (event) => {
    setSelectedEvent(event);
    setCurrentImageIndex(0);
  };

  const handleCloseModal = () => {
    setSelectedEvent(null);
  };

  const nextImage = (e) => {
    e?.stopPropagation();
    if (selectedEvent?.images) {
      setCurrentImageIndex((prev) => (prev + 1) % selectedEvent.images.length);
    }
  };

  const previousImage = (e) => {
    e?.stopPropagation();
    if (selectedEvent?.images) {
      setCurrentImageIndex(
        (prev) => (prev - 1 + selectedEvent.images.length) % selectedEvent.images.length
      );
    }
  };

  const hasMultipleImages = selectedEvent?.images && selectedEvent.images.length > 1;

  const upcomingEvents = events.filter((e) => e.isUpcoming);
  const pastEvents = events.filter((e) => !e.isUpcoming);

  const displayedEvents =
    tab === "upcoming"
      ? upcomingEvents
      : tab === "past"
      ? pastEvents
      : events;

  return (
    <section className="pt-36 sm:pt-40 pb-24 relative min-h-screen">
      <Container>
        {/* Header */}
        <div className="mx-auto max-w-3xl text-center px-2">
          <SectionBadge>Activity Registry</SectionBadge>
          <h1 className="mt-4 text-3xl sm:text-4xl md:text-5xl font-black dark:text-white text-slate-900 tracking-tight">
            Workshops, Summits & Events
          </h1>
          <p className="mt-3 text-sm sm:text-base dark:text-slate-300 text-slate-600">
            A complete record of OSCode CIT technical workshops, LinkedIn branding sessions, GSoC roadmaps, drone assembly labs, and community volunteer drives.
          </p>

          {/* Section Tabs: All, Upcoming, Past */}
          <div className="mt-8 flex items-center justify-center gap-2">
            {[
              { id: "all", label: `All Events (${events.length})` },
              { id: "upcoming", label: `Upcoming (${upcomingEvents.length})` },
              { id: "past", label: `Past Events (${pastEvents.length})` },
            ].map((t) => (
              <button
                key={t.id}
                onClick={() => setTab(t.id)}
                className={`rounded-full px-5 py-2 text-xs sm:text-sm font-semibold transition-all ${
                  tab === t.id
                    ? "bg-[#00A8FF] text-black font-bold shadow-lg shadow-[#00A8FF]/25"
                    : "bg-white/[0.04] dark:text-slate-300 text-slate-600 hover:bg-white/10 border border-white/10"
                }`}
              >
                {t.label}
              </button>
            ))}
          </div>
        </div>

        {/* Empty Upcoming Events Banner Card */}
        {tab === "upcoming" && upcomingEvents.length === 0 && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="mt-12 max-w-2xl mx-auto rounded-3xl border border-cyan-500/30 bg-[#070e1c]/90 p-8 text-center shadow-xl backdrop-blur-xl"
          >
            <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl border border-cyan-400/40 bg-cyan-500/10 text-cyan-400 mb-4">
              <Bell size={28} className="animate-bounce" />
            </div>
            <h3 className="text-xl font-bold text-white">No Upcoming Events Right Now</h3>
            <p className="mt-2 text-sm text-slate-300">
              We are curating exciting new open-source workshops, hackathons, and guest speaker sessions for Fall 2026!
            </p>
            <div className="mt-6 flex justify-center">
              <a
                href="https://instagram.com/oscodecit"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-xl bg-cyan-500 px-5 py-2.5 text-xs font-bold text-black shadow-lg shadow-cyan-500/25 hover:bg-cyan-400 transition"
              >
                <Sparkles size={14} />
                <span>Follow OSCode on Instagram</span>
              </a>
            </div>
          </motion.div>
        )}

        {/* Events Grid */}
        {displayedEvents.length > 0 && (
          <div className="mt-12 sm:mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 items-stretch">
            {[...displayedEvents].reverse().map((event, index) => (
              <motion.div
                key={event.id}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.05 }}
                transition={{ duration: 0.4, delay: index * 0.04 }}
                className="w-full min-w-0 flex"
              >
                <EventCard event={event} onCardClick={() => handleOpenModal(event)} />
              </motion.div>
            ))}
          </div>
        )}
      </Container>

      {/* Global Fixed Viewport Modal for Events Page */}
      <AnimatePresence>
        {selectedEvent && (
          <div className="fixed inset-0 z-[99999] flex items-center justify-center p-3 sm:p-6">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={handleCloseModal}
              className="absolute inset-0 bg-black/80 backdrop-blur-md"
            />

            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ duration: 0.25 }}
              className="relative max-h-[92vh] w-full max-w-5xl overflow-hidden rounded-3xl border dark:border-[#00A8FF]/30 border-slate-300 dark:bg-[#080e1e] bg-white p-6 sm:p-8 shadow-2xl z-10 flex flex-col dark:text-white text-slate-900"
            >
              <button
                onClick={handleCloseModal}
                aria-label="Close dialog"
                className="absolute right-4 top-4 z-20 flex h-9 w-9 items-center justify-center rounded-full border dark:border-white/15 border-slate-300 dark:bg-black/60 bg-slate-100 dark:text-slate-300 text-slate-700 hover:bg-slate-200 dark:hover:bg-white/20 transition"
              >
                <X size={18} />
              </button>

              <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 items-stretch overflow-y-auto pr-1">
                <div className="lg:col-span-5 flex flex-col items-center justify-start">
                  <div className="relative h-72 sm:h-96 lg:h-[460px] w-full overflow-hidden rounded-2xl border dark:border-white/10 border-slate-200 dark:bg-black/70 bg-slate-100 flex items-center justify-center p-2">
                    <img
                      src={selectedEvent.images?.[currentImageIndex] || selectedEvent.image}
                      alt={selectedEvent.title}
                      className="max-h-full max-w-full object-contain select-none"
                    />

                    {hasMultipleImages && (
                      <>
                        <button
                          onClick={previousImage}
                          className="absolute left-2 top-1/2 -translate-y-1/2 rounded-full bg-black/60 p-1.5 text-white backdrop-blur-sm hover:bg-black/90 transition"
                        >
                          <ChevronLeft size={16} />
                        </button>
                        <button
                          onClick={nextImage}
                          className="absolute right-2 top-1/2 -translate-y-1/2 rounded-full bg-black/60 p-1.5 text-white backdrop-blur-sm hover:bg-black/90 transition"
                        >
                          <ChevronRight size={16} />
                        </button>
                      </>
                    )}
                  </div>
                </div>

                <div className="lg:col-span-7 flex flex-col justify-start space-y-5">
                  <div className="flex flex-wrap items-center gap-2.5">
                    <span className="inline-flex items-center gap-1.5 rounded-full bg-cyan-500/10 border border-cyan-400/40 px-3 py-1 text-xs font-bold text-cyan-600 dark:text-cyan-300">
                      <Calendar size={13} />
                      {selectedEvent.date}
                    </span>

                    <span className="inline-flex items-center gap-1.5 rounded-full dark:bg-white/5 bg-slate-100 border dark:border-white/10 border-slate-200 px-3 py-1 text-xs dark:text-slate-300 text-slate-700">
                      <MapPin size={13} className="text-cyan-600 dark:text-cyan-400" />
                      {selectedEvent.venue ? selectedEvent.venue.split(",")[0] : selectedEvent.location}
                    </span>
                  </div>

                  <h2 className="text-2xl sm:text-3xl font-black dark:text-white text-slate-900 tracking-tight leading-tight">
                    {selectedEvent.title}
                  </h2>

                  <div className="space-y-4 pt-2 border-t dark:border-white/10 border-slate-200">
                    {selectedEvent.about && (
                      <div>
                        <h3 className="text-xs font-bold uppercase tracking-wider text-cyan-600 dark:text-cyan-300 flex items-center gap-1.5">
                          <BookOpen size={14} />
                          About the Event
                        </h3>
                        <p className="mt-1.5 text-sm dark:text-slate-200 text-slate-700 leading-relaxed">
                          {selectedEvent.about}
                        </p>
                      </div>
                    )}

                    {selectedEvent.participation && (
                      <div className="pt-2">
                        <h3 className="text-xs font-bold uppercase tracking-wider text-purple-600 dark:text-purple-300 flex items-center gap-1.5">
                          <Users size={14} />
                          OSCode CIT Participation
                        </h3>
                        <p className="mt-1.5 text-sm dark:text-slate-200 text-slate-700 leading-relaxed">
                          {selectedEvent.participation}
                        </p>
                      </div>
                    )}

                    {selectedEvent.outcome && (
                      <div className="pt-2">
                        <h3 className="text-xs font-bold uppercase tracking-wider text-emerald-600 dark:text-emerald-400 flex items-center gap-1.5">
                          <Award size={14} />
                          Key Learning & Outcomes
                        </h3>
                        <p className="mt-1.5 text-sm dark:text-slate-200 text-slate-700 leading-relaxed">
                          {selectedEvent.outcome}
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
    </section>
  );
};

export default Events;