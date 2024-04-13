document.addEventListener("DOMContentLoaded", function() {
    const carousel = document.querySelector('.carousel');
    const carouselItems = document.querySelector('.carousel-items');
    const prevBtn = document.querySelector('.prev');
    const nextBtn = document.querySelector('.next');

    let currentIndex = 0;

    function showSlide(index) {
        const offset = -index * carousel.offsetWidth;
        carouselItems.style.transform = `translateX(${offset}px)`;
    }

    function prevSlide() {
        if (currentIndex > 0) {
            currentIndex--;
        } else {
            currentIndex = carouselItems.children.length - 1;
        }
        showSlide(currentIndex);
    }

    function nextSlide() {
        if (currentIndex < carouselItems.children.length - 1) {
            currentIndex++;
        } else {
            currentIndex = 0;
        }
        showSlide(currentIndex);
    }

    prevBtn.addEventListener('click', prevSlide);
    nextBtn.addEventListener('click', nextSlide);

    showSlide(currentIndex);
});