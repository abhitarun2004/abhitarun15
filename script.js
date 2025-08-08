// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener("click", function (e) {
    const target = document.querySelector(this.getAttribute("href"));
    if (target) {
      e.preventDefault();
      target.scrollIntoView({ behavior: "smooth" });
    }
  });
});

// Dynamic background gradients
const hero = document.querySelector(".hero-section");
const colors = [
  "linear-gradient(135deg, #ff512f, #dd2476)",
  "linear-gradient(135deg, #00c6ff, #0072ff)",
  "linear-gradient(135deg, #0c0b0aff, #f1f8f9ff)",
  "linear-gradient(135deg, #6a11cb, #2575fc)",
  "linear-gradient(135deg, #11998e, #38ef7d)",
  "linear-gradient(135deg, #fc4a1a, #f7b733)",
  "linear-gradient(135deg, #ff416c, #ff4b2b)"
];
let colorIndex = 0;
setInterval(() => {
  hero.style.background = colors[colorIndex];
  colorIndex = (colorIndex + 1) % colors.length;
}, 5000);
