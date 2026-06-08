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

    // Destaca a página atual no menu
    const links = document.querySelectorAll("nav a");

    links.forEach(link => {

        const paginaAtual = window.location.pathname.split("/").pop();

        if(link.getAttribute("href") === paginaAtual){
            link.classList.add("ativo");
        }

    });



    const observer = new IntersectionObserver((entries) => {

        entries.forEach(entry => {

            if(entry.isIntersecting){

                entry.target.classList.add("mostrar");

            }

        });

    }, {
        threshold: 0.2
    });

    elementos.forEach(elemento => {
        observer.observe(elemento);
    });

    // Efeito de zoom nas imagens
    const imagens = document.querySelectorAll(".foto");

    imagens.forEach(imagem => {

        imagem.addEventListener("mouseenter", () => {
            imagem.style.transform = "scale(1.05)";
        });

        imagem.addEventListener("mouseleave", () => {
            imagem.style.transform = "scale(1)";
        });

    });

});
