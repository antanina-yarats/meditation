let timerId
const buttonPlay = document.querySelector('#buttonPlay');
buttonPlay.addEventListener("click", function() {
    timerId = setInterval(calculateTime, 1000);
    const player = document.querySelector('#player').play();
    const myVideo = document.querySelector('#myVideo').play();
})

const buttonPause = document.querySelector('#buttonPause');
buttonPause.addEventListener("click", function() {
    stopTimer();
    const player = document.querySelector('#player').pause();
    const myVideo = document.querySelector('#myVideo').pause();
})


const timer = 10;
let timeAmount = timer * 60;


function calculateTime() {
    const countdown = document.querySelector('#countdown');
    let minutes = Math.floor(timeAmount/60);
    let seconds = timeAmount%60;

    if(seconds < 10) {
        seconds = "0" + seconds;
    }

    countdown.textContent = `${minutes}: ${seconds}`;
    timeAmount--;

    
    if(timeAmount < 0) {
        timeAmount = 0;
    }

}

function stopTimer() {
    clearInterval(timerId);
}






