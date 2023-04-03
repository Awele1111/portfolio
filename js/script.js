
var menuIcon = document.querySelector('#menu-icon');
var navbar = document.querySelector('.navbar');
var sections = document.querySelectorAll('section');
var navLinks = document.querySelectorAll('header nav a');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
};

window.onscroll = () => {
    sections.forEach(sec => {
        var top = window.scrollY;
        var offset = sec.offsetTop - 150;
        var height = sec.offsetHeight;
        var id = sec.getAttribute('id');

        if (top >= offset && top < offset + height) {
            navLinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector("header nav a[href*='" + id + "']").classList.add('active');
            });
        }
    });

    var header = document.querySelector('header');

    header.classList.toggle('sticky', window.scrollY > 100);

    menuIcon.classList.remove('bx-x');
    navbar.classList.remove('active');
};

ScrollReveal({
    reset: true,
    distance: '100px',
    duration: 2000,
    delay: 150
});

ScrollReveal().reveal('.home-info, .header', {origin: 'top'});
ScrollReveal().reveal('.home-img, .portfolio-box, .contact form', {origin: 'bottom'});
ScrollReveal().reveal('.home-info h1, .about-img', {origin: 'left'});
ScrollReveal().reveal('.home-info p, .about-info', {origin: 'right'});
