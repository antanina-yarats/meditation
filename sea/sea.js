let timerId

const play = document.querySelector('#buttonPlay');
play.addEventListener('click', function() {
  timerId = setInterval(calculateTime, 1000);
  const myVideo = document.querySelector('#myVideo').play();
  const player = document.querySelector('#player').play();
})

const pause = document.querySelector('#buttonPause');
pause.addEventListener('click', function() {
    stopTimer();
    myVideo.pause();
    player.pause();
})


const timer = 10;
let timeAmount = timer * 60;


function calculateTime(){
    const countdown = document.querySelector('#countdown');
    let minutes = Math.floor(timeAmount/60);
    let seconds = timeAmount%60;

    if(seconds < 10) {
        seconds = "0" + seconds;
    }

    countdown.textContent = `${minutes}: ${seconds}`;
    timeAmount--;
    console.log(timeAmount);

    if(timeAmount < 0) {
        stopTimer();
        timeAmount = 0;
    }
}



function stopTimer() {
    clearInterval(timerId);
}



