import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, Sparkles, Code, Cpu } from "lucide-react";
import Container from "../common/Container";
import SectionHeading from "../common/SectionHeading";
import ProjectCard from "../projects/ProjectCard";
import { projects } from "../../data/projects";

const Projects = () => {
  const featuredProjects = projects.slice(0, 3);

  return (
    <motion.section
      id="projects"
      className="py-16 sm:py-24 relative overflow-hidden transition-colors duration-500"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      {/* Live Animated Floating Background Tech Orbs */}
      <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        <motion.div
          animate={{
            x: [0, 40, -30, 0],
            y: [0, -30, 40, 0],
            scale: [1, 1.15, 0.95, 1],
          }}
          transition={{
            duration: 14,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute left-[10%] top-[20%] h-72 w-72 rounded-full bg-cyan-500/10 dark:bg-cyan-500/15 blur-[120px]"
        />
        <motion.div
          animate={{
            x: [0, -50, 30, 0],
            y: [0, 40, -40, 0],
            scale: [0.9, 1.1, 1, 0.9],
          }}
          transition={{
            duration: 18,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute right-[10%] bottom-[15%] h-80 w-80 rounded-full bg-blue-500/10 dark:bg-indigo-500/15 blur-[140px]"
        />

        {/* Floating Code/Tech Icon Watermarks */}
        <motion.div
          animate={{ y: [-15, 15, -15], rotate: [0, 10, 0] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          className="absolute left-[5%] top-[40%] text-cyan-500/10 dark:text-cyan-400/10 pointer-events-none hidden sm:block"
        >
          <Code size={64} />
        </motion.div>
        <motion.div
          animate={{ y: [15, -15, 15], rotate: [0, -10, 0] }}
          transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
          className="absolute right-[5%] top-[30%] text-blue-500/10 dark:text-indigo-400/10 pointer-events-none hidden sm:block"
        >
          <Cpu size={64} />
        </motion.div>
      </div>

      <Container>
        {/* Animated Badge & Heading */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <SectionHeading
            badge="What We Build"
            title="Featured Projects & Repositories"
            description="A selection of student-led software builds, hardware research, and active open-source repositories."
          />
        </motion.div>

        {/* Live Staggered Grid Animation for Cards */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: {
                staggerChildren: 0.18,
              },
            },
          }}
          className="mt-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7 items-stretch"
        >
          {featuredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              variants={{
                hidden: { opacity: 0, y: 35, scale: 0.92 },
                visible: {
                  opacity: 1,
                  y: 0,
                  scale: 1,
                  transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] },
                },
              }}
              whileHover={{ y: -6 }}
              className="flex"
            >
              <ProjectCard project={project} />
            </motion.div>
          ))}
        </motion.div>

        {/* Animated Action Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.35 }}
          className="mt-14 flex justify-center"
        >
          <Link
            to="/projects"
            className="group relative inline-flex items-center gap-2.5 rounded-full border border-cyan-500/40 bg-cyan-500/10 px-8 py-3.5 text-sm font-bold text-cyan-700 dark:text-[#00D2FF] transition-all duration-300 hover:scale-105 hover:bg-cyan-500 hover:text-slate-950 dark:hover:text-black hover:shadow-[0_0_30px_rgba(0,168,255,0.5)] active:scale-95"
          >
            <Sparkles size={16} className="text-cyan-500 dark:text-cyan-300 group-hover:rotate-12 transition-transform" />
            <span>View All Projects</span>
            <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
          </Link>
        </motion.div>
      </Container>
    </motion.section>
  );
};

export default Projects;