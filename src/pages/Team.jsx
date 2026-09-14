import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Network, LayoutGrid, Users, Sparkles } from "lucide-react";
import Container from "../components/common/Container";
import SectionBadge from "../components/common/SectionBadge";
import MemberCard from "../components/team/MemberCard";
import TeamTree from "../components/team/TeamTree";
import team from "../data/team";

const departments = ["All", "Leadership", "R&D", "Tech", "Social Media & Events"];

const Team = () => {
  const [viewMode, setViewMode] = useState("tree"); // "tree" | "grid"
  const [activeTab, setActiveTab] = useState("All");

  return (
    <section className="pt-32 sm:pt-40 pb-20 sm:pb-28 relative min-h-screen">
      {/* Background Lighting */}
      <div className="absolute top-32 left-1/2 -translate-x-1/2 w-96 h-96 rounded-full bg-cyan-500/10 blur-[130px] pointer-events-none" />

      <Container>
        {/* Header */}
        <div className="mx-auto max-w-3xl text-center">
          <SectionBadge>OSCode CIT Chapter</SectionBadge>
          <h1 className="mt-4 text-4xl sm:text-5xl font-black dark:text-white text-slate-900 tracking-tight">
            Meet The Minds Behind OSCode
          </h1>
          <p className="mt-3 text-sm sm:text-base dark:text-slate-300 text-slate-600">
            A collaborative collective of developers, researchers, project leads, and event curators at Cambridge Institute of Technology.
          </p>

          {/* View Mode Selector Toggle */}
          <div className="mt-8 flex items-center justify-center gap-3">
            <div className="flex rounded-2xl border border-cyan-500/30 bg-[#070e1c]/90 p-1.5 shadow-lg backdrop-blur-xl">
              <button
                onClick={() => setViewMode("tree")}
                className={`flex items-center gap-2 rounded-xl px-5 py-2 text-xs font-mono font-bold transition-all ${
                  viewMode === "tree"
                    ? "bg-cyan-500 text-black shadow-md shadow-cyan-500/30"
                    : "text-slate-300 hover:text-white"
                }`}
              >
                <Network size={16} />
                <span>Interactive Tree View</span>
              </button>
              <button
                onClick={() => setViewMode("grid")}
                className={`flex items-center gap-2 rounded-xl px-5 py-2 text-xs font-mono font-bold transition-all ${
                  viewMode === "grid"
                    ? "bg-cyan-500 text-black shadow-md shadow-cyan-500/30"
                    : "text-slate-300 hover:text-white"
                }`}
              >
                <LayoutGrid size={16} />
                <span>Grid View</span>
              </button>
            </div>
          </div>
        </div>

        {/* View Mode Render */}
        <div className="mt-12">
          {viewMode === "tree" ? (
            <TeamTree />
          ) : (
            <div>
              {/* Department Filter Tabs for Grid View */}
              <div className="mb-8 flex flex-wrap justify-center gap-2">
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

              {/* Grid Gallery */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {team
                  .filter((m) => activeTab === "All" || m.department === activeTab)
                  .map((member) => (
                    <MemberCard key={member.id} member={member} />
                  ))}
              </div>
            </div>
          )}
        </div>
      </Container>
    </section>
  );
};

export default Team;