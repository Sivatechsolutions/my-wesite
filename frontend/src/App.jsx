import { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import Hero from "./pages/Hero";
import About from "./pages/About";
import Services from "./pages/Services";
import Products from "./pages/Products";
import Portfolio from "./pages/Portfolio";
import Testimonials from "./pages/Testimonials";
import Contact from "./pages/Contact";
import Footer from "./components/Footer";

export default function App() {
  const [activePage, setActivePage] = useState("home");
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const renderPage = () => {
    switch (activePage) {
      case "home": return <Hero setActivePage={setActivePage} />;
      case "about": return <About />;
      case "services": return <Services setActivePage={setActivePage} />;
      case "products": return <Products setActivePage={setActivePage} />;
      case "portfolio": return <Portfolio />;
      case "testimonials": return <Testimonials />;
      case "contact": return <Contact />;
      default: return <Hero setActivePage={setActivePage} />;
    }
  };

  return (
    <div className="app">
      <Navbar activePage={activePage} setActivePage={setActivePage} scrolled={scrolled} />
      <main>{renderPage()}</main>
      <Footer setActivePage={setActivePage} />
    </div>
  );
}
