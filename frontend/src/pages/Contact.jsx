import { useState } from "react";
import "./Contact.css";

const serviceOptions = [
  "Software Development",
  "Web Development",
  "Gold Finance Software",
  "MediLab Pro",
  "HospitalMate Pro",
  "MediPharmacy",
  "GST Billing Software",
  "ShopMate POS",
  "TradeShop Pro",
  "CCTV Installation",
  "Networking Setup",
  "Biometric System",
  "Computer Sales & Repair",
  "IT Consulting",
  "AMC / Support Contract",
  "Other",
];

export default function Contact() {
  const [form, setForm] = useState({
    name: "", phone: "", email: "", business: "",
    location: "", service: "", budget: "", message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const set = (k) => (e) => setForm({ ...form, [k]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      await fetch("http://127.0.0.1:8000/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
    } catch (_) {}
    setLoading(false);
    setSubmitted(true);
  };

  return (
    <section className="contact section grid-bg">
      <div className="glow-orb" style={{ width: 400, height: 400, background: "rgba(201,168,76,0.06)", top: 0, right: 0 }}/>
      <div className="container">
        <div className="section-header">
          <div className="section-tag">Get In Touch</div>
          <h2 className="section-title">Contact <span>Us</span></h2>
          <p className="section-desc">Ready to start your project? Send us your requirements and we'll get back within 24 hours.</p>
          <span className="gold-line"/>
        </div>

        <div className="contact__layout">
          {/* LEFT: INFO */}
          <div className="contact__info">
            <div className="contact__info-card card">
              <h3 className="contact__info-title">Get In Touch</h3>
              <div className="contact-items">
                <div className="contact-item">
                  <div className="contact-item__icon">📞</div>
                  <div>
                    <div className="contact-item__label">Phone / WhatsApp</div>
                    <a href="tel:9489651231" className="contact-item__value">9489651231</a>
                    <a href="tel:8754668130" className="contact-item__value">8754668130</a>
                  </div>
                </div>
                <div className="contact-item">
                  <div className="contact-item__icon">✉️</div>
                  <div>
                    <div className="contact-item__label">Email</div>
                    <a href="mailto:sivatechsolution2020@gmail.com" className="contact-item__value">
                      sivatechsolution2020@gmail.com
                    </a>
                  </div>
                </div>
                <div className="contact-item">
                  <div className="contact-item__icon">📍</div>
                  <div>
                    <div className="contact-item__label">Office Location</div>
                    <div className="contact-item__value">Padanthalumoodu,<br/>Kanyakumari District,<br/>Tamil Nadu</div>
                  </div>
                </div>
                <div className="contact-item">
                  <div className="contact-item__icon">🕐</div>
                  <div>
                    <div className="contact-item__label">Working Hours</div>
                    <div className="contact-item__value">Mon – Sat: 9 AM – 7 PM<br/>Sunday: On Call</div>
                  </div>
                </div>
              </div>

              <div className="contact__divider"/>

              <div className="contact__service-area">
                <div className="service-area-title">📡 Service Area</div>
                <div className="service-areas">
                  {["Kanyakumari District", "Nagercoil", "Colachel", "Padanthalumoodu", "Marthandam", "Trivandrum"].map((area, i) => (
                    <span key={i} className="area-tag">{area}</span>
                  ))}
                </div>
              </div>

              <div className="contact__divider"/>

              {/* WHATSAPP DIRECT */}
              <a
                href="https://wa.me/919489651231?text=Hi%20Siva%20Tech%20Solutions%2C%20I%20need%20IT%20services"
                target="_blank"
                rel="noreferrer"
                className="btn btn-gold"
                style={{ width: "100%", justifyContent: "center" }}
              >
                <span>💬</span> Chat on WhatsApp
              </a>
            </div>
          </div>

          {/* RIGHT: FORM */}
          <div className="contact__form-wrap">
            {submitted ? (
              <div className="contact__success card">
                <div className="success-emoji">🎉</div>
                <h3>Thank You!</h3>
                <p>Your enquiry has been received. <strong></strong> will contact you within 24 hours.</p>
                <div className="success-direct">
                  <p>For immediate response:</p>
                  <a href="tel:9489651231" className="btn btn-gold">📞 Call Now: 9489651231</a>
                </div>
                <button className="btn btn-outline" onClick={() => { setSubmitted(false); setForm({ name:"",phone:"",email:"",business:"",location:"",service:"",budget:"",message:"" }); }}>
                  Send Another Enquiry
                </button>
              </div>
            ) : (
              <div className="contact__form card">
                <h3 className="form-card-title">Send Enquiry</h3>
                <p className="form-card-sub">Fill the form below — we'll respond within 24 hours</p>
                <form onSubmit={handleSubmit}>
                  <div className="form-row">
                    <div className="form-group">
                      <label className="form-label">Your Name *</label>
                      <input required className="form-control" placeholder="Full name" value={form.name} onChange={set("name")}/>
                    </div>
                    <div className="form-group">
                      <label className="form-label">Phone Number *</label>
                      <input required className="form-control" placeholder="Mobile / WhatsApp" value={form.phone} onChange={set("phone")}/>
                    </div>
                  </div>
                  <div className="form-row">
                    <div className="form-group">
                      <label className="form-label">Email Address</label>
                      <input className="form-control" type="email" placeholder="your@email.com" value={form.email} onChange={set("email")}/>
                    </div>
                    <div className="form-group">
                      <label className="form-label">Business Name *</label>
                      <input required className="form-control" placeholder="Your business / company" value={form.business} onChange={set("business")}/>
                    </div>
                  </div>
                  <div className="form-row">
                    <div className="form-group">
                      <label className="form-label">Location *</label>
                      <input required className="form-control" placeholder="City / Town" value={form.location} onChange={set("location")}/>
                    </div>
                    <div className="form-group">
                      <label className="form-label">Service Required *</label>
                      <select required className="form-control" value={form.service} onChange={set("service")}>
                        <option value="">Select a service</option>
                        {serviceOptions.map((s, i) => <option key={i} value={s}>{s}</option>)}
                      </select>
                    </div>
                  </div>
                  <div className="form-group">
                    <label className="form-label">Budget Range</label>
                    <select className="form-control" value={form.budget} onChange={set("budget")}>
                      <option value="">Select budget range</option>
                      <option>Below ₹10,000</option>
                      <option>₹10,000 – ₹25,000</option>
                      <option>₹25,000 – ₹50,000</option>
                      <option>₹50,000 – ₹1,00,000</option>
                      <option>Above ₹1,00,000</option>
                    </select>
                  </div>
                  <div className="form-group">
                    <label className="form-label">Message / Requirements</label>
                    <textarea className="form-control" rows="4" placeholder="Describe your requirement in detail..." value={form.message} onChange={set("message")}/>
                  </div>
                  <button type="submit" className="btn btn-gold submit-btn" disabled={loading}>
                    {loading ? "Sending..." : "Send Enquiry"}
                    {!loading && (
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                        <path d="M5 12h14M12 5l7 7-7 7"/>
                      </svg>
                    )}
                  </button>
                </form>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
