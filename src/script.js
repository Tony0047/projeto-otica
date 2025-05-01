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

document.addEventListener('DOMContentLoaded', function() {
    const carrossel = document.querySelector('.carrossel');
    const items = document.querySelectorAll('.carrossel-item');
    const itemWidth = 150; // Largura de cada item
    const gap = 20; // Espaçamento entre itens
    let currentPosition = 0;
    let isAnimating = false;

    // Duplica os itens para criar um loop infinito
    const cloneItems = () => {
        items.forEach(item => {
            const clone = item.cloneNode(true);
            carrossel.appendChild(clone);
        });
    };

    cloneItems();

    const moveCarrossel = () => {
        if (isAnimating) return;
        isAnimating = true;

        currentPosition -= (itemWidth + gap);
        carrossel.style.transition = 'transform 0.5s ease-in-out';
        carrossel.style.transform = `translateX(${currentPosition}px)`;

        // Verifica se chegou ao final e reseta suavemente
        setTimeout(() => {
            if (currentPosition <= -(items.length * (itemWidth + gap))) {
                carrossel.style.transition = 'none';
                currentPosition = 0;
                carrossel.style.transform = `translateX(${currentPosition}px)`;
            }
            isAnimating = false;
        }, 500);
    };

    // Inicia o carrossel automático
    setInterval(moveCarrossel, 3000);
});