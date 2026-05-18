import { useState } from "react";
import "./Services.css";

const services = [
  {
    icon: "💻",
    title: "Software Development",
    color: "gold",
    desc: "Custom PHP/MySQL, Laravel & React web applications tailored for your business workflow.",
    features: ["Custom ERP & CRM Systems", "Inventory & Billing Software", "Hospital & Lab Management", "Finance & Loan Software", "POS Systems", "Multi-user Role Access"],
    price: "Starting ₹15,000",
  },
  {
    icon: "🌐",
    title: "Web Development & Design",
    color: "cyan",
    desc: "Modern, responsive websites and web apps that grow your online presence and generate leads.",
    features: ["Business Websites", "E-Commerce Portals", "Landing Pages", "WordPress & Elementor", "React / Next.js Apps", "SEO Optimization"],
    price: "Starting ₹8,000",
  },
  {
    icon: "🖥️",
    title: "Computer Sales & Service",
    color: "gold",
    desc: "Genuine hardware sales, AMC, repair and upgrade services for desktops and laptops.",
    features: ["Desktop & Laptop Sales", "Hardware Repair & Upgrade", "OS Installation", "Data Recovery", "Annual Maintenance Contract", "On-site Support"],
    price: "Contact for Quote",
  },
  {
    icon: "🔌",
    title: "Networking Setup",
    color: "cyan",
    desc: "Complete LAN/WAN network design, installation and maintenance for offices and businesses.",
    features: ["LAN / WAN Setup", "Wi-Fi Installation", "Network Troubleshooting", "Switch & Router Config", "Structured Cabling", "VPN Setup"],
    price: "Starting ₹5,000",
  },
  {
    icon: "📹",
    title: "CCTV & Security Systems",
    color: "gold",
    desc: "HD CCTV surveillance systems with remote viewing — indoor, outdoor, day/night vision.",
    features: ["HD & 4K CCTV Cameras", "DVR / NVR Installation", "Remote Mobile Viewing", "Night Vision Cameras", "PTZ Cameras", "Annual Service Contract"],
    price: "Starting ₹8,000",
  },
  {
    icon: "🕐",
    title: "Biometric & Attendance",
    color: "cyan",
    desc: "Fingerprint and face recognition attendance systems with payroll software integration.",
    features: ["Fingerprint Devices", "Face Recognition", "Attendance Software", "Payroll Integration", "Access Control", "Multi-branch Support"],
    price: "Starting ₹6,000",
  },
  {
    icon: "☁️",
    title: "IT Consulting & Support",
    color: "gold",
    desc: "Expert IT guidance, cloud setup, VPS hosting, server management and 24/7 remote support.",
    features: ["Cloud & VPS Setup", "Server Management", "Domain & Hosting", "IT Infrastructure Plan", "Remote Support", "Business Automation"],
    price: "Starting ₹2,000/mo",
  },
  {
    icon: "📱",
    title: "Online Support & AMC",
    color: "cyan",
    desc: "Annual maintenance contracts with priority support for all your IT assets and software.",
    features: ["24/7 Remote Support", "On-site Visits", "Software Updates", "Hardware Checkups", "Priority Response", "Monthly Reports"],
    price: "Custom AMC Plans",
  },
];

export default function Services({ setActivePage }) {
  const [hovered, setHovered] = useState(null);

  return (
    <section className="services section grid-bg">
      <div className="glow-orb" style={{ width: 500, height: 500, background: "rgba(0,212,255,0.04)", top: 100, left: -200 }}/>
      <div className="container">
        <div className="section-header">
          <div className="section-tag">What We Do</div>
          <h2 className="section-title">Our <span>Services</span></h2>
          <p className="section-desc">Complete IT solutions under one roof — from custom software to hardware installation.</p>
          <span className="gold-line"/>
        </div>

        <div className="services__grid">
          {services.map((s, i) => (
            <div
              key={i}
              className={`services__card card ${hovered === i ? "services__card--hovered" : ""} services__card--${s.color}`}
              onMouseEnter={() => setHovered(i)}
              onMouseLeave={() => setHovered(null)}
            >
              <div className="services__card-top">
                <div className={`service-icon service-icon--${s.color}`}>{s.icon}</div>
                <span className={`badge badge-${s.color}`}>{s.price}</span>
              </div>
              <h3 className="service-title">{s.title}</h3>
              <p className="service-desc">{s.desc}</p>
              <div className="service-features">
                {s.features.map((f, j) => (
                  <div key={j} className="service-feature">
                    <span className={`feature-dot feature-dot--${s.color}`}/>
                    <span>{f}</span>
                  </div>
                ))}
              </div>
              <button
                className={`btn ${s.color === "gold" ? "btn-outline" : "btn-cyan"} service-btn`}
                onClick={() => setActivePage("contact")}
              >
                Enquire Now
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <path d="M5 12h14M12 5l7 7-7 7"/>
                </svg>
              </button>
            </div>
          ))}
        </div>

        {/* CTA BANNER */}
        <div className="services__cta">
          <div className="services__cta-content">
            <h3>Need a Custom IT Solution?</h3>
            <p>Tell us your requirement — we'll build it for you at the best price.</p>
          </div>
          <div className="services__cta-actions">
            <a href="tel:9489651231" className="btn btn-gold">📞 Call Now</a>
            <button className="btn btn-outline" onClick={() => setActivePage("contact")}>Send Enquiry</button>
          </div>
        </div>
      </div>
    </section>
  );
}
