// The complete program has been written with a minor mistake where computer is returning only "rock"

const buttons = document.querySelectorAll('button');

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

function finalResult(result){
    if(result==5){

        if(player>=3){
            alert("You Won the Game!");
        }
        else if(computer>=3){
            alert("You lost the Game!");
        }
        else{
            alert("Game Drawn!");
        }
        console.log("The Game is over!");
        round=0;
    }
}

let player=0,computer=0,draw=0;

    let computerSelection = getComputerChoice();
    computerSelection = computerSelection.toUpperCase();

    let round=0;
    buttons.forEach((button) => {
    button.addEventListener('click',()=>{
        let playerSelection = button.value;
        playerSelection=playerSelection.toUpperCase();
        console.log(`Round ${++round}`);
        console.log(computerSelection);
        console.log(playerSelection);
        let winner=playRound(computerSelection,playerSelection);


        if(winner == "Player"){
            console.log("You win!");
            player++;
        }
        else if(winner == "Computer"){
            console.log("You loose!");
            computer++;
        }
        else{
            console.log("Game draw!");
            draw++;
        }

        finalResult(round);        
    });
});
       

    



    
