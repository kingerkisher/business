document.addEventListener('DOMContentLoaded', function () {
    // Navbar color change on scroll
    window.addEventListener('scroll', function () {
        var navbar = document.querySelector('.navbar');
        if (window.scrollY > 50) {
            navbar.classList.remove('navbar-light', 'bg-light');
            navbar.classList.add('navbar-dark', 'bg-dark');
        } else {
            navbar.classList.remove('navbar-dark', 'bg-dark');
            navbar.classList.add('navbar-light', 'bg-light');
        }
    });

    // About section text transition on scroll
    window.addEventListener('scroll', function () {
        const aboutSection = document.querySelector('#about');
        const aboutText = document.querySelector('#about-text');
        const rect = aboutSection.getBoundingClientRect();

        if (rect.top <= window.innerHeight && rect.bottom >= 0) {
            aboutSection.classList.add('visible');
        } else {
            aboutSection.classList.remove('visible');
        }
    });
});
