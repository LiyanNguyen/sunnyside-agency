let hamburger = document.querySelector("#hamburger");
let mobileMenu = document.querySelector(".mobileMenu");

hamburger.onclick = () => {
	mobileMenu.classList.toggle("active");
}