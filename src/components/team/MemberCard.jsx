import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";

const MemberCard = ({ member }) => {
  return (
    <div className="group relative flex h-full flex-col items-center justify-between rounded-2xl border border-white/10 bg-gradient-to-b from-[#111936]/80 via-[#0d142c]/85 to-[#090d1f]/95 p-5 backdrop-blur-xl transition-all duration-300 hover:-translate-y-2 hover:border-cyan-400/50 hover:shadow-[0_12px_35px_-8px_rgba(6,182,212,0.28)] text-center overflow-hidden">
      
      <div className="absolute inset-x-0 top-0 h-[2px] bg-gradient-to-r from-cyan-400 via-indigo-500 to-purple-500 opacity-60 transition-opacity duration-300 group-hover:opacity-100" />

      <div className="pointer-events-none absolute -top-12 left-1/2 -translate-x-1/2 h-28 w-28 rounded-full bg-cyan-500/10 blur-2xl transition-all duration-300 group-hover:bg-purple-500/20 group-hover:scale-150" />

      <div className="relative mt-2">
        <div className="absolute -inset-1 rounded-full bg-gradient-to-tr from-cyan-400 via-indigo-500 to-purple-500 opacity-30 blur-sm transition-all duration-300 group-hover:opacity-100 group-hover:blur-md" />
        <img
          src={member.image}
          alt={member.name}
          className="relative h-24 w-24 rounded-full object-cover border-2 border-white/20 shadow-lg transition-transform duration-300 group-hover:scale-105 group-hover:border-cyan-300"
        />
      </div>

      <div className="mt-4 flex flex-1 flex-col justify-between w-full relative z-10">
        <div>
          <h3 className="text-base font-bold text-white tracking-tight transition group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-cyan-300 group-hover:to-purple-300">
            {member.name}
          </h3>
          <span className="mt-1.5 inline-block rounded-full bg-white/[0.05] border border-white/10 px-2.5 py-0.5 text-[11px] font-medium text-slate-300 shadow-sm">
            {member.role}
          </span>
        </div>

        <div className="mt-5 flex items-center justify-center gap-2 pt-3 border-t border-white/10">
          {member.github && (
            <a
              href={member.github}
              target="_blank"
              rel="noreferrer"
              aria-label={`${member.name}'s GitHub`}
              className="flex h-8 w-8 items-center justify-center rounded-lg border border-white/10 bg-white/5 text-white transition hover:-translate-y-0.5 hover:border-white/40 hover:bg-white/20"
            >
              <FaGithub size={15} />
            </a>
          )}
          {member.linkedin && (
            <a
              href={member.linkedin}
              target="_blank"
              rel="noreferrer"
              aria-label={`${member.name}'s LinkedIn`}
              className="flex h-8 w-8 items-center justify-center rounded-lg border border-white/10 bg-white/5 text-slate-300 transition hover:-translate-y-0.5 hover:border-cyan-400/50 hover:bg-cyan-500/10 hover:text-cyan-300"
            >
              <FaLinkedin size={15} />
            </a>
          )}
          {member.instagram && (
            <a
              href={member.instagram}
              target="_blank"
              rel="noreferrer"
              aria-label={`${member.name}'s Instagram`}
              className="flex h-8 w-8 items-center justify-center rounded-lg border border-white/10 bg-white/5 text-slate-300 transition hover:-translate-y-0.5 hover:border-pink-400/50 hover:bg-pink-500/10 hover:text-pink-300"
            >
              <FaInstagram size={15} />
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default MemberCard;