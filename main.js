const hrs = document.querySelector('.hrs')
const mins = document.querySelector('.mins')
const secs = document.querySelector('.secs')


setInterval(runClock, 1000);

function runClock() {
    let time = new Date();
    const sec = time.getSeconds() / 60;
    const min = (sec + time.getMinutes()) / 60;
    const hr = (min + time.getHours()) / 12;

    hrs.style.setProperty('--rotate', hr * 360)
    mins.style.setProperty('--rotate', min * 360)
    secs.style.setProperty('--rotate', sec * 360)
}

runClock();