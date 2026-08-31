import Container from "../common/Container";
import SectionHeading from "../common/SectionHeading";
import { Code2, Trophy, FolderGit2, GitPullRequest, Cpu } from "lucide-react";
import { motion } from "framer-motion";

const bentoItems = [
  {
    icon: Code2,
    title: "Open Source Development",
    desc: "Collaborate on real-world software, contribute to active repositories, and adopt industry-standard version control workflows.",
    colSpan: "lg:col-span-7",
    color: "cyan",
    iconBg: "bg-cyan-400/10 border-cyan-400/30 text-cyan-300",
    glowBorder: "group-hover:border-cyan-400/50",
    gradientBg: "from-cyan-950/20 via-transparent to-transparent",
  },
  {
    icon: Trophy,
    title: "Hackathons & Challenges",
    desc: "Form student teams, tackle technical problem statements, and represent CIT at national and inter-college hackathons.",
    colSpan: "lg:col-span-5",
    color: "amber",
    iconBg: "bg-amber-400/10 border-amber-400/30 text-amber-300",
    glowBorder: "group-hover:border-amber-400/50",
    gradientBg: "from-amber-950/20 via-transparent to-transparent",
  },
  {
    icon: FolderGit2,
    title: "Project Development",
    desc: "Collaborate on end-to-end software builds, implement modern web stacks, and maintain production-ready codebases.",
    colSpan: "lg:col-span-4",
    color: "emerald",
    iconBg: "bg-emerald-400/10 border-emerald-400/30 text-emerald-300",
    glowBorder: "group-hover:border-emerald-400/50",
    gradientBg: "from-emerald-950/20 via-transparent to-transparent",
  },
  {
    icon: GitPullRequest,
    title: "Open Source Programs",
    desc: "Structured roadmaps, proposal preparation, and guidance for global programs like Google Summer of Code (GSoC).",
    colSpan: "lg:col-span-4",
    color: "purple",
    iconBg: "bg-purple-400/10 border-purple-400/30 text-purple-300",
    glowBorder: "group-hover:border-purple-400/50",
    gradientBg: "from-purple-950/20 via-transparent to-transparent",
  },
  {
    icon: Cpu,
    title: "Workshops & Tech Sessions",
    desc: "Hands-on workshops spanning Git basics, systems engineering, drone technologies, and industry tech syncs.",
    colSpan: "lg:col-span-4",
    color: "blue",
    iconBg: "bg-blue-400/10 border-blue-400/30 text-blue-300",
    glowBorder: "group-hover:border-blue-400/50",
    gradientBg: "from-blue-950/20 via-transparent to-transparent",
  },
];

const About = () => {
  return (
    <section id="about" className="py-10 relative">
      <Container>
        <SectionHeading
          badge="What We Do"
          title="Building Practical Technical Skills"
          description="OSCode CIT bridges academic concepts and industry practices through hands-on development, technical workshops, and open innovation."
        />

        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-6">
          {bentoItems.map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.title}
                className={item.colSpan}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.1 }}
                transition={{ duration: 0.45, delay: index * 0.07 }}
              >
                <div
                  className={`group relative h-full flex flex-col justify-between rounded-3xl border border-white/10 bg-linear-to-b ${item.gradientBg} bg-[#0e1630]/75 p-5 backdrop-blur-xl transition-all duration-300 hover:-translate-y-1.5 sm:p-7 ${item.glowBorder} hover:shadow-xl`}
                >
                  <div>
                    <div
                      className={`h-12 w-12 rounded-2xl border flex items-center justify-center mb-6 transition-transform duration-300 group-hover:scale-110 ${item.iconBg}`}
                    >
                      <Icon size={22} />
                    </div>
                    <h3 className="text-xl font-bold text-white tracking-tight">{item.title}</h3>
                    <p className="mt-3 text-slate-300 text-sm leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </Container>
    </section>
  );
};

export default About;