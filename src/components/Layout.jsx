import { Outlet, useLocation } from "react-router-dom";
import { useEffect } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import EnquiryPopup from "./EnquiryPopup";
import ScrollTop from "./ScrollTop";
import { EnquiryProvider } from "../context/EnquiryContext";

export default function Layout() {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const id = decodeURIComponent(location.hash.slice(1));
      requestAnimationFrame(() => {
        document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
      });
    } else {
      window.scrollTo(0, 0);
    }
  }, [location.pathname, location.hash]);

  return (
    <EnquiryProvider>
      <Navbar />
      <main>
        <Outlet />
      </main>
      <Footer />
      <EnquiryPopup />
      <ScrollTop />
    </EnquiryProvider>
  );
}
