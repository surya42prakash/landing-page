const toggle = document.getElementById("menu-toggle");
const navLinks = document.getElementById("nav-links");

if (toggle && navLinks) {
  toggle.addEventListener("click", () => navLinks.classList.toggle("active"));
  navLinks.querySelectorAll("a").forEach(a =>
    a.addEventListener("click", () => navLinks.classList.remove("active"))
  );
}

const revealEls = document.querySelectorAll(".reveal");
if (revealEls.length) {
  const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => { if (entry.isIntersecting) entry.target.classList.add("in"); });
  }, { threshold: 0.15 });
  revealEls.forEach(el => revealObserver.observe(el));
}

const bars = document.querySelectorAll(".bar-fill");
if (bars.length) {
  const barObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.width = entry.target.dataset.width + "%";
        barObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.3 });
  bars.forEach(b => barObserver.observe(b));
}

// typewriter effect
const twEl = document.getElementById("typewriter");
if (twEl) {
  const roles = ["AI & Data Science enthusiast", "C / C++ programmer", "Web developer in progress", "Lifelong learner"];
  let roleIdx = 0, charIdx = 0, deleting = false;

  function tick() {
    const current = roles[roleIdx];
    if (!deleting) {
      charIdx++;
      twEl.textContent = current.slice(0, charIdx);
      if (charIdx === current.length) { deleting = true; setTimeout(tick, 1400); return; }
    } else {
      charIdx--;
      twEl.textContent = current.slice(0, charIdx);
      if (charIdx === 0) { deleting = false; roleIdx = (roleIdx + 1) % roles.length; }
    }
    setTimeout(tick, deleting ? 40 : 70);
  }
  tick();
}
