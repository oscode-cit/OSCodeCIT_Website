import Container from "../components/common/Container";
import SectionHeading from "../components/common/SectionHeading";
import EventCard from "../components/events/EventCard";
import events from "../data/events";
import { motion } from "framer-motion";

const Events = () => {
  return (
    <section id="featured" className="py-32">
      <Container>
        <SectionHeading
          badge="Events"
          title="Learn. Build. Network."
          description="Discover workshops, hackathons and community events organized by OSCODE."
        />

        <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3 items-stretch">
          {[...events].reverse().map((event, index) => (
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
      </Container>
    </section>
  );
};

export default Events;
