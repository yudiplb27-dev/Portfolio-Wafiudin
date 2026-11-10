
// SCROLL ANIMATION

const revealElements = document.querySelectorAll(
    '.about-content, .skills-container, .projects-container, .contact-container, .footer'
);

revealElements.forEach((element) => {
    element.classList.add('reveal');
});

const observer = new IntersectionObserver((entries) => {

    entries.forEach((entry) => {

        if (entry.isIntersecting) {

            entry.target.classList.add('active');

            observer.unobserve(entry.target);

        }

    });

}, {
    threshold: 0.15
});

revealElements.forEach((element) => {
    observer.observe(element);
});


// NAVBAR SCROLL

const navLinks = document.querySelectorAll('.nav-links a');

navLinks.forEach((link) => {

    link.addEventListener('click', () => {

        navLinks.forEach((item) => {
            item.classList.remove('active-link');
        });

        link.classList.add('active-link');

    });

});

console.log("Portfolio Wafiudin berhasil dijalankan!");

// MOBILE NAVIGATION

const menuToggle = document.getElementById('menu-toggle');
const navigation = document.querySelector('.nav-links');

menuToggle.addEventListener('click', () => {

    navigation.classList.toggle('show-menu');

    if (navigation.classList.contains('show-menu')) {
        menuToggle.textContent = '✕';
        menuToggle.setAttribute('aria-label', 'Tutup menu');
    } else {
        menuToggle.textContent = '☰';
        menuToggle.setAttribute('aria-label', 'Buka menu');
    }

});

// CLOSE MENU AFTER CLICKING A LINK

navLinks.forEach((link) => {

    link.addEventListener('click', () => {

        navigation.classList.remove('show-menu');
        menuToggle.textContent = '☰';
        menuToggle.setAttribute('aria-label', 'Buka menu');

    });

});
