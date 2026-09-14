import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Container from "../components/common/Container";
import SectionBadge from "../components/common/SectionBadge";
import AchievementCard from "../components/achievements/AchievementCard";
import { achievements } from "../data/achievements";

const categories = ["All", "Hackathon", "Summit", "Alumni"];

const AchievementsPage = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredAchievements =
    selectedCategory === "All"
      ? achievements
      : achievements.filter((a) => a.category === selectedCategory);

  return (
    <section className="pt-32 sm:pt-40 pb-20 sm:pb-28 relative min-h-screen">
      <Container>
        <div className="mx-auto max-w-3xl text-center">
          <SectionBadge>Hall of Fame</SectionBadge>
          <h1 className="mt-4 text-4xl sm:text-5xl font-black dark:text-white text-slate-900 tracking-tight">
            All Achievements & Awards
          </h1>
          <p className="mt-3 text-sm sm:text-base dark:text-slate-300 text-slate-600">
            A comprehensive record of hackathons won, summits represented, and career milestones.
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`rounded-full px-5 py-2 text-xs sm:text-sm font-semibold transition-all ${
                  selectedCategory === cat
                    ? "bg-[#00A8FF] text-black font-bold shadow-lg shadow-[#00A8FF]/25"
                    : "bg-white/4 dark:text-slate-300 text-slate-600 hover:bg-white/10 border border-white/10"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7 items-stretch">
          <AnimatePresence>
            {filteredAchievements.map((item) => (
              <motion.div
                key={item.id}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.25 }}
                className="flex"
              >
                <AchievementCard item={item} />
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </Container>
    </section>
  );
};

export default AchievementsPage;