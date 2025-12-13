document.addEventListener('DOMContentLoaded', () => {
    // Navigation: Highlight active button based on current page
    const currentPage = window.location.pathname.split('/').pop().replace('.html', '');
    const buttons = document.querySelectorAll('nav button');
    buttons.forEach(button => {
        if (button.getAttribute('data-page') === currentPage) {
            button.classList.add('active');
        }
        button.addEventListener('click', () => {
            const page = button.getAttribute('data-page');
            window.location.href = `${page}.html`;
        });
    });

    // Slider functionality for each slider (fade auto-play + dots)
    const sliders = document.querySelectorAll('.slider');
    sliders.forEach(slider => {
        const items = slider.querySelectorAll('.slider-item');
        const dotsContainer = slider.querySelector('.slider-dots');
        let currentIndex = 0;
        let interval;

        // Create dots
        items.forEach((_, index) => {
            const dot = document.createElement('div');
            dot.classList.add('slider-dot');
            if (index === 0) dot.classList.add('active');
            dot.addEventListener('click', () => {
                clearInterval(interval);
                showSlide(index);
                startAutoPlay();
            });
            dotsContainer.appendChild(dot);
        });

        const dots = slider.querySelectorAll('.slider-dot');

        function showSlide(index) {
            items.forEach(item => item.classList.remove('active'));
            dots.forEach(dot => dot.classList.remove('active'));
            items[index].classList.add('active');
            dots[index].classList.add('active');
            currentIndex = index;
        }

        function nextSlide() {
            currentIndex = (currentIndex + 1) % items.length;
            showSlide(currentIndex);
        }

        function startAutoPlay() {
            interval = setInterval(nextSlide, 3000);
        }

        startAutoPlay();
    });
});