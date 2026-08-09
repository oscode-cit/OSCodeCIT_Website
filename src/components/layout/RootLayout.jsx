import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";
import BackgroundGlow from "../common/BackgroundGlow";
import ScrollToTop from "./ScrollToTop";

const RootLayout = () => {
  return (
    <>
      <ScrollToTop />
      <BackgroundGlow />
      <Navbar />
      <Outlet />
      <Footer />
    </>
  );
};

export default RootLayout;
