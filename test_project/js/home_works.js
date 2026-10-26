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
//hw4
const charactersList = document.querySelector(".characters-list"); 

const request = new XMLHttpRequest();
request.open("GET", "../data/characters.json");
request.setRequestHeader("Content-type", "application/json");
request.send();

request.addEventListener("load", () => {
        const data = JSON.parse(request.response);

        data.forEach(character => {
            const card = document.createElement("div");
            card.classList.add("character-card");
            
            card.innerHTML = `
                <div class="character-photo">
                    <img src="${character.photo}" alt="${character.name}">
                </div>
                <h3>${character.name}</h3>
                <p class="character-age">Age: ${character.age}</p>
            `;
            
            charactersList.appendChild(card);
        });
});

//hw2 part2
const charactersRequest = new XMLHttpRequest();
charactersRequest.open("GET", "../data/characters.json"); 
charactersRequest.setRequestHeader("Content-type", "application/json");
charactersRequest.send();

charactersRequest.addEventListener("load", () => {
        const responseData = JSON.parse(charactersRequest.response);
        console.log("Данные из characters.json:", responseData);
});