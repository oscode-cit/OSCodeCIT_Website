import { Link } from "react-router-dom";
import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";
import { Heart, Terminal, ArrowUpRight } from "lucide-react";
import Container from "../common/Container";

const Footer = () => {
  return (
    <footer className="relative mt-32 border-t border-white/10 bg-[#080d1e] overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 h-px w-3/4 bg-linear-to-r from-transparent via-cyan-400/50 to-transparent" />

      <Container>
        <div className="py-16 grid gap-12 grid-cols-1 md:grid-cols-12">
          <div className="md:col-span-5 flex flex-col items-center md:items-start text-center md:text-left">
            <Link to="/">
              <img
                src="/images/logos/logo.svg"
                alt="OSCode CIT Logo"
                className="h-10 w-auto"
              />
            </Link>

            <p className="mt-5 text-sm text-slate-300/90 leading-relaxed max-w-sm">
              The student-led open source chapter of Cambridge Institute of
              Technology. Fostering development, collaborative software, and
              peer innovation.
            </p>

            <div className="mt-6 flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-3.5 py-1.5 text-xs text-slate-400">
              <Terminal size={14} className="text-cyan-400" />
              <span>SMV Block, CIT Bengaluru</span>
            </div>
          </div>

          <div className="md:col-span-3 text-center md:text-left">
            <h3 className="text-sm font-bold uppercase tracking-wider text-cyan-300">
              Navigation
            </h3>
            <ul className="mt-5 flex flex-col gap-3 text-sm text-slate-300">
              <li>
                <Link to="/" className="hover:text-cyan-400 transition">
                  Home
                </Link>
              </li>
              <li>
                <a href="/#about" className="hover:text-cyan-400 transition">
                  About Community
                </a>
              </li>
              <li>
                <Link to="/events" className="hover:text-cyan-400 transition">
                  Events & Hackathons
                </Link>
              </li>
              <li>
                <Link to="/team" className="hover:text-cyan-400 transition">
                  Core Team
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-cyan-400 transition">
                  Get in Touch
                </Link>
              </li>
            </ul>
          </div>

          <div className="md:col-span-4 flex flex-col items-center md:items-start text-center md:text-left">
            <h3 className="text-sm font-bold uppercase tracking-wider text-cyan-300">
              Connect With Us
            </h3>
            <p className="mt-3 text-sm text-slate-400">
              Follow our latest builds, workshops, and open calls.
            </p>

            <div className="mt-5 flex gap-3">
              <a
                href="https://github.com/oscode-cit"
                target="_blank"
                rel="noreferrer"
                aria-label="GitHub"
                className="flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-white transition-all duration-300 hover:-translate-y-1 hover:border-white/40 hover:bg-white/15"
              >
                <FaGithub size={19} />
              </a>

              <a
                href="https://www.linkedin.com/company/oscodecit/"
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn"
                className="flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-slate-300 transition-all duration-300 hover:-translate-y-1 hover:border-cyan-400/50 hover:bg-cyan-500/10 hover:text-cyan-300"
              >
                <FaLinkedin size={19} />
              </a>

              <a
                href="https://www.instagram.com/oscodecit"
                target="_blank"
                rel="noreferrer"
                aria-label="Instagram"
                className="flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-slate-300 transition-all duration-300 hover:-translate-y-1 hover:border-pink-400/50 hover:bg-pink-500/10 hover:text-pink-300"
              >
                <FaInstagram size={19} />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 py-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <p>© {new Date().getFullYear()} OSCode CIT. All rights reserved.</p>
          <p className="flex items-center gap-1.5 text-slate-300">
            Crafted with{" "}
            <Heart size={14} className="text-pink-500 fill-pink-500" /> by
            OSCode CIT Technical Team
          </p>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
