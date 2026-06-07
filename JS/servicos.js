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
