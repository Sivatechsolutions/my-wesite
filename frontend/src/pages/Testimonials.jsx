import "./Testimonials.css";

const testimonials = [
  {
    name: "Harshan",
    business: "Swathy Finance",
    location: "Trivandrum",
    icon: "🥇",
    rating: 5,
    text: "The Gold Finance software has completely transformed how we manage our pawn loans. Interest calculation is automatic, receipts print perfectly on our dot matrix printer. Siva Sir's support is always available — day or night!",
    product: "Gold Finance Pro",
  },
  {
    name: "Dr. Anitha Rajan",
    business: "Rajan Diagnostic Lab",
    location: "Kanyakumari",
    icon: "🔬",
    rating: 5,
    text: "MediLab Pro is exactly what our lab needed. Barcode reports, SMS delivery to patients, GST billing — everything in one system. Very professional software and excellent after-sales support from the team.",
    product: "MediLab Pro",
  },
  {
    name: "Nanthu",
    business: "Car world",
    location: "Uchakadai",
    icon: "🧾",
    rating: 5,
    text: "GST billing has become so easy with Siva Tech's billing software. My staff learned it in one day. GSTR reports are ready in minutes. Best investment for my business!",
    product: "GST Billing Software",
  },
  {
  
  name: "R Jegan",
  business: "Lekshmi Casuals",
  location: "Kaliakkavilai",
  icon: "🧵",
  rating: 5,
  text: "TextileMate Cloud handles all our textile shop needs — product management, barcode billing, stock tracking, purchases and sales. The cloud-based system makes it easy to manage our business and access reports. Siva Sir customized it exactly as we wanted. Very happy with the service.",
  product: "TextileMate Cloud"

  },
  {
    name: "Priya Pharmacy",
    business: "Medical Shop",
    location: "Nagercoil",
    icon: "💊",
    rating: 5,
    text: "MediPharmacy tracks our medicines perfectly. Expiry alerts save us from losses. Purchase and sales tracking has improved our profit margin visibility greatly. Recommended!",
    product: "MediPharmacy",
  },
  {
    
  name: "El Shaddai Clinic & Lab & Medical",
  business: "Clinic, Laboratory & Medical Centre",
  location: "Thiruvalluryalumoodu, Kaliyakkavilai, Kulappuram, Tamil Nadu 629172",
  icon: "🏥",
  rating: 5,
  text: "Siva Tech Solutions provided complete IT infrastructure development for El Shaddai Clinic & Lab & Medical. The project included 10+ computers, 40 CCTV cameras, complete networking, biometric attendance/access systems and a PA audio system. The entire IT infrastructure was professionally designed, installed and configured to meet our operational needs.",
  product: "Complete IT Infrastructure Development"

  },
];

export default function Testimonials() {
  return (
    <section className="testimonials section grid-bg">
      <div className="glow-orb" style={{ width: 500, height: 500, background: "rgba(201,168,76,0.05)", top: "50%", left: "50%", transform: "translate(-50%,-50%)" }}/>
      <div className="container">
        <div className="section-header">
          <div className="section-tag">Client Reviews</div>
          <h2 className="section-title">What Our <span>Clients Say</span></h2>
          <p className="section-desc">Trusted by 200+ businesses across Kanyakumari, Nagercoil and Trivandrum.</p>
          <span className="gold-line"/>
        </div>

        <div className="testimonials__grid">
          {testimonials.map((t, i) => (
            <div key={i} className="testimonial-card card">
              <div className="testimonial-top">
                <div className="stars">
                  {"★".repeat(t.rating)}<span style={{ color: "var(--text-muted)" }}>{"★".repeat(5 - t.rating)}</span>
                </div>
                <span className="badge badge-gold" style={{ fontSize: 11 }}>{t.product}</span>
              </div>
              <p className="testimonial-text">"{t.text}"</p>
              <div className="testimonial-author">
                <div className="author-avatar">{t.icon}</div>
                <div>
                  <div className="author-name">{t.name}</div>
                  <div className="author-business">{t.business} · {t.location}</div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* TRUST BADGES */}
        <div className="trust-section">
          <h3 className="trust-title">Why Businesses Choose Us</h3>
          <div className="trust-grid">
            {[
              { icon: "⚡", title: "Fast Installation", desc: "Software setup & training within 1–2 days" },
              { icon: "🔒", title: "Data Security", desc: "Your data stays on your own server/PC" },
              { icon: "🛠️", title: "Lifetime Support", desc: "Call anytime — we're always available" },
              { icon: "💰", title: "Best Price", desc: "Affordable pricing with flexible payment" },
              { icon: "🎯", title: "Customizable", desc: "Software adapted to your exact workflow" },
              { icon: "📜", title: "AMC Available", desc: "Annual maintenance contracts for peace of mind" },
            ].map((b, i) => (
              <div key={i} className="trust-item">
                <span className="trust-icon">{b.icon}</span>
                <div>
                  <div className="trust-item-title">{b.title}</div>
                  <div className="trust-item-desc">{b.desc}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
