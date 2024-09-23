// Definir a duração inicial em segundos (72 horas = 72 * 60 * 60)
let timeInSeconds = 72 * 60 * 60;

// Função para formatar o tempo como hh:mm:ss
function formatTime(seconds) {
    const hours = Math.floor(seconds / 3600);
    const minutes = Math.floor((seconds % 3600) / 60);
    const secs = seconds % 60;
    return `${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}:${String(secs).padStart(2, '0')}`;
}

// Função que atualiza o timer
function updateTimer() {
    const timerElement = document.getElementById('timer');
    timerElement.innerHTML = formatTime(timeInSeconds);

    if (timeInSeconds > 0) {
        timeInSeconds--;
    } else {
        clearInterval(timerInterval); // Para o timer quando chegar a zero
    }
}

// Atualizar o timer a cada segundo
const timerInterval = setInterval(updateTimer, 1000);

// Inicializar o timer
updateTimer();
