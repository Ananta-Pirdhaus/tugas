// Toggle Class Active untuk hamburger menu
const navbarNav = document.querySelector(".navbar-nav");
// Hamburger di-klik akan active
document.querySelector("#hamburger-menu").onclick = () => {
  navbarNav.classList.toggle("active");
};

// Toogle class active search form
const searchForm = document.querySelector(".search-form");
const searchBox = document.querySelector("#search-box");

document.querySelector("#search-button").onclick = (e) => {
  searchForm.classList.toggle("active");
  searchBox.focus();
  e.preventDefault();
};

// Shopping Cart Button
const ShoppingButton = document.querySelector(".shopping-cart");
document.querySelector("#shopping-cart-button").onclick = (e) => {
ShoppingButton.classList.toggle("active");
ShoppingButton.focus();
e.preventDefault();
};


// membuat icon hilang jika diklik diluar tombol
const hm = document.querySelector("#hamburger-menu");
const sc = document.querySelector("#search-button");
const sb = document.querySelector("#shopping-cart-button");

document.addEventListener("click", function (e) {
  if (!sc.contains(e.target) && !searchForm.contains(e.target))
    searchForm.classList.remove("active");
});
document.addEventListener("click", function (e) {
  if (!hm.contains(e.target) && !navbarNav.contains(e.target))
    navbarNav.classList.remove("active");
});
document.addEventListener("click", function (e) {
  if (!sb.contains(e.target) && !ShoppingButton.contains(e.target))
    ShoppingButton.classList.remove("active");
});



