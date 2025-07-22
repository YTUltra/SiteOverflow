const cors = require('cors');
const express = require("express");
const mysql = require("mysql2");
const app = express();
const PORT = 3000;

app.use(cors());
app.use(express.json());

const conexao = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "Overflow#2022",
  database: "site_overflow"
});

function criarFormulario(nome, email, steam, funcao, rankCS, rankFI, rankGC) {
  const sql = "INSERT INTO formulario (nome, email, steam, funcao, rankCS, rankFI, rankGC) VALUES (?, ?, ?, ?, ?, ?, ?)";
  conexao.query(sql, [nome, email, steam, funcao, rankCS, rankFI, rankGC], (err) => {
    if (err) {
      console.error("Erro ao inserir dados:", err);
    } else {
      console.log("Dados inseridos com sucesso!");
    }
  });
}

app.post("/formulario", (req, res) => {
  const { nome, email, steam, funcao, rankCS, rankFI, rankGC } = req.body;

  if (!nome || !email || !steam || !funcao || !rankCS || !rankFI || !rankGC) {
    return res.status(400).json({ success: false, message: "Campos obrigatórios ausentes" });
  }

  const sql = "INSERT INTO formulario (nome, email, steam, funcao, rankCS, rankFI, rankGC) VALUES (?, ?, ?, ?, ?, ?, ?)";
  conexao.query(sql, [nome, email, steam, funcao, rankCS, rankFI, rankGC], (err, resultado) => {
    if (err) {
      console.error("Erro ao inserir dados:", err);
      return res.status(500).json({ success: false, message: "Erro no servidor" });
    }
    console.log("Dados inseridos com sucesso!");
    return res.status(201).json({ success: true, message: "Dados salvos com sucesso!" });
  });
});

app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
});