const button = document.getElementById("roll");
const button1 = document.getElementById("refresh");
let img = document.getElementById("dice1Img");
let totalScore = 0;
let Winner = document.getElementById("winner");
let Loser = document.getElementById("lost");
let playerScore = document.getElementById("score");

button.addEventListener("click", ()=>{
    img.style.visibility = "visible"

    let random = Math.floor(Math.random() * 6) + 1;
    img.setAttribute('src', `./img/dice${random}.png`)
    totalScore += random;
    playerScore.innerText = `Player Score: ${totalScore}`

    if (totalScore >= 20){
        Winner.style.visibility = "visible";
        button.style.visibility = "hidden";
     } else if
        (random == 1){
        Loser.style.visibility = "visible";
        button.style.visibility = "hidden";
    }
});

button1.addEventListener("click",()=>{
    img.setAttribute(`src`,`./img/dice1.png`);
    playerScore.innerText = `Player score: 0`;
    totalScore = 0;
    Winner.style.visibility = "hidden";
    Loser.style.visibility = "hidden";
    button.style.visibility= "visible";
})