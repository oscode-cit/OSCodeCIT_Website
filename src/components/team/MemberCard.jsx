import GlassCard from "../common/GlassCard";
import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";

const MemberCard = ({ member }) => {
  return (
    <GlassCard className="w-full overflow-hidden text-center h-full">
      <img
        src={member.image}
        alt={member.name}
        className="mx-auto h-20 w-20 sm:h-24 sm:w-24 rounded-full object-cover border-4 border-cyan-400"
      />
      <div className="flex flex-col overflow-hidden">
        <h3 className="mt-4 text-sm sm:text-lg font-bold">{member.name}</h3>

        <p className="mt-2 text-cyan-400 text-xs sm:text-sm whitespace-nowrap">
          {member.role}
        </p>

        <div className="mt-2 flex justify-center gap-3 sm:gap-5 text-lg sm:text-xl">
          {member.github && (
            <a href={member.github} target="_blank" rel="noreferrer">
              <FaGithub />
            </a>
          )}

          {member.linkedin && (
            <a href={member.linkedin} target="_blank" rel="noreferrer">
              <FaLinkedin />
            </a>
          )}

          {member.instagram && (
            <a href={member.instagram} target="_blank" rel="noreferrer">
              <FaInstagram />
            </a>
          )}
        </div>
      </div>
    </GlassCard>
  );
};

export default MemberCard;
