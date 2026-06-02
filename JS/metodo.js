document.addEventListener("DOMContentLoaded", () => {

    const form = document.querySelector("form");

    form.addEventListener("submit", (e) => {
        e.preventDefault();

        const nome = form.querySelector('input[type="text"]').value.trim();
        const email = form.querySelector('input[type="email"]').value.trim();
        const telefone = form.querySelector('input[type="tel"]').value.trim();

        if (nome === "" || email === "" || telefone === "") {
            alert("Preencha todos os campos.");
            return;
        }

        const emailValido = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (!emailValido.test(email)) {
            alert("Digite um e-mail válido.");
            return;
        }

        alert(
            `Mensagem enviada com sucesso!\n\nNome: ${nome}\nE-mail: ${email}\nTelefone: ${telefone}`
        );

        form.reset();
    });

});
