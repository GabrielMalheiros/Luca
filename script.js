let currentIndex = 0;

const slides = document.querySelectorAll('.carousel-slide');
const totalSlides = slides.length;
const carouselTrack = document.querySelector('.carousel-track');

const nextButton = document.getElementById('next');
const prevButton = document.getElementById('prev');

function moveToNextSlide() {
    currentIndex = (currentIndex + 1) % totalSlides;
    updateCarouselPosition();
}

function moveToPrevSlide() {
    currentIndex = (currentIndex - 1 + totalSlides) % totalSlides;
    updateCarouselPosition();
}

function updateCarouselPosition() {
    const slideWidth = slides[0].clientWidth;
    carouselTrack.style.transform = `translateX(-${currentIndex * slideWidth}px)`;
}

nextButton.addEventListener('click', moveToNextSlide);
prevButton.addEventListener('click', moveToPrevSlide);
