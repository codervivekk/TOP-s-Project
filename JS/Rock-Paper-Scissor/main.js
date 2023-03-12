// The complete program has been written with a minor mistake where computer is returning only "rock"

const button = document.getElementsByClassName("button");

function getComputerChoice(){
    const shapes=[
        "rock",
        "paper",
        "scissors"
    ]
    const random = Math.floor(Math.random()*shapes.length)
        
    return shapes[random];
}


function playRound(computerSelection,playerSelection){
    if((computerSelection == "ROCK" && playerSelection == "PAPER") || (computerSelection == "PAPER" && playerSelection =="SCISSORS") || (computerSelection == "SCISSORS" && playerSelection == "ROCK")){
        return "Player";
    }
    else if((computerSelection == "ROCK" && playerSelection == "ROCK") || (computerSelection == "PAPER" && playerSelection == "PAPER" || (computerSelection == "SCISSORS" && playerSelection == "SCISSORS"))){
        return "draw";
    }
    else{
        return "Computer"
    }
}

let player=0,computer=0,draw=0;

for(let i=0;i<5;i++){

    console.log(`Round ${i+1}`);

    let computerSelection = getComputerChoice();

    console.log(computerSelection);
    computerSelection = computerSelection.toUpperCase();

    for (i of button) {
        i.addEventListener("click", function(e) {
         var playerSelection = e.srcElement.value; 
         console.log(playerSelection);
        })
        break;
    };


    
    console.log(playerSelection);
    playerSelection = playerSelection.toUpperCase();


    if(playRound(computerSelection,playerSelection) == "Player"){
        console.log("You win!");
        player++;
    }
    else if(playRound(computerSelection,playerSelection) == "Computer"){
        console.log("You loose!");
        computer++;
    }
    else{
        console.log("Game draw!");
        draw++;
    }
}

if(player>=3){
    alert("You Won the Game!");
}
else if(computer>=3){
    alert("You lost the Game!");
}
else{
    alert("Game Drawn!");
}