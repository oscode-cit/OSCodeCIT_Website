import Container from "../components/common/Container";
import SectionHeading from "../components/common/SectionHeading";
import MemberCard from "../components/team/MemberCard";
import { motion } from "framer-motion";

import team from "../data/team";

const Team = () => {
  return (
    <section className="py-32">
      <Container>
        <SectionHeading
          badge="Our Team"
          title="Meet The People Behind OSCODE"
          description="A passionate group of students building a culture of learning, innovation, and open source."
        />

        <div className="grid gap-4 sm:gap-6 grid-cols-2 sm:grid-cols-3 lg:grid-cols-5">
          {team.map((member, index) => (
            <motion.div
              key={member.id}
              className="h-full"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{
                duration: 0.6,
                ease: "easeOut",
              }}
            >
              <MemberCard key={member.id} member={member} />
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default Team;
