import GlassCard from "../common/GlassCard";
import { motion } from "framer-motion";
import "../../styles/globals.css";

const FloatingCard = () => {
  return (
    <motion.div
      className="absolute"
      initial={{ opacity: 0, x: 80 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{
        duration: 0.8,
        delay: 0.4,
        ease: "easeOut",
      }}
    >
      <GlassCard className="w-[250px] rotate-[-4deg] shadow-2xl hover:-rotate-6 hover:scale-101 ">
        <div className="terminal-header">
          <div className="dot red"></div>
          <div className="dot yellow"></div>
          <div className="dot green"></div>
        </div>

        <pre className="text-sm leading-7 px-5">
    <span className="text-purple-400">const</span>{" "}
    <span className="text-cyan-400">oscode</span>{" "}
    <span className="text-gray-300">= {"{"}</span>
    {"\n  "}
    <span className="text-yellow-400">passion</span>
    <span className="text-gray-300">: </span>
    <span className="text-green-500">"code"</span>
    <span className="text-gray-300">,</span>
    {"\n  "}
    <span className="text-yellow-400">vibes</span>
    <span className="text-gray-300">: </span>
    <span className="text-yellow-400">"🔥"</span>
    {"\n"}
    <span className="text-gray-300">{"}"}</span>
  </pre>
      </GlassCard>
    </motion.div>
  );
};

export default FloatingCard;
