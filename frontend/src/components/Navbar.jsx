import { useState } from "react";
import "./Navbar.css";
import  logo from "../assets/logo.jpg";


const navLinks = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "services", label: "Services" },
  { id: "products", label: "Products" },
  { id: "portfolio", label: "Portfolio" },
  { id: "testimonials", label: "Reviews" },
  { id: "contact", label: "Contact" },
];

export default function Navbar({ activePage, setActivePage, scrolled }) {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleNav = (id) => {
    setActivePage(id);
    setMenuOpen(false);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <nav className={`navbar ${scrolled ? "navbar--scrolled" : ""}`}>
      <div className="navbar__container">
        {/* LOGO */}
        <div className="navbar__logo" onClick={() => handleNav("home")}>
          <div className="logo-icon">
  <img 
    src={logo} 
    alt="Siva Tech Solutions Logo" 
    style={{ 
      width: "42px", 
      height: "42px", 
      objectFit: "contain",
      borderRadius: "0px"
    }} 
  />
</div>
          <div className="logo-text">
            <span className="logo-siva">SIVA TECH</span>
            <span className="logo-tech">SOLUTIONS</span>
            <span className="logo-solutions">complete IT support & service</span>
          </div>
        </div>

        {/* DESKTOP NAV */}
        <ul className="navbar__links">
          {navLinks.map(link => (
            <li key={link.id}>
              <button
                className={`nav-link ${activePage === link.id ? "nav-link--active" : ""}`}
                onClick={() => handleNav(link.id)}
              >
                {link.label}
              </button>
            </li>
          ))}
        </ul>

        {/* CTA */}
        <button className="navbar__cta" onClick={() => handleNav("contact")}>
          <span>Get Quote</span>
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M5 12h14M12 5l7 7-7 7"/>
          </svg>
        </button>

        {/* HAMBURGER */}
        <button className={`hamburger ${menuOpen ? "hamburger--open" : ""}`} onClick={() => setMenuOpen(!menuOpen)}>
          <span/><span/><span/>
        </button>
      </div>

      {/* MOBILE MENU */}
      {menuOpen && (
        <div className="mobile-menu">
          {navLinks.map(link => (
            <button
              key={link.id}
              className={`mobile-link ${activePage === link.id ? "mobile-link--active" : ""}`}
              onClick={() => handleNav(link.id)}
            >
              {link.label}
            </button>
          ))}
          <button className="mobile-cta" onClick={() => handleNav("contact")}>Get Free Quote</button>
        </div>
      )}
    </nav>
  );
}
