import "./Footer.css";

export default function Footer({ setActivePage }) {
  const nav = (page) => { setActivePage(page); window.scrollTo({ top: 0, behavior: "smooth" }); };

  return (
    <footer className="footer">
      <div className="footer__top">
        <div className="container footer__grid">
          {/* BRAND */}
          <div className="footer__brand">
            <div className="footer__logo" onClick={() => nav("home")}>
              <svg width="40" height="40" viewBox="0 0 40 40">
                <rect width="40" height="40" rx="8" fill="#0d1117" stroke="#c9a84c" strokeWidth="1.5"/>
                <text x="20" y="28" textAnchor="middle" fill="#c9a84c" fontSize="22" fontWeight="bold" fontFamily="Rajdhani">S</text>
              </svg>
              <div>
                <div className="footer__logo-name">SIVA TECH SOLUTIONS</div>
                <div className="footer__logo-tag">Your Trusted Technology Partner</div>
              </div>
            </div>
            <p className="footer__brand-desc">
             Delivering complete IT solutions for businesses with expert services in custom software development, website development, computer sales & service, CCTV surveillance, networking infrastructure & complete IT infrastructure Setup  and dedicated online technical support.
            </p>
            <div className="footer__contact-quick">
              <a href="tel:9489651231" className="footer__quick-item">📞 9489651231</a>
              <a href="tel:8754668130" className="footer__quick-item">📞 8754668130</a>
              <a href="mailto:sivatechsolution2020@gmail.com" className="footer__quick-item">✉️ sivatechsolution2020@gmail.com</a>
              <div className="footer__quick-item">📍 Padanthalumoodu, Kanyakumari District</div>
            </div>
          </div>

          {/* QUICK LINKS */}
          <div className="footer__links-col">
            <h4 className="footer__col-title">Quick Links</h4>
            <ul className="footer__links">
              {[
                { id: "home", label: "Home" },
                { id: "about", label: "About Us" },
                { id: "services", label: "Services" },
                { id: "products", label: "Products" },
                { id: "portfolio", label: "Portfolio" },
                { id: "testimonials", label: "Reviews" },
                { id: "contact", label: "Contact" },
              ].map(l => (
                <li key={l.id}><button className="footer__link" onClick={() => nav(l.id)}>{l.label}</button></li>
              ))}
            </ul>
          </div>

          {/* PRODUCTS */}
          <div className="footer__links-col">
            <h4 className="footer__col-title">Software Products</h4>
            <ul className="footer__links">
              {[
                "Gold Finance Pro",
                "MediLab Pro",
                "HospitalMate Pro",
                "MediPharmacy",
                "GST Billing Software",
                "ShopMate POS",
                "TradeShop Pro",
                "MediWholesale Pro",
              ].map((p, i) => (
                <li key={i}><button className="footer__link" onClick={() => nav("products")}>{p}</button></li>
              ))}
            </ul>
          </div>

          {/* SERVICES */}
          <div className="footer__links-col">
            <h4 className="footer__col-title">IT Services</h4>
            <ul className="footer__links">
              {[
                "Software Development",
                "Web Development",
                "CCTV Installation",
                "Networking Setup",
                "Biometric Systems",
                "Computer Sales & Repair",
                "IT Consulting",
                "AMC / Support",
              ].map((s, i) => (
                <li key={i}><button className="footer__link" onClick={() => nav("services")}>{s}</button></li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      <div className="footer__bottom">
        <div className="container footer__bottom-inner">
          <p className="footer__copy">© {new Date().getFullYear()} Siva Tech Solutions. All Rights Reserved. | Padanthalumoodu, Kanyakumari, Tamil Nadu</p>
          <p className="footer__dev">Designed & Developed by <span>Siva Tech Solutions</span></p>
        </div>
      </div>
    </footer>
  );
}
