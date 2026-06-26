==========================================================
  SAGHAS BRIDAL MAKEUP AESTHETIC — LUXURY BRIDAL WEBSITE
  Your Beauty, Our Passion
==========================================================

A fully responsive, production-ready luxury bridal studio
website built with pure HTML, CSS and JavaScript.
No frameworks. No build step. Just deploy.


----------------------------------------------------------
1. FOLDER STRUCTURE
----------------------------------------------------------

Saghas-Bridal-Website/
├── index.html          (main page — all sections)
├── css/
│   └── style.css       (all styling)
├── js/
│   └── script.js       (all interactivity)
└── README.txt          (this file)

Keep this exact structure. The HTML links to
"css/style.css" and "js/script.js" using relative paths.


----------------------------------------------------------
2. RUN LOCALLY
----------------------------------------------------------

Option A (simplest):
  Double-click index.html to open it in your browser.

Option B (recommended — needed if you want the form's
AJAX behaviour to behave exactly like production):
  Use a tiny local server, e.g.
    - VS Code "Live Server" extension, or
    - Python:  python3 -m http.server  then open
      http://localhost:8000


----------------------------------------------------------
3. DEPLOY TO NETLIFY
----------------------------------------------------------

METHOD 1 — Drag & Drop (fastest):
  1. Go to https://app.netlify.com/drop
  2. Drag the ENTIRE "Saghas-Bridal-Website" folder
     onto the page.
  3. Done — your site is live.

METHOD 2 — Git + Continuous Deploy:
  1. Push this folder to a GitHub/GitLab repo.
  2. In Netlify: "Add new site" > "Import from Git".
  3. Build command: (leave empty)
     Publish directory: Saghas-Bridal-Website
     (or "." if the files are at the repo root)
  4. Deploy.


----------------------------------------------------------
4. NETLIFY FORMS (APPOINTMENT BOOKING)
----------------------------------------------------------

The booking form is already fully configured for Netlify:
  - name="appointment"
  - data-netlify="true"
  - hidden <input name="form-name" value="appointment">
  - honeypot spam field (netlify-honeypot="bot-field")

Netlify auto-detects the form at deploy time. After your
FIRST deploy:
  1. Open your site dashboard on Netlify.
  2. Go to "Forms" in the left menu.
  3. You'll see the "appointment" form and all
     submissions there.

TO GET EMAIL NOTIFICATIONS:
  Netlify Dashboard > Forms > Form notifications >
  "Add notification" > "Email notification" and enter:
    saghasbridalmakeup@gmail.com

NOTE: Netlify Forms only work on the DEPLOYED Netlify
site — not when opening index.html locally. Locally the
form will show the success message but won't store data.


----------------------------------------------------------
5. WHAT'S INCLUDED
----------------------------------------------------------

  - Sticky glass navbar with mobile slide-in menu
  - Animated hero with counters & scroll indicator
  - Trust / statistics cards
  - Founder story section (B. Meenakshi)
  - Professional certification section
  - 8 elegant service cards
  - Filterable gallery (16 images) with lightbox
    (keyboard arrows + ESC supported)
  - Auto-sliding testimonial carousel with dots & arrows
  - Netlify appointment form with validation
  - FAQ accordion
  - Footer with all contact links
  - Floating WhatsApp + Instagram buttons
  - Back-to-top button
  - Scroll progress bar + scroll reveal animations
  - Full SEO: meta tags, Open Graph, Twitter, favicon
  - Accessibility: semantic HTML, alt text, ARIA,
    focus styles, reduced-motion support
  - Mobile-first responsive design


----------------------------------------------------------
6. CUSTOMISATION QUICK REFERENCE
----------------------------------------------------------

COLORS:
  Edit the variables at the top of css/style.css
  under ":root":
    --gold:   #D4AF37  (primary)
    --cream:  #F8F4ED  (secondary)
    --accent: #E8DCCF  (accent)
    --ink:    #2B2B2B  (text)

GALLERY IMAGES:
  Edit the "galleryImages" array at the top of
  js/script.js. Each item has: src, cat, title.
  Categories: bridal, reception, engagement, party.

TESTIMONIALS:
  Edit the "testimonials" array in js/script.js.

CONTACT INFO:
  Phone / WhatsApp / Email / Instagram / Maps links are
  in index.html (header CTA, booking section, footer,
  and floating buttons).


----------------------------------------------------------
7. BUSINESS DETAILS
----------------------------------------------------------

  Business : Saghas Bridal Makeup Aesthetic
  Founder  : B. Meenakshi
  Phone    : 7395929416
  WhatsApp : https://wa.me/917395929416
  Email    : saghasbridalmakeup@gmail.com
  Instagram: https://www.instagram.com/saghas_bridal_makeup_asthetic/
  Maps     : https://share.google/S2kBzUcEKlNcjKA6Z


==========================================================
  Designed with care. Ready to deploy. Enjoy!
==========================================================
