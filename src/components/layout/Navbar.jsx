import { useState, useEffect } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import {
  Menu,
  X,
  Terminal,
  Home,
  FolderGit2,
  Trophy,
  CalendarDays,
  Users,
  Mail,
} from "lucide-react";
import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { name: "Home", path: "/", icon: Home },
  { name: "Projects", path: "/projects", icon: FolderGit2 },
  { name: "Achievements", path: "/achievements", icon: Trophy },
  { name: "Events", path: "/events", icon: CalendarDays },
  { name: "Team", path: "/team", icon: Users },
  { name: "Contact", path: "/contact", icon: Mail },
];

const menuVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.045, delayChildren: 0.05 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, x: -14 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.3, ease: "easeOut" } },
};

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // route-aware breadcrumb shown on mobile only, fills the empty middle
  // of the collapsed bar with something useful instead of dead space
  const currentLink =
    navLinks.find((link) =>
      link.path === "/" ? location.pathname === "/" : location.pathname.startsWith(link.path)
    ) ?? navLinks[0];
  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  // lock background scroll while the mobile menu is open
  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  return (
    <>
      {/* Tap-outside-to-close scrim, mobile only — kept as a sibling of
          <header>, not a child, since header has a transform (translate-x)
          which would otherwise become the containing block for a fixed child. */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsOpen(false)}
            className="fixed inset-0 z-40 bg-black/60 backdrop-blur-sm md:hidden"
          />
        )}
      </AnimatePresence>

      <header className="fixed top-3 left-1/2 z-50 w-[94%] max-w-6xl -translate-x-1/2 sm:top-4 sm:w-[92%]">
        <div
          className={`rounded-2xl border px-4 sm:px-6 py-2.5 backdrop-blur-xl transition-all duration-300 ${
            scrolled
              ? "border-[#00A8FF]/30 bg-[#0a1022]/90 shadow-[0_8px_32px_rgba(0,0,0,0.6)]"
              : "border-[#00A8FF]/20 bg-[#0a1022]/70 shadow-[0_8px_32px_rgba(0,0,0,0.5)]"
          }`}
        >
          <div className="flex items-center justify-between">
            {/* Logo & Chapter Badge */}
            <Link to="/" className="group flex items-center gap-3">
              <div className="relative">
                <div className="absolute inset-0 rounded-full bg-[#00A8FF]/40 opacity-0 blur-lg transition-opacity duration-300 group-hover:opacity-100" />
                <img
                  src="/images/logos/logo.svg"
                  alt="OSCode CIT Logo"
                  className="relative h-8 w-auto transition-transform duration-300 group-hover:scale-105 sm:h-9"
                />
              </div>
              <span className="hidden items-center gap-1.5 rounded-full border border-[#00A8FF]/30 bg-[#00A8FF]/10 px-2.5 py-0.5 text-[11px] font-bold text-[#00D2FF] sm:inline-flex">
                <Terminal size={12} className="text-[#00D2FF]" />
                CIT Chapter
              </span>
            </Link>

            {/* Desktop Nav Items — active tab glides between links via layoutId */}
            <nav className="hidden items-center gap-1 rounded-full border border-white/10 bg-white/[0.03] p-1 md:flex">
              {navLinks.map((link) => (
                <NavLink
                  key={link.name}
                  to={link.path}
                  end={link.path === "/"}
                  className="relative rounded-full px-4 py-1.5 text-xs font-bold transition-colors duration-200"
                >
                  {({ isActive }) => (
                    <>
                      {isActive && (
                        <motion.span
                          layoutId="nav-active-pill"
                          className="absolute inset-0 rounded-full bg-[#00A8FF] shadow-md shadow-[#00A8FF]/30"
                          transition={{ type: "spring", stiffness: 400, damping: 32 }}
                        />
                      )}
                      <span
                        className={`relative z-10 ${
                          isActive ? "text-black" : "text-slate-300 hover:text-white"
                        }`}
                      >
                        {link.name}
                      </span>
                    </>
                  )}
                </NavLink>
              ))}
            </nav>

            {/* Route breadcrumb — mobile only. Fills the space between the
                logo and the hamburger with something useful (where you are)
                instead of leaving the bar looking empty when collapsed. */}
            <div className="flex min-w-0 items-center gap-1.5 overflow-hidden font-mono text-[11px] text-slate-500 md:hidden">
              <span className="text-slate-700">~/</span>
              <span className="truncate text-cyan-300/80">
                {currentLink.path === "/" ? "home" : currentLink.name.toLowerCase()}
              </span>
              <span className="inline-block h-3 w-[1.5px] animate-pulse bg-cyan-300/60" />
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsOpen((prev) => !prev)}
              className="relative flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-[#00A8FF]/25 bg-gradient-to-b from-white/[0.06] to-white/[0.02] text-white transition hover:border-[#00A8FF]/50 hover:bg-white/10 active:scale-95 md:hidden"
              aria-label="Toggle Navigation"
              aria-expanded={isOpen}
            >
              <AnimatePresence mode="wait" initial={false}>
                <motion.span
                  key={isOpen ? "close" : "open"}
                  initial={{ rotate: -90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: 90, opacity: 0 }}
                  transition={{ duration: 0.18 }}
                  className="flex"
                >
                  {isOpen ? <X size={20} /> : <Menu size={20} />}
                </motion.span>
              </AnimatePresence>
            </button>
          </div>

          {/* Faint accent hairline so the collapsed bar reads as more than
              a flat strip — echoes the gradient used on project cards. */}
          <div className="mt-2.5 h-px w-full bg-gradient-to-r from-transparent via-[#00A8FF]/25 to-transparent md:hidden" />
        </div>

        {/* Mobile Menu — full command-palette style panel, detached from
            the pill so it can be taller/richer without stretching the bar */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, y: -12, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -12, scale: 0.98 }}
              transition={{ duration: 0.22, ease: "easeOut" }}
              className="mt-3 overflow-hidden rounded-2xl border border-[#00A8FF]/20 bg-[#080e1e]/98 shadow-[0_20px_60px_rgba(0,0,0,0.6)] backdrop-blur-2xl md:hidden"
            >
              {/* faux terminal tab strip, matches the site's IDE motif */}
              <div className="terminal-header !h-9 !px-4 border-b border-white/10">
                <div className="terminal-dots">
                  <span className="dot red" />
                  <span className="dot yellow" />
                  <span className="dot green" />
                </div>
                <span className="tab-label">~/menu</span>
              </div>

              <motion.div
                variants={menuVariants}
                initial="hidden"
                animate="visible"
                className="flex flex-col p-2"
              >
                {navLinks.map((link, index) => {
                  const isActive =
                    location.pathname === link.path ||
                    (link.path !== "/" && location.pathname.startsWith(link.path));
                  const Icon = link.icon;

                  return (
                    <motion.div key={link.name} variants={itemVariants}>
                      <NavLink
                        to={link.path}
                        end={link.path === "/"}
                        className={`group relative flex items-center gap-4 overflow-hidden rounded-xl px-4 py-3.5 transition-colors duration-200 ${
                          isActive
                            ? "bg-gradient-to-r from-[#00A8FF]/20 to-transparent"
                            : "hover:bg-white/5"
                        }`}
                      >
                        {isActive && (
                          <span className="absolute left-0 top-1/2 h-6 w-[3px] -translate-y-1/2 rounded-full bg-[#00A8FF]" />
                        )}

                        <span className="font-mono text-[11px] text-slate-600">
                          {String(index + 1).padStart(2, "0")}
                        </span>

                        <Icon
                          size={18}
                          className={isActive ? "text-[#00D2FF]" : "text-slate-400 group-hover:text-slate-200"}
                        />

                        <span
                          className={`text-[15px] font-bold ${
                            isActive ? "text-[#00D2FF]" : "text-slate-200"
                          }`}
                        >
                          {link.name}
                        </span>
                      </NavLink>
                    </motion.div>
                  );
                })}
              </motion.div>

              {/* Footer row inside the menu — quick socials + tagline,
                  so the panel feels like a complete space, not a leftover dropdown */}
              <motion.div
                variants={itemVariants}
                initial="hidden"
                animate="visible"
                className="flex items-center justify-between border-t border-white/10 bg-black/20 px-5 py-3.5"
              >
                <span className="font-mono text-[11px] text-slate-500">
                  oscode.cit © {new Date().getFullYear()}
                </span>
                <div className="flex items-center gap-4 text-slate-400">
                  <a
                    href="https://github.com/oscode-cit"
                    target="_blank"
                    rel="noreferrer"
                    aria-label="GitHub"
                    className="transition hover:text-[#00D2FF]"
                  >
                    <FaGithub size={16} />
                  </a>
                  <a
                    href="https://www.linkedin.com/company/oscodecit/"
                    target="_blank"
                    rel="noreferrer"
                    aria-label="LinkedIn"
                    className="transition hover:text-[#00D2FF]"
                  >
                    <FaLinkedin size={16} />
                  </a>
                  <a
                    href="https://www.instagram.com/oscodecit"
                    target="_blank"
                    rel="noreferrer"
                    aria-label="Instagram"
                    className="transition hover:text-[#00D2FF]"
                  >
                    <FaInstagram size={16} />
                  </a>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>
    </>
  );
};

export default Navbar;
