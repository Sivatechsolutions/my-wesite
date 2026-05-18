# Siva Tech Solutions - Company Website
**React + Laravel + MySQL | Dark Modern Theme**

---

## 📁 Project Structure

```
sivatech/
├── frontend/              ← React (Vite) Application
│   ├── src/
│   │   ├── App.jsx        ← Main router & layout
│   │   ├── main.jsx       ← Entry point
│   │   ├── assets/
│   │   │   └── global.css ← Global dark theme styles
│   │   ├── components/
│   │   │   ├── Navbar.jsx / Navbar.css
│   │   │   └── Footer.jsx / Footer.css
│   │   └── pages/
│   │       ├── Hero.jsx / Hero.css
│   │       ├── About.jsx / About.css
│   │       ├── Services.jsx / Services.css
│   │       ├── Products.jsx / Products.css   ← With Enquiry Modal
│   │       ├── Portfolio.jsx / Portfolio.css
│   │       ├── Testimonials.jsx / Testimonials.css
│   │       └── Contact.jsx / Contact.css     ← Full enquiry form
│   ├── index.html
│   ├── package.json
│   └── vite.config.js
│
└── backend/               ← Laravel API Backend
    ├── routes/
    │   └── api.php        ← POST /api/enquiry, POST /api/contact
    ├── controllers/
    │   ├── EnquiryController.php
    │   └── ContactController.php
    ├── models/
    │   └── Enquiry.php
    └── database.sql       ← MySQL schema (run this first!)
```

---

## 🚀 Setup Instructions

### Step 1: Database Setup
```sql
-- Run in phpMyAdmin or MySQL terminal:
SOURCE database.sql;
```

### Step 2: Laravel Backend Setup
```bash
# In your Laravel project root (Hostinger VPS):
composer install
cp .env.example .env

# Edit .env:
DB_DATABASE=sivatech_website
DB_USERNAME=your_db_user
DB_PASSWORD=your_db_password
APP_URL=https://sivatech.in

php artisan key:generate
php artisan migrate  # OR use database.sql directly

# Copy controller files to app/Http/Controllers/
# Copy model files to app/Models/
# Replace routes/api.php with our api.php
```

### Step 3: React Frontend Setup
```bash
cd frontend
npm install
npm run dev          # Development (localhost:5173)
npm run build        # Production build → ../backend/public/app/
```

### Step 4: Hostinger VPS Deployment
```bash
# Upload frontend/dist to public_html/
# Or configure Nginx to serve React build + proxy /api to Laravel

# Nginx config example:
# location / { try_files $uri $uri/ /index.html; }
# location /api { proxy_pass http://127.0.0.1:8000; }
```

---

## 🎨 Pages & Features

| Page | Features |
|------|----------|
| **Hero** | Animated stats card, service highlights, CTA buttons |
| **About** | Founder profile, company values, milestone timeline |
| **Services** | 8 service cards with features & pricing, enquiry CTA |
| **Products** | 8 software products, filter by category, **enquiry modal per product** |
| **Portfolio** | 8 case studies with status badges, tech stack |
| **Testimonials** | 6 client reviews, trust factors section |
| **Contact** | Full enquiry form with service selector, WhatsApp link |
| **Footer** | Quick links, product links, service links, contact info |

---

## 🎨 Design System

| Token | Value |
|-------|-------|
| Background | `#080c10` (near black) |
| Card | `#111827` |
| Gold | `#c9a84c` |
| Cyan accent | `#00d4ff` |
| Font H | `Rajdhani` |
| Font Body | `Exo 2` |
| Font Mono | `JetBrains Mono` |

---

## 📞 Business Details
- **Owner:** R. Siva Prakash, M.Sc Software Engineering
- **Company:** Siva Tech Solutions
- **Location:** Padanthalumoodu, Kanyakumari District, Tamil Nadu
- **Phone:** 9489651231 / 8754668130
- **Email:** sivatechsolution2020@gmail.com
- **Domain:** sivatech.in

---

## 🔧 Customize

1. **Update branding** → `src/components/Navbar.jsx` (logo)
2. **Update products** → `src/pages/Products.jsx` (products array)
3. **Update testimonials** → `src/pages/Testimonials.jsx`
4. **Change colors** → `src/assets/global.css` (CSS variables)
5. **Add WhatsApp API** → `backend/controllers/ContactController.php`
6. **Add email** → `backend/controllers/EnquiryController.php` (uncomment Mail line)
