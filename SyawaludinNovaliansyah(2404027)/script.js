const navbar = document.getElementById("navbar");
const toTop = document.getElementById("toTop");

window.addEventListener("scroll", function() {
  navbar.classList.toggle("scrolled", window.scrollY > 50);
  toTop.style.display = window.scrollY > 200 ? "block" : "none";
});

toTop.addEventListener("click", function() {
  window.scrollTo({ top: 0, behavior: "smooth" });
});
