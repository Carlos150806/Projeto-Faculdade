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

document.addEventListener("DOMContentLoaded", () => {

    const cards = document.querySelectorAll(".card");

    // Estado inicial
    cards.forEach(card => {
        card.style.opacity = "0";
        card.style.transform = "translateY(50px)";
        card.style.transition = "all 0.8s ease";
    });

    const mostrarCards = () => {
        cards.forEach(card => {

            const topoCard = card.getBoundingClientRect().top;
            const alturaTela = window.innerHeight;

            if (topoCard < alturaTela - 100) {
                card.style.opacity = "1";
                card.style.transform = "translateY(0)";
            }
        });
    };

    mostrarCards();

    window.addEventListener("scroll", mostrarCards);

});
