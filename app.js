const slides = document.querySelectorAll('.slide');

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