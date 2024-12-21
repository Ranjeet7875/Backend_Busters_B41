function toggleMenu() {
    const menuItems = document.querySelector('.menu-items');
    menuItems.classList.toggle('active');
}

let currentIndex = 0;

function moveSlide(direction) {
const carouselInner = document.querySelector('.carousel-inner');
const items = document.querySelectorAll('.carousel-inner .item');
const totalItems = items.length;

currentIndex = (currentIndex + direction + totalItems) % totalItems;

carouselInner.style.transform = `translateX(-${currentIndex * 100 / totalItems}%)`;
}


let currentSlideIndex = 0;

function navigateSlide(direction) {
const carouselContent = document.querySelector('.carousel-content');
const elements = document.querySelectorAll('.carousel-content .carousel-element');
const totalElements = elements.length;

currentSlideIndex = (currentSlideIndex + direction + totalElements) % totalElements;

carouselContent.style.transform = `translateX(-${currentSlideIndex * 100 / totalElements}%)`;
}

let currentSlideIndexx = 0;

function navigateSlide(direction) {
const carouselContent = document.querySelector('.carousel-content');
const elements = document.querySelectorAll('.carousel-content .carousel-element');
const totalElements = elements.length;

currentSlideIndexx = (currentSlideIndexx + direction + totalElements) % totalElements;

carouselContent.style.transform = `translateX(-${currentSlideIndexx * 100 / totalElements}%)`;
}

let customCurrentIndex = 0;

function moveCustomSlide(direction) {
const carouselInner = document.querySelector('.custom-carousel-inner');
const items = document.querySelectorAll('.custom-carousel-inner .custom-carousel-item');
const totalItems = items.length;

customCurrentIndex = (customCurrentIndex + direction + totalItems) % totalItems;

carouselInner.style.transform = `translateX(-${customCurrentIndex * 100 / totalItems}%)`;

}