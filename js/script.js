// activate the hamburger icon and mobile navigation
const hamb = document.querySelector(".hamb");
const nav = document.querySelector(".mobile-nav");

hamb.addEventListener("click", function () {
    this.classList.toggle("active")
    nav.classList.toggle("active");
});