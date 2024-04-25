document.addEventListener("DOMContentLoaded", function() {
    let currentSlide = 0;
    const slides = document.querySelectorAll('.slide');
    const images = document.querySelectorAll('.navegation img');

    const showSlide = (index) => {
        slides.forEach(slide => slide.style.display = 'none');
        slides[index].style.display = 'block';
        images.forEach(img => img.classList.remove('active'));
        images[index].classList.add('active');
    };

    document.getElementById('left_arrow').addEventListener('click', () => {
        currentSlide = (currentSlide - 1 + slides.length) % slides.length;
        showSlide(currentSlide);
    });

    document.getElementById('right_arrow').addEventListener('click', () => {
        currentSlide = (currentSlide + 1) % slides.length;
        showSlide(currentSlide);
    });
    showSlide(currentSlide);
});

