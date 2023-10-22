const navbar = document.querySelector('.navbar');
const scrollOffset = 30; // Cambia este valor según tu preferencia

window.addEventListener('scroll', () => {
    if (window.pageYOffset > scrollOffset) {
        navbar.classList.remove('navbar-transparent');
        navbar.classList.add('navbar-scrolled');
    } else {
        navbar.classList.remove('navbar-scrolled');
        navbar.classList.add('navbar-transparent');
    }
});
