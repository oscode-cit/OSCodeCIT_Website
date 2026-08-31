import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, MapPin, Send, MessageSquare } from "lucide-react";
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";
import Container from "../components/common/Container";
import SectionBadge from "../components/common/SectionBadge";
import GradientText from "../components/common/GradientText";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    subject: "",
    message: "",
  });

  const handleSendEmail = (e) => {
    e.preventDefault();

    const recipient = "oscodecit@cambridge.edu.in";
    const emailSubject = encodeURIComponent(formData.subject || "Inquiry for OSCode CIT");
    const emailBody = encodeURIComponent(
      `Hi OSCode CIT Team,\n\n${formData.message}\n\nBest regards,\n${formData.name}`
    );

    window.location.href = `mailto:${recipient}?subject=${emailSubject}&body=${emailBody}`;
  };

  return (
    <section className="min-h-screen pt-28 sm:pt-32 pb-16 sm:pb-20 relative overflow-hidden">
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-cyan-500/10 rounded-full blur-[140px] -z-10 pointer-events-none" />

      <Container>
        <div className="mx-auto max-w-3xl text-center">
          <SectionBadge>Get In Touch</SectionBadge>
          <h1 className="mt-4 text-4xl sm:text-6xl font-black text-white tracking-tight">
            Let’s Build <GradientText>Together</GradientText>
          </h1>
          <p className="mt-4 text-base sm:text-lg text-slate-300">
            Have an idea for a workshop, open-source project, or want to collaborate with our club?
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          <motion.div
            className="lg:col-span-5 flex flex-col gap-6"
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="rounded-3xl border border-white/15 bg-gradient-to-b from-[#131d3b]/90 to-[#0d1428]/95 p-5 sm:p-7 backdrop-blur-xl">
              <div className="flex items-center gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-cyan-400/10 border border-cyan-400/20 text-cyan-400">
                  <Mail size={22} />
                </div>
                <div>
                  <h3 className="text-xs font-semibold uppercase tracking-wider text-slate-400">
                    Official Email
                  </h3>
                  <a
                    href="mailto:oscodecit@cambridge.edu.in"
                    className="mt-1 block text-base sm:text-lg font-bold text-white hover:text-cyan-300 transition break-all"
                  >
                    oscodecit@cambridge.edu.in
                  </a>
                </div>
              </div>
            </div>

            <div className="rounded-3xl border border-white/15 bg-gradient-to-b from-[#131d3b]/90 to-[#0d1428]/95 p-5 sm:p-7 backdrop-blur-xl">
              <div className="flex items-center gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-violet-400/10 border border-violet-400/20 text-violet-400">
                  <MapPin size={22} />
                </div>
                <div>
                  <h3 className="text-xs font-semibold uppercase tracking-wider text-slate-400">
                    Campus Location
                  </h3>
                  <p className="mt-1 text-base font-bold text-white">
                    Cambridge Institute of Technology
                  </p>
                  <p className="text-xs text-slate-300 mt-0.5">
                    SMV Block Auditorium, Bengaluru, Karnataka
                  </p>
                </div>
              </div>
            </div>

            <div className="rounded-3xl border border-white/15 bg-gradient-to-b from-[#131d3b]/90 to-[#0d1428]/95 p-5 sm:p-7 backdrop-blur-xl">
              <h3 className="text-xs font-semibold uppercase tracking-wider text-slate-400">
                Official Channels
              </h3>

              <div className="mt-5 grid grid-cols-3 gap-3">
                <a
                  href="https://github.com/oscode-cit"
                  target="_blank"
                  rel="noreferrer"
                  className="flex flex-col items-center justify-center gap-2 rounded-2xl border border-white/10 bg-white/5 p-4 text-white transition-all duration-300 hover:-translate-y-1 hover:border-white/40 hover:bg-white/15"
                >
                  <FaGithub size={22} />
                  <span className="text-xs font-semibold">GitHub</span>
                </a>

                <a
                  href="https://www.linkedin.com/company/oscodecit/"
                  target="_blank"
                  rel="noreferrer"
                  className="flex flex-col items-center justify-center gap-2 rounded-2xl border border-white/10 bg-white/5 p-4 text-slate-300 transition-all duration-300 hover:-translate-y-1 hover:border-cyan-400/50 hover:bg-cyan-500/10 hover:text-cyan-300"
                >
                  <FaLinkedin size={22} />
                  <span className="text-xs font-semibold">LinkedIn</span>
                </a>

                <a
                  href="https://www.instagram.com/oscodecit"
                  target="_blank"
                  rel="noreferrer"
                  className="flex flex-col items-center justify-center gap-2 rounded-2xl border border-white/10 bg-white/5 p-4 text-slate-300 transition-all duration-300 hover:-translate-y-1 hover:border-pink-400/50 hover:bg-pink-500/10 hover:text-pink-300"
                >
                  <FaInstagram size={22} />
                  <span className="text-xs font-semibold">Instagram</span>
                </a>
              </div>
            </div>
          </motion.div>

          <motion.div
            className="lg:col-span-7"
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="rounded-3xl border border-white/15 bg-gradient-to-b from-[#131d3b]/90 to-[#0d1428]/95 p-8 sm:p-10 backdrop-blur-xl shadow-2xl">
              <div className="flex items-center gap-3">
                <MessageSquare className="text-cyan-400" size={22} />
                <h2 className="text-2xl font-bold text-white">Compose a Message</h2>
              </div>
              <p className="mt-2 text-sm text-slate-300">
                Write your message below. Clicking send will open your Gmail/email client with everything filled out.
              </p>

              <form onSubmit={handleSendEmail} className="mt-8 space-y-5">
                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-slate-300 mb-2">
                    Your Name
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Alex Sharma"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full rounded-xl border border-white/15 bg-white/5 px-4 py-3.5 text-sm text-white placeholder-slate-500 outline-none transition focus:border-cyan-400 focus:bg-white/10"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-slate-300 mb-2">
                    Subject / Topic
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Workshop Collaboration / Club Inquiry"
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    className="w-full rounded-xl border border-white/15 bg-white/5 px-4 py-3.5 text-sm text-white placeholder-slate-500 outline-none transition focus:border-cyan-400 focus:bg-white/10"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-slate-300 mb-2">
                    Message
                  </label>
                  <textarea
                    rows={5}
                    required
                    placeholder="Type your message or proposal..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full rounded-xl border border-white/15 bg-white/5 px-4 py-3.5 text-sm text-white placeholder-slate-500 outline-none transition focus:border-cyan-400 focus:bg-white/10 resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full flex items-center justify-center gap-2 rounded-xl bg-linear-to-r from-cyan-400 via-blue-500 to-indigo-500 py-4 font-bold text-slate-950 transition-all duration-300 hover:shadow-[0_0_25px_rgba(6,182,212,0.4)] hover:scale-[1.01]"
                >
                  <Send size={18} />
                  Open in Gmail / Email Client
                </button>
              </form>
            </div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
};

export default Contact;