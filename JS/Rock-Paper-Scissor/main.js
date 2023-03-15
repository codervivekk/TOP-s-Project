// The complete program has been written with a minor mistake where computer is returning only "rock"

const buttons = document.querySelectorAll('button');
const playAgain = document.createElement('button');

const gcHide = document.querySelector('.gameContainer');

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
    document.getElementById('computerChoice').innerHTML = `Computer Selection: ${computerSelection}`;
    document.getElementById('playersChoice').innerHTML = `Player Selection: ${playerSelection}`;
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

function visibility(){
    playAgain.setAttribute('value','playAgain');
    if(playAgain.value === 'playAgain'){
        gcHide.style.display = 'flex';
    }
    playAgain.style.visibility = 'hidden';
}

function finalResult(result){
    document.getElementById('gameStatus').innerHTML = `Game Status:${5-result} rounds left`
    if(result==5){
        if(player>=3){
            document.getElementById('resultText').innerHTML = "You won the Game!";
        }
        else if(computer>=3){
            document.getElementById('resultText').innerHTML = "You lost the Game!";
        }
        else{
            document.getElementById('resultText').innerHTML = "Game Drawn!";
        }

        document.getElementById('gameStatus').innerHTML = `The Game is Over!`
        playAgain.innerHTML = "Play Again";
        document.getElementById('result').appendChild(playAgain);

        gcHide.style.display = 'none';
        
        playAgain.style.visibility = 'visible';

        console.log("The Game is over!");
        round=0;

    }
    playAgain.addEventListener('click',visibility);    
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
            document.getElementById('resultText').innerHTML = `You Win! ${playerSelection} BEATS ${computerSelection}`;
            player++;
        }
        else if(winner == "Computer"){
            console.log("You loose!");
            document.getElementById('resultText').innerHTML = `You Loose! ${computerSelection} BEATS ${playerSelection}`;
            computer++;
        }
        else{
            console.log("Game draw!");
            document.getElementById('resultText').innerHTML = "Game Draw!";
            draw++;
        }   
        finalResult(round);
    });
});
       

    



    
