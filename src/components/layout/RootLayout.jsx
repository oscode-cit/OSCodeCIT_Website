import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";
import BackgroundGlow from "../common/BackgroundGlow";
import ScrollToTop from "./ScrollToTop";
import CustomCursor from "../common/CustomCursor";

const RootLayout = () => {
  return (
    <div className="site-bg-mesh min-h-screen flex flex-col justify-between selection:bg-cyan-400 selection:text-slate-950">
      <CustomCursor />
      <ScrollToTop />
      <BackgroundGlow />
      <Navbar />
      <main className="flex-grow">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default RootLayout;