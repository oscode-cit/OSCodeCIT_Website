import Container from "../components/common/Container";
import GradientText from "../components/common/GradientText";
import { Mail } from "lucide-react";
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";

const Contact = () => {
  return (
    <section className="min-h-screen pt-32 pb-10">
      <Container>
        <div className="flex flex-col items-center text-center">
          <div className="rounded-full border border-cyan-400/40 bg-cyan-400/5 px-4 py-2">
            <span className="font-mono text-sm tracking-[0.2em] text-cyan-400">
              GET IN TOUCH
            </span>
          </div>

          <GradientText className="mt-8 text-5xl md:text-6xl lg:text-7xl font-black">
            Let's Connect
          </GradientText>

          <p className="mt-8 max-w-xl text-lg leading-7 text-gray-300">
            Have a question? Want to collaborate?
            <br />
            We'd love to hear from you.
          </p>

          <a
            href="mailto:oscodecit@cambridge.edu.in"
            className="mt-8 inline-flex items-center gap-2 rounded-full
                       bg-gradient-to-r from-cyan-400 to-purple-400
                       px-8 py-4 font-bold text-[#070B1A]
                       shadow-lg shadow-cyan-400/20
                       transition hover:scale-105"
          >
            <Mail size={20} />
            SEND EMAIL →
          </a>

          {/* Social Heading */}
          <p className="mt-16 text-lg text-gray-400">
            CONNECT WITH US ON SOCIAL MEDIA
          </p>

          {/* Social Links */}
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <a
              href="mailto:oscodecit@cambridge.edu.in"
              className="flex h-20 w-20 flex-col items-center justify-center
                         rounded-xl border border-cyan-400/20
                         bg-white/5 transition hover:-translate-y-1
                         hover:border-cyan-400/50"
            >
              <Mail size={22} className="text-cyan-400" />
              <span className="mt-1 text-sm">Email</span>
            </a>

            <a
              href="https://github.com/oscode-cit"
              target="_blank"
              rel="noreferrer"
              className="flex h-20 w-20 flex-col items-center justify-center
                         rounded-xl border border-cyan-400/20
                         bg-white/5 transition hover:-translate-y-1
                         hover:border-cyan-400/50"
            >
              <FaGithub size={22} />
              <span className="mt-1 text-sm">GitHub</span>
            </a>

            <a
              href="https://www.linkedin.com/company/oscodecit/"
              target="_blank"
              rel="noreferrer"
              className="flex h-20 w-20 flex-col items-center justify-center
                         rounded-xl border border-cyan-400/20
                         bg-white/5 transition hover:-translate-y-1
                         hover:border-cyan-400/50"
            >
              <FaLinkedin size={22} />
              <span className="mt-1 text-sm">LinkedIn</span>
            </a>

            <a
              href="https://www.instagram.com/oscodecit"
              target="_blank"
              rel="noreferrer"
              className="flex h-20 w-20 flex-col items-center justify-center
                         rounded-xl border border-cyan-400/20
                         bg-white/5 transition hover:-translate-y-1
                         hover:border-cyan-400/50"
            >
              <FaInstagram size={22} />
              <span className="mt-1 text-sm">Instagram</span>
            </a>
          </div>
        </div>

        {/* Footer */}
        <div className="mt-10 border-t border-white/10 pt-12 text-center">
          <GradientText className="text-3xl font-bold">
            OSCode • CIT
          </GradientText>

          <p className="mt-4 font-semibold text-gray-400">
            Building the future one line at a time
          </p>

          <p className="mt-2 font-semibold text-gray-500">
            {new Date().getFullYear()}  OSCode • CIT
          </p>
        </div>
      </Container>
    </section>
  );
};

export default Contact;