//The complete program has been written with a minor mistake where computer is returning only "rock"



function getComputerChoice(){
    const R="Rock";
    const P="Paper";
    const S="Scissors";
    
    return R;
}

function playRound(computerSelection,playerSelection){
    if((computerSelection == "ROCK" && playerSelection == "PAPER") || (computerSelection == "PAPER" && playerSelection =="SCISSORS") || (computerSelection == "SCISSORS" && playerSelection == "ROCK")){
        return "Player";
    }
    else if((computerSelection == "ROCK" && playerSelection == "ROCK") || (computerSelection == "PAPER" && playerSelection == "PAPER" || (computerSelection == "SCISSORS" && playerSelection == "SCISSORS"))){
        return "Draw";
    }
    else{
        return "Computer"
    }
}

let player=0,computer=0,draw=0;

for(let i=0;i<5;i++){

    console.log(`Round ${i+1}`);
    let computerSelection = getComputerChoice();
    let playerSelection = prompt("Enter Your Choice(Rock/Paper/Scissors):");
    computerSelection = computerSelection.toUpperCase();
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





