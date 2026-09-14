import Hero from "../components/home/Hero";
import About from "../components/home/About";
import Projects from "../components/home/Projects";
import Achievements from "../components/home/Achievements";
import FeaturedEvents from "../components/home/FeaturedEvents";
import TeamMarqueeSection from "../components/home/TeamMarqueeSection";

const Home = () => {
  return (
    <>
      <Hero />
      <TeamMarqueeSection />
      <About />
      <Projects />
      <FeaturedEvents />
      <Achievements />
    </>
  );
};

export default Home;