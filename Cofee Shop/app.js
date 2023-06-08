let nav = document.querySelector(".nav");
let menuBtn = document.querySelector("#menu-btn");

let cartItemContainer = document.querySelector(".cart-items-container");
let cartItemList = document.querySelector(
  ".cart-items-container .cart-items-list"
);
let cardBtn = document.querySelector("#cart-btn");

let searchForm = document.querySelector(".search-form");
let searchBtn = document.querySelector("#search-btn");

let listBtn = document.querySelectorAll(".menu .menu-list button");
let listFood = document.querySelectorAll(".menu .box-container .box ");

let removeBtns = document.querySelectorAll(
  ".cart-items-list .cart-item .remove"
);
let listCartItems = cartItemList.querySelectorAll(".cart-item");

let addBtns = document.querySelectorAll(".box-container .box .btn");

//============================================================

//===============Remove items==================

listCartItems.forEach((listCartItem) => {
  removeBtns.forEach((removeBtn) => {
    removeBtn.addEventListener("click", (e) => {
      e.target.parentElement.remove();
    });
  });
});

//================Add items=================
addBtns.forEach((addBtn, index) => {
  addBtn.addEventListener("click", (e) => {
    let cartItem = e.target.parentElement;
    let cartImg = cartItem.querySelector("img").src;
    let cartName = cartItem.querySelector("h3").innerText;
    let cartPrice = cartItem.querySelector(".price").innerText;

    addItemCart(cartImg, cartName, cartPrice);
  });
});
function addItemCart(cartImg, cartName, cartPrice) {
  let addDiv = document.createElement(`div`);
  addDiv.className = "cart-item";
  addDiv.innerHTML = `
  <span class="fa-solid fa-xmark remove"></span>
  <img src=${cartImg} alt="" />
  <div class="content">
    <h3>${cartName}</h3>
    <div class="price">${cartPrice}</div>
  </div>
`;

  cartItemList.appendChild(addDiv);
  // total();
}
//=======================Total price=====================
// function total() {
//   let currentPrice = 0;
//   listFood.forEach((foodItem) => {
//     let price = foodItem.querySelector(".price").innerHTML;
//     currentPrice = currentPrice + price;
//     updatePrice = currentPrice.toLocaleString(`de-DE`);
//   });
//   let priceItem = document.querySelector(".total span");
//   priceItem.innerHTML = currentPrice;
// }

//=================Active menu================
menuBtn.addEventListener("click", () => {
  nav.classList.toggle("active");
  cartItemContainer.classList.remove("active");
  searchForm.classList.remove("active");
});

//===============Active cart==============
cardBtn.addEventListener("click", () => {
  cartItemContainer.classList.toggle("active");
  nav.classList.remove("active");
  searchForm.classList.remove("active");
});

//=============Active search================
searchBtn.addEventListener("click", () => {
  searchForm.classList.toggle("active");
  nav.classList.remove("active");
  cartItemContainer.classList.remove("active");
});
window.addEventListener("scroll", () => {
  nav.classList.remove("active");
  cartItemContainer.classList.remove("active");
  searchForm.classList.remove("active");
});

//===============Filter menu===============
listBtn.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    const typeBtn = e.target.getAttribute("type");

    //remove active
    document
      .querySelector(".menu .menu-list button.active")
      .classList.remove("active");
    //add active
    e.target.classList.add("active");

    listFood.forEach((food) => {
      if (typeBtn == "all" || typeBtn == food.getAttribute("type-box")) {
        food.classList.remove("hide");
      } else {
        food.classList.add("hide");
      }
    });
  });
});
