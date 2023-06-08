let left = document.querySelector(".left");
let right = document.querySelector(".right");
let listImg = document.querySelectorAll(".list-img img");
let wrapImg = document.querySelector(".wrap-img");
let currentIndex = 0;
let div = document.querySelectorAll(".list-img div");
function showImg(index) {
  //remove active
  div.forEach((item) => {
    item.classList.remove("active");
  });

  currentIndex = index;
  wrapImg.src = listImg[index].getAttribute("src");
  listImg[index].parentElement.classList.add("active");
}

listImg.forEach((imgElement, index) => {
  imgElement.addEventListener("click", (e) => {
    wrapImg.style.opacity = "0";
    setTimeout(() => {
      showImg(index);
      wrapImg.style.opacity = "1";
    }, 400);
  });
});
showImg(4);
left.addEventListener("click", (e) => {
  if (currentIndex == 0) {
    currentIndex = listImg.length - 1;
  } else {
    currentIndex--;
  }
  wrapImg.style.animation = "";
  setTimeout(() => {
    showImg(currentIndex);
    wrapImg.style.animation = "slideLeft 1s ease";
  }, 200);
});
right.addEventListener("click", (e) => {
  if (currentIndex == listImg.length - 1) {
    currentIndex = 0;
  } else {
    currentIndex++;
  }
  wrapImg.style.animation = "";
  setTimeout(() => {
    showImg(currentIndex);
    wrapImg.style.animation = "slideRight 1s ease";
  }, 200);
});
