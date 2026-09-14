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
  Sun,
  Moon,
  Flame,
  BookOpen,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useTheme } from "../../context/ThemeContext";

const navLinks = [
  { name: "Home", path: "/", icon: Home },
  { name: "Projects", path: "/projects", icon: FolderGit2 },
  { name: "Hackathons", path: "/hackathons", icon: Flame },
  { name: "Achievements", path: "/achievements", icon: Trophy },
  { name: "Events", path: "/events", icon: CalendarDays },
  { name: "Team", path: "/team", icon: Users },
  { name: "Learning", path: "/learning", icon: BookOpen },
  { name: "Contact", path: "/contact", icon: Mail },
];

const menuVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.04, delayChildren: 0.04 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, x: -14 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.25, ease: "easeOut" } },
};

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { theme, toggleTheme } = useTheme();
  const location = useLocation();

  const isDark = theme === "dark";

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  return (
    <>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsOpen(false)}
            className="fixed inset-0 z-40 bg-black/70 backdrop-blur-md md:hidden"
          />
        )}
      </AnimatePresence>

      <header className="fixed z-50 w-full top-0">
        <div
          className={`border-b px-4 sm:px-6 py-3 backdrop-blur-xl transition-all duration-300 ${
            scrolled
              ? "dark:border-[#00A8FF]/30 border-slate-300 dark:bg-[#050505]/90 bg-white/90 shadow-md"
              : "dark:border-[#00A8FF]/20 border-slate-200 dark:bg-[#0D0D0D]/70 bg-white/70 shadow-sm"
          }`}
        >
          <div className="flex items-center justify-between">
            {/* Logo & Chapter Badge */}
            <Link to="/" className="group flex items-center gap-2.5">
              <div className="relative">
                <div className="absolute inset-0 rounded-full bg-[#00A8FF]/40 opacity-0 blur-lg transition-opacity duration-300 group-hover:opacity-100" />
                <img
                  src="/images/logos/logo.svg"
                  alt="OSCode CIT Logo"
                  className="relative h-8 w-auto transition-transform duration-300 group-hover:scale-105 sm:h-9"
                />
              </div>
              <span className="hidden items-center gap-1.5 rounded-full border border-[#00A8FF]/30 bg-[#00A8FF]/10 px-2.5 py-0.5 text-[11px] font-bold text-cyan-600 dark:text-[#00D2FF] sm:inline-flex">
                <Terminal size={12} className="text-cyan-600 dark:text-[#00D2FF]" />
                CIT Chapter
              </span>
            </Link>

            {/* Desktop Nav Items */}
            <nav className="hidden items-center gap-1 rounded-full border dark:border-white/10 border-slate-300 dark:bg-white/[0.04] bg-slate-100 p-1 xl:flex">
              {navLinks.map((link) => (
                <NavLink
                  key={link.name}
                  to={link.path}
                  end={link.path === "/"}
                  className="relative rounded-full px-3.5 py-1.5 text-xs font-bold transition-colors duration-200"
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
                          isActive
                            ? "text-black font-bold"
                            : "dark:text-slate-300 text-slate-700 hover:text-slate-950 dark:hover:text-white"
                        }`}
                      >
                        {link.name}
                      </span>
                    </>
                  )}
                </NavLink>
              ))}
            </nav>

            {/* Right Header Action Controls: Dark Toggle */}
            <div className="flex items-center gap-2">
              <button
                onClick={toggleTheme}
                className="flex h-9 w-9 items-center justify-center rounded-xl border dark:border-cyan-400/40 border-slate-300 dark:bg-cyan-500/10 bg-slate-100 text-slate-700 dark:text-slate-300 hover:border-cyan-500 transition active:scale-95 shadow-sm"
                title={isDark ? "Switch to Light Mode" : "Switch to Dark Mode"}
                aria-label="Toggle Theme"
              >
                {isDark ? <Sun size={17} className="text-amber-400" /> : <Moon size={17} className="text-cyan-600" />}
              </button>

              {/* Mobile Hamburger Button */}
              <button
                onClick={() => setIsOpen((prev) => !prev)}
                className="relative flex h-9 w-9 shrink-0 items-center justify-center rounded-xl border dark:border-[#00A8FF]/30 border-slate-300 dark:bg-white/[0.05] bg-slate-100 dark:text-white text-slate-900 transition hover:bg-slate-200 dark:hover:bg-white/10 active:scale-95 xl:hidden"
                aria-label="Toggle Navigation"
                aria-expanded={isOpen}
              >
                <AnimatePresence mode="wait" initial={false}>
                  <motion.span
                    key={isOpen ? "close" : "open"}
                    initial={{ rotate: -90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: 90, opacity: 0 }}
                    transition={{ duration: 0.15 }}
                    className="flex"
                  >
                    {isOpen ? <X size={20} /> : <Menu size={20} />}
                  </motion.span>
                </AnimatePresence>
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, y: -12, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -12, scale: 0.98 }}
              transition={{ duration: 0.2, ease: "easeOut" }}
              className="mt-2 mx-4 overflow-hidden rounded-2xl border dark:border-[#00A8FF]/30 border-slate-300 dark:bg-[#080e1e]/98 bg-white/98 shadow-2xl backdrop-blur-2xl xl:hidden max-h-[80vh] overflow-y-auto"
            >
              <div className="terminal-header !h-9 !px-4 border-b dark:border-white/10 border-slate-200 flex items-center justify-between">
                <div className="terminal-dots flex gap-1.5">
                  <span className="h-2.5 w-2.5 rounded-full bg-red-500/80" />
                  <span className="h-2.5 w-2.5 rounded-full bg-yellow-500/80" />
                  <span className="h-2.5 w-2.5 rounded-full bg-green-500/80" />
                </div>
                <span className="font-mono text-[11px] text-slate-500">~/oscode-navigation</span>
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
                        className={`group relative flex items-center gap-3.5 overflow-hidden rounded-xl px-4 py-3 transition-colors duration-200 ${
                          isActive
                            ? "bg-gradient-to-r from-[#00A8FF]/20 to-transparent"
                            : "hover:bg-slate-100 dark:hover:bg-white/5"
                        }`}
                      >
                        {isActive && (
                          <span className="absolute left-0 top-1/2 h-6 w-[3px] -translate-y-1/2 rounded-full bg-[#00A8FF]" />
                        )}

                        <span className="font-mono text-[10px] text-slate-400">
                          {String(index + 1).padStart(2, "0")}
                        </span>

                        <Icon
                          size={17}
                          className={isActive ? "text-cyan-600 dark:text-[#00D2FF]" : "text-slate-500 group-hover:text-slate-900 dark:group-hover:text-slate-200"}
                        />

                        <span
                          className={`text-sm font-bold ${
                            isActive ? "text-cyan-600 dark:text-[#00D2FF]" : "text-slate-800 dark:text-slate-200"
                          }`}
                        >
                          {link.name}
                        </span>
                      </NavLink>
                    </motion.div>
                  );
                })}
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>
    </>
  );
};

export default Navbar;
