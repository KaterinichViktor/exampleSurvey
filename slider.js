const sliderContent = document.querySelector('.slider-content');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');
const slideWidth = 600; // Width of each slide

let currentSlide = 0;

prevBtn.addEventListener('click', () => {
    if (currentSlide > 0) {
        currentSlide--;
        updateSlider();
    }
});

nextBtn.addEventListener('click', () => {
    if (currentSlide < 4) { // 5 slides, 0-based index
        currentSlide++;
        updateSlider();
    }
});

function updateSlider() {
    const offsetX = -currentSlide * slideWidth;
    sliderContent.style.transform = `translateX(${offsetX}px)`;
}
