import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";
import Container from "../common/Container";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "/#about" },
    { name: "Events", path: "/events" },
    { name: "Team", path: "/team" },
    { name: "Contact", path: "/contact" },
  ];

  const navClass = ({ isActive }) =>
    `rounded-lg p-3 transition-all ${
      isActive
        ? "text-cyan-400 bg-cyan-100/10"
        : "hover:text-cyan-400 hover:bg-cyan-100/10"
    }`;

  return (
    <header className="fixed top-5 left-1/2 z-50 w-[92%] max-w-6xl -translate-x-1/2">
      <div className="rounded-2xl border border-white/10 bg-[#070B1A]/80 px-5 backdrop-blur-xl shadow-2xl">
        <Container>
          <div className="flex h-16 items-center justify-between">
            <Link to="/">
              <img
                src="/images/logos/logo.svg"
                alt="OSCode CIT Logo"
                className="h-11 w-auto"
              />
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center gap-4">
              <NavLink to="/" end className={navClass}>
                Home
              </NavLink>

              <a
                href="/#about"
                className="rounded-lg p-3 transition-all hover:text-cyan-400 hover:bg-cyan-100/10"
              >
                About
              </a>

              <NavLink to="/events" className={navClass}>
                Events
              </NavLink>

              <NavLink to="/team" className={navClass}>
                Team
              </NavLink>

              <NavLink to="/contact" className={navClass}>
                Contact
              </NavLink>
            </nav>

            {/* Mobile Button */}
            <button onClick={() => setIsOpen(!isOpen)} className="md:hidden">
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>

          {/* Mobile Menu */}
          {isOpen && (
            <div className="md:hidden mb-4 overflow-hidden rounded-xl border border-white/10 bg-[#0b1220]">
              {navLinks.map((link) =>
                link.name === "About" ? (
                  <a
                    key={link.name}
                    href="/#about"
                    onClick={() => setIsOpen(false)}
                    className="block border-b border-white/10 px-6 py-4 transition hover:bg-white/5"
                  >
                    About
                  </a>
                ) : (
                  <NavLink
                    key={link.name}
                    to={link.path}
                    onClick={() => setIsOpen(false)}
                    className={({ isActive }) =>
                      `block border-b border-white/10 px-6 py-4 transition ${
                        isActive
                          ? "text-cyan-400 bg-cyan-100/10"
                          : "hover:bg-white/5"
                      }`
                    }
                  >
                    {link.name}
                  </NavLink>
                ),
              )}
            </div>
          )}
        </Container>
      </div>
    </header>
  );
};

export default Navbar;
