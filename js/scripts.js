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

const accordionItems = document.querySelectorAll('.accordion-item');

accordionItems.forEach((item) => {
    const header = item.querySelector('.accordion-header');
    const content = item.querySelector('.accordion-content');

    header.addEventListener('click', () => {
        if (content.classList.contains('active')) {
            // Si el contenido actual está abierto, ciérralo
            content.classList.remove('active');
        } else {
            // Si el contenido actual está cerrado, ciérralo y luego abre el actual
            closeAllAccordionItems();
            content.classList.add('active');
        }
    });
});

function closeAllAccordionItems() {
    accordionItems.forEach((item) => {
        const content = item.querySelector('.accordion-content');
        content.classList.remove('active');
    });
}

