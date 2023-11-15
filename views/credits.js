
let timeInSeconds = 10; // 1 minute
let timerInterval;

function checkIfAdult () {
    var checkboxAdult = document.getElementById('checkboxIfAdult');

    if(checkboxAdult.checked){
        showVerification();
    }else{
        showIfAdult();
    }
}

function showVerification() {

document.getElementById('verification_popup-container').style.display = 'block';
document.querySelector('.container').style.opacity = 0.3;
}

function closeVerification() {
    document.getElementById('verification_popup-container').style.display = 'none';
    document.querySelector('.container').style.opacity = 1;
}

function sendVerificationCode() {
    // Add your logic to handle the verification code and sending it
    alert('Verification code sent!'); // You can replace this with your actual logic
}

function showIfAdult() {
    document.getElementById('under_adult_popup_container').style.display = 'block';
    document.querySelector('.container').style.opacity = 0.3;
}

function closeIfAdult() {
    document.getElementById('under_adult_popup_container').style.display = 'none';
    document.querySelector('.container').style.opacity = 1;
}


function startTimer() {
    clearInterval(timerInterval); // Clear any existing timers
    document.getElementById('resendButton').disabled = true;

    timerInterval = setInterval(function () {
        const minutes = Math.floor(timeInSeconds / 60);
        const seconds = timeInSeconds % 60;

        const formattedTime = `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
        document.querySelector('.verification_code_timer').textContent = formattedTime;

        if (timeInSeconds === 0) {
            clearInterval(timerInterval); // Stop the timer when it reaches 0
            document.getElementById('resendButton').disabled = false;
            document.getElementById('resendButton').style.cursor = 'pointer';
        } else {
            timeInSeconds--;
        }
    }, 1000);
}

function resendCode() {
    // Reset the timer to 1 minute
    timeInSeconds = 10;

    // Disable the "Resend Code" button and start the timer
    document.getElementById('resendButton').disabled = true;
    startTimer();
}

