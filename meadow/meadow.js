

const play = document.querySelector('#buttonPlay');

let timerId 

play.addEventListener('click', function() {
  timerId  = setInterval(calculateTime, 1000);
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
let timeDrops = timer * 60;

function calculateTime() {
    const countdown = document.querySelector('#countdown');
    let minutes = Math.floor(timeDrops/60);
    let seconds = timeDrops%60;

    if(seconds<10) {
        seconds = "0" + seconds;
    }

    countdown.textContent = `${minutes}: ${seconds}`;
    timeDrops--;

    if (timeDrops < 0) {
        stopTimer();
        timeDrops = 0;
    }
  
}



function stopTimer() {
    clearInterval(timerId);
}