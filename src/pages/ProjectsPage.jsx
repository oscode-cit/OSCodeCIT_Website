import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Container from "../components/common/Container";
import SectionBadge from "../components/common/SectionBadge";
import ProjectCard from "../components/projects/ProjectCard";
import { projects } from "../data/projects";

const categories = ["All", "Open Source", "Developer Tools"];

const ProjectsPage = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredProjects =
    selectedCategory === "All"
      ? projects
      : selectedCategory === "Open Source" || selectedCategory === "Developer Tools"
      ? projects.filter((p) => p.category === selectedCategory)
      : projects.filter(
          (p) =>
            p.member?.toLowerCase().includes(selectedCategory.toLowerCase()) ||
            p.creator?.toLowerCase().includes(selectedCategory.toLowerCase())
        );

  return (
    <section className="pt-32 sm:pt-40 pb-20 sm:pb-28 relative min-h-screen">
      <Container>
        <div className="mx-auto max-w-3xl text-center">
          <SectionBadge className="border-cyan-500/40 bg-cyan-500/10 px-4 py-1.5 font-mono text-xs font-bold text-cyan-700 dark:text-cyan-300 mb-4 shadow-lg">Engineering & Member Builds</SectionBadge>
          <h1 className="mt-4 text-4xl sm:text-5xl font-black dark:text-white text-slate-900 tracking-tight">
            OSCode Member Projects
          </h1>
          <p className="mt-3 text-sm sm:text-base dark:text-slate-300 text-slate-600">
            Showcasing real-world web applications, AI copywriters, open-source engines, and developer tools created by Kirithi, Vivek, Durga, and OSCode team members.
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`rounded-full px-5 py-2 text-xs sm:text-sm font-semibold transition-all ${
                  selectedCategory === cat
                    ? "bg-[#00A8FF] text-black font-bold shadow-lg shadow-[#00A8FF]/25"
                    : "bg-white/[0.04] dark:text-slate-300 text-slate-600 hover:bg-white/10 border border-white/10"
                }`}
              >
                {cat.includes("Kirithi") || cat.includes("Vivek") || cat.includes("Durga")
                  ? `${cat}'s Projects`
                  : cat}
              </button>
            ))}
          </div>
        </div>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7 items-stretch">
          <AnimatePresence>
            {filteredProjects.map((project) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.25 }}
                className="flex"
              >
                <ProjectCard project={project} />
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </Container>
    </section>
  );
};

export default ProjectsPage;