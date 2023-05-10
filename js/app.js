// Stopwatch variables
let startTime;
let elapsedTime = 0;
let timerInterval;

// DOM elements
const display = document.getElementById("display");
const startBtn = document.getElementById("startBtn");
const stopBtn = document.getElementById("stopBtn");
const resetBtn = document.getElementById("resetBtn");

// Start the stopwatch
function startTimer() {
  startTime = Date.now() - elapsedTime;
  timerInterval = setInterval(updateTimer, 10);
  toggleButtons(true, false, false);
}

// Stop the stopwatch
function stopTimer() {
  clearInterval(timerInterval);
  toggleButtons(false, true, true);
}

// Reset the stopwatch
function resetTimer() {
  clearInterval(timerInterval);
  elapsedTime = 0;
  display.textContent = "00:00:00";
  toggleButtons(false, false, true);
}

// Update the timer display
function updateTimer() {
  const currentTime = Date.now();
  elapsedTime = currentTime - startTime;
  display.textContent = formatTime(elapsedTime);
}

// Format the time in HH:MM:SS format
function formatTime(time) {
  const milliseconds = Math.floor((time % 1000) / 10);
  const seconds = Math.floor((time / 1000) % 60);
  const minutes = Math.floor((time / (1000 * 60)) % 60);
  const hours = Math.floor((time / (1000 * 60 * 60)) % 24);

  return (
    ("0" + hours).slice(-2) +
    ":" +
    ("0" + minutes).slice(-2) +
    ":" +
    ("0" + seconds).slice(-2) +
    "." +
    ("0" + milliseconds).slice(-2)
  );
}

// Toggle the state of buttons
function toggleButtons(start, stop, reset) {
  startBtn.disabled = start;
  stopBtn.disabled = stop;
  resetBtn.disabled = reset;
}

// Event listeners for buttons
startBtn.addEventListener("click", startTimer);
stopBtn.addEventListener("click", stopTimer);
resetBtn.addEventListener("click", resetTimer);
