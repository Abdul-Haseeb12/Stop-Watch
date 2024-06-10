let timer;
let isRunning = false;
let time = 0;

const display = document.getElementById('display');
const playBtn = document.getElementById('play');
const pauseBtn = document.getElementById('pause');
const restartBtn = document.getElementById('restart');

function formatTime(time) {
    const hours = String(Math.floor(time / 3600)).padStart(2, '0');
    const minutes = String(Math.floor((time % 3600) / 60)).padStart(2, '0');
    const seconds = String(time % 60).padStart(2, '0');
    return `${hours}:${minutes}:${seconds}`;
}

function updateDisplay() {
    display.textContent = formatTime(time);
}

function startTimer() {
    timer = setInterval(() => {
        time++;
        updateDisplay();
    }, 1000);
    isRunning = true;
    playBtn.disabled = true;
    pauseBtn.disabled = false;
    restartBtn.disabled = false;
}

function pauseResumeTimer() {
    if (isRunning) {
        clearInterval(timer);
        isRunning = false;
        pauseBtn.textContent = 'Resume';
    } else {
        startTimer();
        pauseBtn.textContent = 'Pause';
    }
}

function restartTimer() {
    clearInterval(timer);
    time = 0;
    isRunning = false;
    updateDisplay();
    playBtn.disabled = false;
    pauseBtn.disabled = true;
    pauseBtn.textContent = 'Pause';
    restartBtn.disabled = true;
}

playBtn.addEventListener('click', startTimer);
pauseBtn.addEventListener('click', pauseResumeTimer);
restartBtn.addEventListener('click', restartTimer);

updateDisplay();
