// slider.js: hero slider logic
document.addEventListener("DOMContentLoaded", function() {
	const slider = document.querySelector(".hero-slider");
	const slides = document.querySelectorAll(".hero-slider .slide");
	const prevBtn = document.querySelector(".slider-controls .prev");
	const nextBtn = document.querySelector(".slider-controls .next");
	let currentIndex = 0;

	function showSlide(index) {
	slides.forEach((slide, i) => {
	slide.style.display = i === index ? "block" : "none";
	});
	}

	function nextSlide() {
	currentIndex = (currentIndex + 1) % slides.length;
	showSlide(currentIndex);
	}

	function prevSlide() {
	currentIndex = (currentIndex - 1 + slides.length) % slides.length;
	showSlide(currentIndex);
	}

	if (slides.length > 0) {
	showSlide(currentIndex);
	nextBtn.addEventListener("click", nextSlide);
	prevBtn.addEventListener("click", prevSlide);
	setInterval(nextSlide, 6000);
	}
});
// slider.js: hero slider logic
