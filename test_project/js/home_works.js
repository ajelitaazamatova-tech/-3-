const childBlock = document.querySelector(".child_block");
const parentBlock = document.querySelector(".parent_block");
let positionX=0;
let positionY=0;

const maxWidth = parentBlock.clientWidth-childBlock.offsetWidth;
const maxHeight = parentBlock.clientHeight-childBlock.offsetHeight;

const move = () => {
    childBlock.style.left = `${positionX}px`;
    childBlock.style.top = `${positionY}px`;

    if (positionX < maxWidth && positionY==0){positionX++;}
    else if (positionX >= maxWidth && positionY < maxHeight){positionY++;}
    else if (positionY == maxHeight && positionX <= maxWidth && positionX > 0){positionX--;}
    else if (positionX==0 && positionY<=maxHeight && positionY>0) {positionY--;}

    requestAnimationFrame(move);
} 
move();

//hw2

const start = document.querySelector("#start");
const stop = document.querySelector("#stop");
const reset = document.querySelector("#reset");
const seconds = document.querySelector("#seconds");

let sec=0;
let intervalId = null; 

start.onclick = () => {
    if (!intervalId) {
        intervalId = setInterval(() => {
            sec++;
            seconds.innerHTML = sec;
        }, 1000);
    }
}
stop.onclick = () => {
    clearInterval(intervalId);
    intervalId = null;
}
reset.onclick = () => {
    clearInterval(intervalId);
    intervalId = null;
    sec = 0;
    seconds.innerHTML = sec;
}