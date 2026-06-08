const hamburger = document.querySelector('.hamburger');
const nav = document.querySelector('header nav');

if (hamburger && nav) {
    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('ativo');
        nav.classList.toggle('aberto');
    });

    // Fechar ao clicar em um link
    nav.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', () => {
            hamburger.classList.remove('ativo');
            nav.classList.remove('aberto');
        });
    });
}