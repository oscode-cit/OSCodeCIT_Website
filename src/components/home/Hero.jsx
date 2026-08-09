import Container from "../common/Container";
import PrimaryButton from "../common/PrimaryButton";
import SecondaryButton from "../common/SecondaryButton";
import GradientText from "../common/GradientText";
import FloatingCard from "./FloatingCard";
import SectionBadge from "../common/SectionBadge";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const Hero = () => {
  const navigate = useNavigate();
  return (
    <section className="min-h-screen flex items-center py-20 lg:py-0">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-3 items-center gap-12 lg:gap-16">
          <motion.img
            src="/images/hero/globe.svg"
            alt="OSCODE Globe"
            className="relative top-28 hidden lg:block w-[480px] xl:w-[560px] 2xl:w-[620px] select-none"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{
              duration: 0.8,
              delay: 0.2,
              ease: "easeOut",
            }}
          />

          <motion.div
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.8,
              ease: "easeOut",
            }}
            className="flex flex-col items-center"
          >
            <div className="flex justify-center lg:justify-start">
              <SectionBadge>Imagine.Innovate.Build.</SectionBadge>
            </div>
            <h1 className="mt-5 text-5xl md:text-6xl lg:text-7xl font-black leading-tight text-center lg:text-left">
              <GradientText className="text-5xl lg:text-6xl font-black leading-none">
                OSCode CIT
              </GradientText>
            </h1>
            <h2 className="mt-4 text-xl md:text-2xl font-semibold text-white text-center lg:text-left">
              Open Source Community
            </h2>
            <p className="mt-8 max-w-xl mx-auto text-base md:text-lg leading-8 text-gray-400 text-center">
              Empowering the next generation of developers at CIT through code,
              community & innovation.
            </p>
            <div className="mt-10 flex flex-col sm:flex-row justify-center lg:justify-start gap-5">
              <PrimaryButton
                onClick={() => navigate("/events#featured")}
                className="flex flex-row items-center gap-2"
              >
                Get Started
                <ArrowRight size={18} />
              </PrimaryButton>

              <SecondaryButton onClick={() => navigate("/events")}>
                Explore Events
              </SecondaryButton>
            </div>
          </motion.div>

          <motion.div
            className="relative hidden lg:flex justify-center items-center"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{
              duration: 0.8,
              delay: 0.2,
              ease: "easeOut",
            }}
          >
            <FloatingCard />
          </motion.div>
        </div>
      </Container>
    </section>
  );
};

export default Hero;
