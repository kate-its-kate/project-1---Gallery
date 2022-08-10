function activeSlide(active = 1) {
    const slides = document.querySelectorAll('.slide');

    slides[active].classList.add('active');

    slides.forEach(item => {
        item.addEventListener('click', () => {
            removeActiveClasses();
            item.classList.add('active');
        });
    });

    function removeActiveClasses() {
        slides.forEach(item => {
            item.classList.remove('active');
        });
    };
};



activeSlide();