let seconds = 0;
let interval = null;
const cronometro = document.getElementById('cronometro');
const startBtn = document.getElementById('startBtn');
const resetBtn = document.getElementById('resetBtn');

// Función para convertir segundos en formato hh:mm:ss
function formatTime(seconds) {
    let hrs = Math.floor(seconds / 3600);
    let mins = Math.floor((seconds % 3600) / 60);
    let secs = seconds % 60;
    
    if (hrs < 10) hrs = '0' + hrs;
    if (mins < 10) mins = '0' + mins;
    if (secs < 10) secs = '0' + secs;
    
    return `${hrs}:${mins}:${secs}`;
}

// Función para actualizar el cronómetro
function updateCronometro() {
    seconds++;
    cronometro.textContent = formatTime(seconds);
}

// Función para iniciar el cronómetro
function startCronometro() {
    if (!interval) {
        interval = setInterval(updateCronometro, 1000);
    }
}

// Función para reiniciar el cronómetro
function resetCronometro() {
    clearInterval(interval);
    interval = null;
    seconds = 0;
    cronometro.textContent = "00:00:00";
}

// Event listeners para los botones
startBtn.addEventListener('click', startCronometro);
resetBtn.addEventListener('click', resetCronometro);
