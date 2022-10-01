const hamburgerBtn = document.querySelector(".toggle-nav");

const navigation = document.querySelector(".nav-mobile");

hamburgerBtn.addEventListener("click", toggleNav)

function toggleNav() {
    hamburgerBtn.classList.toggle("active");
    navigation.classList.toggle("active");
}