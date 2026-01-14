// Loader
window.addEventListener("load", () => {
  setTimeout(() => {
    document.getElementById("loader").style.display = "none";
    document.getElementById("app").classList.remove("hidden");
  }, 2000);
});

// Mobile Menu Toggle
function toggleMenu() {
  const menu = document.getElementById("mobileMenu");
  const humburger = document.getElementById("humburger");
  
  humburger.innerHTML = menu.style.right === "0px" ? "☰" : "✖";
  menu.style.right = menu.style.right === "0px" ? "-100%" : "0px";
}

// Close mobile menu on link click (optional enhancement)
document.querySelectorAll('#mobileMenu a').forEach(link => {
  link.addEventListener('click', () => {
    toggleMenu(); // Reuse toggle to close
  });
});

// Translations
const translations = {
  en: {
    hero_title: "Connecting Patients to Care, Support, and Hope",
    hero_subtitle:
      "KOGOMA Health Solution provides patient support, counselling, referrals, and access to essential medical services  all in one secure platform.",
    get_started: "Get Started",

    service1_title: "Patient Enrollment & Support",
    service1_desc:
      "Register patients, request support, and track assistance efficiently.",

    service2_title: "Counselling Services",
    service2_desc:
      "Professional counselling for students, youths, teenagers, and schools  including virtual sessions.",

    service3_title: "Referral Services",
    service3_desc:
      "Organized referrals for ambulance, maternity, surgical, and cancer care.",

    service4_title: "Online Pharmacy",
    service4_desc:
      "Order verified medicines online from trusted pharmacies and professionals."
  },

  sw: {
    hero_title: "Kuunganisha Wagonjwa na Huduma, Msaada na Tumaini",
    hero_subtitle:
      "KOGOMA Health Solution hutoa usaidizi wa wagonjwa, ushauri nasaha, rufaa, na upatikanaji wa huduma muhimu za afya  yote kwa jukwaa moja salama.",
    get_started: "Anza Sasa",

    service1_title: "Usajili na Msaada wa Wagonjwa",
    service1_desc:
      "Sajili wagonjwa, omba msaada, na fuatilia huduma kwa ufanisi.",

    service2_title: "Huduma za Ushauri Nasaha",
    service2_desc:
      "Ushauri wa kitaalamu kwa wanafunzi, vijana, na shule ikiwemo huduma za mtandaoni.",

    service3_title: "Huduma za Rufaa",
    service3_desc:
      "Rufaa zilizopangwa kwa dharura, uzazi, upasuaji na huduma za saratani.",

    service4_title: "Famasia ya Mtandaoni",
    service4_desc:
      "Agiza dawa zilizothibitishwa kutoka kwa famasia na wataalamu wanaoaminika."
  }
};

function setLanguage(lang) {
  document.querySelectorAll("[data-i18n]").forEach(el => {
    const key = el.getAttribute("data-i18n");
    el.textContent = translations[lang][key];
  });
}

// Set default language (e.g., English)
setLanguage('en'); // Call this on load, or based on user preference

// Intersection Observer for Animations
const sections = document.querySelectorAll('section');
const observerOptions = {
  threshold: 0.1 // Trigger when 10% of the section is visible
};

const sectionObserver = new IntersectionObserver((entries, observer) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      observer.unobserve(entry.target); // Unobserve after animating to prevent re-triggering
    }
  });
}, observerOptions);

sections.forEach(section => {
  sectionObserver.observe(section);
});

// Smooth Scrolling for Anchor Links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const targetId = this.getAttribute('href').substring(1);
    const target = document.getElementById(targetId);
    if (target) {
      target.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  });
});