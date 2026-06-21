// Hide loader when page is fully loaded - 30 second loader
window.addEventListener('load', () => {
  const loader = document.getElementById('loader');
  setTimeout(() => {
    loader.style.opacity = '0';
    loader.style.visibility = 'hidden';
  }, 30000);
});

// Mobile Hamburger Menu
const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('navLinks');

hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('active');
  navLinks.classList.toggle('active');
});

// Close menu when a link is clicked
document.querySelectorAll('.nav-link').forEach(link => {
  link.addEventListener('click', () => {
    hamburger.classList.remove('active');
    navLinks.classList.remove('active');
  });
});

// Close menu when clicking outside
document.addEventListener('click', (e) => {
  if (!e.target.closest('.navbar')) {
    hamburger.classList.remove('active');
    navLinks.classList.remove('active');
  }
});

// Live status removed

window.addEventListener("scroll", () => {
  const scrollTop = document.documentElement.scrollTop;
  const scrollHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
  const progress = (scrollTop / scrollHeight) * 100;
  document.getElementById("progress").style.width = progress + "%";
});

document.addEventListener("DOMContentLoaded", () => {
  gsap.from(".greeting", {
    y: 20,
    opacity: 0,
    duration: 0.6,
    ease: "power2.out"
  });

  gsap.from(".title", {
    y: 40,
    opacity: 0,
    duration: 0.8,
    delay: 0.1,
    ease: "power3.out"
  });

  gsap.from(".subtitle", {
    y: 30,
    opacity: 0,
    duration: 0.8,
    delay: 0.2,
    ease: "power2.out"
  });

  gsap.from(".description", {
    y: 25,
    opacity: 0,
    duration: 0.8,
    delay: 0.3,
    ease: "power2.out"
  });

  gsap.from(".cta-buttons", {
    y: 20,
    opacity: 0,
    duration: 0.8,
    delay: 0.4,
    ease: "power2.out"
  });

  gsap.from(".profile-card", {
    scale: 0.9,
    opacity: 0,
    duration: 0.8,
    delay: 0.5,
    ease: "back.out(1.2)"
  });

  const observerOptions = {
    threshold: 0.1,
    rootMargin: "0px 0px -50px 0px"
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.animation = "fadeInUp 0.8s ease forwards";
        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);

  document.querySelectorAll(".social-card").forEach(card => {
    observer.observe(card);
  });

  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", function (e) {
      const href = this.getAttribute("href");
      if (href !== "#" && document.querySelector(href)) {
        e.preventDefault();
        const target = document.querySelector(href);
        target.scrollIntoView({ behavior: "smooth" });
      }
    });
  });
});
