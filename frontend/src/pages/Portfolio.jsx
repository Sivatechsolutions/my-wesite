import "./Portfolio.css";

const portfolioItems = [
  {
    title: "Swathy Finance – Gold Loan System",
    category: "Finance Software",
    icon: "🥇",
    location: "Nagercoil / Vellayani",
    desc: "Complete gold pawn loan management system with dot matrix printing, slab interest calculation, branch management and bank pledge module.",
    tech: ["PHP", "MySQL", "XAMPP", "Bootstrap"],
    status: "Live",
    year: "2021",
  },
  {
    title: "MediLab Pro – Pathology Lab",
    category: "Healthcare Software",
    icon: "🔬",
    location: "Kanyakumari District",
    desc: "Laboratory information system serving multiple labs with barcode reports, SMS delivery, GST billing and doctor referral commission tracking.",
    tech: ["PHP", "MySQL", "Bootstrap", "FPDF"],
    status: "Live",
    year: "2022",
  },
  {
    title: "ShopMate POS – Retail Chain",
    category: "POS System",
    icon: "🛒",
    location: "Multiple locations",
    desc: "Retail point-of-sale system deployed across multiple shops with barcode scanning, thermal printing and daily sales analytics.",
    tech: ["PHP", "MySQL", "Bootstrap"],
    status: "Live",
    year: "2023",
  },
  {
    title: "CCTV & Networking – Office Complex",
    category: "Hardware Installation",
    icon: "📹",
    location: "Padanthalumoodu",
    desc: "16-camera HD CCTV system with structured LAN cabling, managed switch setup and remote monitoring configuration for a commercial complex.",
    tech: ["Dahua CCTV", "Cat6 Cabling", "Managed Switch"],
    status: "Completed",
    year: "2023",
  },
  {
    title: "GST Billing – Electrical Shop",
    category: "Business Software",
    icon: "🧾",
    location: "Nagercoil",
    desc: "Complete GST invoicing and inventory management system with GSTR report generation and supplier ledger for an electrical goods retailer.",
    tech: ["PHP", "MySQL", "Bootstrap"],
    status: "Live",
    year: "2023",
  },
  {
    title: "Biometric Attendance – School",
    category: "Hardware + Software",
    icon: "🕐",
    location: "Kanyakumari District",
    desc: "Fingerprint-based attendance system with automated payroll integration, monthly reports and SMS alerts for staff management.",
    tech: ["ZKTeco Device", "PHP", "MySQL"],
    status: "Completed",
    year: "2022",
  },
  {
    title: "HospitalMate Pro – Clinic Chain",
    category: "Healthcare Software",
    icon: "🏥",
    location: "Trivandrum (Demo)",
    desc: "Full hospital management system with OPD, IPD, pharmacy, lab modules, GST billing and EMR — currently in deployment phase.",
    tech: ["PHP", "MySQL", "Laravel", "Bootstrap"],
    status: "Deploying",
    year: "2024",
  },
  {
    title: "TradeShop Pro – Hardware Distributor",
    category: "Business Software",
    icon: "🔧",
    location: "KK District",
    desc: "Trade shop management with multi-category products, credit ledger, purchase and sales tracking for a hardware distributor.",
    tech: ["PHP", "MySQL", "Bootstrap"],
    status: "Live",
    year: "2024",
  },
];

const statusColor = {
  "Live": "green",
  "Completed": "gold",
  "Deploying": "cyan",
};

export default function Portfolio() {
  return (
    <section className="portfolio section grid-bg">
      <div className="glow-orb" style={{ width: 400, height: 400, background: "rgba(0,212,255,0.04)", top: 0, left: 0 }}/>
      <div className="container">
        <div className="section-header">
          <div className="section-tag">Our Work</div>
          <h2 className="section-title">Portfolio & <span>Case Studies</span></h2>
          <p className="section-desc">Real deployments across Kanyakumari–Nagercoil–Trivandrum belt.</p>
          <span className="gold-line"/>
        </div>

        {/* STATS ROW */}
        <div className="portfolio__stats">
          {[
            { value: "200+", label: "Happy Clients" },
            { value: "15+", label: "Software Products" },
            { value: "50+", label: "CCTV Projects" },
            { value: "100+", label: "Networks Setup" },
          ].map((s, i) => (
            <div key={i} className="portfolio-stat card">
              <div className="stat-value">{s.value}</div>
              <div className="stat-label">{s.label}</div>
            </div>
          ))}
        </div>

        {/* GRID */}
        <div className="portfolio__grid">
          {portfolioItems.map((item, i) => (
            <div key={i} className="portfolio-card card">
              <div className="portfolio-card__top">
                <div className="portfolio-icon">{item.icon}</div>
                <div className="portfolio-meta">
                  <span className={`badge badge-${statusColor[item.status]}`}>● {item.status}</span>
                  <span className="portfolio-year">{item.year}</span>
                </div>
              </div>
              <div className="portfolio-category">{item.category}</div>
              <h3 className="portfolio-title">{item.title}</h3>
              <div className="portfolio-location">
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/><circle cx="12" cy="10" r="3"/>
                </svg>
                {item.location}
              </div>
              <p className="portfolio-desc">{item.desc}</p>
              <div className="portfolio-tech">
                {item.tech.map((t, j) => (
                  <span key={j} className="tech-tag">{t}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
