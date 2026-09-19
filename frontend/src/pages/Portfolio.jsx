import "./Portfolio.css";

const portfolioItems = [
  {
    title: "Swathy Finance – Gold Loan System",
    category: "Finance Software",
    icon: "🥇",
    location: " Trivandrum",
    desc: "Complete gold pawn loan management system with dot matrix printing, slab interest calculation, branch management and bank pledge module.",
    tech: ["PHP", "MySQL", "XAMPP", "Bootstrap"],
    status: "Live",
    year: "2026",
  },
  {
    title: "Lekshmi Casuals – Cloud Textile Software",

category: "Textile Business Software",

icon: "👕",

location: "Kaliakkavilai Kanyakumari District",

desc: "Cloud-based textile management software for Lekshmi Casuals with product management, barcode support, sales, purchase, stock management, billing and business reports.",

tech: ["React", "Django", "MySQL", "REST API"],

status: "Live",

year: "2026",
  },
  {
   title: "Car World – Business Billing",

category: "GST Billing Software",

icon: "🧾",

location: "Uchakadai Neyyatinkara",

desc: "GST billing and business management software with invoice generation, GST calculations, product management, customer management, sales tracking and business reports.",

tech: ["PHP", "MySQL", "Bootstrap", "JavaScript"],

status: "Live",

year: "2024",
  },
  {
    title: "El Shaddai Clinic & Lab & Medical Complete IT Infrastructure Setup – Commercial Facility",

category: "IT Infrastructure",

icon: "🖥️",

location: "Thiruvalluryalumoodu, Kaliyakkavilai,Tamil Nadu 629172",

desc: "Complete IT infrastructure setup including 7 PCs, 40-camera CCTV system, structured networking, biometric attendance system, printers and PA audio system for a commercial facility.",

tech: ["Desktop PCs", "CCTV", "Networking", "Biometric", "Printers", "PA Audio"],

status: "Live",

year: "2022",
  },
  {
   title: "SJBL International Nurses Academy – Website",

category: "Education Website",

icon: "🎓",

location: "Kaliakkavilai ,Kanyakumari District",

desc: "Professional website developed for SJBL International Nurses Academy with course information, international nursing exam preparation, student resources, placement information and secure content access.",

tech: ["React", "Vite", "PHP", "MySQL", "REST API","10 PC","CCTV","Netwoking","IT support" & "Completed IT Setup"],

status: "Live",

year: "2026",
  },
  {
    title: "ZYGA Solutions – IT Solutions",

category: "IT Solutions & Services",

icon: "💻",

location: "Vazhuthacaud, Trivandrum",

desc: "Complete IT solutions and technology services provided for ZYGA Solutions, including computer systems, networking, software support, IT infrastructure and business technology solutions.",

tech: ["IT Infrastructure", "Networking", "Computer Systems", "Software Solutions"],

status: "Live",

year: "2022",
  },
  {
    title: "Collection Agency Co-operative Society – IT Support",

category: "IT Support & AMC",

icon: "🛠️",

location: "Killipaalam,Trivandrum District",

desc: "Complete IT support and maintenance services for a co-operative society, including computer systems, software support, networking, troubleshooting, printer support and Annual Maintenance Contract (AMC) services.",

tech: ["IT Support", "Networking", "Computer Maintenance", "Printer Support", "AMC"],

status: "Live",

year: "2022",
  },
  {
    title: "JAKSMAR INDIA PVT LTD – Complete IT Support",

category: "IT Infrastructure & Support",

icon: "🖥️",

location: "industrial Estate,Pappanamcode, Thiruvananthapuram, District",

desc: "Complete IT support and infrastructure services including computer setup, networking, CCTV installation, system configuration, troubleshooting and ongoing technical support.",

tech: ["Computer Systems", "Networking", "CCTV", "IT Support", "System Setup"],

status: "Live",

year: "2022",
  },
  {
title: "JUDESIGN Engineering & Procurement Pvt Ltd – Complete IT Solutions",

category: "IT Solutions & Infrastructure",

icon: "💻",

location: "Parvathypuram, Nagercoil",

desc: "Complete IT solutions and technical support services including computer systems, networking, software support, system setup, troubleshooting and IT infrastructure management.",

tech: ["Computer Systems", "Networking", "Software Solutions", "IT Support", "Infrastructure"],

status: "Live",

year: "2026",

  },
  {
title: "Survey Records & Co-operative Society – IT Support",

category: "IT Support & Services",

icon: "🖥️",

location: "Vazhuthacaud, Trivandrum",

desc: "Complete IT support and service including computer and printer setup, networking, system maintenance, troubleshooting and ongoing technical assistance for the society.",

tech: ["Computer Systems", "Printers", "Networking", "IT Support", "Maintenance"],

status: "Live",

year: "2023",

  },
  {
    title: "Ravi Memorial Clinic – IT Setup & Support",

category: "IT Infrastructure & Support",

icon: "🏥",

location: "Padanthalumoodu",

desc: "Complete IT setup and support for Ravi Memorial Clinic, including computer systems, printer setup, biometric attendance and ongoing technical support.",

tech: ["Computer Systems", "Printers", "Biometric", "IT Support"],

status: "Live",

year: "2024",
  }
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
            { value: "100+", label: "Happy Clients" },
            { value: "15+", label: "Software Products" },
            { value: "300+", label: "Computer sales" },
               { value: "70+", label: "CCTV Projects" },
            { value: "100+", label: "Networks Setup" },
             { value: "40+", label: "Biomatric System" },
             { value: "50+", label: "IT Infrasructure Setuped" },
             { value: "24/7", label: "Technical Support" },
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
