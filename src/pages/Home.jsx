import Hero from "../components/home/Hero";
import About from "../components/home/About";
import Projects from "../components/home/Projects";
import Achievements from "../components/home/Achievements";
import FeaturedEvents from "../components/home/FeaturedEvents";

const Home = () => {
  return (
    <>
      <Hero />
      <About />
      <Projects />
      <Achievements />
      <FeaturedEvents/>
    </>
  );
};

export default Home;