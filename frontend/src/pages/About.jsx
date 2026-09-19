import "./About.css";
import sivaPhoto from "../assets/siva.jpeg";

const values = [
  { icon: "🎯", title: "Client First", desc: "Every solution is tailored to your specific business needs and goals." },
  { icon: "⚡", title: "Fast Delivery", desc: "Quick turnaround without compromising quality or reliability." },
  { icon: "🔒", title: "Reliable Support", desc: "24/7 after-sales support and Annual Maintenance Contracts available." },
  { icon: "💡", title: "Innovation", desc: "Always using modern technologies to deliver future-ready solutions." },
];

const milestones = [
  { year: "2020", event: "Founded Siva Tech Solutions in Padanthalumoodu, Kanyakumari" },
  { year: "2021", event: "Started the journey with Computer Sales & Service and complete IT Solutions and businesses" },
  { year: "2022", event: "Expanded to CCTV, Networking & Biometric installations across district" },
  { year: "2023", event: "Launched the first software product — Gold Finance / Pawn Management System." },
  
  { year: "2024", event: "Built MediLab Pro, HospitalMate Pro & MediPharmacy software products" },
  { year: "2025", event: "Launched ShopMate POS, GST Billing & TradeShop Pro products" },
  { year: "2026", event: "100+ clients served. Expanding to Trivandrum & regional SaaS delivery" },
];

export default function About() {
  return (
    <section className="about section grid-bg">
      <div className="glow-orb" style={{ width: 400, height: 400, background: "rgba(201,168,76,0.05)", top: 0, right: 0 }}/>
      <div className="container">
        {/* HEADER */}
        <div className="section-header">
          <div className="section-tag">About Us</div>
          <h1 className="section-title"> <span>Complete IT & Software Solutions for Modern Businesses</span></h1>
          <span className="gold-line"/>
        </div>

        {/* INTRO GRID */}
        <div className="about__intro">
          <div className="about__intro-text">
            <p>
              <strong style={{ color: "var(--gold)" }}>Siva Tech Solutions</strong> is a leading IT services and software development company
              based in Padanthalumoodu, Kanyakumari District, Tamil Nadu. Founded by <strong>R. Siva Prakash (M.Sc Software Engineering)</strong>,
              we specialize in building custom software products for small and medium businesses.
            </p>
            <p style={{ marginTop: 16 }}>
              Our expertise spans from PHP/MySQL-based vertical SaaS products for hospitals, labs, pharmacies,
              and finance companies — to hardware solutions like Computer sales & Service, CCTV installations, networking, biometric systems,
              and IT infrastructure setup,Online support and solution.
            </p>
            <p style={{ marginTop: 16, color: "var(--text-secondary)" }}>
              Serving the <strong style={{ color: "var(--cyan)" }}>Kanyakumari–Nagercoil–Trivandrum</strong> belt with 
              on-site support, remote assistance, and annual maintenance contracts.
            </p>

            <div className="about__badges">
              <span className="badge badge-gold">📍 Padanthalumoodu, Kanyakumari</span>
              <span className="badge badge-cyan">🎓 M.Sc Software Engineering</span>
              <span className="badge badge-green">✅ ISO Quality Service</span>
            </div>
          </div>

          <div className="about__founder-card card">
            <div className="founder-avatar">
             <img 
  src={sivaPhoto} 
  alt="R. Siva Prakash" 
  style={{ 
    width: "130%", 
    height: "110%", 
    objectFit: "cover",
    objectPosition: "center top",
    borderRadius: "12px",
    display: "block"
  }} 
/>

            </div>
            <h3 className="founder-name">R. Siva Prakash M.Sc</h3>
            <p className="founder-role">Founder & CEO</p>
            <p className="founder-qual">Software Engineering</p>
            <div className="founder-divider"/>
            <p className="founder-quote">
              "Our mission is to deliver reliable, affordable, and enterprise-level technology solutions to every small business in our Customers helping them grow through digital transformation and smart IT innovation.”
            </p>
            <div className="founder-contacts">
              <a href="tel:9489651231" className="founder-contact">📞 9489651231</a>
              <a href="tel:8754668130" className="founder-contact">📞 8754668130</a>
            </div>
          </div>
        </div>

        {/* VALUES */}
        <div className="about__values">
          {values.map((v, i) => (
            <div key={i} className="card about__value-card">
              <div className="value-icon">{v.icon}</div>
              <h4>{v.title}</h4>
              <p>{v.desc}</p>
            </div>
          ))}
        </div>

        {/* TIMELINE */}
        <div className="about__timeline-wrap">
          <h3 className="timeline-title">Our Journey</h3>
          <div className="about__timeline">
            {milestones.map((m, i) => (
              <div key={i} className="timeline-item">
                <div className="timeline-year">{m.year}</div>
                <div className="timeline-dot"/>
                <div className="timeline-event">{m.event}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
