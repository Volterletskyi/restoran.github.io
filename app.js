document.addEventListener('DOMContentLoaded', function() {
    const burgerBtn = document.getElementById('burger');
    const menu = document.getElementById('menu');
    const menuBtn = document.getElementById('menu-btn');

    burgerBtn.addEventListener('click', function() {
        menu.classList.toggle('active');
    });

    menuBtn.addEventListener('click', function() {
        menu.classList.toggle('active');
    });
});

