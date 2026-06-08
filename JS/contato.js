document.addEventListener("DOMContentLoaded", () => {

    // ===== MENU HAMBURGUER =====
    const hamburger = document.querySelector('.hamburger');
    const nav = document.querySelector('header nav');

    if (hamburger && nav) {
        hamburger.addEventListener('click', () => {
            hamburger.classList.toggle('ativo');
            nav.classList.toggle('aberto');
        });

        nav.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => {
                hamburger.classList.remove('ativo');
                nav.classList.remove('aberto');
            });
        });
    }

    // ===== CARROSSEL =====
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

    // ===== FORMULÁRIO COM ENVIO PARA API =====

    const formulario = document.querySelector("form");
    const feedback = document.getElementById("feedback");

    if (!formulario) return;

    formulario.addEventListener("submit", async (event) => {
        event.preventDefault();

        const nomeInput = document.querySelector('input[name="nome"]');
        const emailInput = document.querySelector('input[name="email"]');
        const telefoneInput = document.querySelector('input[name="telefone"]');
        const mensagemInput = document.querySelector('textarea[name="mensagem"]');

        const nome = nomeInput.value.trim();
        const email = emailInput.value.trim();
        const telefone = telefoneInput.value.trim();
        const mensagem = mensagemInput ? mensagemInput.value.trim() : "";

        // Validações
        if (nome.length < 3) {
            mostrarFeedback("Por favor, digite um nome válido.", "erro");
            nomeInput.focus();
            return;
        }

        const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!regexEmail.test(email)) {
            mostrarFeedback("Por favor, digite um e-mail válido.", "erro");
            emailInput.focus();
            return;
        }

        const telefoneLimpo = telefone.replace(/\D/g, "");
        if (telefoneLimpo.length < 10) {
            mostrarFeedback("Por favor, digite um telefone válido.", "erro");
            telefoneInput.focus();
            return;
        }

        const botao = formulario.querySelector("button[type='submit']");
        botao.textContent = "Enviando...";
        botao.disabled = true;

        try {
            const response = await fetch("http://localhost:3000/contato", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ nome, email, telefone, mensagem })
            });

            const resultado = await response.json();

            if (response.ok) {
                mostrarFeedback("✅ Mensagem enviada com sucesso! Entraremos em contato em breve.", "sucesso");
                formulario.reset();
            } else {
                mostrarFeedback("❌ Erro ao enviar: " + (resultado.erro || "tente novamente."), "erro");
            }
        } catch (err) {
            mostrarFeedback("❌ Não foi possível conectar ao servidor. Verifique se o backend está rodando.", "erro");
        }

        botao.textContent = "Enviar";
        botao.disabled = false;
    });

    function mostrarFeedback(mensagem, tipo) {
        if (!feedback) return;
        feedback.textContent = mensagem;
        feedback.className = tipo;
        feedback.scrollIntoView({ behavior: "smooth", block: "nearest" });
    }

});
