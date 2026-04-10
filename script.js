// Fade in effect for sections, adds a nice touch
const elements = document.querySelectorAll(".fade-in");

function showOnScroll() {
  const triggerBottom = window.innerHeight * 0.85;

  elements.forEach(el => {
    const boxTop = el.getBoundingClientRect().top;

    if (boxTop < triggerBottom) {
      el.classList.add("visible");
    }
  });
}

window.addEventListener("scroll", showOnScroll);
showOnScroll();

// Smooth scrolling for hero button, in my opinion works really nicely
document.querySelector(".hero-btn").addEventListener("click", () => {
  window.scrollTo({
    top: window.innerHeight,
    behavior: "smooth"
  });
});