import { Link } from "react-router-dom";
import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";
import Container from "../common/Container";

const Footer = () => {
  return (
    <footer className="border-t border-white/10 mt-24">
      <Container>
        <div className="py-16 grid gap-12 grid-cols-1 md:grid-cols-3 text-center md:text-left">
          {/* Brand */}
          <div>
            <h2 className="text-3xl font-black"><img src="/images/logos/logo.svg" alt="OScodeCIT Logo" /></h2>

            <p className="mt-4 text-gray-400 leading-7">
              Empowering students through open source, collaboration and
              innovation at Cambridge Institute of Technology.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-semibold mb-5">Quick Links</h3>

            <div className="flex flex-col gap-3 text-gray-400">
              <Link to="/">Home</Link>
              <Link to="/events">Events</Link>
              <Link to="/team">Team</Link>
              <Link to="/contact">Contact</Link>
            </div>
          </div>

          {/* Socials */}
          <div className="flex flex-col items-center">
            <h3 className="text-xl font-semibold mb-5">Connect With Us</h3>

            <div className="flex gap-5 text-2xl">
              <a href="https://github.com/oscode-cit" className="text-shadow-white">
                <FaGithub />
              </a>

              <a href="https://www.linkedin.com/company/oscodecit/" className="text-shadow-white">
                <FaLinkedin />
              </a>

              <a href="https://www.instagram.com/oscodecit" className="text-shadow-white">
                <FaInstagram />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 py-6 text-center text-gray-500">
          © {new Date().getFullYear()} OSCode CIT | Desined & Developed by OSCode CIT Team
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
