import { Link } from "react-router-dom";

import Container from "../common/Container";
import SectionHeading from "../common/SectionHeading";
import PrimaryButton from "../common/PrimaryButton";
import EventCard from "../events/EventCard";
import { motion } from "framer-motion";

import events from "../../data/events";

const FeaturedEvents = () => {
  return (
    <section className="py-20 md:py-25">
      <Container>
        <SectionHeading
          badge="Featured Events"
          title="Learn, Build & Grow With Us"
          description="From workshops to hackathons, explore the events that shape the OSCode CIT community."
        />

        <div className="mt-16 grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {[...events]
            .reverse()
            .slice(0, 3)
            .map((event, index) => (
              <motion.div
                key={event.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.1 }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.12,
                  ease: "easeOut",
                }}
              >
                <EventCard key={event.id} event={event} />
              </motion.div>
            ))}
        </div>

        <div className="mt-14 flex justify-center">
          <Link to="/events">
            <PrimaryButton>View All Events</PrimaryButton>
          </Link>
        </div>
      </Container>
    </section>
  );
};

export default FeaturedEvents;
