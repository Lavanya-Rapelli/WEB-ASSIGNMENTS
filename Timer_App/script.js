let timer;
let milliseconds = 0;
let isRunning = false;

function updateDisplay() {
    const hours = String(Math.floor(milliseconds / 3600000)).padStart(2, '0');
    const minutes = String(Math.floor((milliseconds % 3600000) / 60000)).padStart(2, '0');
    const seconds = String(Math.floor((milliseconds % 60000) / 1000)).padStart(2, '0');
    document.getElementById('display').textContent = `${hours}:${minutes}:${seconds}`;
}

document.getElementById('start').addEventListener('click', () => {
    if (!isRunning) {
        isRunning = true;
        timer = setInterval(() => {
            milliseconds += 10; 
            updateDisplay();
        }, 10);
    }
});

document.getElementById('stop').addEventListener('click', () => {
    if (isRunning) {
        isRunning = false;
        clearInterval(timer);
    }
});

document.getElementById('reset').addEventListener('click', () => {
    isRunning = false;
    clearInterval(timer);
    milliseconds = 0;
    updateDisplay();
});
