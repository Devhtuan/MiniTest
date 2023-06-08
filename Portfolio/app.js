// scroll sections  active link
let sections = document.querySelectorAll("section");
let navLinks = document.querySelectorAll("header nav a");
window.onscroll = () => {
  sections.forEach((sec) => {
    let top = window.scrollY;
    let offset = sec.offsetTop;
    let height = sec.offsetHeight - 100;
    let id = sec.getAttribute("id");
    if (top >= offset && top < offset + height) {
      // navLinks.forEach((links) => {
      //   links.addEventListener("click", (e) => {
      //     document.querySelector("nav a.active").classList.remove("active");
      //     e.target.classList.add("active");
      //   });
      // });
      navLinks.forEach((links) => {
        links.classList.remove("active");
        document
          .querySelector("header nav a[href*=" + id + "]")
          .classList.add("active");
      });
    }
  });
  //Sticky header
  let header = document.querySelector("header");
  header.classList.toggle("sticky", window.scrollY > 100);

  //remove nav when click nav link
  menu.classList.remove("fa-xmark");
  navbar.classList.remove("active");
};

// toggle navbar

let menu = document.querySelector(".menu");
let navbar = document.querySelector(".navbar");

menu.addEventListener("click", () => {
  menu.classList.toggle("fa-xmark");
  navbar.classList.toggle("active");
});

//scroll reveal
ScrollReveal({
  // reset: true,
  distamce: "80px",
  duration: 1000,
  delay: 200,
});
ScrollReveal().reveal(".home-content, .heading", { origin: "top" });
ScrollReveal().reveal(
  ".home-img, .service-container, .portfolio-box, .contact form",
  { origin: "bottom" }
);
ScrollReveal().reveal(".home-content h1, .about-img", { origin: "left" });
ScrollReveal().reveal(".home-content p, .about-content", { origin: "right" });
