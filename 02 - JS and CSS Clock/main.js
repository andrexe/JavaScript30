const secondHand = document.querySelector('.second-hand');
const minuteHand = document.querySelector('.min-hand');
const hourHand = document.querySelector('.hour-hand');

const startTime = new Date();
const seconds = startTime.getSeconds();
const minutes = startTime.getMinutes();
const hours = startTime.getHours() % 12;
console.log(`${hours}:${minutes}:${seconds}`);

let secondDeg = seconds / 60 * 360;
let minuteDeg = (minutes + seconds / 60) / 60 * 360;
let hourDeg = (hours + minutes / 60) / 12 * 360;

// the position of the hands is set outside of the setInterval and modified incrementally every second to avoid the animation transition doing a 360 (rewinding) when a hand would move from almost 359 deg to 0 deg (this way it just keeps going and going)

const setTime = () => {
    // the second, minute and hour hands move 6 degrees, 1/10 degrees and 1/120 degrees per second, respectively
    secondDeg += 6;
    minuteDeg += 1/10;
    hourDeg += 1/120;

    secondHand.style.transform = `rotate(${secondDeg}deg)`;
    minuteHand.style.transform = `rotate(${minuteDeg}deg)`;
    hourHand.style.transform = `rotate(${hourDeg}deg)`;
}

setInterval(setTime, 1000);