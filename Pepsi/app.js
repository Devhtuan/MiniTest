let mainImg = document.querySelector(".pepsi");
let listImg = document.querySelectorAll(".thumb img");
let sec = document.querySelector(".sec");
let currenIndex = 0;
let menu = document.querySelector(".toggleMenu");
let nav = document.querySelector(".nav");

function updateImg(index) {
  currenIndex = index;
  mainImg.src = listImg[index].getAttribute("src");
  switch (index) {
    case 0:
      sec.style.background = `#0062be`;
      break;
    case 1:
      sec.style.background = `#e60c2c`;
      break;
    case 2:
      sec.style.background = `#1e1e1e`;
  }
}

listImg.forEach((img, index) => {
  img.addEventListener("click", function () {
    updateImg(index);
  });
});

menu.addEventListener("click", () => {
  menu.classList.toggle("active");
  nav.classList.toggle("active");
});
