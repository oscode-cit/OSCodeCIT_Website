import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Container from "../components/common/Container";
import SectionBadge from "../components/common/SectionBadge";
import MemberCard from "../components/team/MemberCard";
import team from "../data/team";

const departments = ["All", "Leadership", "R&D", "Tech", "Social Media & Events"];

const Team = () => {
  const [activeTab, setActiveTab] = useState("All");

  const departmentsToRender =
    activeTab === "All"
      ? ["Leadership", "R&D", "Tech", "Social Media & Events"]
      : [activeTab];

  return (
    <section className="pt-40 pb-28 relative">
      <Container>
        <div className="mx-auto max-w-3xl text-center">
          <SectionBadge>Our Team</SectionBadge>
          <h1 className="mt-4 text-4xl sm:text-5xl font-black text-white tracking-tight">
            Meet The Minds Behind OSCode
          </h1>
          <p className="mt-3 text-sm sm:text-base text-slate-300">
            A collaborative collective of developers, researchers, and event curators.
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-2">
            {departments.map((dept) => (
              <button
                key={dept}
                onClick={() => setActiveTab(dept)}
                className={`rounded-full px-5 py-2 text-xs sm:text-sm font-semibold transition-all ${
                  activeTab === dept
                    ? "bg-[#00A8FF] text-black font-bold shadow-lg shadow-[#00A8FF]/25"
                    : "bg-white/[0.04] text-slate-300 hover:bg-white/10 border border-white/10"
                }`}
              >
                {dept}
              </button>
            ))}
          </div>
        </div>

        <div className="mt-16 space-y-16">
          {departmentsToRender.map((deptName) => {
            const members = team.filter((m) => m.department === deptName);
            if (members.length === 0) return null;

            return (
              <div key={deptName} className="space-y-6">
                <div className="flex items-center gap-4">
                  <h2 className="text-xl sm:text-2xl font-bold text-[#00D2FF]">
                    {deptName}
                  </h2>
                  <div className="h-px flex-1 bg-gradient-to-r from-[#00A8FF]/40 via-white/10 to-transparent" />
                  <span className="text-xs font-mono text-slate-400">
                    {members.length} {members.length === 1 ? "Member" : "Members"}
                  </span>
                </div>

                <div className="grid gap-6 grid-cols-2 sm:grid-cols-3 lg:grid-cols-4">
                  <AnimatePresence>
                    {members.map((member) => (
                      <motion.div
                        key={member.id}
                        layout
                        initial={{ opacity: 0, scale: 0.96 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.96 }}
                        transition={{ duration: 0.3 }}
                      >
                        <MemberCard member={member} />
                      </motion.div>
                    ))}
                  </AnimatePresence>
                </div>
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
};

export default Team;