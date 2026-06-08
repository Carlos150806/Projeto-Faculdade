// =============================================
//   BACKEND - Ney Alves Nova Força Team
//   Servidor Node.js com SQLite
//   Arquivo: backend/server.js
// =============================================
//
// INSTALAÇÃO:
//   1. Instale o Node.js (https://nodejs.org)
//   2. Na pasta 'backend', execute:
//        npm install
//   3. Inicie o servidor:
//        node server.js
//   4. O servidor rodará em http://localhost:3000
//
// =============================================

const express    = require('express');
const Database   = require('better-sqlite3');
const cors       = require('cors');
const path       = require('path');

const app  = express();
const PORT = 3000;

// ===== MIDDLEWARES =====
app.use(cors());
app.use(express.json());

// ===== BANCO DE DADOS =====
const db = new Database(path.join(__dirname, 'contatos.db'));

// Criar tabela se não existir
db.exec(`
    CREATE TABLE IF NOT EXISTS contatos (
        id        INTEGER PRIMARY KEY AUTOINCREMENT,
        nome      TEXT    NOT NULL,
        email     TEXT    NOT NULL,
        telefone  TEXT    NOT NULL,
        mensagem  TEXT,
        data_hora TEXT    NOT NULL DEFAULT (datetime('now', 'localtime'))
    )
`);

console.log('✅ Banco de dados pronto: contatos.db');

// ===== ROTA: RECEBER FORMULÁRIO =====
app.post('/contato', (req, res) => {
    const { nome, email, telefone, mensagem } = req.body;

    // Validação básica no servidor
    if (!nome || nome.trim().length < 3) {
        return res.status(400).json({ erro: 'Nome inválido.' });
    }

    const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email || !regexEmail.test(email.trim())) {
        return res.status(400).json({ erro: 'E-mail inválido.' });
    }

    const telefoneLimpo = (telefone || '').replace(/\D/g, '');
    if (telefoneLimpo.length < 10) {
        return res.status(400).json({ erro: 'Telefone inválido.' });
    }

    // Inserir no banco
    const stmt = db.prepare(`
        INSERT INTO contatos (nome, email, telefone, mensagem)
        VALUES (?, ?, ?, ?)
    `);

    const result = stmt.run(
        nome.trim(),
        email.trim().toLowerCase(),
        telefone.trim(),
        mensagem ? mensagem.trim() : null
    );

    console.log(`📩 Novo contato recebido: ${nome.trim()} <${email.trim()}> - ID ${result.lastInsertRowid}`);

    res.status(201).json({
        sucesso: true,
        mensagem: 'Contato registrado com sucesso!',
        id: result.lastInsertRowid
    });
});

// ===== ROTA: LISTAR CONTATOS (painel admin simples) =====
app.get('/admin/contatos', (req, res) => {
    const contatos = db.prepare('SELECT * FROM contatos ORDER BY id DESC').all();
    res.json(contatos);
});

// ===== ROTA: DELETAR CONTATO =====
app.delete('/admin/contatos/:id', (req, res) => {
    const { id } = req.params;
    const result = db.prepare('DELETE FROM contatos WHERE id = ?').run(id);
    if (result.changes === 0) {
        return res.status(404).json({ erro: 'Contato não encontrado.' });
    }
    res.json({ sucesso: true, mensagem: `Contato ${id} removido.` });
});

// ===== INICIAR SERVIDOR =====
app.listen(PORT, () => {
    console.log(`🚀 Servidor rodando em http://localhost:${PORT}`);
    console.log(`📋 Painel de contatos: http://localhost:${PORT}/admin/contatos`);
});
