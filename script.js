// Scroll progress bar
window.addEventListener("scroll", () => {
  const scrollTop = document.documentElement.scrollTop;
  const scrollHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
  const progress = (scrollTop / scrollHeight) * 100;

  document.getElementById("progress").style.width = progress + "%";
});

// GSAP animations (smooth premium feel)
gsap.from(".title", {
  y: 60,
  opacity: 0,
  duration: 1,
  ease: "power3.out"
});

gsap.from(".subtitle", {
  y: 30,
  opacity: 0,
  delay: 0.2
});

gsap.from(".hero-card", {
  scale: 0.85,
  opacity: 0,
  delay: 0.3,
  ease: "back.out(1.4)"
});

// particles
particlesJS("particles-js", {
  particles: {
    number: { value: 50 },
    color: { value: "#ffffff" },
    opacity: { value: 0.25 },
    size: { value: 2 },
    move: { enable: true, speed: 1 },
    line_linked: {
      enable: true,
      opacity: 0.08
    }
  }
});