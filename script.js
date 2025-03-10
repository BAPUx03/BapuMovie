// Initialize Swiper
const swiper = new Swiper('.movie-carousel', {
    loop: true,
    autoplay: {
        delay: 3000,
    },
    breakpoints: {
        640: { slidesPerView: 1 },
        768: { slidesPerView: 2 },
        1024: { slidesPerView: 3 }
    }
});

// Add animation on scroll
document.addEventListener('DOMContentLoaded', () => {
    const animateElements = document.querySelectorAll('.animate__animated');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.visibility = 'visible';
                entry.target.classList.add(entry.target.dataset.animation);
            }
        });
    });

    animateElements.forEach(el => {
        el.style.visibility = 'hidden';
        observer.observe(el);
    });
});
