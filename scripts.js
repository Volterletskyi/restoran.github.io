const counters = document.querySelectorAll('.count');

// Функція для анімації лічильників
const animateCounters = () => {
    counters.forEach(counter => {
        const target = +counter.innerText;
        const step = Math.ceil(target / 100);

        const updateCount = () => {
            const value = +counter.innerText;
            if (value < target) {
                counter.innerText = Math.min(value + step, target);
                setTimeout(updateCount, 10);
            } else {
                counter.innerText = target;
            }
        };

        updateCount();
    });
};

// Визиваємо функцію для анімації лічильників після завантаження сторінки
window.addEventListener('load', () => {
    animateCounters();
});