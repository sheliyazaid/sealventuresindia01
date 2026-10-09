import { useEffect, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { NAV } from "../data/site";
import { useEnquiry } from "../context/EnquiryContext";

function Nested({ items, close, openKey, setOpenKey, parentKey = "" }) {
  return items.map((item) => {
    const key = parentKey + item.label;

    if (item.children) {
      const open = openKey === key || openKey.startsWith(key);
      return (
        <li key={key} className={`has-submenu ${open ? "open" : ""}`}>
          <a
            href="#"
            aria-haspopup="true"
            aria-expanded={open}
            onClick={(e) => {
              e.preventDefault();
              setOpenKey(open ? parentKey : key);
            }}
          >
            {item.label} <span className="caret-sub" />
          </a>
          <ul className="submenu">
            <Nested
              items={item.children}
              close={close}
              openKey={openKey}
              setOpenKey={setOpenKey}
              parentKey={key}
            />
          </ul>
        </li>
      );
    }

    if (item.href) {
      return (
        <li key={key}>
          <a href={item.href} download={item.download} onClick={close}>
            {item.label}
          </a>
        </li>
      );
    }

    return (
      <li key={key}>
        <NavLink to={item.to} onClick={close}>
          {item.label}
        </NavLink>
      </li>
    );
  });
}

export default function Navbar() {
  const { openEnquiry } = useEnquiry();
  const [menuOpen, setMenuOpen] = useState(false);
  const [openKey, setOpenKey] = useState("");
  const [mobile, setMobile] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onResize = () => setMobile(window.innerWidth <= 1024);
    onResize();
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
    setOpenKey("");
    document.body.style.overflow = "";
  }, [location.pathname]);

  useEffect(() => {
    document.body.style.overflow = menuOpen && mobile ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen, mobile]);

  const close = () => {
    setMenuOpen(false);
    setOpenKey("");
  };

  const handleEnquiry = (e) => {
    e.preventDefault();
    openEnquiry();
    close();
  };

  return (
    <>
      <div className="top-header">
        <div className="container top-header-flex">
          <div className="top-text">India’s premier manufacturer of mechanical seals and components</div>
          <div className="top-contact">
            <span>
              <i className="bx bx-phone icon-chip" />
              +91 98332 54562 / +91 98333 54562
            </span>
            <span>
              <i className="bx bx-envelope icon-chip" />
              info@sealventuresindia.com
            </span>
          </div>
        </div>
      </div>

      <header
        className={`navbar ${scrolled ? "scrolled" : ""}`}
        onMouseLeave={() => {
          if (!mobile) setOpenKey("");
        }}
        onKeyDown={(e) => {
          if (e.key === "Escape") close();
        }}
      >
        <div className="container nav-flex">
          {/* LEFT — logo */}
          <div className="logo">
            <Link to="/" onClick={close}>
              <img src="/img/Logo.png" alt="Sealventures" />
            </Link>
          </div>

          {/* CENTER — navigation */}
          <nav className={`nav-menu ${menuOpen ? "show" : ""}`} aria-label="Primary">
            <ul className="nav-list">
              {NAV.map((item, i) => {
                const style = { "--i": i };

                if (item.children) {
                  const key = item.label;
                  const open = openKey === key || openKey.startsWith(key);
                  return (
                    <li key={key} style={style} className={`nav-item has-dropdown ${open ? "open" : ""}`}>
                      <a
                        href="#"
                        aria-haspopup="true"
                        aria-expanded={open}
                        onClick={(e) => {
                          e.preventDefault();
                          setOpenKey(open ? "" : key);
                        }}
                      >
                        {item.label} <span className="caret" />
                      </a>
                      <ul className="dropdown">
                        <Nested
                          items={item.children}
                          close={close}
                          openKey={openKey}
                          setOpenKey={setOpenKey}
                          parentKey={key}
                        />
                      </ul>
                    </li>
                  );
                }

                return (
                  <li className="nav-item" key={item.to} style={style}>
                    <NavLink to={item.to} onClick={close} className={({ isActive }) => (isActive ? "active" : undefined)}>
                      {item.label}
                    </NavLink>
                  </li>
                );
              })}
            </ul>

            {/* Button inside the panel — only visible on mobile */}
            <a href="#" className="nav-btn site-cta nav-btn-mobile" onClick={handleEnquiry}>
              <span>Get In Touch</span>
            </a>
          </nav>

          {/* RIGHT — button + hamburger */}
          <div className="nav-actions">
            <a href="#" className="nav-btn site-cta nav-btn-desktop" onClick={handleEnquiry}>
              <span>Get In Touch</span>
              <i className="bx bx-right-arrow-alt" />
            </a>

            <button
              className={`menu-toggle ${menuOpen ? "active" : ""}`}
              type="button"
              aria-label={menuOpen ? "Close menu" : "Open menu"}
              aria-expanded={menuOpen}
              onClick={() => (menuOpen ? close() : setMenuOpen(true))}
            >
              <span className="bar" />
              <span className="bar" />
              <span className="bar" />
            </button>
          </div>
        </div>

        <div className={`nav-overlay ${menuOpen ? "show" : ""}`} onClick={close} />
      </header>
    </>
  );
}