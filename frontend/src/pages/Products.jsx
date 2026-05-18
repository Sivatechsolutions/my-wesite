import { useState } from "react";
import "./Products.css";

const products = [
  {
    id: 1,
    name: "Gold Finance Pro",
    subtitle: "Pawn & Gold Loan Management",
    icon: "🥇",
    category: "Finance",
    badge: "Live Product",
    badgeType: "green",
    price: "₹25,000",
    amc: "₹3,000/yr",
    desc: "Complete gold loan and pawn management software with interest calculation, payment tracking, receipt printing and branch management.",
    features: [
      "Loan Management & Disbursement",
      "Daily / Slab Interest Calculation",
      "Payment Collection & Receipts",
      "Dot Matrix Printer Support",
      "Branch Management",
      "Bank Pledge Module",
      "Multi-user Role Access",
      "Gold Rate Integration",
    ],
    tech: ["PHP", "MySQL", "XAMPP"],
    clients: "Swathy Finance, Nagercoil",
  },
  {
    id: 2,
    name: "MediLab Pro",
    subtitle: "Laboratory Management System",
    icon: "🔬",
    category: "Healthcare",
    badge: "High Demand",
    badgeType: "gold",
    price: "₹20,000",
    amc: "₹2,500/yr",
    desc: "Complete pathology lab management with patient registration, test management, barcode reports, billing and doctor referral tracking.",
    features: [
      "Patient Registration",
      "Test & Panel Management",
      "Barcode Report Generation",
      "GST Billing",
      "Doctor Referral Tracking",
      "SMS / WhatsApp Reports",
      "Multi-lab Support",
      "Dashboard & Analytics",
    ],
    tech: ["PHP", "MySQL", "Bootstrap"],
    clients: "Multiple labs in KK District",
  },
  {
    id: 3,
    name: "HospitalMate Pro",
    subtitle: "Hospital Management System",
    icon: "🏥",
    category: "Healthcare",
    badge: "New",
    badgeType: "cyan",
    price: "₹45,000",
    amc: "₹5,000/yr",
    desc: "Full-featured hospital management covering OPD, IPD, pharmacy, lab, billing, appointments and EMR with role-based access control.",
    features: [
      "OPD & IPD Management",
      "Appointment Scheduling",
      "Pharmacy Module",
      "Lab Integration",
      "GST Billing & Invoicing",
      "Doctor & Staff Management",
      "EMR / Patient Records",
      "Reports & Analytics",
    ],
    tech: ["PHP", "MySQL", "Laravel"],
    clients: "Available for deployment",
  },
  {
    id: 4,
    name: "MediPharmacy",
    subtitle: "Pharmacy Management System",
    icon: "💊",
    category: "Healthcare",
    badge: "Complete",
    badgeType: "green",
    price: "₹18,000",
    amc: "₹2,000/yr",
    desc: "Pharmacy retail management with drug stock, expiry alerts, purchase, sales, GST billing and supplier management.",
    features: [
      "Medicine Stock Management",
      "Expiry Date Alerts",
      "Purchase & Sales",
      "GST Billing",
      "Supplier Management",
      "Prescription Tracking",
      "Low Stock Alerts",
      "Profit & Loss Reports",
    ],
    tech: ["PHP", "MySQL", "Bootstrap"],
    clients: "Ready to deploy",
  },
  {
    id: 5,
    name: "GST Billing Software",
    subtitle: "Business Billing & Invoicing",
    icon: "🧾",
    category: "Business",
    badge: "Popular",
    badgeType: "gold",
    price: "₹12,000",
    amc: "₹1,500/yr",
    desc: "Complete GST and Non-GST billing solution for retail and service businesses with inventory, customers and tax reports.",
    features: [
      "GST & Non-GST Invoicing",
      "Tax Invoice / Bill of Supply",
      "Inventory Management",
      "Customer Ledger",
      "GSTR Reports",
      "Multi-tax Slab Support",
      "PDF Invoice Export",
      "Dashboard Analytics",
    ],
    tech: ["PHP", "MySQL", "Bootstrap"],
    clients: "Shops across KK District",
  },
  {
    id: 6,
    name: "ShopMate POS",
    subtitle: "Retail Point of Sale System",
    icon: "🛒",
    category: "Business",
    badge: "Complete",
    badgeType: "green",
    price: "₹15,000",
    amc: "₹2,000/yr",
    desc: "Fast and easy retail POS system with barcode scanning, product management, daily sales reports and cash management.",
    features: [
      "Barcode Scanner Support",
      "Touch-friendly Interface",
      "Product & Category Mgmt",
      "Daily Sales Reports",
      "Cash & Credit Sales",
      "Customer Management",
      "Stock Management",
      "Thermal Printer Support",
    ],
    tech: ["PHP", "MySQL", "Bootstrap"],
    clients: "Multiple retail shops",
  },
  {
    id: 7,
    name: "TradeShop Pro",
    subtitle: "Hardware & Trade Shop Management",
    icon: "🔧",
    category: "Business",
    badge: "Complete",
    badgeType: "green",
    price: "₹18,000",
    amc: "₹2,000/yr",
    desc: "Specialized management system for hardware, paint, electrical and plumbing shops with credit sales and supplier management.",
    features: [
      "Multi-category Products",
      "Credit Customer Ledger",
      "Purchase & Sales",
      "Supplier Management",
      "Quotation & Invoice",
      "Stock Alerts",
      "Day Book Reports",
      "Profit Analysis",
    ],
    tech: ["PHP", "MySQL", "Bootstrap"],
    clients: "Hardware shops, KK District",
  },
  {
    id: 8,
    name: "MediWholesale Pro",
    subtitle: "Medical Wholesale Distribution",
    icon: "🏭",
    category: "Healthcare",
    badge: "Coming Soon",
    badgeType: "cyan",
    price: "₹45,000–₹55,000",
    amc: "₹5,000/yr",
    desc: "Enterprise-level medical wholesale distribution system with 12 modules covering purchases, sales, returns, expiry and GST compliance.",
    features: [
      "22-table Database Schema",
      "Purchase & Sales Orders",
      "Medicine Expiry Tracking",
      "GST Return Reports",
      "Customer & Supplier Mgmt",
      "Batch & Rack Management",
      "Multi-user Access",
      "Advanced MIS Reports",
    ],
    tech: ["PHP", "MySQL", "Laravel"],
    clients: "Sree Sai Medicare (Pending)",
  },
];

const categories = ["All", "Finance", "Healthcare", "Business"];

export default function Products({ setActivePage }) {
  const [activeCategory, setActiveCategory] = useState("All");
  const [enquiryProduct, setEnquiryProduct] = useState(null);
  const [form, setForm] = useState({ name: "", phone: "", email: "", business: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const filtered = activeCategory === "All" ? products : products.filter(p => p.category === activeCategory);

  const handleEnquiry = (product) => {
    setEnquiryProduct(product);
    setSubmitted(false);
    setForm({ name: "", phone: "", email: "", business: "", message: "" });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // POST to Laravel API
    try {
      await fetch("http://127.0.0.1:8000/api/enquiry", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...form, product: enquiryProduct?.name }),
      });
    } catch (_) {}
    setSubmitted(true);
  };

  return (
    <section className="products section grid-bg">
      <div className="glow-orb" style={{ width: 400, height: 400, background: "rgba(201,168,76,0.06)", bottom: 0, right: 0 }}/>
      <div className="container">
        <div className="section-header">
          <div className="section-tag">Software Products</div>
          <h2 className="section-title">Our <span>Software Products</span></h2>
          <p className="section-desc">Ready-to-deploy vertical SaaS products for your industry — customizable to your workflow.</p>
          <span className="gold-line"/>
        </div>

        {/* FILTER */}
        <div className="products__filter">
          {categories.map(cat => (
            <button
              key={cat}
              className={`filter-btn ${activeCategory === cat ? "filter-btn--active" : ""}`}
              onClick={() => setActiveCategory(cat)}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* GRID */}
        <div className="products__grid">
          {filtered.map((p) => (
            <div key={p.id} className="product-card card">
              <div className="product-card__header">
                <div className="product-icon">{p.icon}</div>
                <span className={`badge badge-${p.badgeType}`}>{p.badge}</span>
              </div>
              <h3 className="product-name">{p.name}</h3>
              <p className="product-subtitle">{p.subtitle}</p>
              <p className="product-desc">{p.desc}</p>

              <div className="product-features">
                {p.features.map((f, i) => (
                  <div key={i} className="product-feature">
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none">
                      <path d="M20 6L9 17l-5-5" stroke="var(--gold)" strokeWidth="2.5" strokeLinecap="round"/>
                    </svg>
                    <span>{f}</span>
                  </div>
                ))}
              </div>

              <div className="product-tech">
                {p.tech.map((t, i) => (
                  <span key={i} className="tech-tag">{t}</span>
                ))}
              </div>

              <div className="product-pricing">
                <div>
                  <div className="price-label">One-time</div>
                  <div className="price-value">{p.price}</div>
                </div>
                <div>
                  <div className="price-label">AMC</div>
                  <div className="price-amc">{p.amc}</div>
                </div>
              </div>

              <button className="btn btn-gold product-enquire-btn" onClick={() => handleEnquiry(p)}>
                Send Enquiry
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <path d="M5 12h14M12 5l7 7-7 7"/>
                </svg>
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* ENQUIRY MODAL */}
      {enquiryProduct && (
        <div className="modal-overlay" onClick={() => setEnquiryProduct(null)}>
          <div className="modal" onClick={e => e.stopPropagation()}>
            <button className="modal-close" onClick={() => setEnquiryProduct(null)}>✕</button>
            {submitted ? (
              <div className="modal-success">
                <div className="success-icon">✅</div>
                <h3>Enquiry Sent!</h3>
                <p>Thank you! We'll contact you within 24 hours regarding <strong>{enquiryProduct.name}</strong>.</p>
                <div className="success-contact">
                  <p>Or reach us directly:</p>
                  <a href="tel:9489651231">📞 9489651231 / 8754668130</a>
                </div>
                <button className="btn btn-gold" onClick={() => setEnquiryProduct(null)}>Close</button>
              </div>
            ) : (
              <>
                <div className="modal-header">
                  <span className="modal-icon">{enquiryProduct.icon}</span>
                  <div>
                    <h3 className="modal-title">Enquire: {enquiryProduct.name}</h3>
                    <p className="modal-subtitle">{enquiryProduct.subtitle} · {enquiryProduct.price}</p>
                  </div>
                </div>
                <form onSubmit={handleSubmit}>
                  <div className="modal-form-grid">
                    <div className="form-group">
                      <label className="form-label">Your Name *</label>
                      <input required className="form-control" placeholder="Full name" value={form.name} onChange={e => setForm({...form, name: e.target.value})}/>
                    </div>
                    <div className="form-group">
                      <label className="form-label">Phone Number *</label>
                      <input required className="form-control" placeholder="Mobile number" value={form.phone} onChange={e => setForm({...form, phone: e.target.value})}/>
                    </div>
                    <div className="form-group">
                      <label className="form-label">Email</label>
                      <input className="form-control" placeholder="Email address" value={form.email} onChange={e => setForm({...form, email: e.target.value})}/>
                    </div>
                    <div className="form-group">
                      <label className="form-label">Business Name *</label>
                      <input required className="form-control" placeholder="Your business name" value={form.business} onChange={e => setForm({...form, business: e.target.value})}/>
                    </div>
                  </div>
                  <div className="form-group">
                    <label className="form-label">Message / Requirements</label>
                    <textarea className="form-control" placeholder="Any specific requirements or questions..." value={form.message} onChange={e => setForm({...form, message: e.target.value})}/>
                  </div>
                  <button type="submit" className="btn btn-gold" style={{ width: "100%", justifyContent: "center" }}>
                    Submit Enquiry
                  </button>
                </form>
              </>
            )}
          </div>
        </div>
      )}
    </section>
  );
}
