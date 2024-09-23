// URL do servidor que retorna o tempo de término
const serverURL = 'http://localhost:3000/end-time'; // Alterar para o URL real do servidor

let endTime;

// Função para buscar o tempo de término do servidor
async function fetchEndTime() {
    try {
        const response = await fetch(serverURL);
        const data = await response.json();
        endTime = data.endTime;
        startTimer();
    } catch (error) {
        console.error("Erro ao buscar o tempo de término do servidor:", error);
    }
}

// Função para calcular o tempo restante
function getTimeRemaining() {
    const now = new Date().getTime();
    const timeRemaining = endTime - now;
    return timeRemaining;
}

// Função para formatar o tempo como hh:mm:ss
function formatTime(milliseconds) {
    const totalSeconds = Math.floor(milliseconds / 1000);
    const hours = Math.floor(totalSeconds / 3600);
    const minutes = Math.floor((totalSeconds % 3600) / 60);
    const seconds = totalSeconds % 60;
    return `${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
}

// Função que atualiza o timer
function updateTimer() {
    const timeRemaining = getTimeRemaining();
    
    if (timeRemaining > 0) {
        const timerElement = document.getElementById('timer');
        timerElement.innerHTML = formatTime(timeRemaining);
    } else {
        const timerElement = document.getElementById('timer');
        timerElement.innerHTML = "00:00:00";
        clearInterval(timerInterval); // Para o timer quando chegar a zero
    }
}

// Função para iniciar o timer após buscar o tempo de término
function startTimer() {
    updateTimer();
    const timerInterval = setInterval(updateTimer, 1000);
}

// Buscar o tempo de término do servidor ao carregar a página
fetchEndTime();
