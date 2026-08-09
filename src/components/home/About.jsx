import Container from "../common/Container";
import SectionHeading from "../common/SectionHeading";
import GlassCard from "../common/GlassCard";
import { Code2, Users, Trophy } from "lucide-react";
import { motion } from "framer-motion";

const features = [
  {
    icon: Code2,
    title: "Open Source",
    desc: "Contribute to real-world projects and build impactful software.",
  },
  {
    icon: Users,
    title: "Community",
    desc: "Learn, collaborate and grow with passionate developers.",
  },
  {
    icon: Trophy,
    title: "Hackathons",
    desc: "Participate in exciting competitions and innovate together.",
  },
];

const About = () => {
  return (
    <section id="about" className="py-20 md:py-28">
      <Container>
        <SectionHeading
          badge="About Us"
          title="Building Developers Beyond the Classroom"
          description="OSCODE is the official open-source community of Cambridge Institute of Technology, empowering students through collaboration, innovation, workshops, hackathons, and real-world development."
        />

        <div className="mt-16 grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {features.map(({ icon: Icon, title, desc }, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{
                duration: 0.6,
                delay: index * 0.12,
                ease: "easeOut",
              }}
            >
              <GlassCard key={title}>
                <Icon className="mb-6 h-10 w-10 text-cyan-400" />

                <h3 className="text-xl font-semibold">{title}</h3>

                <p className="mt-3 text-gray-400 leading-7">{desc}</p>
              </GlassCard>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default About;
