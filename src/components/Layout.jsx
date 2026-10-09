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

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches || !("IntersectionObserver" in window)) return;

    const sections = document.querySelectorAll("main section");
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      });
    }, { rootMargin: "0px 0px -6% 0px", threshold: 0.08 });

    sections.forEach((section) => {
      section.classList.add("motion-ready");
      observer.observe(section);
    });

    return () => observer.disconnect();
  }, [location.pathname]);

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
