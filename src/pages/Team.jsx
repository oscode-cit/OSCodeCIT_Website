import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, Users } from "lucide-react";
import Container from "../components/common/Container";
import SectionBadge from "../components/common/SectionBadge";
import MemberCard from "../components/team/MemberCard";
import team from "../data/team";

const departments = ["All", "Leadership", "R&D", "Tech", "Social Media & Events"];

const Team = () => {
  const [activeTab, setActiveTab] = useState("All");

  // State to track expanded departments when under "All" tab
  const [expandedDepts, setExpandedDepts] = useState({
    Leadership: true,
    "R&D": false,
    Tech: false,
    "Social Media & Events": false,
  });

  const toggleDept = (deptName) => {
    // Only toggle if currently in the "All" tab view
    if (activeTab === "All") {
      setExpandedDepts((prev) => ({
        ...prev,
        [deptName]: !prev[deptName],
      }));
    }
  };

  const isSpecificTab = activeTab !== "All";

  const departmentsToRender = isSpecificTab
    ? [activeTab]
    : ["Leadership", "R&D", "Tech", "Social Media & Events"];

  return (
    <section className="pt-40 pb-28 relative">
      <Container>
        {/* Header */}
        <div className="mx-auto max-w-3xl text-center">
          <SectionBadge>Our Team</SectionBadge>
          <h1 className="mt-4 text-4xl sm:text-5xl font-black text-white tracking-tight">
            Meet The Minds Behind OSCode
          </h1>
          <p className="mt-3 text-sm sm:text-base text-slate-300">
            A collaborative collective of developers, researchers, and event curators.
          </p>

          {/* Department Filter Tabs */}
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

        {/* Grouped Department Render */}
        <div className="mt-16 space-y-16">
          {departmentsToRender.map((deptName) => {
            const allDeptMembers = team.filter((m) => m.department === deptName);
            if (allDeptMembers.length === 0) return null;

            // Separate Leads and Members
            const leads = allDeptMembers.filter(
              (m) =>
                m.role.toLowerCase().includes("lead") ||
                deptName === "Leadership"
            );
            const members = allDeptMembers.filter(
              (m) =>
                !m.role.toLowerCase().includes("lead") &&
                deptName !== "Leadership"
            );

            // If on a specific tab, always show; if on "All", check expandedDepts state
            const isExpanded = isSpecificTab || !!expandedDepts[deptName];

            return (
              <div
                key={deptName}
                className="rounded-3xl border border-white/10 bg-[#0a1124]/40 p-6 sm:p-8 backdrop-blur-md"
              >
                {/* Department Header */}
                <div
                  onClick={() => !isSpecificTab && toggleDept(deptName)}
                  className={`flex items-center justify-between gap-4 select-none ${
                    !isSpecificTab ? "cursor-pointer group" : ""
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <h2 className="text-xl sm:text-2xl font-bold text-[#00D2FF] group-hover:text-white transition">
                      {deptName}
                    </h2>
                    <span className="rounded-full bg-white/5 border border-white/10 px-2.5 py-0.5 text-xs font-mono text-slate-400">
                      {allDeptMembers.length} {allDeptMembers.length === 1 ? "Member" : "Members"}
                    </span>
                  </div>

                  {/* Show toggle text & chevron only in "All" view */}
                  {!isSpecificTab && members.length > 0 && (
                    <div className="flex items-center gap-2 text-xs text-slate-400 group-hover:text-[#00D2FF] transition">
                      <span className="hidden sm:inline">
                        {isExpanded ? "Hide Members" : "Show All Members"}
                      </span>
                      <motion.div
                        animate={{ rotate: isExpanded ? 180 : 0 }}
                        transition={{ duration: 0.25 }}
                      >
                        <ChevronDown size={18} />
                      </motion.div>
                    </div>
                  )}
                </div>

                <div className="mt-2 h-px w-full bg-linear-to-r from-[#00A8FF]/40 via-white/10 to-transparent" />

                {/* Leads Row — Centered */}
                <div className="mt-8">
                  {deptName !== "Leadership" && leads.length > 0 && (
                    <p className="text-xs uppercase tracking-wider font-semibold text-slate-400 text-center mb-5">
                      Department Lead{leads.length > 1 ? "s" : ""}
                    </p>
                  )}

                  <div className="flex flex-wrap justify-center gap-6 items-stretch">
                    {leads.map((lead) => (
                      <div
                        key={lead.id}
                        onClick={() => !isSpecificTab && members.length > 0 && toggleDept(deptName)}
                        className={`w-full max-w-[260px] sm:w-64 ${
                          !isSpecificTab && members.length > 0 ? "cursor-pointer" : ""
                        }`}
                      >
                        <MemberCard member={lead} />
                      </div>
                    ))}
                  </div>

                  {/* Expand / Collapse Button: Rendered ONLY in "All" view */}
                  {!isSpecificTab && members.length > 0 && (
                    <div className="mt-6 flex justify-center">
                      <button
                        onClick={() => toggleDept(deptName)}
                        className="inline-flex items-center gap-2 rounded-full border border-[#00A8FF]/30 bg-[#00A8FF]/10 px-4 py-1.5 text-xs font-semibold text-[#00D2FF] transition hover:bg-[#00A8FF] hover:text-black"
                      >
                        <Users size={14} />
                        {isExpanded
                          ? `Hide Team Members (${members.length})`
                          : `View Team Members (${members.length})`}
                        <motion.span
                          animate={{ rotate: isExpanded ? 180 : 0 }}
                          transition={{ duration: 0.2 }}
                        >
                          <ChevronDown size={14} />
                        </motion.span>
                      </button>
                    </div>
                  )}
                </div>

                {/* Department Members Section */}
                <AnimatePresence>
                  {isExpanded && members.length > 0 && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.35, ease: "easeOut" }}
                      className="overflow-hidden"
                    >
                      <div className="mt-10 pt-6 border-t border-white/10">
                        <p className="text-xs uppercase tracking-wider font-semibold text-slate-400 text-center mb-6">
                          Team Members
                        </p>

                        <div className="flex flex-wrap justify-center gap-6 items-stretch">
                          {members.map((member) => (
                            <motion.div
                              key={member.id}
                              initial={{ opacity: 0, scale: 0.95 }}
                              animate={{ opacity: 1, scale: 1 }}
                              transition={{ duration: 0.25 }}
                              className="w-full max-w-[260px] sm:w-64"
                            >
                              <MemberCard member={member} />
                            </motion.div>
                          ))}
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
};

export default Team;