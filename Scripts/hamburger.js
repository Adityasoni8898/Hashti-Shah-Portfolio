const hamburger = document.querySelector(".hamburger");
const nav_links = document.querySelector(".nav_links");

hamburger.addEventListener("click", ()=>{
  hamburger.classList.toggle("active");
  nav_links.classList.toggle("active");
})


document.querySelectorAll(".nav_links").forEach(n => n.addEventListener("click", () => {
  hamburger.classList.remove("active");
  nav_links.classList.remove("active");
}))