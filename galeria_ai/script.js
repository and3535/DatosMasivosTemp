let currentIndex = 0;
const items = document.querySelectorAll('.gallery-item');

document.getElementById('prev').addEventListener('click', () => {
    items[currentIndex].style.transform = 'translateX(100%)';
    currentIndex = (currentIndex - 1 + items.length) % items.length;
    items[currentIndex].style.transform = 'translateX(0)';
});

document.getElementById('next').addEventListener('click', () => {
    items[currentIndex].style.transform = 'translateX(-100%)';
    currentIndex = (currentIndex + 1) % items.length;
    items[currentIndex].style.transform = 'translateX(0)';
});