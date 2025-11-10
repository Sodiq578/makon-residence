// Timer boshlanish qiymati
let minutes = 34;
let seconds = 12;

const timeDisplay = document.getElementById('time');

function updateTimer() {
    // Formatlash: 2 raqam bo'lishi uchun
    let m = minutes < 10 ? '0' + minutes : minutes;
    let s = seconds < 10 ? '0' + seconds : seconds;
    
    timeDisplay.textContent = `${m}:${s}`;
    
    // Sekundni kamaytirish
    if (seconds > 0) {
        seconds--;
    } else {
        if (minutes > 0) {
            minutes--;
            seconds = 59;
        } else {
            clearInterval(timerInterval);
            alert("Vaqt tugadi!"); // yoki boshqa xabar
        }
    }
}

// Har 1 sekundda yangilash
const timerInterval = setInterval(updateTimer, 1000);
