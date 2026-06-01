document.addEventListener("DOMContentLoaded", () => {

const fotos = [
    "../Imagens/fotoContato.png",
    "../Imagens/fotoContato2.png",
    "../Imagens/fotoContato3.png"
];

let indice = 0;

const imagem = document.getElementById("fotoCarrossel");

function mostrarFoto() {
    if (imagem) {
        imagem.src = fotos[indice];
    }
}

window.proxima = function () {
    indice = (indice + 1) % fotos.length;
    mostrarFoto();
};

window.anterior = function () {
    indice = (indice - 1 + fotos.length) % fotos.length;
    mostrarFoto();
};

if (imagem) {
    setInterval(proxima, 5000);
}

const formulario = document.querySelector("form");

if (!formulario) return;

formulario.addEventListener("submit", (event) => {

    event.preventDefault();

    const nome = document.querySelector('input[type="text"]');
    const email = document.querySelector('input[type="email"]');
    const telefone = document.querySelector('input[type="tel"]');

    const valorNome = nome.value.trim();
    const valorEmail = email.value.trim();
    const valorTelefone = telefone.value.trim();

    if (valorNome.length < 3) {
        alert("Digite um nome válido.");
        nome.focus();
        return;
    }

    const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!regexEmail.test(valorEmail)) {
        alert("Digite um e-mail válido.");
        email.focus();
        return;
    }

    const telefoneLimpo = valorTelefone.replace(/\D/g, "");

    if (telefoneLimpo.length < 10) {
        alert("Digite um telefone válido.");
        telefone.focus();
        return;
    }

    alert(
        "Mensagem enviada com sucesso!\n\n" +
        "Nome: " + valorNome +
        "\nE-mail: " + valorEmail +
        "\nTelefone: " + valorTelefone
    );

    formulario.reset();

});

});
