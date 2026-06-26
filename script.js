/* =========================================================
   SAGHAS BRIDAL MAKEUP AESTHETIC
   Interactivity — script.js
   ========================================================= */
(function () {
  "use strict";

  /* ---------- DATA: GALLERY ---------- */
  const galleryImages = [
    { src: "https://res.cloudinary.com/dqxcyam1b/image/upload/f_auto,q_auto/c005c1fc-bf25-41c1-8ca2-e6bf3f45b297_g0lmuk", cat: "bridal",     title: "Bridal Elegance" },
    { src: "https://res.cloudinary.com/dqxcyam1b/image/upload/f_auto,q_auto/8848694c-586f-4199-83d7-83f66ba03896_dewow8", cat: "bridal",     title: "Radiant Bride" },
    { src: "https://res.cloudinary.com/dqxcyam1b/image/upload/f_auto,q_auto/663c7e5b-a5a3-4863-917e-dddbd44b2449_etgrl2", cat: "reception",  title: "Reception Glow" },
    { src: "https://res.cloudinary.com/dqxcyam1b/image/upload/f_auto,q_auto/2b0b4cab-0011-4cc2-9d22-31d3a26286f3_tzgybr", cat: "engagement", title: "Engagement Charm" },
    { src: "https://res.cloudinary.com/dqxcyam1b/image/upload/f_auto,q_auto/e288a7aa-575c-4b36-aff1-d7540a475cc8_nhs7p4", cat: "bridal",     title: "Timeless Bridal" },
    { src: "https://res.cloudinary.com/dqxcyam1b/image/upload/f_auto,q_auto/c58b0818-2ebd-4f11-a61b-a300df3ae32e_uojhwo", cat: "party",      title: "Party Glam" },
    { src: "https://res.cloudinary.com/dqxcyam1b/image/upload/f_auto,q_auto/e5f2d9ed-46eb-45d9-b149-e8173fd4b95e_kungvm", cat: "reception",  title: "Evening Beauty" },
    { src: "https://res.cloudinary.com/dqxcyam1b/image/upload/f_auto,q_auto/70cd84cd-659d-44e4-a863-cf817a971329_q7yavp", cat: "bridal",     title: "Bridal Perfection" },
    { src: "https://res.cloudinary.com/dqxcyam1b/image/upload/f_auto,q_auto/820ba333-bb89-4138-ae8c-949f48da106f_cw7ad4", cat: "engagement", title: "Soft Engagement" },
    { src: "https://res.cloudinary.com/dqxcyam1b/image/upload/f_auto,q_auto/6f59a88a-05e8-424e-bd32-37759e622752_rnolre", cat: "party",      title: "Festive Look" },
    { src: "https://res.cloudinary.com/dqxcyam1b/image/upload/f_auto,q_auto/81699d07-7404-4f2e-ad7d-5a7f054a9a8e_nmgalc", cat: "bridal",     title: "Classic Bride" },
    { src: "https://res.cloudinary.com/dqxcyam1b/image/upload/f_auto,q_auto/49e5d2e4-19b0-4529-8a6b-e9f4dfce74c4_wynzkr", cat: "reception",  title: "Reception Royalty" },
    { src: "https://res.cloudinary.com/dqxcyam1b/image/upload/f_auto,q_auto/3f8b7de0-87e7-41a0-947c-e5a584028b1e_fqlox9", cat: "engagement", title: "Engagement Bliss" },
    { src: "https://res.cloudinary.com/dqxcyam1b/image/upload/f_auto,q_auto/4e0f9f1d-5e27-4687-9532-42a0d07fff67_pz3aa0", cat: "party",      title: "Glamour Night" },
    { src: "https://res.cloudinary.com/dqxcyam1b/image/upload/f_auto,q_auto/d2c87874-775b-496d-8eac-e16424b96e08_xw8cxh", cat: "bridal",     title: "Bridal Grace" },
    { src: "https://res.cloudinary.com/dqxcyam1b/image/upload/f_auto,q_auto/09e5bd86-a6d0-49e7-bd80-9552ab8b2df3_me0xpp", cat: "reception",  title: "Luminous Reception" }
  ];

  /* ---------- DATA: TESTIMONIALS ---------- */
  const testimonials = [
    { text: "Meenakshi made me feel like the most beautiful bride. The makeup lasted the entire day and looked flawless in every photo!", name: "Priya R.", role: "Bride", stars: 5 },
    { text: "Absolutely loved my reception look. So professional, hygienic and personalized. Highly recommend Saghas Bridal!", name: "Anitha S.", role: "Reception", stars: 5 },
    { text: "The team was patient, kind and so talented. My engagement makeup was natural yet stunning. Thank you so much!", name: "Divya K.", role: "Engagement", stars: 5 },
    { text: "Best decision for my wedding. From saree draping to hair styling, everything was perfect. Truly five-star service.", name: "Lakshmi M.", role: "Bride", stars: 5 },
    { text: "I got so many compliments at the party. Clean, premium products and a wonderful experience from start to finish.", name: "Sneha V.", role: "Party Makeup", stars: 5 },
    { text: "Professional, warm and incredibly skilled. Meenakshi understood exactly what I wanted. I felt confident and gorgeous.", name: "Keerthana B.", role: "Bride", stars: 5 }
  ];

  /* =======================================================
     PRELOADER
     ======================================================= */
  window.addEventListener("load", function () {
    const pre = document.getElementById("preloader");
    if (pre) setTimeout(() => pre.classList.add("hidden"), 500);
  });

  /* =======================================================
     HEADER, SCROLL PROGRESS, BACK TO TOP
     ======================================================= */
  const header = document.getElementById("header");
  const scrollProgress = document.getElementById("scrollProgress");
  const backToTop = document.getElementById("backToTop");

  function onScroll() {
    const y = window.scrollY;
    if (header) header.classList.toggle("scrolled", y > 40);
    if (backToTop) backToTop.classList.toggle("show", y > 500);
    if (scrollProgress) {
      const h = document.documentElement.scrollHeight - window.innerHeight;
      scrollProgress.style.width = (h > 0 ? (y / h) * 100 : 0) + "%";
    }
    activateNavLink();
  }
  window.addEventListener("scroll", onScroll, { passive: true });

  if (backToTop) {
    backToTop.addEventListener("click", () =>
      window.scrollTo({ top: 0, behavior: "smooth" })
    );
  }

  /* =======================================================
     MOBILE NAV
     ======================================================= */
  const navToggle = document.getElementById("navToggle");
  const navMenu = document.getElementById("navMenu");

  function closeMenu() {
    if (!navMenu) return;
    navMenu.classList.remove("open");
    navToggle.classList.remove("active");
    navToggle.setAttribute("aria-expanded", "false");
  }
  if (navToggle && navMenu) {
    navToggle.addEventListener("click", () => {
      const open = navMenu.classList.toggle("open");
      navToggle.classList.toggle("active", open);
      navToggle.setAttribute("aria-expanded", String(open));
    });
    navMenu.querySelectorAll("a").forEach((a) =>
      a.addEventListener("click", closeMenu)
    );
  }
  document.addEventListener("click", (e) => {
    if (
      navMenu &&
      navMenu.classList.contains("open") &&
      !navMenu.contains(e.target) &&
      !navToggle.contains(e.target)
    ) {
      closeMenu();
    }
  });

  /* =======================================================
     ACTIVE NAV LINK ON SCROLL
     ======================================================= */
  const sections = document.querySelectorAll("section[id]");
  const navLinks = document.querySelectorAll(".nav-link");

  function activateNavLink() {
    let current = "";
    const offset = window.scrollY + 120;
    sections.forEach((sec) => {
      if (offset >= sec.offsetTop) current = sec.getAttribute("id");
    });
    navLinks.forEach((link) => {
      link.classList.toggle(
        "active",
        link.getAttribute("href") === "#" + current
      );
    });
  }

  /* =======================================================
     SCROLL REVEAL (IntersectionObserver)
     ======================================================= */
  const revealEls = document.querySelectorAll(".reveal");
  if ("IntersectionObserver" in window) {
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            io.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -40px 0px" }
    );
    revealEls.forEach((el, i) => {
      el.style.transitionDelay = (i % 4) * 0.08 + "s";
      io.observe(el);
    });
  } else {
    revealEls.forEach((el) => el.classList.add("visible"));
  }

  /* =======================================================
     COUNTER ANIMATION
     ======================================================= */
  function animateCount(el) {
    const target = parseInt(el.getAttribute("data-count"), 10);
    const suffix = el.getAttribute("data-suffix") || "";
    if (isNaN(target)) return;
    let start = 0;
    const duration = 1600;
    const startTime = performance.now();
    function tick(now) {
      const progress = Math.min((now - startTime) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      el.textContent = Math.floor(eased * target) + suffix;
      if (progress < 1) requestAnimationFrame(tick);
      else el.textContent = target + suffix;
    }
    requestAnimationFrame(tick);
  }
  const counters = document.querySelectorAll("[data-count]");
  if ("IntersectionObserver" in window) {
    const co = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            animateCount(entry.target);
            co.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.6 }
    );
    counters.forEach((c) => co.observe(c));
  } else {
    counters.forEach((c) =>
      (c.textContent = c.getAttribute("data-count") + (c.getAttribute("data-suffix") || ""))
    );
  }

  /* =======================================================
     GALLERY BUILD + FILTER
     ======================================================= */
  const galleryGrid = document.getElementById("galleryGrid");

  function buildGallery() {
    if (!galleryGrid) return;
    galleryGrid.innerHTML = "";
    galleryImages.forEach((img, index) => {
      const item = document.createElement("div");
      item.className = "gallery-item";
      item.setAttribute("data-cat", img.cat);
      item.setAttribute("data-index", index);
      item.setAttribute("role", "button");
      item.setAttribute("tabindex", "0");
      item.setAttribute("aria-label", "View " + img.title);
      item.innerHTML =
        '<img src="' + img.src + '" alt="' + img.title +
        ' — Saghas Bridal Makeup Aesthetic" loading="lazy" />';
      item.addEventListener("click", () => openLightbox(index));
      item.addEventListener("keydown", (e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          openLightbox(index);
        }
      });
      galleryGrid.appendChild(item);
    });
  }
  buildGallery();

  const filterBtns = document.querySelectorAll(".filter-btn");
  filterBtns.forEach((btn) => {
    btn.addEventListener("click", () => {
      filterBtns.forEach((b) => {
        b.classList.remove("active");
        b.setAttribute("aria-selected", "false");
      });
      btn.classList.add("active");
      btn.setAttribute("aria-selected", "true");
      const filter = btn.getAttribute("data-filter");
      document.querySelectorAll(".gallery-item").forEach((item) => {
        const show = filter === "all" || item.getAttribute("data-cat") === filter;
        item.classList.toggle("hide", !show);
        if (show) {
          item.style.animation = "none";
          void item.offsetWidth; /* reflow to restart animation */
          item.style.animation = "fadeUp 0.5s ease both";
        }
      });
    });
  });

  /* =======================================================
     LIGHTBOX
     ======================================================= */
  const lightbox = document.getElementById("lightbox");
  const lightboxImg = document.getElementById("lightboxImg");
  const lightboxCaption = document.getElementById("lightboxCaption");
  let currentIndex = 0;

  function visibleIndices() {
    const active = document.querySelector(".filter-btn.active");
    const filter = active ? active.getAttribute("data-filter") : "all";
    const list = [];
    galleryImages.forEach((img, i) => {
      if (filter === "all" || img.cat === filter) list.push(i);
    });
    return list;
  }

  function showImage(index) {
    const img = galleryImages[index];
    if (!img) return;
    lightboxImg.src = img.src;
    lightboxImg.alt = img.title + " — Saghas Bridal Makeup Aesthetic";
    lightboxCaption.textContent = img.title;
    currentIndex = index;
  }

  function openLightbox(index) {
    if (!lightbox) return;
    showImage(index);
    lightbox.classList.add("open");
    lightbox.setAttribute("aria-hidden", "false");
    document.body.style.overflow = "hidden";
  }
  function closeLightbox() {
    if (!lightbox) return;
    lightbox.classList.remove("open");
    lightbox.setAttribute("aria-hidden", "true");
    document.body.style.overflow = "";
  }
  function step(dir) {
    const list = visibleIndices();
    if (!list.length) return;
    let pos = list.indexOf(currentIndex);
    pos = (pos + dir + list.length) % list.length;
    showImage(list[pos]);
  }

  if (lightbox) {
    document.getElementById("lightboxClose").addEventListener("click", closeLightbox);
    document.getElementById("lightboxNext").addEventListener("click", () => step(1));
    document.getElementById("lightboxPrev").addEventListener("click", () => step(-1));
    lightbox.addEventListener("click", (e) => {
      if (e.target === lightbox) closeLightbox();
    });
    document.addEventListener("keydown", (e) => {
      if (!lightbox.classList.contains("open")) return;
      if (e.key === "Escape") closeLightbox();
      if (e.key === "ArrowRight") step(1);
      if (e.key === "ArrowLeft") step(-1);
    });
  }

  /* =======================================================
     TESTIMONIAL CAROUSEL
     ======================================================= */
  const track = document.getElementById("testimonialTrack");
  const dotsWrap = document.getElementById("testimonialDots");
  let testiIndex = 0;
  let testiTimer = null;

  function buildTestimonials() {
    if (!track) return;
    track.innerHTML = "";
    dotsWrap.innerHTML = "";
    testimonials.forEach((t, i) => {
      const slide = document.createElement("div");
      slide.className = "testimonial-slide";
      const stars = "★".repeat(t.stars) + "☆".repeat(5 - t.stars);
      slide.innerHTML =
        '<div class="testimonial-card">' +
        '<div class="testimonial-stars" aria-label="' + t.stars + ' out of 5 stars">' + stars + "</div>" +
        '<p class="testimonial-text">' + t.text + "</p>" +
        '<p class="testimonial-author">' + t.name + "</p>" +
        '<p class="testimonial-role">' + t.role + "</p>" +
        "</div>";
      track.appendChild(slide);

      const dot = document.createElement("button");
      dot.setAttribute("aria-label", "Go to review " + (i + 1));
      if (i === 0) dot.classList.add("active");
      dot.addEventListener("click", () => {
        goToTesti(i);
        restartAuto();
      });
      dotsWrap.appendChild(dot);
    });
  }

  function goToTesti(i) {
    if (!track) return;
    const total = testimonials.length;
    testiIndex = (i + total) % total;
    track.style.transform = "translateX(-" + testiIndex * 100 + "%)";
    dotsWrap.querySelectorAll("button").forEach((d, di) =>
      d.classList.toggle("active", di === testiIndex)
    );
  }
  function restartAuto() {
    clearInterval(testiTimer);
    testiTimer = setInterval(() => goToTesti(testiIndex + 1), 5000);
  }

  buildTestimonials();
  if (track) {
    document.getElementById("testiNext").addEventListener("click", () => {
      goToTesti(testiIndex + 1);
      restartAuto();
    });
    document.getElementById("testiPrev").addEventListener("click", () => {
      goToTesti(testiIndex - 1);
      restartAuto();
    });
    const carousel = document.querySelector(".testimonial-carousel");
    carousel.addEventListener("mouseenter", () => clearInterval(testiTimer));
    carousel.addEventListener("mouseleave", restartAuto);
    restartAuto();
  }

  /* =======================================================
     FAQ ACCORDION
     ======================================================= */
  const faqItems = document.querySelectorAll(".faq-item");
  faqItems.forEach((item) => {
    const q = item.querySelector(".faq-q");
    const a = item.querySelector(".faq-a");
    q.addEventListener("click", () => {
      const isOpen = item.classList.contains("active");
      faqItems.forEach((other) => {
        other.classList.remove("active");
        other.querySelector(".faq-q").setAttribute("aria-expanded", "false");
        other.querySelector(".faq-a").style.maxHeight = null;
      });
      if (!isOpen) {
        item.classList.add("active");
        q.setAttribute("aria-expanded", "true");
        a.style.maxHeight = a.scrollHeight + "px";
      }
    });
  });

  /* =======================================================
     BOOKING FORM — VALIDATION + NETLIFY SUBMIT
     ======================================================= */
  const form = document.getElementById("appointmentForm");
  const formSuccess = document.getElementById("formSuccess");

  

  if (form) {
    /* Prevent past dates on the date picker */
    const dateInput = document.getElementById("event-date");
    if (dateInput) {
      const today = new Date().toISOString().split("T")[0];
      dateInput.setAttribute("min", today);
    }

    form.addEventListener("submit", function (e) {
      
      /* Native HTML5 validation */
      if (!form.checkValidity()) {
        form.reportValidity();
        return;
      }

      const formData = new FormData(form);
      const data = {};
      formData.forEach((value, key) => (data[key] = value));

      const submitBtn = form.querySelector('button[type="submit"]');
      const originalText = submitBtn.textContent;
      submitBtn.disabled = true;
      submitBtn.textContent = "Sending...";

      
    });
  }

  /* Show success if redirected back with ?booked=true (non-AJAX fallback) */
  if (formSuccess && /[?&]booked=true/.test(window.location.search)) {
    formSuccess.classList.add("show");
    const target = document.getElementById("booking");
    if (target) target.scrollIntoView({ behavior: "smooth" });
  }

  /* =======================================================
     FOOTER YEAR
     ======================================================= */
  const yearEl = document.getElementById("year");
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  /* Run once on load to set initial states */
  onScroll();
})();
