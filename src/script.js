let slideIndex = 0;
const slides = document.querySelectorAll(".slide");

function mostrarSlide(n) {
    slides.forEach((slide, index) => {
        slide.classList.remove("active");
    });
    slideIndex = (n + slides.length) % slides.length;
    slides[slideIndex].classList.add("active");
}

function mudarSlide(n) {
    mostrarSlide(slideIndex + n);
}

document.addEventListener("DOMContentLoaded", () => {
    mostrarSlide(slideIndex);
});