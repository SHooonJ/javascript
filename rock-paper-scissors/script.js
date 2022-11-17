function getComputerChoice(){
    let ranNum = Math.floor((Math.random()*10)%3);
    switch(ranNum){
        case 0: return "rock";
        break;
        case 1: return "paper";
        break;
        case 2: return "scissors";
        break;
        default: return "error";
    }
}

function playRound(playerSelection, computerSelection){
    playerSelection = playerSelection.toLowerCase();
    if(playerSelection === computerSelection){
        return "tie";
    }
    if((playerSelection === "rock" && computerSelection === "scissors")
        ||(playerSelection === "scissors" && computerSelection === "paper")
        ||(playerSelection === "paper" && computerSelection === "rock")){
        return "win";
    }
    return "lose";
}

function game(num){
    let counter = 0;
    for(let i = 0; i < num; i++){
        let playerSelection = prompt("Enter chioce: ");
        let computerChoice = getComputerChoice();
        let result = playRound(playerSelection, computerChoice);
        console.log(`Computer Choice: ${computerChoice}`);
        console.log(`You played ${playerSelection}`)
        console.log(`Result: ${result}`);
        if(result === "win"){
            counter++;
        }
    }
    console.log(`You won: ${counter}`);
}

const playerChoice = Array.from(document.querySelectorAll('div.Player.choice'));

playerChoice.forEach(event => console.log(event.value));


