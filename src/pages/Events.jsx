import { useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  CalendarDays,
  Users,
  Sparkles,
  Bell,
  X,
  ChevronLeft,
  ChevronRight,
  MapPin,
} from "lucide-react";

import Container from "../components/common/Container";
import PageIntro from "../components/common/PageIntro";
import NeonFrame from "../components/common/NeonFrame";
import EventCard from "../components/events/EventCard";
import events from "../data/events";

export default function Events() {
  const [tab, setTab] = useState("all");
  const [selected, setSelected] = useState(null);
  const [imageIndex, setImageIndex] = useState(0);

  const upcoming = useMemo(
    () => events.filter((event) => event.isUpcoming),
    []
  );

  const past = useMemo(
    () => events.filter((event) => !event.isUpcoming),
    []
  );

  const list =
    tab === "upcoming"
      ? upcoming
      : tab === "past"
        ? past
        : events;

  const open = (event) => {
    setSelected(event);
    setImageIndex(0);
  };

  const close = () => {
    setSelected(null);
    setImageIndex(0);
  };

  const next = () => {
    const totalImages = selected?.images?.length || 1;

    setImageIndex(
      (current) => (current + 1) % totalImages
    );
  };

  const prev = () => {
    const totalImages = selected?.images?.length || 1;

    setImageIndex(
      (current) =>
        (current - 1 + totalImages) % totalImages
    );
  };

  return (
    <main className="future-page min-w-0 overflow-x-hidden">
      <Container className="!max-w-[1580px] px-4 md:px-8">

        {/* =====================================================
            PAGE INTRO
        ===================================================== */}

        <PageIntro
          icon={CalendarDays}
          eyebrow="OSCODE / ACTIVITY REGISTRY"
          title="Our"
          accent="Events"
          description="Workshops, seminars, hackathons, visits, and community sessions that help OSCode CIT students learn, collaborate, and build together."
          stats={[
            {
              value: `${events.length}+`,
              label: "Events Conducted",
              icon: CalendarDays,
            },
            {
              value: "500+",
              label: "Participants",
              icon: Users,
            },
            {
              value: "8+",
              label: "Collaboration",
              icon: Sparkles,
            },
          ]}
        />

        {/* =====================================================
            FILTER TABS
        ===================================================== */}

        <div className="future-tabs">
          {[
            ["all", `All Events (${events.length})`],
            ["upcoming", `Upcoming (${upcoming.length})`],
            ["past", `Past Events (${past.length})`],
          ].map(([id, label]) => (
            <button
              key={id}
              type="button"
              className={tab === id ? "active" : ""}
              onClick={() => setTab(id)}
            >
              {label}
            </button>
          ))}
        </div>

        {/* =====================================================
            EMPTY UPCOMING STATE
        ===================================================== */}

        {tab === "upcoming" && upcoming.length === 0 ? (
          <div className="empty-state">
            <Bell
              size={28}
              className="mx-auto mb-2"
            />

            <h3>No Upcoming Events Right Now</h3>

            <p>
              New workshops, technical sessions, and community
              activities will appear here.
            </p>
          </div>
        ) : (
          /* ===================================================
             EVENT COLLECTION
          =================================================== */

          <NeonFrame
            eyebrow="EVENT COLLECTION"
            title="Event Photo Albums"
            description="Every event has its own complete card with readable details, image, location, and actions."
          >
            <div className="events-grid">
              {list.map((event, index) => (
                <motion.div
                  key={event.id}
                  initial={{
                    opacity: 0,
                    y: 18,
                  }}
                  whileInView={{
                    opacity: 1,
                    y: 0,
                  }}
                  viewport={{
                    once: true,
                    amount: 0.08,
                  }}
                  transition={{
                    delay: index * 0.035,
                  }}
                  className="event-grid-item"
                >
                  <EventCard
                    event={event}
                    onCardClick={open}
                  />
                </motion.div>
              ))}
            </div>
          </NeonFrame>
        )}
      </Container>

      {/* =======================================================
          EVENT MODAL
      ======================================================= */}

      <AnimatePresence>
        {selected && (
          <div className="modal-layer">

            {/* BACKDROP */}

            <motion.div
              className="modal-backdrop"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={close}
            />

            {/* MODAL */}

            <motion.div
              className="detail-modal event-modal"
              initial={{
                opacity: 0,
                y: 20,
                scale: 0.97,
              }}
              animate={{
                opacity: 1,
                y: 0,
                scale: 1,
              }}
              exit={{
                opacity: 0,
                y: 20,
                scale: 0.97,
              }}
            >

              {/* CLOSE */}

              <button
                type="button"
                className="modal-close"
                onClick={close}
                aria-label="Close event details"
              >
                <X size={19} />
              </button>

              <div className="event-modal-grid">

                {/* =================================================
                    IMAGE
                ================================================= */}

                <div className="modal-gallery">

                  <img
                    src={
                      selected.images?.[imageIndex] ||
                      selected.image
                    }
                    alt={selected.title}
                  />

                  {selected.images?.length > 1 && (
                    <>
                      <button
                        type="button"
                        onClick={prev}
                        className="gallery-btn left"
                        aria-label="Previous image"
                      >
                        <ChevronLeft size={20} />
                      </button>

                      <button
                        type="button"
                        onClick={next}
                        className="gallery-btn right"
                        aria-label="Next image"
                      >
                        <ChevronRight size={20} />
                      </button>
                    </>
                  )}

                </div>

                {/* =================================================
                    EVENT DETAILS
                ================================================= */}

                <div className="modal-copy">

                  <span className="future-eyebrow">
                    {selected.date}
                  </span>

                  <h2>
                    {selected.title}
                  </h2>

                  <div className="meta-line">
                    <MapPin size={16} />

                    <span>
                      {selected.venue ||
                        selected.location}
                    </span>
                  </div>

                  {/* ABOUT */}

                  <div className="modal-section">
                    <h4>ABOUT</h4>

                    <p>
                      {selected.about}
                    </p>
                  </div>

                  {/* PARTICIPATION */}

                  <div className="modal-section">
                    <h4>
                      OSCODE PARTICIPATION
                    </h4>

                    <p>
                      {selected.participation}
                    </p>
                  </div>

                  {/* OUTCOME */}

                  <div className="modal-section outcome">
                    <h4>
                      KEY OUTCOME
                    </h4>

                    <p>
                      {selected.outcome}
                    </p>
                  </div>

                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </main>
  );
}
