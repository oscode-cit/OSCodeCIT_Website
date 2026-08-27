import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { Menu, X, Terminal } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  // Clean nav items: "About" removed, and proper route paths
  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Projects", path: "/projects" },
    { name: "Achievements", path: "/achievements" },
    { name: "Events", path: "/events" },
    { name: "Team", path: "/team" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <header className="fixed top-4 left-1/2 z-50 w-[92%] max-w-6xl -translate-x-1/2">
      <div className="rounded-2xl border border-[#00A8FF]/20 bg-[#0a1022]/70 px-4 sm:px-6 py-2.5 backdrop-blur-xl shadow-[0_8px_32px_rgba(0,0,0,0.5)] transition-all duration-300">
        <div className="flex items-center justify-between">
          {/* Logo & Chapter Badge */}
          <Link to="/" className="flex items-center gap-3 group">
            <img
              src="/images/logos/logo.svg"
              alt="OSCode CIT Logo"
              className="h-8 sm:h-9 w-auto transition-transform duration-300 group-hover:scale-105"
            />
            <span className="hidden sm:inline-flex items-center gap-1.5 rounded-full border border-[#00A8FF]/30 bg-[#00A8FF]/10 px-2.5 py-0.5 text-[11px] font-bold text-[#00D2FF]">
              <Terminal size={12} className="text-[#00D2FF]" />
              CIT Chapter
            </span>
          </Link>

          {/* Desktop Nav Items */}
          <nav className="hidden md:flex items-center gap-1 rounded-full border border-white/10 bg-white/[0.03] p-1">
            {navLinks.map((link) => (
              <NavLink
                key={link.name}
                to={link.path}
                end={link.path === "/"}
                className={({ isActive }) =>
                  `rounded-full px-4 py-1.5 text-xs font-bold transition-all duration-200 ${
                    isActive
                      ? "bg-[#00A8FF] text-black shadow-md shadow-[#00A8FF]/30"
                      : "text-slate-300 hover:text-white hover:bg-white/5"
                  }`
                }
              >
                {link.name}
              </NavLink>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="flex h-9 w-9 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-white hover:bg-white/10 md:hidden"
            aria-label="Toggle Navigation"
          >
            {isOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>

        {/* Mobile Dropdown */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="mt-3 overflow-hidden rounded-xl border border-[#00A8FF]/20 bg-[#080e1e]/95 p-3 md:hidden"
            >
              <div className="flex flex-col gap-1">
                {navLinks.map((link) => (
                  <NavLink
                    key={link.name}
                    to={link.path}
                    onClick={() => setIsOpen(false)}
                    end={link.path === "/"}
                    className={({ isActive }) =>
                      `rounded-lg px-4 py-2.5 text-sm font-bold transition ${
                        isActive
                          ? "bg-[#00A8FF] text-black"
                          : "text-slate-300 hover:bg-white/10 hover:text-[#00D2FF]"
                      }`
                    }
                  >
                    {link.name}
                  </NavLink>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
};

export default Navbar;