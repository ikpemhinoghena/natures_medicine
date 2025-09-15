// NAV toggle for mobile
const navToggle = document.querySelector(".nav-toggle");
const navMenu = document.querySelector("#primary-menu");
if (navToggle && navMenu) {
	navToggle.addEventListener("click", () => {
	const expanded = navToggle.getAttribute("aria-expanded") === "true";
	navToggle.setAttribute("aria-expanded", !expanded);
	navMenu.classList.toggle("open");
	});
}
// YEAR in footer
document.getElementById("year").textContent = new Date().getFullYear();
// SLIDER logic
const slider = document.querySelector(".hero-slider");
const slides = document.querySelectorAll(".hero-slider .slide");
const prevBtn = document.querySelector(".slider-controls .prev");
const nextBtn = document.querySelector(".slider-controls .next");
let currentIndex = 0;

function updateSlider() {
	slider.style.transform = `translateX(-${currentIndex * 100}%)`;
}

if (slides.length > 0) {
	nextBtn.addEventListener("click", () => {
	currentIndex = (currentIndex + 1) % slides.length;
	updateSlider();
	});
	prevBtn.addEventListener("click", () => {
	currentIndex = (currentIndex - 1 + slides.length) % slides.length;
	updateSlider();
	});
	setInterval(() => {
	currentIndex = (currentIndex + 1) % slides.length;
	updateSlider();
	}, 6000);
}
// WhatsApp integration
const whatsappBtns = document.querySelectorAll("[data-whatsapp-message]");
const WA_NUMBER = "{{WHATSAPP_NUMBER}}"; // replace with your number

whatsappBtns.forEach(btn => {
	btn.addEventListener("click", () => {
	const message = encodeURIComponent(btn.dataset.whatsappMessage);
	window.open(`https://wa.me/${WA_NUMBER}?text=${message}`, "_blank");
	});
});
