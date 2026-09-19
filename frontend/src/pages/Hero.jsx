import { useState, useEffect } from "react";
import "./Hero.css";

import banner1 from "../assets/banner1.png";
// import banner2 from "../assets/banner2.jpg";
// import banner3 from "../assets/banner3.jpg";

const slides = [
  {
    image: banner1,
    bg: "linear-gradient(135deg, #fffbea, #fff3c4)",
  },
  {
    image: null,
    tag: "CCTV & Security",
    title: "HD Surveillance",
    subtitle: "Systems Installed",
    desc: "Professional CCTV installation with remote viewing for offices, shops & homes.",
    color: "#c8920a",
    bg: "linear-gradient(135deg, #fffbea, #fff3c4)",
    icon: "📹",
  },
  {
    image: null,
    tag: "Software Development",
    title: "Custom Software & Website Design",
    subtitle: "For Your Business",
    desc: "PHP, MySQL, Laravel & React — tailored solutions for hospitals, labs, finance & retail.",
    color: "#f43f8a",
    bg: "linear-gradient(135deg, #fff0f5, #ffe4f0)",
    icon: "💻",
  },
  {
    image: null,
    tag: "Networking",
    title: "Complete IT",
    subtitle: "Infrastructure",
    desc: "LAN/WAN setup, biometric systems, computer sales & 24/7 support across KK District.",
    color: "#1a7c3c",
    bg: "linear-gradient(135deg, #f0fff5, #dcfce7)",
    icon: "🔌",
  },
  {
    image: null,
    tag: "Computer Sales & Service",
    title: "Desktop, Laptop",
    subtitle: "Software Installation",
    desc: "Complete IT Solution & Online support.",
    color: "#7c3aed",
    bg: "linear-gradient(135deg, #faf5ff, #ede9fe)",
    icon: "🖥️",
  },
];

const stats = [
  { value: "10+", label: "Years Experience" },
  { value: "100+", label: "Clients Served" },
  { value: "10+", label: "Software Products" },
  { value: "24/7", label: "Support" },
];

const highlights = [
  { icon: "💻", text: "Software Development" },
  { icon: "🌐", text: "Web Development" },
  { icon: "🖥️", text: "Computer Sales & service" },
  { icon: "🌐", text: "IT Infrastructure" },
{ icon: "💻", text: "Laptop Sales" },
{ icon: "⚙️", text: "Custom PC Building" },
{ icon: "🎮", text: "Gaming & Editing PCs" },
{ icon: "🤖", text: "AI Technology" },
  { icon: "📹", text: "CCTV Systems" },
  { icon: "🔌", text: "Networking" },
   { icon: "📶", text: "Biometric Systems" },
];

export default function Hero({ setActivePage }) {
  const [current, setCurrent] = useState(0);
  const [animating, setAnimating] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  const goToSlide = (indexOrFn) => {
  setAnimating(true);
  setTimeout(() => {
    setCurrent(typeof indexOrFn === "function" ? indexOrFn(current) : indexOrFn);
    setAnimating(false);
  }, 300);
};

  const slide = slides[current];

  return (
    <section className="hero-section">
      {/* ===== BANNER SLIDER ===== */}
      <div className="banner-slider" style={{ background: slide.bg }}>
        <div className={`banner-slide ${animating ? "banner-slide--out" : "banner-slide--in"}`}>

          {/* IMAGE SLIDE — full width cover */}
          {slide.image ? (
            <div className="banner-image-wrapper">
              <img src={slide.image} alt="Banner" className="banner-full-img" />
            </div>
          ) : (
            /* ICON/TEXT SLIDE — two column layout */
            <div className="container banner-content">
              {/* LEFT TEXT */}
              <div className="banner-text">
                <span
                  className="banner-tag"
                  style={{
                    color: slide.color,
                    borderColor: slide.color,
                    background: `${slide.color}15`,
                  }}
                >
                  ✦ {slide.tag}
                </span>
                <h2 className="banner-title" style={{ color: "#1a0a0f" }}>
                  {slide.title}
                  <br />
                  <span style={{ color: slide.color }}>{slide.subtitle}</span>
                </h2>
                <p className="banner-desc">{slide.desc}</p>
                <button
                  className="banner-btn"
                  style={{ background: slide.color }}
                  onClick={() => setActivePage("contact")}
                >
                  Get Free Quote →
                </button>
              </div>

              {/* RIGHT ICON */}
              <div className="banner-visual">
                <div
                  className="banner-icon-box"
                  style={{
                    background: `${slide.color}15`,
                    border: `2px solid ${slide.color}30`,
                  }}
                >
                  <span className="banner-icon">{slide.icon}</span>
                  <div
                    className="banner-icon-ring"
                    style={{ borderColor: slide.color }}
                  />
                </div>
              </div>
            </div>
          )}
        </div>

        {/* DOTS */}
        <div className="banner-dots">
          {slides.map((s, i) => (
            <button
              key={i}
              className={`banner-dot ${i === current ? "banner-dot--active" : ""}`}
              style={{
                background: i === current ? (slide.color || "#c8920a") : "#ccc",
              }}
              onClick={() => goToSlide(i)}
            />
          ))}
        </div>

        {/* ARROWS */}
        <button
          className="banner-arrow banner-arrow--left"
          onClick={() => goToSlide((current - 1 + slides.length) % slides.length)}
        >
          ‹
        </button>
        <button
          className="banner-arrow banner-arrow--right"
          onClick={() => goToSlide((current + 1) % slides.length)}
        >
          ›
        </button>

        {/* PROGRESS BAR */}
        <div className="banner-progress">
          <div
            className="banner-progress-bar"
            style={{
              background: slide.color || "#c8920a",
              animationDuration: "4s",
            }}
            key={current}
          />
        </div>
      </div>

      {/* ===== HERO MAIN CONTENT ===== */}
      <div className="hero grid-bg">
        <div
          className="glow-orb"
          style={{
            width: 400,
            height: 400,
            background: "rgba(7, 69, 105, 0.06)",
            top: -100,
            left: -100,
          }}
        />
        <div
          className="glow-orb"
          style={{
            width: 300,
            height: 300,
            background: "rgba(200,146,10,0.05)",
            bottom: 0,
            right: -100,
          }}
        />

        <div className="hero__topbar">
          <span className="pulse-dot" />
          <span>🇮🇳 Serving  padanthalumoodu Kanyakumari district & Trivandrum</span>
        </div>

        <div className="hero__container container">
          <div className="hero__content">
            <div className="section-tag" style={{ marginBottom: 20 }}>
              Your Trusted Technology Partner
            </div>

            <h1 className="hero__title">
              <span className="hero__title-line">All IT Solutions</span>
              <span className="hero__title-line hero__title-gold">
                Under One Place
              </span>
            </h1>

            <p className="hero__subtitle">
              Complete IT solutions and professional technology support for businesses. 
We provide custom software development, website development, computer sales & service, CCTV installation, networking installation & solutions, and reliable online IT support IT Infrastructure setup — everything your business needs under one roof.
            </p>

            <div className="hero__tags">
              {highlights.map((h, i) => (
                <span key={i} className="hero__tag">
                  <span>{h.icon}</span> {h.text}
                </span>
              ))}
            </div>

            <div className="hero__actions">
              <button
                className="btn btn-gold"
                onClick={() => setActivePage("contact")}
              >
                Get Free Consultation
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                >
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </button>
              <button
                className="btn btn-outline"
                onClick={() => setActivePage("products")}
              >
                View Products
              </button>
            </div>

            <div className="hero__contacts">
              <a href="tel:9489651231" className="hero__contact-item">
                <span className="contact-icon">📞</span>
                <span>9489651231 / 8754668130</span>
              </a>
              <a
                href="mailto:sivatechsolution2020@gmail.com"
                className="hero__contact-item"
              >
                <span className="contact-icon">✉️</span>
                <span>sivatechsolution2020@gmail.com</span>
              </a>
            </div>
          </div>

          {/* RIGHT CARD */}
          <div className="hero__visual">
            <div className="hero__card">
              <div className="hero__card-header">
                <div className="hero__avatar">
                  <div className="avatar-ring" />
                  <div className="avatar-inner">IT</div>
                </div>
                <div>
                  <div className="hero__founder-name">Our achievement</div>
                  <div className="hero__founder-title">
                    “Building strong customer relationships through reliable service.”
                  </div>
                </div>
              </div>
              <div className="hero__card-divider" />
              <div className="hero__stats">
                {stats.map((s, i) => (
                  <div key={i} className="hero__stat">
                    <div className="stat-value">{s.value}</div>
                    <div className="stat-label">{s.label}</div>
                  </div>
                ))}
              </div>
              <div className="hero__card-footer">
                <span className="badge badge-green">● Available Now</span>
                <span className="badge badge-gold">online support</span>
              </div>
            </div>
            <div className="float-tag float-tag1">PHP / MySQL</div>
            <div className="float-tag float-tag2">React · Laravel</div>
            <div className="float-tag float-tag3">IT solutions</div>
          </div>
        </div>

        <div className="hero__scroll">
          <span>Scroll</span>
          <div className="scroll-line" />
        </div>
      </div>
    </section>
  );
}
