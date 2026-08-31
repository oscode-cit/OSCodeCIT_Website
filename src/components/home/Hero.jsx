import { motion } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";
import { useNavigate } from "react-router-dom";
import Container from "../common/Container";
import PrimaryButton from "../common/PrimaryButton";
import SecondaryButton from "../common/SecondaryButton";
import GradientText from "../common/GradientText";

const Hero = () => {
  const navigate = useNavigate();

  return (
    <section className="relative min-h-[82vh] flex items-center justify-center pt-32 pb-20 overflow-hidden">
      <div className="absolute inset-0 bg-dot-grid opacity-50 pointer-events-none" />

      <Container className="relative z-10">
        <motion.div
          className="mx-auto max-w-4xl flex flex-col items-center text-center"
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          <div className="inline-flex items-center gap-2 rounded-full border border-cyan-400/40 bg-cyan-400/10 px-4 py-1.5 backdrop-blur-md">
            <Sparkles className="h-4 w-4 text-cyan-400" />
            <span className="text-[11px] font-semibold uppercase tracking-widest text-cyan-300 sm:text-xs">
              Imagine • Innovate • Build
            </span>
          </div>

          <h1 className="mt-7 text-4xl font-black tracking-tight leading-[1.15] sm:mt-8 sm:text-6xl sm:leading-[1.1] lg:text-7xl">
            Empowering Developers Through Open Source{" "}
            <GradientText className="block sm:inline">OSCode CIT</GradientText>
          </h1>

          <p className="mt-5 max-w-2xl text-base text-slate-300 leading-relaxed sm:mt-6 sm:text-xl">
            The premier open-source and developer community of Cambridge
            Institute of Technology. Fostering real-world engineering, open
            collaboration, and technical leadership.
          </p>

          <div className="mt-6 flex items-center gap-2 rounded-lg border border-white/10 bg-black/40 px-4 py-2 font-mono text-[11px] text-cyan-300/80 sm:text-xs">
            <span className="text-violet-400">$</span>
            <span>building the future, one commit at a time</span>
            <span className="ml-0.5 inline-block h-3.5 w-[2px] animate-pulse bg-cyan-300" />
          </div>

          <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
            <PrimaryButton
              onClick={() => navigate("/events")}
              className="flex items-center gap-2"
            >
              Explore Events
              <ArrowRight size={18} />
            </PrimaryButton>
            <SecondaryButton onClick={() => navigate("/team")}>
              Meet the Team
            </SecondaryButton>
          </div>
        </motion.div>
      </Container>
    </section>
  );
};

export default Hero;
