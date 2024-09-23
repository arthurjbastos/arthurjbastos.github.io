const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

// Armazena a hora de término global no servidor
let endTime = null;
const DURATION = 72 * 60 * 60 * 1000; // 72 horas em milissegundos

// Definir o tempo de término na primeira execução
function initializeEndTime() {
    if (!endTime) {
        const now = Date.now();
        endTime = now + DURATION;
    }
}

initializeEndTime();

// API para retornar o tempo de término
app.get('/end-time', (req, res) => {
    res.json({ endTime });
});

// Iniciar o servidor
app.listen(PORT, () => {
    console.log(`Servidor rodando em http://localhost:${PORT}`);
});
