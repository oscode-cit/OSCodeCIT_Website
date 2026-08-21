import Hero from "../components/home/Hero";
import AchievementsSection from "../components/home/AchievementsSection";
import About from "../components/home/About";
import FeaturedEvents from "../components/home/FeaturedEvents";

const Home = () => {
  return (
    <main className="relative">
      <Hero />
      <AchievementsSection />
      <About />
      <FeaturedEvents />
    </main>
  );
};

export default Home;