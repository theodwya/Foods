const icons = document.querySelectorAll('.main-section-icons i');
let currentIndex = 0;

setInterval(() => {
    icons[currentIndex].classList.remove('change');

    // Move to the next index, looping back to 0 if at the end
    currentIndex = (currentIndex + 1) % icons.length;

    icons[currentIndex].classList.add('change');
}, 1000);

