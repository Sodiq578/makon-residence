// ================= TIMER =================
let minutes = 1;
let seconds = 0;
const timeDisplay = document.getElementById('time');

function updateTimer() {
    let m = minutes < 10 ? '0' + minutes : minutes;
    let s = seconds < 10 ? '0' + seconds : seconds;
    timeDisplay.textContent = `${m}:${s}`;

    if (seconds > 0) {
        seconds--;
    } else {
        if (minutes > 0) {
            minutes--;
            seconds = 59;
        } else {
            clearInterval(timerInterval);
            alert("Vaqt tugadi!");
        }
    }
}

updateTimer();
const timerInterval = setInterval(updateTimer, 1000);

// ================= MODAL ELEMENTLARI =================
const openBtnHero = document.getElementById('openModalHero');
const openBtnTaqdimot = document.getElementById('openModalTaqdimot');
const formModal = document.getElementById('formModal');
const successModal = document.getElementById('successModal');
const closeModal = document.getElementById('closeModal');
const form = document.getElementById('userForm');
const subscribeBtn = document.getElementById('subscribeLink');

// ================= MODAL OCHISH VA YOPISH =================
openBtnHero.addEventListener('click', () => formModal.style.display = 'flex');
openBtnTaqdimot.addEventListener('click', () => formModal.style.display = 'flex');
closeModal.addEventListener('click', () => formModal.style.display = 'none');

window.addEventListener('click', e => {
  if (e.target === formModal) formModal.style.display = 'none';
  if (e.target === successModal) successModal.style.display = 'none';
});

// ================= FORM YUBORISH VA TELEGRAM =================
// ... shu qism sizning avvalgi kodingiz kabi bo‘ladi
