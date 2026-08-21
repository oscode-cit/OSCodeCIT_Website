import Container from "../components/common/Container";
import SectionBadge from "../components/common/SectionBadge";
import EventCard from "../components/events/EventCard";
import events from "../data/events";
import { motion } from "framer-motion";

const Events = () => {
  const reversedEvents = [...events].reverse();

  return (
    <section className="pt-36 sm:pt-40 pb-24 relative overflow-x-hidden">
      <Container>
        <div className="mx-auto max-w-3xl text-center px-2">
          <SectionBadge>Activity Log & Highlights</SectionBadge>
          <h1 className="mt-4 text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tight">
            Workshops, Summits & Hackathons
          </h1>
          <p className="mt-3 text-sm sm:text-base text-slate-300">
            A track record of technical sessions, industry engagements, and developer gatherings.
          </p>
        </div>

        <div className="mt-12 sm:mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 items-stretch">
          {reversedEvents.map((event, index) => (
            <motion.div
              key={event.id}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.05 }}
              transition={{ duration: 0.45, delay: index * 0.06 }}
              className="w-full min-w-0 flex"
            >
              <EventCard event={event} />
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default Events;