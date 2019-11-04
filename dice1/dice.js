const button = document.getElementById("roll");
const button1 = document.getElementById("refresh");
let img = document.getElementById("dice1Img");
//let score1 = 0;

let randomNumber = Math.floor(Math.random() * 6) + 1;
let playerScore = document.getElementById("score");

button.addEventListener("click", ()=>{
img.style.visibility= "visible";
playerScore.textContent = `Player score: ${randomNumber}`;
//for (let i=1; i<=5; i++);
//randomNumber = math.floor(randomNumber)
//randomNumber = math.floor(math.random);
});

button1.addEventListener("click",()=>{
    img.style.visibility ="";
    playerScore.textContent = ("Player score:");


//playerScore.textContent = ("score");
})