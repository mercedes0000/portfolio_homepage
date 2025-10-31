let currentSlide = 0;
const slideInterval = 3000;
let intervalId;
let cardsToShow = 4;

function updateCardsToShow() {
    if (window.innerWidth >= 1024) {
        cardsToShow = 4;
    } else if (window.innerWidth >= 768) {
        cardsToShow = 3;
    } else {
        cardsToShow = 1;
    }
    resetSlidePosition();
}

function moveSlide(direction) {
    const slides = document.querySelectorAll('.product-card');
    const totalSlides = slides.length;

    currentSlide += direction;

    if (currentSlide < 0) {
        currentSlide = totalSlides - cardsToShow;
    } else if (currentSlide >= totalSlides - cardsToShow + 1) {
        currentSlide = 0;
    }

    const cardWidth = slides[0].offsetWidth;
    const offset = -currentSlide * cardWidth;

    document.querySelector('.card-container').style.transform = `translateX(${offset}px)`;
}

function startAutoSlide() {
    intervalId = setInterval(() => {
        moveSlide(1);
    }, slideInterval);
}

function stopAutoSlide() {
    clearInterval(intervalId);
}

function resetSlidePosition() {
    moveSlide(0);
}

window.onload = function() {
    updateCardsToShow();
    startAutoSlide();
};

window.addEventListener('resize', () => {
    updateCardsToShow();
});
