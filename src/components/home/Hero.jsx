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
            <span className="text-xs font-semibold uppercase tracking-widest text-cyan-300">
              Imagine • Innovate • Build
            </span>
          </div>

          <h1 className="mt-8 text-5xl sm:text-6xl lg:text-7xl font-black tracking-tight leading-[1.1]">
            Empowering Developers Through Open Source <br />
            <GradientText>OSCode CIT</GradientText>
          </h1>

          <p className="mt-6 max-w-2xl text-lg sm:text-xl text-slate-300 leading-relaxed">
            The premier open-source and developer community of Cambridge
            Institute of Technology. Fostering real-world engineering, open
            collaboration, and technical leadership.
          </p>

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
