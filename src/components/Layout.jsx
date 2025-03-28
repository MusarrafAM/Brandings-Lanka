import Navbar from "./Navbar";
import Footer from "./Footer";
import TopCarousel from "./TopCarousel";
import { Outlet } from "react-router-dom";
import WhatsApp from "./WhatsApp";


const Layout = () => {
  return (
    <div>
      <TopCarousel />
      <Navbar />
      <Outlet /> {/* This is where the page content will be rendered */}
      <WhatsApp />
      <Footer />
    </div>
  );
};

export default Layout;
