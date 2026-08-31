import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Container from "../common/Container";
import SectionHeading from "../common/SectionHeading";
import ProjectCard from "../projects/ProjectCard";
import { projects } from "../../data/projects";

const Projects = () => {
  const featuredProjects = projects.slice(0, 3);

  return (
    <section id="projects" className="py-16 sm:py-24 relative overflow-hidden">
      <Container>
        <SectionHeading
          badge="What We Build"
          title="Featured Projects & Repositories"
          description="A selection of student-led software builds, hardware research, and active open-source repositories."
        />

        <div className="mt-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7 items-stretch">
          {featuredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{ duration: 0.45, delay: index * 0.08 }}
              className="flex"
            >
              <ProjectCard project={project} />
            </motion.div>
          ))}
        </div>

        <div className="mt-14 flex justify-center">
          <Link
            to="/projects"
            className="inline-flex items-center gap-2 rounded-full border border-[#00A8FF]/40 bg-[#00A8FF]/10 px-7 py-3 text-sm font-bold text-[#00D2FF] transition-all duration-300 hover:scale-105 hover:bg-[#00A8FF] hover:text-black hover:shadow-[0_0_25px_rgba(0,168,255,0.4)]"
          >
            View All Projects
            <ArrowRight size={16} />
          </Link>
        </div>
      </Container>
    </section>
  );
};

export default Projects;